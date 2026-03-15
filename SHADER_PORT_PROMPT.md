# Port Spool's FilamentBalloon Metal Shader to WebGL

## What This Is

Spool is my iOS app for 3D printing filament management. Its signature visual is a procedural 3D spool rendered entirely in a Metal shader — it shows a realistic filament spool with wound strands, material textures, specular lighting, and animated effects. I need this ported to a WebGL fragment shader so I can use it on the Spool product page on my website.

## Tech Stack (Website)

- React 18 + TypeScript
- Vite + Tailwind CSS 4
- Framer Motion (`motion/react`)
- Three.js is available (`import * as THREE from 'three'`)
- The page lives at `src/app/pages/SpoolPage.tsx`

## What I Need

Create a reusable React component called `FilamentSpool` that renders the Metal shader below as a WebGL fragment shader using Three.js. The component should:

1. Accept these props:
   - `colors`: array of 1-3 hex strings (e.g. `['#FF6B35', '#E63946']`)
   - `materialType`: texture ID number (0-20, see shader below)
   - `size`: number in pixels
   - `animated`: boolean (default false — only Galaxy/Glow/Rainbow/ColorChange need animation)

2. Render a `<canvas>` element using Three.js with a full-screen quad and a custom fragment shader

3. Pass uniforms for: resolution, time (if animated), size, textureId, and the three RGB colour triplets

4. Use `requestAnimationFrame` only when `animated` is true, otherwise render once

5. Clean up the WebGL context on unmount

6. Be performant — no re-renders on parent state changes unless props change

## File Structure

Create these files:
- `src/app/components/spool/FilamentSpool.tsx` — the React component
- `src/app/components/spool/filamentShader.ts` — the GLSL fragment shader as a template literal string export

## The Metal Shader to Port

Below is the complete Metal shader. Port it to GLSL (WebGL2 / GLSL ES 3.00 preferred, GLSL ES 1.00 fallback acceptable). The logic is almost 1:1 — Metal's `float2/float3/half4` map to GLSL's `vec2/vec3/vec4`, `mix`/`smoothstep`/`normalize`/`dot`/`length`/`atan2`/`fract`/`sin`/`cos` are identical in both languages.

### Key differences to handle:
- Metal `[[ stitchable ]]` becomes a standard `void main()` fragment shader
- Metal's `position` parameter becomes `gl_FragCoord.xy`
- Metal's `half4` return becomes `gl_FragColor` (or `out vec4 fragColor` in GLSL 3.00)
- Replace `metal_stdlib` functions with GLSL equivalents
- `thread` storage qualifier doesn't exist in GLSL — just use local variables
- The shader takes a `size` uniform — use this to compute UVs relative to the quad

### Utility functions (port these first):

```metal
float hash(float2 p) {
    return fract(sin(dot(p, float2(12.9898, 78.233))) * 43758.5453);
}

float noise(float2 p) {
    float2 i = floor(p);
    float2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    float a = hash(i);
    float b = hash(i + float2(1.0, 0.0));
    float c = hash(i + float2(0.0, 1.0));
    float d = hash(i + float2(1.0, 1.0));
    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

float fbm(float2 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 4; i++) {
        v += a * noise(p);
        p *= 2.0;
        a *= 0.5;
    }
    return v;
}

float strandHighlight(float2 uv, float angle, float roughness) {
    float2 strandDir = float2(-sin(angle), cos(angle));
    float2 lightDir = normalize(float2(-0.8, 0.8));
    float2 H = normalize(lightDir + float2(0.0, 0.0));
    float dotTH = dot(strandDir, H);
    float sinTH = sqrt(1.0 - dotTH * dotTH);
    float exponent = 20.0 / (roughness * roughness);
    return pow(max(0.0, sinTH), exponent);
}
```

### Texture generators (port these):

```metal
float3 applyGalaxyEffect(float3 base, float3 p3d, float time) {
    float sparkleNoise = fbm(p3d.xy * 12.0 + float2(time * 0.2));
    float sparkle = step(0.7, sparkleNoise) * 0.6;
    return base + float3(sparkle);
}

float3 applyCarbonFiber(float3 base, float2 uv, float3 p3d) {
    float weave = (sin(uv.x * 80.0) * 0.5 + 0.5) * (sin(uv.y * 80.0) * 0.5 + 0.5);
    float detail = fbm(p3d.xy * 100.0) * 0.3;
    return mix(base * 0.5, base * 0.8, weave + detail);
}

float3 applyGlassFiber(float3 base, float3 p3d) {
    float grain = fbm(p3d.xy * 200.0);
    return mix(base, base * 0.8, grain * 0.5);
}

float3 applyWood(float3 base, float3 p3d) {
    float grain = fbm(float2(p3d.xy * 20.0));
    float rings = abs(sin(length(p3d.xy) * 10.0 + grain * 2.0));
    return mix(base * 0.7, base * 1.1, rings);
}

float3 applyMarble(float3 base, float3 p3d) {
    float noiseVal = fbm(p3d.xy * 14.0);
    float veins = smoothstep(0.4, 0.65, noiseVal);
    return mix(base, base * 0.5, veins);
}

float3 applyRainbow(float3 base, float angle, float dist, float time) {
    float hue = fract((angle / 6.28) + dist + time * 0.3);
    float3 rgb = abs(fract(hue + float3(1.0, 2.0/3.0, 1.0/3.0)) * 6.0 - 3.0) - 1.0;
    return mix(base, saturate(rgb), 0.7);
}

float3 applyGradient(float3 c1, float3 c2, float2 uv) {
    float t = smoothstep(-1.0, 1.0, uv.y * 2.0);
    return mix(c2, c1, t);
}
```

### Material properties struct:

```metal
struct MaterialProps {
    float roughness;         // 0.0 (Mirror) to 1.0 (Matte)
    float metallic;          // 0.0 (Plastic) to 1.0 (Metal)
    float specularIntensity; // 0.0 (None) to 2.0 (Super Bright)
    float anisotropy;        // 0.0 (Round highlight) to 1.0 (Strand highlight)
    float strandStrength;    // 0.0 (Smooth surface) to 1.0 (Deep grooves)
};
```

In GLSL this just becomes local float variables (no structs needed, or use a struct if GLSL version supports it).

### Main shader (the big one — port this completely):

```metal
[[ stitchable ]] half4 filamentBalloon(
    float2 position, half4 currentColor,
    float size, float fillPercentage, float textureId,
    float color1R, float color1G, float color1B,
    float color2R, float color2G, float color2B,
    float color3R, float color3G, float color3B,
    float time
) {
    // 1. GEOMETRY SETUP
    float2 center = float2(size * 0.5);
    float2 uv = (position - center) / (size * 0.5);
    float dist = length(uv);
    float angle = atan2(uv.y, uv.x);
    float3 pos3D = float3(uv * 2.0, dist);

    if (dist > 1.0) return half4(0,0,0,0);

    float rRimOuter = 0.98;
    float rRimInner = 0.92;
    float rHub = 0.30;
    float rHole = 0.12;
    float currentFillRadius = rHub + (rRimInner - rHub) * fillPercentage;

    float3 c1 = float3(color1R, color1G, color1B);
    float3 c2 = float3(color2R, color2G, color2B);

    float3 L = normalize(float3(-0.5, 0.5, 1.5));
    float3 V = float3(0.0, 0.0, 1.0);
    float3 H = normalize(L + V);

    int id = int(textureId);

    // Default PLA
    float roughness = 0.4;
    float metallic = 0.0;
    float specularIntensity = 1.0;
    float anisotropy = 1.0;
    float strandStrength = 1.0;

    float3 albedo = mix(c2, c1, smoothstep(rHub, rRimInner, dist));

    // --- MATERIAL OVERRIDES (all 21 material types) ---

    if (id == 1) { // GALAXY
        float sparkleNoise = fbm(pos3D.xy * 15.0);
        float staticSparkle = step(0.75, sparkleNoise) * 0.8;
        float animatedNoise = fbm(pos3D.xy * 12.0 + float2(time * 0.2));
        float animatedSparkle = step(0.8, animatedNoise) * 0.5;
        albedo = albedo + float3(staticSparkle + animatedSparkle);
        roughness = 0.45;
        specularIntensity = 0.8;
    }
    else if (id == 2) { // CARBON FIBER
        albedo = applyCarbonFiber(albedo, uv, pos3D);
        roughness = 0.6; metallic = 0.3; anisotropy = 0.2; strandStrength = 0.3;
    }
    else if (id == 3) { // SILK
        roughness = 0.15; metallic = 0.1; specularIntensity = 1.1; anisotropy = 2.0;
    }
    else if (id == 4) { // METALLIC
        float brush = fbm(float2(uv.x * 20.0, uv.y * 20.0));
        albedo = mix(albedo, albedo * 0.8, brush * 0.2);
        metallic = 0.9; roughness = 0.3;
    }
    else if (id == 5) { // PETG
        roughness = 0.1; specularIntensity = 0.8;
    }
    else if (id == 6) { // GLOW
        albedo = albedo * 1.1;
        float glowCore = smoothstep(0.5, 0.0, dist) * 0.6;
        albedo += float3(glowCore);
        float pulse = 0.5 + 0.5 * sin(time * 2.0);
        albedo += float3(pulse * 0.2);
        roughness = 0.8; specularIntensity = 0.3;
    }
    else if (id == 7) { // RAINBOW
        albedo = applyRainbow(albedo, angle, dist, time);
    }
    else if (id == 8) { // TRANSLUCENT
        albedo = albedo * 0.8 + float3(0.2);
        roughness = 0.03; specularIntensity = 2.2; metallic = 0.15;
    }
    else if (id == 9) { // HIGH GLOSS
        float shimmer = fbm(float2(uv.x * 30.0 + angle, uv.y * 30.0)) * 0.1;
        albedo = albedo + float3(shimmer);
        roughness = 0.15; specularIntensity = 0.8; anisotropy = 0.5;
    }
    else if (id == 10) { // WOOD
        albedo = applyWood(albedo, pos3D);
        roughness = 0.9; specularIntensity = 0.1; anisotropy = 0.1; strandStrength = 0.5;
    }
    else if (id == 11) { // TPU/FLEXIBLE
        roughness = 0.95; specularIntensity = 0.1; anisotropy = 0.0; strandStrength = 0.2;
        albedo = albedo * 0.85;
    }
    else if (id == 12) { // MARBLE
        albedo = applyMarble(albedo, pos3D);
        roughness = 0.8; specularIntensity = 0.2; anisotropy = 0.0; strandStrength = 0.4;
    }
    else if (id == 13) { // NYLON
        albedo = albedo * 0.95 + float3(0.05);
        roughness = 0.25; specularIntensity = 1.0; anisotropy = 0.5;
    }
    else if (id == 14) { // GLASS FIBER
        albedo = applyGlassFiber(albedo, pos3D);
        roughness = 0.7;
    }
    else if (id == 15) { // COLOR CHANGE
        float shift = sin(time * 0.5) * 0.5 + 0.5;
        albedo = mix(c1, c2, shift);
        roughness = 0.3; specularIntensity = 1.0;
    }
    else if (id == 16) { // GRADIENT
        albedo = applyGradient(c1, c2, uv);
    }
    else if (id == 17) { // PASTEL
        float3 desaturated = float3(dot(albedo, float3(0.299, 0.587, 0.114)));
        albedo = mix(desaturated, albedo, 0.5);
        albedo = albedo * 0.9 + float3(0.15);
        roughness = 0.85; specularIntensity = 0.2;
    }
    else if (id == 18) { // ABS
        roughness = 0.6; specularIntensity = 0.5; strandStrength = 0.6;
    }
    else if (id == 19) { // ASA
        roughness = 0.5; specularIntensity = 0.7; strandStrength = 0.6;
    }
    else if (id == 20) { // MATTE
        roughness = 1.0; specularIntensity = 0.0; anisotropy = 0.0; metallic = 0.0;
    }

    // --- RENDERING ---

    float3 finalColor = float3(0.0);
    float alpha = 1.0;

    if (dist < rHole) {
        return half4(0.0);
    }
    else if (dist < rHub) {
        // Spool Hub
        float3 hubColor = float3(0.25, 0.25, 0.25);
        float grain = fbm(uv * 20.0);
        hubColor += grain * 0.02;
        float3 N = normalize(float3(uv.x, uv.y, 0.5));
        float diff = max(dot(N, L), 0.0);
        finalColor = hubColor * (0.5 + 0.5 * diff);
        float shadowDist = dist - rHub;
        if (shadowDist > -0.05) {
            finalColor *= smoothstep(-0.05, -0.1, shadowDist);
        }
    }
    else if (dist <= rRimInner) {
        if (dist > currentFillRadius) {
            // Empty area
            float rib = sin(angle * 20.0);
            finalColor = float3(0.2) + rib * 0.02;
            finalColor *= smoothstep(rRimInner, rRimInner - 0.1, dist);
        } else {
            // Filament strands
            float strandCount = 20.0;
            float strandPos = (dist - rHub) * strandCount;
            float strandHeight = sin(strandPos * 6.28);
            float torusCurve = sin((dist - rHub) / (rRimInner - rHub) * 3.14159);

            float3 N_base = normalize(float3(uv.x, uv.y, torusCurve * 2.0));
            float3 N_strand = normalize(float3(0.0, strandHeight * strandStrength * 0.5, 1.0));

            float c = cos(angle);
            float s = sin(angle);
            float3 N_final = float3(
                N_strand.x * c - N_strand.y * s,
                N_strand.x * s + N_strand.y * c,
                N_strand.z
            );

            float3 N = normalize(mix(N_base, N_final, 0.6));
            float diff = max(dot(N, L), 0.0);

            float spec = 0.0;
            if (anisotropy > 0.5) {
                spec = strandHighlight(uv, angle, roughness) * specularIntensity;
            } else {
                float NdotH = max(dot(N, H), 0.0);
                spec = pow(NdotH, 1.0 / (roughness * roughness + 0.01)) * specularIntensity;
            }

            float ao = 0.5 + 0.5 * smoothstep(-1.0, 0.5, strandHeight);
            finalColor = albedo * (0.4 + 0.6 * diff) * ao;
            finalColor += float3(spec) * (1.0 - roughness) * 0.5;
        }
    }
    else {
        // Outer Rim
        float3 rimColor = float3(0.22, 0.22, 0.22);
        float bevel = smoothstep(rRimInner, rRimInner + 0.01, dist) *
                      smoothstep(rRimOuter, rRimOuter - 0.01, dist);
        float3 N = normalize(float3(uv.x, uv.y, 0.2));
        float3 L_rim = normalize(float3(-0.5, 0.5, 1.0));
        float diff_rim = max(dot(N, L_rim), 0.0);
        float spec_rim = pow(max(dot(reflect(-L_rim, N), float3(0,0,1)), 0.0), 10.0);
        finalColor = rimColor * (0.6 + 0.4 * diff_rim) + float3(spec_rim * 0.3) + float3(bevel * 0.1);
        alpha = smoothstep(1.0, 0.98, dist);
    }

    return half4(half3(finalColor), alpha);
}
```

## React Component Requirements

### FilamentSpool.tsx

```tsx
// Props interface
interface FilamentSpoolProps {
  colors: string[];       // 1-3 hex strings like '#FF6B35'
  materialType: number;   // 0-20 texture ID
  size: number;           // pixels
  animated?: boolean;     // default false
  className?: string;
}
```

- Use `useRef` for the canvas element
- Use `useEffect` to set up Three.js scene with an orthographic camera and a plane geometry filling the viewport
- Create a `ShaderMaterial` with the ported fragment shader
- Parse hex colours to RGB floats (0-1 range) and pass as uniforms
- If `animated`, run `requestAnimationFrame` loop updating the `u_time` uniform
- If not animated, render once and stop
- Use `React.memo` to prevent unnecessary re-renders
- Clean up renderer, scene, and material on unmount
- The canvas should have `border-radius: 50%` to clip to a circle (matching the iOS app)
- Background should be transparent (the shader outputs alpha 0 outside the spool)

### filamentShader.ts

Export the vertex and fragment shader as strings:

```ts
export const vertexShader = `...`;
export const fragmentShader = `...`;
```

The vertex shader is trivial — just pass through position and compute UVs.

## Usage Example

This is how I'll use it on the Spool page:

```tsx
<div className="flex gap-6">
  <FilamentSpool colors={['#FF6B35']} materialType={0} size={120} />          {/* Standard PLA */}
  <FilamentSpool colors={['#1E3A5F']} materialType={3} size={120} />          {/* Silk */}
  <FilamentSpool colors={['#2D1B69']} materialType={1} size={120} animated /> {/* Galaxy */}
  <FilamentSpool colors={['#CC3333']} materialType={2} size={120} />          {/* Carbon Fiber */}
  <FilamentSpool colors={['#FF8C00']} materialType={5} size={120} />          {/* PETG */}
  <FilamentSpool colors={['#4CAF50', '#2196F3']} materialType={7} size={120} animated /> {/* Rainbow */}
</div>
```

## Important Notes

- The shader must render identically to the Metal version — same geometry (hub, filament ring, rim, center hole), same lighting, same material overrides
- GLSL's `atan(y, x)` is the equivalent of Metal's `atan2(y, x)`
- GLSL's `clamp(x, 0.0, 1.0)` replaces Metal's `saturate(x)`
- Use `precision highp float;` at the top of the fragment shader
- Test that the circle clips correctly — outside `dist > 1.0` should be `alpha = 0.0`
- The `fillPercentage` uniform should always be `1.0` for the website (full spool)
- Make sure the spool looks good at sizes from 64px to 512px

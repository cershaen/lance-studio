export const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

export const fragmentShader = `
  precision highp float;

  uniform float u_size;
  uniform float u_textureId;
  uniform vec3 u_color1;
  uniform vec3 u_color2;
  uniform vec3 u_color3;
  uniform float u_time;

  varying vec2 vUv;

  /* ---- Utility functions ---- */

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
  }

  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 4; i++) {
      v += a * noise(p);
      p *= 2.0;
      a *= 0.5;
    }
    return v;
  }

  float strandHighlight(vec2 uv, float angle, float roughness) {
    vec2 strandDir = vec2(-sin(angle), cos(angle));
    vec2 H = normalize(vec2(-0.8, 0.8));
    float dotTH = dot(strandDir, H);
    float sinTH = sqrt(1.0 - dotTH * dotTH);
    float exponent = 20.0 / (roughness * roughness);
    return pow(max(0.0, sinTH), exponent);
  }

  /* ---- Texture generators ---- */

  vec3 applyCarbonFiber(vec3 base, vec2 uv, vec3 p3d) {
    float weave = (sin(uv.x * 80.0) * 0.5 + 0.5) * (sin(uv.y * 80.0) * 0.5 + 0.5);
    float detail = fbm(p3d.xy * 100.0) * 0.3;
    return mix(base * 0.5, base * 0.8, weave + detail);
  }

  vec3 applyGlassFiber(vec3 base, vec3 p3d) {
    float grain = fbm(p3d.xy * 200.0);
    return mix(base, base * 0.8, grain * 0.5);
  }

  vec3 applyWood(vec3 base, vec3 p3d) {
    float grain = fbm(p3d.xy * 20.0);
    float rings = abs(sin(length(p3d.xy) * 10.0 + grain * 2.0));
    return mix(base * 0.7, base * 1.1, rings);
  }

  vec3 applyMarble(vec3 base, vec3 p3d) {
    float noiseVal = fbm(p3d.xy * 14.0);
    float veins = smoothstep(0.4, 0.65, noiseVal);
    return mix(base, base * 0.5, veins);
  }

  vec3 applyRainbow(vec3 base, float angle, float dist, float time) {
    float hue = fract((angle / 6.28318) + dist + time * 0.3);
    vec3 rgb = abs(fract(hue + vec3(1.0, 2.0 / 3.0, 1.0 / 3.0)) * 6.0 - 3.0) - 1.0;
    return mix(base, clamp(rgb, 0.0, 1.0), 0.7);
  }

  vec3 applyGradient(vec3 c1, vec3 c2, vec2 uv) {
    float t = smoothstep(-1.0, 1.0, uv.y * 2.0);
    return mix(c2, c1, t);
  }

  /* ---- Main shader ---- */

  void main() {
    // Map UV (0..1) to centered coordinates (-1..1)
    vec2 uv = (vUv - 0.5) * 2.0;
    float dist = length(uv);
    float angle = atan(uv.y, uv.x);
    vec3 pos3D = vec3(uv * 2.0, dist);

    // Outside circle — transparent
    if (dist > 1.0) {
      gl_FragColor = vec4(0.0);
      return;
    }

    // Geometry constants
    float rRimOuter = 0.98;
    float rRimInner = 0.92;
    float rHub = 0.30;
    float rHole = 0.12;
    float fillPercentage = 1.0; // always full on website
    float currentFillRadius = rHub + (rRimInner - rHub) * fillPercentage;

    vec3 c1 = u_color1;
    vec3 c2 = u_color2;

    // Lighting
    vec3 L = normalize(vec3(-0.5, 0.5, 1.5));
    vec3 V = vec3(0.0, 0.0, 1.0);
    vec3 H = normalize(L + V);

    int id = int(u_textureId);

    // Default PLA material properties
    float roughness = 0.4;
    float metallic = 0.0;
    float specularIntensity = 1.0;
    float anisotropy = 1.0;
    float strandStrength = 1.0;

    vec3 albedo = mix(c2, c1, smoothstep(rHub, rRimInner, dist));

    /* ---- Material overrides ---- */
    if (id == 1) { // GALAXY
      float sparkleNoise = fbm(pos3D.xy * 15.0);
      float staticSparkle = step(0.75, sparkleNoise) * 0.8;
      float animatedNoise = fbm(pos3D.xy * 12.0 + vec2(u_time * 0.2));
      float animatedSparkle = step(0.8, animatedNoise) * 0.5;
      albedo = albedo + vec3(staticSparkle + animatedSparkle);
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
      float brush = fbm(vec2(uv.x * 20.0, uv.y * 20.0));
      albedo = mix(albedo, albedo * 0.8, brush * 0.2);
      metallic = 0.9; roughness = 0.3;
    }
    else if (id == 5) { // PETG
      roughness = 0.1; specularIntensity = 0.8;
    }
    else if (id == 6) { // GLOW
      albedo = albedo * 1.1;
      float glowCore = smoothstep(0.5, 0.0, dist) * 0.6;
      albedo += vec3(glowCore);
      float pulse = 0.5 + 0.5 * sin(u_time * 2.0);
      albedo += vec3(pulse * 0.2);
      roughness = 0.8; specularIntensity = 0.3;
    }
    else if (id == 7) { // RAINBOW
      albedo = applyRainbow(albedo, angle, dist, u_time);
    }
    else if (id == 8) { // TRANSLUCENT
      albedo = albedo * 0.8 + vec3(0.2);
      roughness = 0.03; specularIntensity = 2.2; metallic = 0.15;
    }
    else if (id == 9) { // HIGH GLOSS
      float shimmer = fbm(vec2(uv.x * 30.0 + angle, uv.y * 30.0)) * 0.1;
      albedo = albedo + vec3(shimmer);
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
      albedo = albedo * 0.95 + vec3(0.05);
      roughness = 0.25; specularIntensity = 1.0; anisotropy = 0.5;
    }
    else if (id == 14) { // GLASS FIBER
      albedo = applyGlassFiber(albedo, pos3D);
      roughness = 0.7;
    }
    else if (id == 15) { // COLOR CHANGE
      float shift = sin(u_time * 0.5) * 0.5 + 0.5;
      albedo = mix(c1, c2, shift);
      roughness = 0.3; specularIntensity = 1.0;
    }
    else if (id == 16) { // GRADIENT
      albedo = applyGradient(c1, c2, uv);
    }
    else if (id == 17) { // PASTEL
      vec3 desaturated = vec3(dot(albedo, vec3(0.299, 0.587, 0.114)));
      albedo = mix(desaturated, albedo, 0.5);
      albedo = albedo * 0.9 + vec3(0.15);
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

    /* ---- Rendering ---- */
    vec3 finalColor = vec3(0.0);
    float alpha = 1.0;

    if (dist < rHole) {
      // Center hole — transparent
      gl_FragColor = vec4(0.0);
      return;
    }
    else if (dist < rHub) {
      // Spool hub
      vec3 hubColor = vec3(0.25);
      float grain = fbm(uv * 20.0);
      hubColor += grain * 0.02;
      vec3 N = normalize(vec3(uv.x, uv.y, 0.5));
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
        finalColor = vec3(0.2) + rib * 0.02;
        finalColor *= smoothstep(rRimInner, rRimInner - 0.1, dist);
      } else {
        // Filament strands
        float strandCount = 20.0;
        float strandPos = (dist - rHub) * strandCount;
        float strandHeight = sin(strandPos * 6.28318);
        float torusCurve = sin((dist - rHub) / (rRimInner - rHub) * 3.14159);

        vec3 N_base = normalize(vec3(uv.x, uv.y, torusCurve * 2.0));
        vec3 N_strand = normalize(vec3(0.0, strandHeight * strandStrength * 0.5, 1.0));

        float c = cos(angle);
        float s = sin(angle);
        vec3 N_final = vec3(
          N_strand.x * c - N_strand.y * s,
          N_strand.x * s + N_strand.y * c,
          N_strand.z
        );

        vec3 N = normalize(mix(N_base, N_final, 0.6));
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
        finalColor += vec3(spec) * (1.0 - roughness) * 0.5;
      }
    }
    else {
      // Outer rim
      vec3 rimColor = vec3(0.22);
      float bevel = smoothstep(rRimInner, rRimInner + 0.01, dist) *
                    smoothstep(rRimOuter, rRimOuter - 0.01, dist);
      vec3 N = normalize(vec3(uv.x, uv.y, 0.2));
      vec3 L_rim = normalize(vec3(-0.5, 0.5, 1.0));
      float diff_rim = max(dot(N, L_rim), 0.0);
      float spec_rim = pow(max(dot(reflect(-L_rim, N), vec3(0.0, 0.0, 1.0)), 0.0), 10.0);
      finalColor = rimColor * (0.6 + 0.4 * diff_rim) + vec3(spec_rim * 0.3) + vec3(bevel * 0.1);
      alpha = smoothstep(1.0, 0.98, dist);
    }

    gl_FragColor = vec4(finalColor, alpha);
  }
`;

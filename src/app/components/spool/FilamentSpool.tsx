import { useRef, useEffect, memo } from 'react';
import * as THREE from 'three';
import { vertexShader, fragmentShader } from './filamentShader';

interface FilamentSpoolProps {
  colors: string[];
  materialType: number;
  size: number;
  animated?: boolean;
  className?: string;
}

function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace('#', '');
  return [
    parseInt(h.substring(0, 2), 16) / 255,
    parseInt(h.substring(2, 4), 16) / 255,
    parseInt(h.substring(4, 6), 16) / 255,
  ];
}

function FilamentSpoolInner({ colors, materialType, size, animated = false, className = '' }: FilamentSpoolProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const frameRef = useRef<number>(0);
  const uniformsRef = useRef<Record<string, THREE.IUniform> | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const c1 = hexToRgb(colors[0] || '#ffffff');
    const c2 = hexToRgb(colors[1] || colors[0] || '#ffffff');
    const c3 = hexToRgb(colors[2] || colors[1] || colors[0] || '#ffffff');

    const dpr = Math.min(window.devicePixelRatio, 2);

    const uniforms: Record<string, THREE.IUniform> = {
      u_size: { value: size },
      u_textureId: { value: materialType },
      u_color1: { value: new THREE.Vector3(c1[0], c1[1], c1[2]) },
      u_color2: { value: new THREE.Vector3(c2[0], c2[1], c2[2]) },
      u_color3: { value: new THREE.Vector3(c3[0], c3[1], c3[2]) },
      u_time: { value: 0 },
    };
    uniformsRef.current = uniforms;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const geometry = new THREE.PlaneGeometry(2, 2);
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      transparent: true,
    });
    scene.add(new THREE.Mesh(geometry, material));

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(size, size);
    renderer.setPixelRatio(dpr);
    rendererRef.current = renderer;

    if (animated) {
      const startTime = performance.now();
      const animate = () => {
        uniforms.u_time.value = (performance.now() - startTime) / 1000;
        renderer.render(scene, camera);
        frameRef.current = requestAnimationFrame(animate);
      };
      frameRef.current = requestAnimationFrame(animate);
    } else {
      renderer.render(scene, camera);
    }

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      rendererRef.current = null;
    };
  }, [colors, materialType, size, animated]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      width={size}
      height={size}
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        display: 'block',
      }}
    />
  );
}

export const FilamentSpool = memo(FilamentSpoolInner);

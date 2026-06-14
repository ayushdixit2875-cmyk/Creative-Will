/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Float, MeshDistortMaterial, PerspectiveCamera, Sphere } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

function FloatingSpheres() {
  const groupRef = useRef<THREE.Group>(null);
  const mouse = useRef({ x: 0, y: 0 });

  const spheres = useMemo(() => {
    return Array.from({ length: 15 }).map(() => ({
      position: [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 10
      ] as [number, number, number],
      scale: Math.random() * 0.5 + 0.2,
      speed: Math.random() * 0.5 + 0.2,
      distort: Math.random() * 0.4 + 0.1,
      color: Math.random() > 0.5 ? '#22d3ee' : '#a855f7' // cyan-400 and purple-500
    }));
  }, []);

  useFrame((state) => {
    const { x, y } = state.mouse;
    mouse.current.x = THREE.MathUtils.lerp(mouse.current.x, x * 2, 0.05);
    mouse.current.y = THREE.MathUtils.lerp(mouse.current.y, y * 2, 0.05);

    if (groupRef.current) {
      groupRef.current.rotation.x = mouse.current.y * 0.1;
      groupRef.current.rotation.y = mouse.current.x * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {spheres.map((s, i) => (
        <Float
          key={i}
          speed={s.speed * 2}
          rotationIntensity={2}
          floatIntensity={2}
          position={s.position}
        >
          <Sphere args={[1, 64, 64]} scale={s.scale}>
            <MeshDistortMaterial
              color={s.color}
              speed={s.speed * 3}
              distort={s.distort}
              roughness={0.1}
              metalness={1}
              transparent
              opacity={0.4}
            />
          </Sphere>
        </Float>
      ))}
    </group>
  );
}

export function ThreeScene() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <FloatingSpheres />
        <mesh position={[0, 0, -10]}>
          <planeGeometry args={[100, 100]} />
          <meshStandardMaterial color="#0A0A0A" />
        </mesh>
      </Canvas>
    </div>
  );
}

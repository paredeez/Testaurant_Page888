'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, useTexture, Sphere } from '@react-three/drei';
import * as THREE from 'three';

function FoodSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <Sphere ref={meshRef} args={[1.5, 64, 64]}>
        <meshStandardMaterial
          color="#f0760b"
          metalness={0.8}
          roughness={0.2}
          emissive="#f0760b"
          emissiveIntensity={0.3}
        />
      </Sphere>
      
      {/* Orbiting smaller spheres */}
      <group>
        {[0, 1, 2, 3, 4].map((index) => (
          <Float
            key={index}
            speed={1.5}
            rotationIntensity={0.2}
            floatIntensity={0.3}
          >
            <Sphere
              position={[
                Math.cos((index * Math.PI * 2) / 5) * 2.5,
                Math.sin((index * Math.PI * 2) / 5) * 0.5,
                Math.sin((index * Math.PI * 2) / 5) * 2.5,
              ]}
              args={[0.3, 32, 32]}
            >
              <meshStandardMaterial
                color="#fad6a5"
                metalness={0.5}
                roughness={0.3}
              />
            </Sphere>
          </Float>
        ))}
      </group>
    </Float>
  );
}

const FloatingFood = () => {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#f0760b" />
        <FoodSphere />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

export default FloatingFood;


'use client';

import { useRef, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import * as THREE from 'three';
import { useIsMobile } from '@/lib/hooks';

function Logo3DModel() {
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = useLoader(THREE.TextureLoader, '/logo.png');

  // Auto-rotate the logo
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} castShadow receiveShadow>
      {/* Create a plane with the logo texture */}
      <planeGeometry args={[4, 4]} />
      <meshStandardMaterial
        map={texture}
        transparent={true}
        side={THREE.DoubleSide}
        metalness={0.3}
        roughness={0.4}
        emissive="#FFCC07"
        emissiveIntensity={0.2}
      />
    </mesh>
  );
}

function Logo3DBox() {
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = useLoader(THREE.TextureLoader, '/logo.png');

  // Auto-rotate the logo box
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.6;
      meshRef.current.rotation.x += delta * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} castShadow receiveShadow>
      {/* Create a 3D box with the logo on all sides */}
      <boxGeometry args={[3, 3, 3]} />
      <meshPhysicalMaterial
        map={texture}
        transparent={true}
        metalness={0.6}
        roughness={0.2}
        clearcoat={1.0}
        clearcoatRoughness={0.1}
        reflectivity={0.9}
        emissive="#FFCC07"
        emissiveIntensity={0.15}
      />
    </mesh>
  );
}

function Logo3DCylinder({ isMobile }: { isMobile: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const texture = useLoader(THREE.TextureLoader, '/logo.png');

  // Set texture to be sharp and clear
  if (texture) {
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.anisotropy = 16;
  }

  // Auto-rotate the group
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.4;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.08;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.15;
    }
  });

  // Reduce layers on mobile for better performance
  const totalLayers = isMobile ? 5 : 10;
  const layerSpacing = 0.1;
  const startZ = -(totalLayers - 1) * layerSpacing / 2;

  return (
    <group ref={groupRef}>
      {/* Create 10 evenly spaced layers */}
      {Array.from({ length: totalLayers }).map((_, i) => {
        const z = startZ + (i * layerSpacing);
        // Front and back layers fully opaque, middle layers slightly transparent
        const opacity = (i === 0 || i === totalLayers - 1) ? 1.0 : 0.85;
        
        return (
          <mesh 
            key={i} 
            position={[0, 0, z]}
          >
            <planeGeometry args={[6.5, 6.5]} />
            <meshBasicMaterial
              map={texture}
              transparent={true}
              toneMapped={false}
              opacity={opacity}
              alphaTest={0.01}
              depthWrite={true}
              depthTest={true}
              side={THREE.DoubleSide}
            />
          </mesh>
        );
      })}
    </group>
  );
}

export function Logo3D({ variant = 'cylinder' }: { variant?: 'plane' | 'box' | 'cylinder' }) {
  const isMobile = useIsMobile();
  
  return (
    <div className="w-full h-full">
      <Canvas 
        shadows={!isMobile} 
        dpr={isMobile ? 1 : [1, 2]}
        performance={{ min: 0.5 }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 8]} />
        
        {/* Lighting for realistic 3D effect - Simplified on mobile */}
        <ambientLight intensity={isMobile ? 0.6 : 0.4} />
        {!isMobile && (
          <>
            <directionalLight
              position={[10, 10, 5]}
              intensity={1.5}
              castShadow
              shadow-mapSize-width={2048}
              shadow-mapSize-height={2048}
            />
            <pointLight position={[-10, -10, -5]} intensity={0.8} color="#FFCC07" />
            <spotLight
              position={[0, 10, 0]}
              angle={0.3}
              penumbra={1}
              intensity={1.2}
              castShadow
              color="#ffffff"
            />
            {/* Environment for reflections */}
            <Environment preset="city" />
          </>
        )}

        <Suspense fallback={null}>
          {variant === 'plane' && <Logo3DModel />}
          {variant === 'box' && <Logo3DBox />}
          {variant === 'cylinder' && <Logo3DCylinder isMobile={isMobile} />}
        </Suspense>

        {/* Optional: Add orbit controls for user interaction */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </div>
  );
}

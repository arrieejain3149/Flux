"use client";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import * as THREE from "three";

export default function GlobeComponent() {
  const globeRef = useRef(null);

  useFrame((state) => {
    if (!globeRef.current) return;
    
    // Slow rotation
    globeRef.current.rotation.y += 0.001;
    globeRef.current.rotation.x += 0.0005;

    // React slightly to mouse movement
    const targetX = (state.pointer.x * Math.PI) / 10;
    const targetY = (state.pointer.y * Math.PI) / 10;

    globeRef.current.rotation.y += 0.02 * (targetX - globeRef.current.rotation.y);
    globeRef.current.rotation.x += 0.02 * (targetY - globeRef.current.rotation.x);
  });

  return (
    <group ref={globeRef}>
      <Sphere args={[2.5, 64, 64]}>
        <meshBasicMaterial 
          color="#00ffff" 
          wireframe={true} 
          transparent={true} 
          opacity={0.15} 
          blending={THREE.AdditiveBlending}
        />
      </Sphere>
      {/* Inner solid sphere to block back faces if desired, but wireframe usually looks better without it or with subtle dark core */}
      <Sphere args={[2.48, 32, 32]}>
        <meshBasicMaterial color="#000000" />
      </Sphere>
    </group>
  );
}

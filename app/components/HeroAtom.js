"use client";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Electron({ radius, speed, angle, color = "#00ffff", rotation }) {
  const ref = useRef();
  
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed;
    ref.current.position.x = Math.cos(t + angle) * radius;
    ref.current.position.y = Math.sin(t + angle) * radius;
  });

  return (
    <group rotation={rotation}>
      <mesh ref={ref}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshBasicMaterial color={color} transparent opacity={0.6} />
      </mesh>
    </group>
  );
}

function OrbitRing({ radius, rotation }) {
  return (
    <mesh rotation={rotation}>
      <torusGeometry args={[radius, 0.01, 16, 100]} />
      <meshBasicMaterial color="#ffffff" transparent opacity={0.15} />
    </mesh>
  );
}

export default function HeroAtom() {
  const groupRef = useRef();

  useFrame((state) => {
    if (!groupRef.current) return;
    
    // Smooth, slow base rotation
    groupRef.current.rotation.y += 0.001;
    groupRef.current.rotation.x += 0.0005;

    // React to mouse movement
    const targetX = (state.pointer.x * Math.PI) / 10;
    const targetY = (state.pointer.y * Math.PI) / 10;
    
    groupRef.current.rotation.y += 0.02 * (targetX - groupRef.current.rotation.y);
    groupRef.current.rotation.x += 0.02 * (targetY - groupRef.current.rotation.x);
  });

  return (
    <group ref={groupRef} scale={1.8}>
      {/* Central Nucleus */}
      <mesh>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.2} />
      </mesh>

      {/* Orbit 1 */}
      <OrbitRing radius={3} rotation={[Math.PI / 3, 0, 0]} />
      <Electron radius={3} speed={0.4} angle={0} rotation={[Math.PI / 3, 0, 0]} color="#00ffff" />
      
      {/* Orbit 2 */}
      <OrbitRing radius={3} rotation={[-Math.PI / 3, Math.PI / 4, 0]} />
      <Electron radius={3} speed={0.3} angle={Math.PI} rotation={[-Math.PI / 3, Math.PI / 4, 0]} color="#00ffff" />
      
      {/* Orbit 3 */}
      <OrbitRing radius={3} rotation={[0, Math.PI / 3, Math.PI / 6]} />
      <Electron radius={3} speed={0.5} angle={Math.PI / 2} rotation={[0, Math.PI / 3, Math.PI / 6]} color="#64748b" /> {/* Soft Slate Gray */}
    </group>
  );
}

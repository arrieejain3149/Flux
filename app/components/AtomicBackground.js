"use client";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Electron({ radius, speed, angle, color = "#00ffff" }) {
  const ref = useRef();
  
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed;
    ref.current.position.x = Math.cos(t + angle) * radius;
    ref.current.position.z = Math.sin(t + angle) * radius;
    ref.current.rotation.y = -(t + angle);
  });

  return (
    <group ref={ref}>
      <mesh>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshBasicMaterial color={color} />
      </mesh>
      {/* Trail/glow could be added here but keeping it minimal */}
    </group>
  );
}

function OrbitRing({ radius, rotation }) {
  return (
    <mesh rotation={rotation}>
      <torusGeometry args={[radius, 0.005, 16, 100]} />
      <meshBasicMaterial color="#333333" transparent opacity={0.3} />
    </mesh>
  );
}

export default function AtomicBackground() {
  const groupRef = useRef();

  useFrame((state) => {
    if (!groupRef.current) return;
    // Slow overall rotation for a dynamic feel
    groupRef.current.rotation.y += 0.001;
    groupRef.current.rotation.x += 0.0005;

    // React slightly to mouse
    const targetX = (state.pointer.x * Math.PI) / 20;
    const targetY = (state.pointer.y * Math.PI) / 20;
    
    groupRef.current.rotation.y += 0.02 * (targetX - groupRef.current.rotation.y);
    groupRef.current.rotation.x += 0.02 * (targetY - groupRef.current.rotation.x);
  });

  return (
    <group ref={groupRef}>
      {/* Nucleus */}
      <mesh>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.8} />
      </mesh>

      {/* Orbits and Electrons */}
      {/* Orbit 1 */}
      <group rotation={[Math.PI / 3, 0, 0]}>
        <OrbitRing radius={2} rotation={[Math.PI / 2, 0, 0]} />
        <Electron radius={2} speed={1} angle={0} color="#00ffff" />
      </group>

      {/* Orbit 2 */}
      <group rotation={[-Math.PI / 3, Math.PI / 4, 0]}>
        <OrbitRing radius={2.5} rotation={[Math.PI / 2, 0, 0]} />
        <Electron radius={2.5} speed={0.8} angle={Math.PI / 2} color="#00ffff" />
      </group>

      {/* Orbit 3 */}
      <group rotation={[0, Math.PI / 3, Math.PI / 6]}>
        <OrbitRing radius={3} rotation={[Math.PI / 2, 0, 0]} />
        <Electron radius={3} speed={0.6} angle={Math.PI} color="#00ffff" />
      </group>
    </group>
  );
}

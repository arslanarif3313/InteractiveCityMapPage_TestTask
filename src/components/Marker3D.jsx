import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';

const Marker3D = ({ position, title, onClick, isSelected }) => {
  const markerRef = useRef();
  const glowRef = useRef();

  // Animate marker (gentle floating effect)
  useFrame((state) => {
    if (markerRef.current) {
      markerRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.2;
    }
    
    // Animate glow
    if (glowRef.current) {
      glowRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 3) * 0.1);
    }
  });

  return (
    <group position={position}>
      {/* Glow effect */}
      <mesh ref={glowRef} position={[0, 2, 0]}>
        <sphereGeometry args={[0.5, 16, 16]} />
        <meshBasicMaterial
          color={isSelected ? '#ffd700' : '#d4af37'}
          transparent
          opacity={0.3}
        />
      </mesh>

      {/* Main marker */}
      <mesh
        ref={markerRef}
        position={[0, 2, 0]}
        onClick={onClick}
        onPointerOver={(e) => {
          e.stopPropagation();
          document.body.style.cursor = 'pointer';
        }}
        onPointerOut={() => {
          document.body.style.cursor = 'default';
        }}
      >
        <cylinderGeometry args={[0.3, 0.3, 1.5, 8]} />
        <meshStandardMaterial
          color={isSelected ? '#ffd700' : '#d4af37'}
          emissive={isSelected ? '#ffd700' : '#d4af37'}
          emissiveIntensity={isSelected ? 0.5 : 0.2}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      {/* Marker top */}
      <mesh position={[0, 2.75, 0]}>
        <coneGeometry args={[0.4, 0.8, 8]} />
        <meshStandardMaterial
          color={isSelected ? '#ffd700' : '#d4af37'}
          emissive={isSelected ? '#ffd700' : '#d4af37'}
          emissiveIntensity={isSelected ? 0.6 : 0.3}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>

      {/* Label */}
      <Text
        position={[0, 4, 0]}
        fontSize={0.4}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.05}
        outlineColor="#000000"
      >
        {title}
      </Text>
    </group>
  );
};

export default Marker3D;

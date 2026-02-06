import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import Marker3D from './Marker3D';
import { MARKERS_DATA } from '../data/markersData';
import './CityMap.css';

// Component to load and display a 3D model
const Model = ({ url, position = [0, 0, 0], scale = 1 }) => {
  const { scene } = useGLTF(url);
  
  useEffect(() => {
    // Traverse and optimize materials
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene]);

  return <primitive object={scene} position={position} scale={scale} />;
};

// Main map model
const CityMapModel = () => {
  return (
    <>
      {/* Main map */}
      <Model url="/map.glb" position={[0, 0, 0]} scale={1} />
      
      {/* Center crystal */}
      <Model url="/centerCrystal.glb" position={[0, 0, 0]} scale={1} />
      
      {/* Wall gate */}
      <Model url="/wallGate.glb" position={[0, 0, 0]} scale={1} />
      
      {/* Golem */}
      <Model url="/golem.glb" position={[0, 0, 0]} scale={1} />
    </>
  );
};

// Rotating container for the entire scene
const RotatingScene = ({ targetRotation, children }) => {
  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current) {
      // Smooth rotation interpolation
      const currentRotation = groupRef.current.rotation.y;
      const diff = targetRotation - currentRotation;
      groupRef.current.rotation.y += diff * 0.1;
    }
  });

  return <group ref={groupRef}>{children}</group>;
};

const CityMap = ({ currentRotation, selectedMarker, onMarkerClick }) => {
  return (
    <div className="city-map-container">
      <Canvas shadows>
        {/* Camera - Angled view for better city perspective */}
        <PerspectiveCamera makeDefault position={[0, 20, 40]} fov={60} />

        {/* Lighting */}
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[10, 20, 10]}
          intensity={1}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <pointLight position={[0, 10, 0]} intensity={0.5} color="#d4af37" />
        <hemisphereLight intensity={0.3} groundColor="#444444" />

        {/* Environment */}
        <Environment preset="sunset" />

        {/* Fog */}
        <fog attach="fog" args={['#0a0a0a', 40, 100]} />

        {/* Rotating scene */}
        <RotatingScene targetRotation={currentRotation}>
          {/* City map models */}
          <CityMapModel />

          {/* Markers */}
          {MARKERS_DATA.map((marker) => (
            <Marker3D
              key={marker.id}
              position={marker.position}
              title={marker.title}
              isSelected={selectedMarker?.id === marker.id}
              onClick={(e) => {
                e.stopPropagation();
                onMarkerClick(marker);
              }}
            />
          ))}

          {/* Ground plane */}
          <mesh
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -0.5, 0]}
            receiveShadow
          >
            <planeGeometry args={[100, 100]} />
            <meshStandardMaterial
              color="#1a1a1a"
              roughness={0.8}
              metalness={0.2}
            />
          </mesh>
        </RotatingScene>

        {/* Controls - Allow rotation and zoom, disable pan */}
        <OrbitControls
          enableRotate={true}
          enablePan={false}
          enableZoom={true}
          minDistance={25}
          maxDistance={60}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI / 2.5}
          rotateSpeed={0.5}
          zoomSpeed={0.8}
        />
      </Canvas>
    </div>
  );
};

// Preload models
useGLTF.preload('/map.glb');
useGLTF.preload('/centerCrystal.glb');
useGLTF.preload('/wallGate.glb');
useGLTF.preload('/golem.glb');

export default CityMap;

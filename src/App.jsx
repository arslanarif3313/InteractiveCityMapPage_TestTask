import React from 'react';
import CityMap from './components/CityMap';
import HexagonalCompass from './components/HexagonalCompass';
import NavigationButtons from './components/NavigationButtons';
import MarkerDetailCard from './components/MarkerDetailCard';
import { useMapRotation } from './hooks/useMapRotation';
import { useMarkerInteraction } from './hooks/useMarkerInteraction';
import './App.css';

function App() {
  const {
    currentSide,
    currentRotation,
    isRotating,
    rotateTo,
    rotateNext,
    rotatePrevious,
    TOTAL_SIDES
  } = useMapRotation();

  const {
    selectedMarker,
    selectMarker,
    clearSelection
  } = useMarkerInteraction();

  return (
    <div className="app">
      {/* Header */}
      <header className="app-header">
        <h1 className="app-title">Interactive City Map</h1>
        <p className="app-subtitle">Explore the 6 sides of the city</p>
      </header>

      {/* Main content */}
      <main className="app-main">
        {/* Compass - Desktop: top-right, Mobile: centered above map */}
        <div className="compass-container">
          <HexagonalCompass
            currentSide={currentSide}
            onSideClick={rotateTo}
            totalSides={TOTAL_SIDES}
          />
        </div>

        {/* 3D City Map */}
        <CityMap
          currentRotation={currentRotation}
          selectedMarker={selectedMarker}
          onMarkerClick={selectMarker}
        />

        {/* Navigation Controls */}
        <div className="controls-container">
          <NavigationButtons
            onPrevious={rotatePrevious}
            onNext={rotateNext}
            disabled={isRotating}
          />
        </div>
      </main>

      {/* Marker Detail Card */}
      {selectedMarker && (
        <MarkerDetailCard
          marker={selectedMarker}
          onClose={clearSelection}
        />
      )}

      {/* Footer */}
      <footer className="app-footer">
        <p>Use the compass or navigation buttons to rotate the map</p>
      </footer>
    </div>
  );
}

export default App;

import { useState, useCallback } from 'react';

/**
 * Custom hook to manage marker interaction state
 */
export const useMarkerInteraction = () => {
    const [selectedMarker, setSelectedMarker] = useState(null);

    const selectMarker = useCallback((markerData) => {
        setSelectedMarker(markerData);
    }, []);

    const clearSelection = useCallback(() => {
        setSelectedMarker(null);
    }, []);

    return {
        selectedMarker,
        selectMarker,
        clearSelection,
        isMarkerSelected: selectedMarker !== null
    };
};

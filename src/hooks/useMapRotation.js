import { useState, useCallback } from 'react';

/**
 * Custom hook to manage map rotation state
 * Handles 6-sided rotation (0-5 indices, each representing 60° rotation)
 */
export const useMapRotation = () => {
    const [currentSide, setCurrentSide] = useState(0);
    const [isRotating, setIsRotating] = useState(false);

    // Total number of sides in the hexagonal map
    const TOTAL_SIDES = 6;

    // Convert side index to rotation angle in radians
    const getRotationAngle = useCallback((sideIndex) => {
        return (sideIndex * Math.PI) / 3; // 60 degrees in radians
    }, []);

    // Rotate to a specific side
    const rotateTo = useCallback((targetSide) => {
        if (targetSide === currentSide || isRotating) return;

        setIsRotating(true);
        setCurrentSide(targetSide);

        // Reset rotating state after animation completes
        setTimeout(() => {
            setIsRotating(false);
        }, 800); // Match animation duration
    }, [currentSide, isRotating]);

    // Rotate to next side (clockwise)
    const rotateNext = useCallback(() => {
        const nextSide = (currentSide + 1) % TOTAL_SIDES;
        rotateTo(nextSide);
    }, [currentSide, rotateTo, TOTAL_SIDES]);

    // Rotate to previous side (counter-clockwise)
    const rotatePrevious = useCallback(() => {
        const prevSide = (currentSide - 1 + TOTAL_SIDES) % TOTAL_SIDES;
        rotateTo(prevSide);
    }, [currentSide, rotateTo, TOTAL_SIDES]);

    return {
        currentSide,
        currentRotation: getRotationAngle(currentSide),
        isRotating,
        rotateTo,
        rotateNext,
        rotatePrevious,
        TOTAL_SIDES
    };
};

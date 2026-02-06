// Sample marker data for the city map
// Each marker represents a point of interest with its 3D position and stats

export const MARKERS_DATA = [
    {
        id: 'marker-1',
        title: 'Fire Tower',
        position: [8, 0, 5],
        level: 5,
        element: 'Fire',
        attack: 120,
        defense: 80,
        model: 'fireTower.glb'
    },
    {
        id: 'marker-2',
        title: 'Water Tower',
        position: [-6, 0, 8],
        level: 4,
        element: 'Water',
        attack: 95,
        defense: 110,
        model: 'waterTower.glb'
    },
    {
        id: 'marker-3',
        title: 'Light Tower',
        position: [10, 0, -4],
        level: 6,
        element: 'Light',
        attack: 140,
        defense: 70,
        model: 'lightTower.glb'
    },
    {
        id: 'marker-4',
        title: 'Dark Tower',
        position: [-8, 0, -6],
        level: 7,
        element: 'Dark',
        attack: 160,
        defense: 65,
        model: 'darkTower.glb'
    },
    {
        id: 'marker-5',
        title: 'Wind Tower',
        position: [0, 0, 12],
        level: 5,
        element: 'Wind',
        attack: 105,
        defense: 90,
        model: 'windTower.glb'
    },
    {
        id: 'marker-6',
        title: 'Barrack',
        position: [5, 0, -8],
        level: 3,
        element: 'Neutral',
        attack: 70,
        defense: 130,
        model: 'barrack.glb'
    },
    {
        id: 'marker-7',
        title: 'Ballista',
        position: [-10, 0, 2],
        level: 4,
        element: 'Neutral',
        attack: 150,
        defense: 50,
        model: 'ballista.glb'
    },
    {
        id: 'marker-8',
        title: 'Stone Thrower',
        position: [3, 0, 9],
        level: 4,
        element: 'Earth',
        attack: 110,
        defense: 95,
        model: 'stoneThrower.glb'
    }
];

// Element color mapping for visual styling
export const ELEMENT_COLORS = {
    Fire: '#ff4500',
    Water: '#1e90ff',
    Light: '#ffd700',
    Dark: '#8b008b',
    Wind: '#00ced1',
    Earth: '#8b4513',
    Neutral: '#808080'
};

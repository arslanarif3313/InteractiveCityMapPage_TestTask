# Interactive 3D City Map

A responsive React-based application featuring an interactive 3D city map with hexagonal compass navigation, rotating views, and clickable markers.

## Features

✨ **Interactive 3D Map**
- Fully rendered 3D city environment using Three.js
- Smooth rotation system with 6 fixed sides (60° per transition)
- Dynamic lighting and shadows
- Optimized 3D model loading

🧭 **Hexagonal Compass Navigation**
- Custom 6-sided compass UI
- Click any side to rotate the map directly
- Active side highlighting with visual feedback
- Responsive design for all devices

🎮 **Navigation Controls**
- Previous/Next buttons for manual rotation
- Smooth animations and transitions
- Keyboard-friendly controls

📍 **Interactive Markers**
- Click markers to view detailed information
- Floating animation effects
- Glow effects on hover and selection

💳 **Marker Detail Cards**
- Dark background with gold-to-brown gradient border
- Display: Title, Level, Element, Attack, Defense
- Responsive positioning (overlay on desktop, bottom sheet on mobile)

📱 **Fully Responsive**
- **Desktop**: Map height 600px+, compass positioned top-right
- **Mobile**: Map height 300px, compass centered above map
- **Tablet**: Optimized layouts for all screen sizes
- Compatible with PC, iOS, and Android devices

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Three.js** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **React Three Drei** - Useful helpers for R3F

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to:
```
http://localhost:5173
```

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
models/
├── public/              # Static assets
│   ├── map.glb         # Main city map model
│   ├── centerCrystal.glb
│   ├── fireTower.glb
│   ├── waterTower.glb
│   └── ... (other 3D models)
├── src/
│   ├── components/     # React components
│   │   ├── CityMap.jsx           # Main 3D scene
│   │   ├── HexagonalCompass.jsx  # Compass navigation
│   │   ├── NavigationButtons.jsx # Prev/Next controls
│   │   ├── MarkerDetailCard.jsx  # Marker info card
│   │   └── Marker3D.jsx          # 3D marker component
│   ├── hooks/          # Custom React hooks
│   │   ├── useMapRotation.js     # Rotation state management
│   │   └── useMarkerInteraction.js # Marker selection
│   ├── data/           # Data and configuration
│   │   └── markersData.js        # Marker positions and stats
│   ├── App.jsx         # Main app component
│   ├── App.css         # App styles
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── vite.config.js      # Vite configuration
└── package.json        # Dependencies

```

## Usage

### Rotating the Map

1. **Using the Compass**: Click any of the 6 segments on the hexagonal compass to rotate the map to that view
2. **Using Navigation Buttons**: Click "Previous" or "Next" to rotate left or right by 60°
3. **Zoom**: Scroll to zoom in/out on the map

### Viewing Marker Details

1. Click on any marker (glowing pillars) on the map
2. A detail card will appear showing:
   - Title
   - Level
   - Element type (with color coding)
   - Attack stat
   - Defense stat
3. Click the X button or click outside the card to close it

## Customization

### Adding New Markers

Edit `src/data/markersData.js`:

```javascript
{
  id: 'marker-9',
  title: 'Your Building',
  position: [x, y, z],  // 3D coordinates
  level: 5,
  element: 'Fire',
  attack: 120,
  defense: 80,
  model: 'yourModel.glb'
}
```

### Changing Colors

Edit CSS custom properties in `src/index.css`:

```css
:root {
  --color-gold: #d4af37;
  --color-brown: #8b4513;
  /* ... other colors */
}
```

### Adjusting Map Height

Edit `src/components/CityMap.css`:

```css
.city-map-container {
  height: 600px; /* Desktop */
}

@media (max-width: 768px) {
  .city-map-container {
    height: 300px; /* Mobile */
  }
}
```

## Performance Optimization

- 3D models are automatically loaded with compression
- Lazy loading for better initial load times
- Optimized rendering with React Three Fiber
- Responsive image and asset loading
- Code splitting for production builds

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

MIT

## Credits

Built with ❤️ using React, Three.js, and React Three Fiber

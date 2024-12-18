// src/components/GlowingGrid.tsx
const GlowingGrid = () => (
    <div
      className="absolute inset-0 opacity-10"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(139, 92, 246, 0.2) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(139, 92, 246, 0.2) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
        mask: 'radial-gradient(circle at center, black 50%, transparent 100%)'
      }}
    />
  );
  
  export default GlowingGrid;
  
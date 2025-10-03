export const GridBackground = () => (
  <div className="fixed inset-0 opacity-20 pointer-events-none">
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: `
          linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px),
          linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        transform: 'perspective(1000px) rotateX(60deg) translateY(-50%)',
        transformOrigin: 'center top'
      }}
    />
  </div>
);

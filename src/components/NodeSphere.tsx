import { useMemo } from "react";

/**
 * Stylized 3D-ish node sphere built from SVG: rotating dashed rings
 * with bouncing nodes plotted on a fibonacci sphere projection.
 */
export function NodeSphere() {
  const nodes = useMemo(() => {
    const N = 60;
    const phi = Math.PI * (3 - Math.sqrt(5));
    return Array.from({ length: N }, (_, i) => {
      const y = 1 - (i / (N - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = phi * i;
      const x = Math.cos(theta) * r;
      const z = Math.sin(theta) * r;
      // simple orthographic projection
      const px = 50 + x * 38;
      const py = 50 + y * 38;
      const depth = (z + 1) / 2; // 0..1
      return { px, py, depth, delay: (i % 7) * 0.2 };
    });
  }, []);

  return (
    <div className="relative aspect-square w-full max-w-[520px] mx-auto">
      {/* glow */}
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_50%,color-mix(in_oklab,var(--primary)_45%,transparent),transparent_60%)] blur-2xl" />

      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
        <defs>
          <radialGradient id="core" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="oklch(0.85 0.18 32)" stopOpacity="0.9" />
            <stop offset="60%" stopColor="oklch(0.66 0.23 32)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="oklch(0.66 0.23 32)" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="ringGrad" x1="0" x2="1">
            <stop offset="0%" stopColor="oklch(0.66 0.23 32)" />
            <stop offset="100%" stopColor="oklch(0.76 0.16 215)" />
          </linearGradient>
        </defs>

        <circle cx="50" cy="50" r="22" fill="url(#core)" />

        {/* rotating dashed rings */}
        <g className="animate-spin-slow origin-center" style={{ transformOrigin: "50% 50%" }}>
          <ellipse cx="50" cy="50" rx="42" ry="42" fill="none" stroke="url(#ringGrad)" strokeWidth="0.4" strokeDasharray="1 2" opacity="0.7" />
        </g>
        <g className="animate-spin-reverse origin-center" style={{ transformOrigin: "50% 50%" }}>
          <ellipse cx="50" cy="50" rx="40" ry="16" fill="none" stroke="oklch(0.76 0.16 215)" strokeWidth="0.35" strokeDasharray="0.5 1.5" opacity="0.7" />
        </g>
        <g className="animate-spin-slow origin-center" style={{ transformOrigin: "50% 50%", animationDuration: "44s" }}>
          <ellipse cx="50" cy="50" rx="16" ry="40" fill="none" stroke="oklch(0.66 0.23 32)" strokeWidth="0.35" strokeDasharray="0.4 1.4" opacity="0.7" />
        </g>

        {/* connections between near nodes */}
        {nodes.map((n, i) =>
          nodes.slice(i + 1).map((m, j) => {
            const d = Math.hypot(n.px - m.px, n.py - m.py);
            if (d > 18) return null;
            return (
              <line
                key={`${i}-${j}`}
                x1={n.px}
                y1={n.py}
                x2={m.px}
                y2={m.py}
                stroke="oklch(0.76 0.16 215)"
                strokeWidth="0.15"
                opacity={0.18 * (1 - d / 18)}
              />
            );
          }),
        )}

        {/* nodes */}
        {nodes.map((n, i) => (
          <circle
            key={i}
            cx={n.px}
            cy={n.py}
            r={0.6 + n.depth * 0.9}
            fill={n.depth > 0.55 ? "oklch(0.85 0.18 32)" : "oklch(0.76 0.16 215)"}
            opacity={0.35 + n.depth * 0.6}
          >
            <animate
              attributeName="r"
              values={`${0.5 + n.depth * 0.7};${0.9 + n.depth * 1.1};${0.5 + n.depth * 0.7}`}
              dur={`${3 + (i % 5) * 0.7}s`}
              begin={`${n.delay}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}
      </svg>

      {/* floating chips */}
      <div className="absolute -left-2 top-10 hidden md:block animate-float">
        <div className="glass px-3 py-2 text-xs rounded-full flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          150M+ edge nodes
        </div>
      </div>
      <div className="absolute -right-4 bottom-16 hidden md:block animate-float" style={{ animationDelay: "1.5s" }}>
        <div className="glass px-3 py-2 text-xs rounded-full flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          98% automation rate
        </div>
      </div>
    </div>
  );
}

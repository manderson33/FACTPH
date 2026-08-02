import { useMemo, useRef, useState } from "react";
import type { ReactNode } from "react";
import { geoMercator, geoPath } from "d3-geo";
import type { FeatureCollection, Geometry } from "geojson";
import phRegions from "../data/ph-regions.json";

type RegionProps = { name: string; pcode: string; alt: string | null };
const regionsGeo = phRegions as unknown as FeatureCollection<Geometry, RegionProps>;

const WIDTH = 520;
const HEIGHT = 780;

export interface ChoroplethTooltipRow {
  label: string;
  value: string;
  emphasize?: boolean;
}

export interface ChoroplethTooltip {
  title: string;
  subtitle?: string;
  rows: ChoroplethTooltipRow[];
}

interface RegionChoroplethMapProps {
  getFill: (pcode: string) => string;
  getTooltip: (pcode: string) => ChoroplethTooltip | null;
  legend?: ReactNode;
  ariaLabel: string;
}

export default function RegionChoroplethMap({
  getFill,
  getTooltip,
  legend,
  ariaLabel,
}: RegionChoroplethMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredPcode, setHoveredPcode] = useState<string | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  const projection = useMemo(
    () => geoMercator().fitSize([WIDTH, HEIGHT], regionsGeo),
    []
  );
  const pathGenerator = useMemo(() => geoPath(projection), [projection]);

  const handleMove = (e: React.MouseEvent<SVGPathElement>) => {
    const bounds = containerRef.current?.getBoundingClientRect();
    if (!bounds) return;
    setTooltipPos({ x: e.clientX - bounds.left, y: e.clientY - bounds.top });
  };

  const hoveredTooltip = hoveredPcode ? getTooltip(hoveredPcode) : null;

  return (
    <div ref={containerRef} className="relative">
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        className="w-full h-auto"
        role="img"
        aria-label={ariaLabel}
      >
        {regionsGeo.features.map((feature) => {
          const pcode = feature.properties.pcode;
          const isHovered = hoveredPcode === pcode;
          return (
            <path
              key={pcode}
              d={pathGenerator(feature) ?? undefined}
              fill={getFill(pcode)}
              stroke={isHovered ? "#ffffff" : "#0E1B2C"}
              strokeWidth={isHovered ? 1.5 : 0.75}
              onMouseEnter={() => setHoveredPcode(pcode)}
              onMouseMove={handleMove}
              onMouseLeave={() => setHoveredPcode(null)}
              style={{ cursor: "pointer", transition: "fill 0.2s" }}
            />
          );
        })}
      </svg>

      {hoveredTooltip && (
        <div
          className="pointer-events-none absolute z-10 glass-card px-4 py-3 min-w-[200px]"
          style={{
            left: Math.min(tooltipPos.x + 14, WIDTH - 210),
            top: Math.max(tooltipPos.y - 60, 0),
          }}
        >
          <p className="text-white font-heading font-semibold text-sm mb-1">
            {hoveredTooltip.title}
          </p>
          {hoveredTooltip.subtitle && (
            <p className="text-muted text-xs mb-2">{hoveredTooltip.subtitle}</p>
          )}
          {hoveredTooltip.rows.map((row) => (
            <div key={row.label} className="flex justify-between gap-4 text-sm">
              <span className="text-footnote">{row.label}</span>
              <span className={row.emphasize ? "text-accent font-semibold" : "text-white font-semibold"}>
                {row.value}
              </span>
            </div>
          ))}
        </div>
      )}

      {legend}
    </div>
  );
}

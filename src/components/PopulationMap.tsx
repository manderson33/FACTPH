import { useMemo } from "react";
import { scaleSequential } from "d3-scale";
import { interpolateRgbBasis } from "d3-interpolate";
import RegionChoroplethMap from "./RegionChoroplethMap";
import {
  populationByRegion,
  populationByIslandGroup,
  nationalPopulationTotal,
  type RegionPopulation,
  type IslandGroup,
} from "../data/populationData";

export type PopulationMapMode = "region" | "island";

const REGION_RAMP = ["#332e1c", "#564a23", "#7b6926", "#a38925", "#cdaa1e", "#f8cd04"];

// Map fill: deep, dark-band-legal steps of the site's flag-triad hues.
// Legend swatch: the bright brand hex used elsewhere on the site (hero, pie chart).
const ISLAND_COLORS: Record<IslandGroup, { fill: string; swatch: string }> = {
  Luzon: { fill: "#e34067", swatch: "#E8456B" },
  Visayas: { fill: "#aa8000", swatch: "#FCD116" },
  Mindanao: { fill: "#009f8c", swatch: "#2DD4BF" },
};

const dataByPcode = new Map<string, RegionPopulation>(
  populationByRegion.map((d) => [d.pcode, d])
);

function formatPopulation(value: number) {
  return value.toLocaleString();
}

function shareOfNational(value: number) {
  return `${((value / nationalPopulationTotal) * 100).toFixed(1)}%`;
}

export default function PopulationMap({ mode }: { mode: PopulationMapMode }) {
  const [minValue, maxValue] = useMemo(() => {
    const values = populationByRegion.map((d) => d.population);
    return [Math.min(...values), Math.max(...values)];
  }, []);

  const colorScale = useMemo(
    () => scaleSequential(interpolateRgbBasis(REGION_RAMP)).domain([minValue, maxValue]),
    [minValue, maxValue]
  );

  const getFill = (pcode: string) => {
    const region = dataByPcode.get(pcode);
    if (!region) return "#1B2C3F";
    return mode === "region"
      ? colorScale(region.population)
      : ISLAND_COLORS[region.islandGroup].fill;
  };

  const getTooltip = (pcode: string) => {
    const region = dataByPcode.get(pcode);
    if (!region) return null;
    return {
      title: region.name,
      subtitle: region.islandGroup,
      rows: [
        { label: "Population", value: formatPopulation(region.population), emphasize: true },
        { label: "Share of national", value: shareOfNational(region.population) },
      ],
    };
  };

  const legend =
    mode === "region" ? (
      <div className="flex items-center gap-3 mt-6 max-w-xs mx-auto">
        <span className="text-footnote text-xs whitespace-nowrap">
          {formatPopulation(minValue)}
        </span>
        <div
          className="h-2 flex-1 rounded-full"
          style={{ background: `linear-gradient(to right, ${REGION_RAMP.join(", ")})` }}
        />
        <span className="text-footnote text-xs whitespace-nowrap">
          {formatPopulation(maxValue)}
        </span>
      </div>
    ) : (
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-6">
        {populationByIslandGroup.map(({ group, population }) => (
          <div key={group} className="flex items-center gap-2 text-sm">
            <span
              className="inline-block w-3 h-3 rounded-full"
              style={{ backgroundColor: ISLAND_COLORS[group].swatch }}
            />
            <span className="text-white font-semibold">{group}</span>
            <span className="text-footnote text-xs">
              {formatPopulation(population)} ({shareOfNational(population)})
            </span>
          </div>
        ))}
      </div>
    );

  return (
    <RegionChoroplethMap
      getFill={getFill}
      getTooltip={getTooltip}
      legend={legend}
      ariaLabel="Choropleth map of the Philippines showing population by region"
    />
  );
}

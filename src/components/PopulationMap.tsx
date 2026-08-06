import { useMemo } from "react";
import { scaleSequential } from "d3-scale";
import { interpolateRgbBasis } from "d3-interpolate";
import RegionChoroplethMap from "./RegionChoroplethMap";
import { populationByRegion, type RegionPopulation } from "../data/populationData";

const REGION_RAMP = ["#332e1c", "#564a23", "#7b6926", "#a38925", "#cdaa1e", "#f8cd04"];

const dataByPcode = new Map<string, RegionPopulation>(
  populationByRegion.map((d) => [d.pcode, d])
);

function formatPopulation(value: number) {
  return value.toLocaleString();
}

export default function PopulationMap() {
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
    return region ? colorScale(region.population) : "#1B2C3F";
  };

  const getTooltip = (pcode: string) => {
    const region = dataByPcode.get(pcode);
    if (!region) return null;
    return {
      title: region.name,
      subtitle: region.islandGroup,
      rows: [
        { label: "Population", value: formatPopulation(region.population), emphasize: true },
      ],
    };
  };

  const legend = (
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

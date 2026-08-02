import { useMemo } from "react";
import { scaleSequential } from "d3-scale";
import { interpolateRgbBasis } from "d3-interpolate";
import RegionChoroplethMap from "./RegionChoroplethMap";
import { electoralData, type RegionElectoralData } from "../data/electoralData";

export type MapMetric = "voters" | "turnout";

const METRIC_RAMPS: Record<MapMetric, string[]> = {
  voters: ["#0d352f", "#145249", "#1b7065", "#219082", "#27b1a0", "#2dd4bf"],
  turnout: ["#3b282a", "#5b3036", "#7d3743", "#9f3d50", "#c3415d", "#e8456b"],
};

const dataByPcode = new Map<string, RegionElectoralData>(
  electoralData.map((d) => [d.pcode, d])
);

function metricValue(d: RegionElectoralData, metric: MapMetric) {
  return metric === "voters" ? d.registeredVoters : d.turnoutPct;
}

function formatMetric(value: number, metric: MapMetric) {
  return metric === "voters" ? value.toLocaleString() : `${value.toFixed(1)}%`;
}

export default function PhilippinesMap({ metric }: { metric: MapMetric }) {
  const [minValue, maxValue] = useMemo(() => {
    const values = electoralData.map((d) => metricValue(d, metric));
    return [Math.min(...values), Math.max(...values)];
  }, [metric]);

  const colorScale = useMemo(
    () =>
      scaleSequential(interpolateRgbBasis(METRIC_RAMPS[metric])).domain([
        minValue,
        maxValue,
      ]),
    [metric, minValue, maxValue]
  );

  const getFill = (pcode: string) => {
    const region = dataByPcode.get(pcode);
    return region ? colorScale(metricValue(region, metric)) : "#1B2C3F";
  };

  const getTooltip = (pcode: string) => {
    const region = dataByPcode.get(pcode);
    if (!region) return null;
    return {
      title: region.name,
      subtitle: region.islandGroup,
      rows: [
        {
          label: "Registered voters",
          value: region.registeredVoters.toLocaleString(),
          emphasize: true,
        },
        { label: "Turnout", value: `${region.turnoutPct.toFixed(1)}%` },
      ],
    };
  };

  const legend = (
    <div className="flex items-center gap-3 mt-6 max-w-xs mx-auto">
      <span className="text-footnote text-xs whitespace-nowrap">
        {formatMetric(minValue, metric)}
      </span>
      <div
        className="h-2 flex-1 rounded-full"
        style={{
          background: `linear-gradient(to right, ${METRIC_RAMPS[metric].join(", ")})`,
        }}
      />
      <span className="text-footnote text-xs whitespace-nowrap">
        {formatMetric(maxValue, metric)}
      </span>
    </div>
  );

  return (
    <RegionChoroplethMap
      getFill={getFill}
      getTooltip={getTooltip}
      legend={legend}
      ariaLabel="Choropleth map of the Philippines showing registered voters by region"
    />
  );
}

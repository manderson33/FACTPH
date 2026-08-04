import {
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line, PieChart, Pie, Cell,
} from "recharts";
import ChartCard from "./ChartCard";
import PopulationMapCard from "./PopulationMapCard";
import { landAreaByRegionGroup } from "../data/populationData";
import { gdpGrowth } from "../data/gdpData";

const PIE_COLORS = ["#E8456B", "#FCD116", "#2DD4BF"];

export default function DataHighlightsSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-heading font-bold text-center mb-10 text-white">
        Data Highlights
      </h2>
      <div className="grid md:grid-cols-2 gap-6">

        <PopulationMapCard />

        <ChartCard title="GDP Growth (2014–2024)" source="World Bank" year={2024}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={gdpGrowth} margin={{ bottom: 12 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#27384E" />
              <XAxis
                dataKey="year"
                stroke="#9FB3C8"
                interval={0}
                angle={-45}
                textAnchor="end"
                height={50}
                tickMargin={8}
              />
              <YAxis stroke="#9FB3C8" tickFormatter={(v) => `$${v}B`} />
              <Tooltip
                contentStyle={{ background: "#0E1B2C", border: "1px solid #27384E" }}
                cursor={{ fill: "#2DD4BF", fillOpacity: 0.06 }}
              />
              <Line
                type="monotone"
                dataKey="gdpBillionUSD"
                stroke="#2DD4BF"
                strokeWidth={3}
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Land Area by Region Group" source="NAMRIA" year={2024}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={landAreaByRegionGroup}
                dataKey="areaKm2"
                nameKey="region"
                outerRadius={90}
                label
              >
                {landAreaByRegionGroup.map((_, i) => (
                  <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{ background: "#0E1B2C", border: "1px solid #27384E" }}
                cursor={{ fill: "#2DD4BF", fillOpacity: 0.06 }}
              />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>

      </div>
    </section>
  );
}

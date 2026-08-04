import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Navbar from "../../components/Navbar";
import {
  inflationByYear,
  inflationSources,
  adminColors,
  adminLabels,
  type Admin,
} from "../../data/costOfLivingData";

function AdminLegend() {
  return (
    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-4">
      {(Object.keys(adminColors) as Admin[]).map((admin) => (
        <div key={admin} className="flex items-center gap-2 text-xs">
          <span
            className="inline-block w-3 h-3 rounded-full"
            style={{ backgroundColor: adminColors[admin] }}
          />
          <span className="text-muted">{adminLabels[admin]}</span>
        </div>
      ))}
    </div>
  );
}

export default function OverallInflationPage() {
  return (
    <div className="dot-grid min-h-screen pt-28 px-4 pb-16">
      <Navbar />
      <div className="max-w-4xl mx-auto">
        <Link
          to="/explore/cost-of-living-prices"
          className="flex items-center gap-2 text-accent text-sm mb-6"
        >
          <ArrowLeft size={16} />
          Back to Cost of Living and Prices
        </Link>

        <p className="text-accent text-xs uppercase tracking-widest mb-2">
          Cost of Living and Prices
        </p>
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-white mb-3">
          Overall Inflation &amp; Purchasing Power of the Peso
        </h1>
        <p className="text-muted mb-8 max-w-2xl">
          Prices have risen every year since 2011 — inflation never went negative — so the peso
          you held in 2011 was worth an estimated ₱64.52 by 2025, a 35% loss in purchasing power
          over 15 years. Bars are colored by whichever administration governed most of that year.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-6 mb-6"
        >
          <h2 className="text-sm font-heading font-semibold text-white mb-4">
            Headline Inflation Rate (year-over-year %)
          </h2>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={inflationByYear}>
              <CartesianGrid strokeDasharray="3 3" stroke="#27384E" />
              <XAxis dataKey="year" stroke="#9FB3C8" />
              <YAxis stroke="#9FB3C8" tickFormatter={(v) => `${v}%`} />
              <Tooltip
                contentStyle={{ background: "#0E1B2C", border: "1px solid #27384E" }}
                cursor={{ fill: "#2DD4BF", fillOpacity: 0.06 }}
                formatter={(value) => [`${Number(value).toFixed(2)}%`, "Inflation rate"]}
              />
              <Bar dataKey="inflationPct" radius={[4, 4, 0, 0]}>
                {inflationByYear.map((row) => (
                  <Cell key={row.year} fill={adminColors[row.admin]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>

          <h2 className="text-sm font-heading font-semibold text-white mt-8 mb-4">
            Purchasing Power of the Peso (2011 = 100)
          </h2>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={inflationByYear}>
              <CartesianGrid strokeDasharray="3 3" stroke="#27384E" />
              <XAxis dataKey="year" stroke="#9FB3C8" />
              <YAxis stroke="#9FB3C8" domain={[0, 105]} />
              <Tooltip
                contentStyle={{ background: "#0E1B2C", border: "1px solid #27384E" }}
                cursor={{ fill: "#2DD4BF", fillOpacity: 0.06 }}
                formatter={(value) => [Number(value).toFixed(2), "Purchasing power index"]}
              />
              <Bar dataKey="purchasingPowerIndex" radius={[4, 4, 0, 0]}>
                {inflationByYear.map((row) => (
                  <Cell key={row.year} fill={adminColors[row.admin]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>

          <AdminLegend />
        </motion.div>

        <p className="text-footnote text-xs mb-10">
          Purchasing Power Index is FactPH's own computation, chain-linking each year's inflation
          rate onto a 2011=100 base and taking the reciprocal — it is not PSA's official
          Purchasing Power of the Peso series, which uses a 2018=100 base and was not accessible
          from PSA's site as of this writing. Both describe the same concept on different bases.
        </p>

        <h2 className="text-xl font-heading font-bold text-white mb-4">Full data</h2>
        <div className="glass-card overflow-x-auto mb-10">
          <table className="w-full text-sm text-left">
            <thead className="text-muted border-b border-grid">
              <tr>
                <th className="p-4">Year</th>
                <th className="p-4">Inflation Rate</th>
                <th className="p-4">Purchasing Power Index</th>
                <th className="p-4">Administration</th>
              </tr>
            </thead>
            <tbody>
              {inflationByYear.map((row) => (
                <tr key={row.year} className="border-b border-grid/50">
                  <td className="p-4 font-semibold text-white">{row.year}</td>
                  <td className="p-4">{row.inflationPct.toFixed(2)}%</td>
                  <td className="p-4">{row.purchasingPowerIndex.toFixed(2)}</td>
                  <td className="p-4" style={{ color: adminColors[row.admin] }}>
                    {adminLabels[row.admin]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-heading font-bold text-white mb-2">Sources</h2>
        <div className="space-y-4 mb-10">
          {inflationSources.map((source) => (
            <div key={source.url} className="glass-card p-4">
              <div className="flex items-start justify-between gap-3">
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-accent font-semibold hover:underline"
                >
                  {source.title}
                  <ExternalLink size={14} />
                </a>
                <span className="text-xs px-2 py-1 rounded-full whitespace-nowrap bg-accent/20 text-accent">
                  Primary source
                </span>
              </div>
              <p className="text-footnote text-xs mt-1">
                {source.publisher} — {source.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

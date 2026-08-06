import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Navbar from "../../components/Navbar";
import {
  foodVsHeadlineByYear,
  latestMonthlyReading,
  foodInflationSources,
} from "../../data/foodInflationData";

export default function FoodInflationPage() {
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
          Food Inflation
        </h1>
        <p className="text-muted mb-8 max-w-2xl">
          PSA breaks food and non-alcoholic beverages out of headline inflation as its own
          series — and in both years with confirmed full-year averages, food prices rose faster
          than prices overall. As of {latestMonthlyReading.month}, that gap was still open:
          headline inflation was {latestMonthlyReading.headlinePct}% against food inflation of{" "}
          {latestMonthlyReading.foodPct}%.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-6 mb-4"
        >
          <ResponsiveContainer width="100%" height={340}>
            <BarChart data={foodVsHeadlineByYear}>
              <CartesianGrid strokeDasharray="3 3" stroke="#27384E" />
              <XAxis dataKey="year" stroke="#9FB3C8" />
              <YAxis stroke="#9FB3C8" tickFormatter={(v) => `${v}%`} />
              <Tooltip
                contentStyle={{ background: "#0E1B2C", border: "1px solid #27384E" }}
                labelStyle={{ color: "#9FB3C8" }}
                itemStyle={{ color: "#FFFFFF" }}
                cursor={{ fill: "#2DD4BF", fillOpacity: 0.06 }}
                formatter={(value, name) => [`${Number(value).toFixed(1)}%`, name]}
              />
              <Legend />
              <Bar dataKey="headlinePct" name="Headline inflation" fill="#2DD4BF" radius={[4, 4, 0, 0]} />
              <Bar dataKey="foodPct" name="Food inflation" fill="#FCD116" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        <p className="text-footnote text-xs mb-10">
          Limited to years with a confirmed, comparable full-year average for both series — PSA's
          food-CPI breakout for 2011–2022 wasn't consistently accessible from primary sources as
          of this writing, so this chart is intentionally short rather than padded with estimates.
        </p>

        <h2 className="text-xl font-heading font-bold text-white mb-4">Full data</h2>
        <div className="glass-card overflow-x-auto mb-10">
          <table className="w-full text-sm text-left">
            <thead className="text-muted border-b border-grid">
              <tr>
                <th className="p-4">Year</th>
                <th className="p-4">Headline Inflation</th>
                <th className="p-4">Food Inflation</th>
              </tr>
            </thead>
            <tbody>
              {foodVsHeadlineByYear.map((row) => (
                <tr key={row.year} className="border-b border-grid/50">
                  <td className="p-4 font-semibold text-white">{row.year}</td>
                  <td className="p-4">{row.headlinePct.toFixed(2)}%</td>
                  <td className="p-4">{row.foodPct.toFixed(1)}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-heading font-bold text-white mb-2">Sources</h2>
        <div className="space-y-4 mb-10">
          {foodInflationSources.map((source) => (
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

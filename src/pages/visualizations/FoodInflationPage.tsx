import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();
  return (
    <div className="dot-grid min-h-screen pt-28 px-4 pb-16">
      <Navbar />
      <div className="max-w-4xl mx-auto">
        <Link
          to="/explore/cost-of-living-prices"
          className="flex items-center gap-2 text-accent text-sm mb-6"
        >
          <ArrowLeft size={16} />
          {t("common.backTo", { category: t("pages.foodInflation.eyebrow") })}
        </Link>

        <p className="text-accent text-xs uppercase tracking-widest mb-2">
          {t("pages.foodInflation.eyebrow")}
        </p>
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-white mb-3">
          {t("pages.foodInflation.title")}
        </h1>
        <p className="text-muted mb-8 max-w-2xl">
          {t("pages.foodInflation.description", {
            month: latestMonthlyReading.month,
            headlinePct: latestMonthlyReading.headlinePct,
            foodPct: latestMonthlyReading.foodPct,
          })}
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
              <Bar
                dataKey="headlinePct"
                name={t("pages.foodInflation.legendHeadline")}
                fill="#2DD4BF"
                radius={[4, 4, 0, 0]}
              />
              <Bar
                dataKey="foodPct"
                name={t("pages.foodInflation.legendFood")}
                fill="#FCD116"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        <p className="text-footnote text-xs mb-10">{t("pages.foodInflation.footnote")}</p>

        <h2 className="text-xl font-heading font-bold text-white mb-4">{t("common.fullData")}</h2>
        <div className="glass-card overflow-x-auto mb-10">
          <table className="w-full text-sm text-left">
            <thead className="text-muted border-b border-grid">
              <tr>
                <th className="p-4">{t("common.year")}</th>
                <th className="p-4">{t("pages.foodInflation.tableHeadline")}</th>
                <th className="p-4">{t("pages.foodInflation.tableFood")}</th>
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

        <h2 className="text-xl font-heading font-bold text-white mb-2">{t("common.sources")}</h2>
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
                  {t("common.primarySource")}
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

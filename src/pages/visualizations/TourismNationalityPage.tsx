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
  ResponsiveContainer,
} from "recharts";
import Navbar from "../../components/Navbar";
import {
  nationalityArrivals2025,
  nationalityArrivalsTotal2025,
  nationalitySources,
} from "../../data/tourismNationalityData";

export default function TourismNationalityPage() {
  const { t } = useTranslation();
  return (
    <div className="dot-grid min-h-screen pt-28 px-4 pb-16">
      <Navbar />
      <div className="max-w-4xl mx-auto">
        <Link
          to="/explore/culture-tourism"
          className="flex items-center gap-2 text-accent text-sm mb-6"
        >
          <ArrowLeft size={16} />
          {t("common.backTo", { category: t("pages.tourismNationality.eyebrow") })}
        </Link>

        <p className="text-accent text-xs uppercase tracking-widest mb-2">
          {t("pages.tourismNationality.eyebrow")}
        </p>
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-white mb-3">
          {t("pages.tourismNationality.title")}
        </h1>
        <p className="text-muted mb-8 max-w-2xl">
          {t("pages.tourismNationality.description", {
            total: nationalityArrivalsTotal2025.toLocaleString(),
          })}
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-6 mb-6"
        >
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={nationalityArrivals2025}
              layout="vertical"
              margin={{ top: 8, right: 32, bottom: 8, left: 8 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#27384E" horizontal={false} />
              <XAxis
                type="number"
                stroke="#9FB3C8"
                tickFormatter={(v) => `${(v / 1000000).toFixed(1)}M`}
              />
              <YAxis
                type="category"
                dataKey="country"
                stroke="#9FB3C8"
                width={110}
                tick={{ fontSize: 13 }}
              />
              <Tooltip
                contentStyle={{ background: "#0E1B2C", border: "1px solid #27384E" }}
                labelStyle={{ color: "#9FB3C8" }}
                itemStyle={{ color: "#FFFFFF" }}
                cursor={{ fill: "#2DD4BF", fillOpacity: 0.06 }}
                formatter={(value, _name, item) => [
                  `${Number(value).toLocaleString()} (${item.payload.sharePercent}%)`,
                  t("pages.tourismNationality.tooltipLabel"),
                ]}
              />
              <Bar dataKey="arrivals" fill="#2DD4BF" radius={[0, 3, 3, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        <p className="text-footnote text-xs mb-10">
          {t("pages.tourismNationality.footnote", {
            total: nationalityArrivalsTotal2025.toLocaleString(),
          })}
        </p>

        <h2 className="text-xl font-heading font-bold text-white mb-4">{t("common.fullData")}</h2>
        <div className="glass-card overflow-x-auto mb-10">
          <table className="w-full text-sm text-left">
            <thead className="text-muted border-b border-grid">
              <tr>
                <th className="p-4">{t("pages.tourismNationality.tableCountry")}</th>
                <th className="p-4">{t("pages.tourismNationality.tableArrivals")}</th>
                <th className="p-4">{t("pages.tourismNationality.tableShare")}</th>
              </tr>
            </thead>
            <tbody>
              {nationalityArrivals2025.map((row) => (
                <tr key={row.country} className="border-b border-grid/50">
                  <td className="p-4 font-semibold text-white">{row.country}</td>
                  <td className="p-4">{row.arrivals.toLocaleString()}</td>
                  <td className="p-4">{row.sharePercent}%</td>
                </tr>
              ))}
              <tr className="border-b border-grid/50">
                <td className="p-4 font-semibold text-white">{t("common.total")}</td>
                <td className="p-4 font-semibold text-white">
                  {nationalityArrivalsTotal2025.toLocaleString()}
                </td>
                <td className="p-4 font-semibold text-white">100%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-heading font-bold text-white mb-2">{t("common.sources")}</h2>
        <div className="space-y-4 mb-10">
          {nationalitySources.map((source) => (
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

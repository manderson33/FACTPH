import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
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
          {t("common.backTo", { category: t("pages.overallInflation.eyebrow") })}
        </Link>

        <p className="text-accent text-xs uppercase tracking-widest mb-2">
          {t("pages.overallInflation.eyebrow")}
        </p>
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-white mb-3">
          {t("pages.overallInflation.title")}
        </h1>
        <p className="text-muted mb-8">{t("pages.overallInflation.description")}</p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-6 mb-6"
        >
          <ResponsiveContainer width="100%" height={360}>
            <BarChart data={inflationByYear} margin={{ bottom: 36 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#27384E" />
              <XAxis
                dataKey="label"
                stroke="#9FB3C8"
                interval={0}
                angle={-45}
                textAnchor="end"
                height={50}
                tick={{ fontSize: 11 }}
              />
              <YAxis stroke="#9FB3C8" tickFormatter={(v) => `${v}%`} />
              <Tooltip
                contentStyle={{ background: "#0E1B2C", border: "1px solid #27384E" }}
                labelStyle={{ color: "#9FB3C8" }}
                itemStyle={{ color: "#FFFFFF" }}
                cursor={{ fill: "#2DD4BF", fillOpacity: 0.06 }}
                formatter={(value, _name, item) => [
                  `${Number(value).toFixed(2)}%`,
                  item?.payload?.partial
                    ? t("pages.overallInflation.tooltipPartial")
                    : t("pages.overallInflation.tooltipFull"),
                ]}
              />
              <Bar dataKey="inflationPct" radius={[4, 4, 0, 0]}>
                {inflationByYear.map((row) => (
                  <Cell
                    key={row.year}
                    fill={adminColors[row.admin]}
                    fillOpacity={row.partial ? 0.5 : 1}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>

          <AdminLegend />
        </motion.div>

        <h2 className="text-xl font-heading font-bold text-white mb-4">{t("common.fullData")}</h2>
        <div className="glass-card overflow-x-auto mb-10">
          <table className="w-full text-sm text-left">
            <thead className="text-muted border-b border-grid">
              <tr>
                <th className="p-4">{t("common.year")}</th>
                <th className="p-4">{t("pages.overallInflation.tableRate")}</th>
                <th className="p-4">{t("common.administration")}</th>
              </tr>
            </thead>
            <tbody>
              {inflationByYear.map((row) => (
                <tr key={row.year} className="border-b border-grid/50">
                  <td className="p-4 font-semibold text-white">{row.label}</td>
                  <td className="p-4">
                    {row.inflationPct.toFixed(2)}%
                    {row.partial && (
                      <span className="ml-2 text-footnote text-xs">
                        {t("pages.overallInflation.ytdAverage")}
                      </span>
                    )}
                  </td>
                  <td className="p-4" style={{ color: adminColors[row.admin] }}>
                    {adminLabels[row.admin]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-heading font-bold text-white mb-2">{t("common.sources")}</h2>
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

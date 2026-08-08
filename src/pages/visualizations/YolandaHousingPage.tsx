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
import { yolandaHousingData, yolandaHousingSources } from "../../data/housingData";

export default function YolandaHousingPage() {
  const { t } = useTranslation();
  return (
    <div className="dot-grid min-h-screen pt-28 px-4 pb-16">
      <Navbar />
      <div className="max-w-4xl mx-auto">
        <Link to="/explore/all" className="flex items-center gap-2 text-accent text-sm mb-6">
          <ArrowLeft size={16} />
          {t("common.backTo", { category: t("explorer.title") })}
        </Link>

        <p className="text-accent text-xs uppercase tracking-widest mb-2">
          {t("pages.yolandaHousing.eyebrow")}
        </p>
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-white mb-3">
          {t("pages.yolandaHousing.title")}
        </h1>
        <p className="text-muted mb-8 max-w-2xl">{t("pages.yolandaHousing.description")}</p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-6 mb-4"
        >
          <ResponsiveContainer width="100%" height={360}>
            <BarChart data={yolandaHousingData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#27384E" />
              <XAxis dataKey="shortName" stroke="#9FB3C8" />
              <YAxis stroke="#9FB3C8" tickFormatter={(v) => (v / 1000).toFixed(0) + "K"} />
              <Tooltip
                contentStyle={{ background: "#0E1B2C", border: "1px solid #27384E" }}
                labelStyle={{ color: "#9FB3C8" }}
                itemStyle={{ color: "#FFFFFF" }}
                cursor={{ fill: "#2DD4BF", fillOpacity: 0.06 }}
              />
              <Legend />
              <Bar
                dataKey="completed"
                name={t("pages.yolandaHousing.legendCompleted")}
                fill="#2DD4BF"
                radius={[4, 4, 0, 0]}
              />
              <Bar
                dataKey="unoccupied"
                name={t("pages.yolandaHousing.legendUnoccupied")}
                fill="#9FB3C8"
                radius={[4, 4, 0, 0]}
              />
              <Bar
                dataKey="backlog"
                name={t("pages.yolandaHousing.legendBacklog")}
                fill="#E8456B"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        <p className="text-footnote text-xs mb-2">{t("pages.yolandaHousing.footnote1")}</p>
        <p className="text-footnote text-xs mb-10">{t("pages.yolandaHousing.footnote2")}</p>

        <h2 className="text-xl font-heading font-bold text-white mb-4">{t("common.fullData")}</h2>
        <div className="glass-card overflow-x-auto mb-10">
          <table className="w-full text-sm text-left">
            <thead className="text-muted border-b border-grid">
              <tr>
                <th className="p-4">{t("common.administration")}</th>
                <th className="p-4">{t("pages.yolandaHousing.tableSnapshot")}</th>
                <th className="p-4">{t("pages.yolandaHousing.tableTarget")}</th>
                <th className="p-4">{t("pages.yolandaHousing.tableCompleted")}</th>
                <th className="p-4">{t("pages.yolandaHousing.tableUnoccupied")}</th>
                <th className="p-4">{t("pages.yolandaHousing.tableBacklog")}</th>
              </tr>
            </thead>
            <tbody>
              {yolandaHousingData.map((row) => (
                <tr key={row.admin} className="border-b border-grid/50">
                  <td className="p-4 font-semibold" style={{ color: row.colorVar }}>
                    {row.admin}
                  </td>
                  <td className="p-4 text-muted">{row.snapshotDate}</td>
                  <td className="p-4">{row.target.toLocaleString()}</td>
                  <td className="p-4">{row.completed.toLocaleString()}</td>
                  <td className="p-4">{row.unoccupied.toLocaleString()}</td>
                  <td className="p-4">{row.backlog.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-heading font-bold text-white mb-2">{t("common.sources")}</h2>
        <p className="text-muted text-sm mb-4">{t("pages.yolandaHousing.sourcesNote")}</p>
        <div className="space-y-4 mb-10">
          {yolandaHousingSources.map((source) => (
            <div key={source.url} className="glass-card p-4">
              <div className="flex items-start justify-between gap-3">
                <a  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-accent font-semibold hover:underline">
                  {source.title}
                  <ExternalLink size={14} />
                </a>
                <span className="text-xs px-2 py-1 rounded-full whitespace-nowrap bg-accent/20 text-accent">
                  {source.sourceType === "primary"
                    ? t("common.primarySource")
                    : t("common.newsCoverage")}
                </span>
              </div>
              <p className="text-footnote text-xs mt-1">
                {source.publisher} — {source.date}
              </p>
              {source.note && <p className="text-muted text-sm mt-2">{source.note}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

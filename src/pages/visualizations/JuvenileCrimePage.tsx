import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { ArrowLeft, ExternalLink } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Navbar from "../../components/Navbar";
import {
  juvenileCrimeByYear,
  juvenileCrimeSources,
  adminColors,
  adminLabels,
  type Admin,
} from "../../data/juvenileCrimeData";

const admins: Admin[] = ["aquino", "duterte", "marcos"];
const dataByAdmin: Record<Admin, typeof juvenileCrimeByYear> = {
  aquino: juvenileCrimeByYear.filter((d) => d.admin === "aquino"),
  duterte: juvenileCrimeByYear.filter((d) => d.admin === "duterte"),
  marcos: juvenileCrimeByYear.filter((d) => d.admin === "marcos"),
};
const adminsPresent = admins.filter((admin) => dataByAdmin[admin].length > 0);

function AdminLegend() {
  return (
    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-4">
      {adminsPresent.map((admin) => (
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

export default function JuvenileCrimePage() {
  const { t } = useTranslation();
  return (
    <div className="dot-grid min-h-screen pt-28 px-4 pb-16">
      <Navbar />
      <div className="max-w-4xl mx-auto">
        <Link
          to="/explore/crime-safety"
          className="flex items-center gap-2 text-accent text-sm mb-6"
        >
          <ArrowLeft size={16} />
          {t("common.backTo", { category: t("pages.juvenileCrime.eyebrow") })}
        </Link>

        <p className="text-accent text-xs uppercase tracking-widest mb-2">
          {t("pages.juvenileCrime.eyebrow")}
        </p>
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-white mb-3">
          {t("pages.juvenileCrime.title")}
        </h1>
        <p className="text-muted mb-8 max-w-2xl">{t("pages.juvenileCrime.description")}</p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-6 mb-6"
        >
          <ResponsiveContainer width="100%" height={340}>
            <LineChart margin={{ bottom: 12, right: 24, left: 4 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#27384E" />
              <XAxis
                dataKey="year"
                type="number"
                domain={[2016, 2025]}
                ticks={[2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025]}
                stroke="#9FB3C8"
                tickMargin={8}
              />
              <YAxis stroke="#9FB3C8" tickFormatter={(v) => `${(v / 1000).toFixed(0)}K`} />
              <Tooltip
                contentStyle={{ background: "#0E1B2C", border: "1px solid #27384E" }}
                labelStyle={{ color: "#9FB3C8" }}
                itemStyle={{ color: "#FFFFFF" }}
                cursor={{ stroke: "#2DD4BF", strokeWidth: 1 }}
                formatter={(value) => [
                  Number(value).toLocaleString(),
                  t("pages.juvenileCrime.tooltipLabel"),
                ]}
              />
              {adminsPresent.map((admin) => (
                <Line
                  key={admin}
                  data={dataByAdmin[admin]}
                  dataKey="cases"
                  name={adminLabels[admin]}
                  stroke={adminColors[admin]}
                  strokeWidth={2}
                  dot={{ r: 3, fill: adminColors[admin] }}
                  connectNulls={false}
                  isAnimationActive={false}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>

          <AdminLegend />
        </motion.div>

        <p className="text-footnote text-xs mb-10">{t("pages.juvenileCrime.footnote")}</p>

        <h2 className="text-xl font-heading font-bold text-white mb-4">{t("common.fullData")}</h2>
        <div className="glass-card overflow-x-auto mb-10">
          <table className="w-full text-sm text-left">
            <thead className="text-muted border-b border-grid">
              <tr>
                <th className="p-4">{t("common.year")}</th>
                <th className="p-4">{t("pages.juvenileCrime.tableCases")}</th>
                <th className="p-4">{t("common.administration")}</th>
              </tr>
            </thead>
            <tbody>
              {juvenileCrimeByYear.map((row) => (
                <tr key={row.year} className="border-b border-grid/50">
                  <td className="p-4 font-semibold text-white">{row.year}</td>
                  <td className="p-4">{row.cases.toLocaleString()}</td>
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
          {juvenileCrimeSources.map((source) => (
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

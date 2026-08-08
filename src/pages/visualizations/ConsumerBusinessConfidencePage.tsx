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
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";
import Navbar from "../../components/Navbar";
import { confidenceByQuarter, confidenceSources } from "../../data/businessConfidenceData";

export default function ConsumerBusinessConfidencePage() {
  const { t } = useTranslation();
  return (
    <div className="dot-grid min-h-screen pt-28 px-4 pb-16">
      <Navbar />
      <div className="max-w-4xl mx-auto">
        <Link to="/explore/economy" className="flex items-center gap-2 text-accent text-sm mb-6">
          <ArrowLeft size={16} />
          {t("common.backTo", { category: t("pages.consumerBusinessConfidence.eyebrow") })}
        </Link>

        <p className="text-accent text-xs uppercase tracking-widest mb-2">
          {t("pages.consumerBusinessConfidence.eyebrow")}
        </p>
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-white mb-3">
          {t("pages.consumerBusinessConfidence.title")}
        </h1>
        <p className="text-muted mb-8 max-w-2xl">
          {t("pages.consumerBusinessConfidence.description")}
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-6 mb-4"
        >
          <ResponsiveContainer width="100%" height={380}>
            <LineChart data={confidenceByQuarter} margin={{ bottom: 12, right: 24, left: 4 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#27384E" />
              <XAxis
                dataKey="label"
                stroke="#9FB3C8"
                interval={0}
                tickMargin={8}
                tickFormatter={(value: string) => (value.startsWith("Q1") ? value.slice(3) : "")}
              />
              <YAxis stroke="#9FB3C8" tickFormatter={(v) => `${v}`} />
              <ReferenceLine y={0} stroke="#6E839A" strokeDasharray="3 3" />
              <Tooltip
                contentStyle={{ background: "#0E1B2C", border: "1px solid #27384E" }}
                labelStyle={{ color: "#9FB3C8" }}
                itemStyle={{ color: "#FFFFFF" }}
                cursor={{ fill: "#2DD4BF", fillOpacity: 0.06 }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="businessCI"
                name={t("pages.consumerBusinessConfidence.legendBusiness")}
                stroke="#2DD4BF"
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="consumerCI"
                name={t("pages.consumerBusinessConfidence.legendConsumer")}
                stroke="#E8456B"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        <p className="text-footnote text-xs mb-10">
          {t("pages.consumerBusinessConfidence.footnote")}
        </p>

        <h2 className="text-xl font-heading font-bold text-white mb-4">{t("common.fullData")}</h2>
        <div className="glass-card overflow-x-auto mb-10">
          <table className="w-full text-sm text-left">
            <thead className="text-muted border-b border-grid">
              <tr>
                <th className="p-4">{t("pages.consumerBusinessConfidence.tableQuarter")}</th>
                <th className="p-4">{t("pages.consumerBusinessConfidence.tableBusiness")}</th>
                <th className="p-4">{t("pages.consumerBusinessConfidence.tableConsumer")}</th>
              </tr>
            </thead>
            <tbody>
              {confidenceByQuarter.map((row) => (
                <tr key={row.label} className="border-b border-grid/50">
                  <td className="p-4 font-semibold text-white">{row.label}</td>
                  <td className="p-4">{row.businessCI.toFixed(1)}</td>
                  <td className="p-4">{row.consumerCI.toFixed(1)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-heading font-bold text-white mb-2">{t("common.sources")}</h2>
        <div className="space-y-4 mb-10">
          {confidenceSources.map((source) => (
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

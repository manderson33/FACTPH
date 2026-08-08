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
  type TooltipContentProps,
} from "recharts";
import Navbar from "../../components/Navbar";
import { vpApprovalData, adminColors, type Admin } from "../../data/vpApprovalData";

const admins: Admin[] = ["aquino", "duterte", "marcos"];
const personByAdmin: Record<Admin, string> = {
  aquino: "Binay",
  duterte: "Robredo",
  marcos: "S. Duterte",
};
const dataByAdmin: Record<Admin, typeof vpApprovalData> = {
  aquino: vpApprovalData.filter((d) => d.admin === "aquino"),
  duterte: vpApprovalData.filter((d) => d.admin === "duterte"),
  marcos: vpApprovalData.filter((d) => d.admin === "marcos"),
};

function ChartTooltip({ active, payload }: TooltipContentProps) {
  const { t } = useTranslation();
  if (!active || !payload || payload.length === 0) return null;
  const point = payload[0].payload as (typeof vpApprovalData)[number];
  return (
    <div className="bg-navy border border-grid rounded-lg p-3 text-xs">
      <p className="text-white font-semibold mb-1">{point.person}</p>
      <p className="text-muted">{point.period}</p>
      <p className="text-accent font-semibold mt-1">
        {point.approvalPercent}% {t("common.approve")}
      </p>
    </div>
  );
}

function AdminLegend() {
  return (
    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-4">
      {admins.map((admin) => (
        <div key={admin} className="flex items-center gap-2 text-xs">
          <span
            className="inline-block w-3 h-3 rounded-full"
            style={{ backgroundColor: adminColors[admin] }}
          />
          <span className="text-muted">{personByAdmin[admin]}</span>
        </div>
      ))}
    </div>
  );
}

export default function VpApprovalPage() {
  const { t } = useTranslation();
  return (
    <div className="dot-grid min-h-screen pt-28 px-4 pb-16">
      <Navbar />
      <div className="max-w-4xl mx-auto">
        <Link
          to="/explore/politics-public-opinion"
          className="flex items-center gap-2 text-accent text-sm mb-6"
        >
          <ArrowLeft size={16} />
          {t("common.backTo", { category: t("pages.vpApproval.eyebrow") })}
        </Link>

        <p className="text-accent text-xs uppercase tracking-widest mb-2">
          {t("pages.vpApproval.eyebrow")}
        </p>
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-white mb-3">
          {t("pages.vpApproval.title")}
        </h1>
        <p className="text-muted mb-8 max-w-2xl">{t("pages.vpApproval.description")}</p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-6 mb-4"
        >
          <ResponsiveContainer width="100%" height={380}>
            <LineChart margin={{ bottom: 12, right: 24, left: 4 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#27384E" />
              <XAxis
                dataKey="decimalDate"
                type="number"
                domain={[2010, 2026.6]}
                ticks={[2010, 2012, 2014, 2016, 2018, 2020, 2022, 2024, 2026]}
                tickFormatter={(v) => `${Math.round(v)}`}
                stroke="#9FB3C8"
              />
              <YAxis stroke="#9FB3C8" domain={[0, 100]} tickFormatter={(v) => `${v}%`} />
              <Tooltip content={ChartTooltip} cursor={{ stroke: "#2DD4BF", strokeWidth: 1 }} />
              {admins.map((admin) => (
                <Line
                  key={admin}
                  data={dataByAdmin[admin]}
                  dataKey="approvalPercent"
                  name={personByAdmin[admin]}
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

        <p className="text-footnote text-xs mb-10">{t("pages.vpApproval.footnote")}</p>

        <h2 className="text-xl font-heading font-bold text-white mb-4">{t("common.fullData")}</h2>
        <div className="glass-card overflow-x-auto mb-10">
          <table className="w-full text-sm text-left">
            <thead className="text-muted border-b border-grid">
              <tr>
                <th className="p-4">{t("pages.vpApproval.tableVp")}</th>
                <th className="p-4">{t("pages.vpApproval.tablePeriod")}</th>
                <th className="p-4">{t("pages.vpApproval.tableApproval")}</th>
                <th className="p-4">{t("pages.vpApproval.tableSource")}</th>
              </tr>
            </thead>
            <tbody>
              {vpApprovalData.map((row) => (
                <tr key={`${row.person}-${row.period}`} className="border-b border-grid/50">
                  <td className="p-4 font-semibold" style={{ color: adminColors[row.admin] }}>
                    {row.person}
                  </td>
                  <td className="p-4 text-white">{row.period}</td>
                  <td className="p-4">{row.approvalPercent}%</td>
                  <td className="p-4">
                    <a
                      href={row.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline inline-flex items-center gap-1"
                    >
                      {row.sourcePublisher}
                      <ExternalLink size={12} />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-heading font-bold text-white mb-2">{t("common.sources")}</h2>
        <div className="space-y-4 mb-10">
          <div className="glass-card p-4">
            <div className="flex items-start justify-between gap-3">
              <a
                href="https://pulseasia.ph"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-accent font-semibold hover:underline"
              >
                Pulse Asia Research Inc. — Ulat ng Bayan surveys
                <ExternalLink size={14} />
              </a>
              <span className="text-xs px-2 py-1 rounded-full whitespace-nowrap bg-accent/20 text-accent">
                {t("common.primarySource")}
              </span>
            </div>
            <p className="text-footnote text-xs mt-1">{t("pages.vpApproval.sourcesNote")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

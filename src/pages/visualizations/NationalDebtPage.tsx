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
  nationalDebtByYear,
  nationalDebtSources,
  inaugurationBoundaries,
  adminColors,
  adminLabels,
  type Admin,
} from "../../data/nationalDebtData";

const adminOrder: Admin[] = ["aquino", "duterte", "marcos"];

function AdminLegend() {
  return (
    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-4">
      {(["aquino", "duterte", "marcos"] as Admin[]).map((admin) => (
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

function averageDebtByAdmin(admin: Admin): { avg: number; years: number } {
  const rows = nationalDebtByYear.filter((row) => row.admin === admin && !row.partial);
  const avg = rows.reduce((sum, row) => sum + row.debtPhpTrillion, 0) / rows.length;
  return { avg, years: rows.length };
}

// "Debt added since taking office" = the debt level at this administration's
// own inauguration date (June 30) subtracted from the debt level at its
// successor's inauguration date — or, if it's still in office, the latest
// available snapshot. A Dec-31 boundary (what the chart/average above uses)
// would silently attribute roughly six months of the outgoing
// administration's own borrowing — Jan 1 through Jun 29 of the transition
// year — to the incoming one, since the president isn't sworn in until
// June 30. These four BTr press-release figures, each at an actual
// inauguration date, avoid that.
function debtAddedByAdmin(admin: Admin): { added: number; startLabel: string; endLabel: string; ongoing: boolean } {
  const idx = adminOrder.indexOf(admin);
  const start = inaugurationBoundaries[idx];
  const nextBoundary = inaugurationBoundaries[idx + 1];
  if (nextBoundary) {
    return {
      added: nextBoundary.debtPhpTrillion - start.debtPhpTrillion,
      startLabel: start.label,
      endLabel: nextBoundary.label,
      ongoing: false,
    };
  }
  const latest = nationalDebtByYear[nationalDebtByYear.length - 1];
  return {
    added: latest.debtPhpTrillion - start.debtPhpTrillion,
    startLabel: start.label,
    endLabel: latest.label,
    ongoing: true,
  };
}

export default function NationalDebtPage() {
  const { t } = useTranslation();
  return (
    <div className="dot-grid min-h-screen pt-28 px-4 pb-16">
      <Navbar />
      <div className="max-w-4xl mx-auto">
        <Link to="/explore/economy" className="flex items-center gap-2 text-accent text-sm mb-6">
          <ArrowLeft size={16} />
          {t("common.backTo", { category: t("pages.nationalDebt.eyebrow") })}
        </Link>

        <p className="text-accent text-xs uppercase tracking-widest mb-2">
          {t("pages.nationalDebt.eyebrow")}
        </p>
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-white mb-3">
          {t("pages.nationalDebt.title")}
        </h1>
        <p className="text-muted mb-8">{t("pages.nationalDebt.description")}</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {(["aquino", "duterte", "marcos"] as Admin[]).map((admin) => {
            const { avg, years } = averageDebtByAdmin(admin);
            const { added, startLabel, endLabel, ongoing } = debtAddedByAdmin(admin);
            return (
              <motion.div
                key={admin}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-card p-5"
              >
                <p
                  className="text-xs uppercase tracking-widest mb-2"
                  style={{ color: adminColors[admin] }}
                >
                  {adminLabels[admin]}
                </p>
                <p className="text-2xl font-heading font-bold text-white">
                  ₱{avg.toLocaleString(undefined, { maximumFractionDigits: 2 })}T
                </p>
                <p className="text-footnote text-xs mt-1 mb-3">
                  {t("pages.nationalDebt.avgLabel", { count: years })}
                </p>
                <p className="text-lg font-heading font-semibold text-white pt-3 border-t border-grid">
                  +₱{added.toLocaleString(undefined, { maximumFractionDigits: 2 })}T
                </p>
                <p className="text-footnote text-xs mt-1">
                  {ongoing
                    ? t("pages.nationalDebt.addedOngoing", { startLabel, endLabel })
                    : t("pages.nationalDebt.addedThrough", { startLabel, endLabel })}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-6 mb-6"
        >
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={nationalDebtByYear}
              margin={{ bottom: 36, right: 24, left: 4 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#27384E" />
              <XAxis
                dataKey="label"
                stroke="#9FB3C8"
                tickMargin={8}
                interval={0}
                angle={-45}
                textAnchor="end"
                height={50}
                tick={{ fontSize: 11 }}
              />
              <YAxis stroke="#9FB3C8" tickFormatter={(v) => `₱${v}T`} />
              <Tooltip
                contentStyle={{ background: "#0E1B2C", border: "1px solid #27384E" }}
                labelStyle={{ color: "#9FB3C8" }}
                itemStyle={{ color: "#FFFFFF" }}
                cursor={{ fill: "#2DD4BF", fillOpacity: 0.06 }}
                formatter={(value, _name, item) => [
                  `₱${Number(value).toLocaleString(undefined, { maximumFractionDigits: 2 })}T`,
                  item?.payload?.partial
                    ? t("pages.nationalDebt.tooltipPartial")
                    : t("pages.nationalDebt.tooltipFull"),
                ]}
              />
              <Bar dataKey="debtPhpTrillion" radius={[3, 3, 0, 0]}>
                {nationalDebtByYear.map((row) => (
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

        <p className="text-footnote text-xs mb-10">{t("pages.nationalDebt.footnote")}</p>

        <h2 className="text-xl font-heading font-bold text-white mb-4">{t("common.fullData")}</h2>
        <div className="glass-card overflow-x-auto mb-10">
          <table className="w-full text-sm text-left">
            <thead className="text-muted border-b border-grid">
              <tr>
                <th className="p-4">{t("common.year")}</th>
                <th className="p-4">{t("pages.nationalDebt.tableDebt")}</th>
                <th className="p-4">{t("common.administration")}</th>
              </tr>
            </thead>
            <tbody>
              {nationalDebtByYear.map((row) => (
                <tr key={row.year} className="border-b border-grid/50">
                  <td className="p-4 font-semibold text-white">{row.label}</td>
                  <td className="p-4">
                    {row.debtPhpTrillion.toLocaleString(undefined, {
                      maximumFractionDigits: 4,
                    })}
                    {row.partial && (
                      <span className="ml-2 text-footnote text-xs">
                        {t("pages.nationalDebt.partialYear")}
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
          {nationalDebtSources.map((source) => (
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

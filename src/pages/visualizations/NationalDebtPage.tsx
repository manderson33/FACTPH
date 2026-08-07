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
  nationalDebtByYear,
  nationalDebtSources,
  preAquinoDebtPhpTrillion,
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

// "Debt added since taking office" = the debt level at the end of this
// administration (or its latest available snapshot, if still in office)
// minus the debt level at the end of the last year fully under its
// predecessor — i.e. the last Dec 31 snapshot NOT under this admin, per
// the same Dec-31-in-office boundary used for adminForYear. For Aquino
// III, whose predecessor isn't in this dataset, that baseline is the
// pre-Aquino 2009 figure instead.
function debtAddedByAdmin(admin: Admin): { added: number; endLabel: string; ongoing: boolean } {
  const idx = adminOrder.indexOf(admin);
  const ownRows = nationalDebtByYear.filter((row) => row.admin === admin);
  const endRow = ownRows[ownRows.length - 1];
  const startValue =
    idx === 0
      ? preAquinoDebtPhpTrillion
      : nationalDebtByYear.filter((row) => row.admin === adminOrder[idx - 1]).at(-1)!
          .debtPhpTrillion;
  return {
    added: endRow.debtPhpTrillion - startValue,
    endLabel: endRow.label,
    ongoing: endRow.partial,
  };
}

export default function NationalDebtPage() {
  return (
    <div className="dot-grid min-h-screen pt-28 px-4 pb-16">
      <Navbar />
      <div className="max-w-4xl mx-auto">
        <Link to="/explore/economy" className="flex items-center gap-2 text-accent text-sm mb-6">
          <ArrowLeft size={16} />
          Back to Economy
        </Link>

        <p className="text-accent text-xs uppercase tracking-widest mb-2">Economy</p>
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-white mb-3">
          Philippine National Government Debt
        </h1>
        <p className="text-muted mb-8 max-w-2xl">
          The National Government's total outstanding debt at year-end, 2010–2025, plus the
          latest available 2026 snapshot — its own direct domestic and external debt, per the
          Bureau of the Treasury's own published figures. Debt grew from ₱4.72 trillion at the
          end of 2010 to ₱17.71 trillion at the end of 2025, with the steepest jump coming in
          2020–2021 as the government borrowed heavily to fund the COVID-19 pandemic response.
          It has since climbed further to ₱19.07 trillion as of end-June 2026, the most recent
          month BTr has reported.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {(["aquino", "duterte", "marcos"] as Admin[]).map((admin) => {
            const { avg, years } = averageDebtByAdmin(admin);
            const { added, endLabel, ongoing } = debtAddedByAdmin(admin);
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
                  average year-end debt, {years} year{years === 1 ? "" : "s"}
                </p>
                <p className="text-lg font-heading font-semibold text-white pt-3 border-t border-grid">
                  +₱{added.toLocaleString(undefined, { maximumFractionDigits: 2 })}T
                </p>
                <p className="text-footnote text-xs mt-1">
                  added since taking office{ongoing ? ` so far (as of ${endLabel})` : ` (through ${endLabel})`}
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
          <ResponsiveContainer width="100%" height={360}>
            <BarChart
              data={nationalDebtByYear}
              margin={{ bottom: 12, right: 24, left: 4 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#27384E" />
              <XAxis dataKey="label" stroke="#9FB3C8" tickMargin={8} />
              <YAxis stroke="#9FB3C8" tickFormatter={(v) => `₱${v}T`} />
              <Tooltip
                contentStyle={{ background: "#0E1B2C", border: "1px solid #27384E" }}
                labelStyle={{ color: "#9FB3C8" }}
                itemStyle={{ color: "#FFFFFF" }}
                cursor={{ fill: "#2DD4BF", fillOpacity: 0.06 }}
                formatter={(value, _name, item) => [
                  `₱${Number(value).toLocaleString(undefined, { maximumFractionDigits: 2 })}T`,
                  item?.payload?.partial ? "Outstanding debt (mid-year, not final)" : "Outstanding debt",
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

        <p className="text-footnote text-xs mb-10">
          Every figure is the National Government's own reported "total outstanding debt" —
          never computed, netted, or estimated by FactPH. This is NG's direct debt only
          (domestic government securities plus external loans and bonds); it excludes NG-
          guaranteed obligations of government corporations, which BTr reports and tracks
          separately as a contingent liability, not as part of the government's own debt stock.
          The 2026 bar (shown lighter) is BTr's most recent monthly snapshot, end-June 2026 — not
          a year-end total, since 2026 isn't over yet. Each year is attributed to whichever
          administration was in office at that year's Dec 31 snapshot date — the president is
          inaugurated June 30, so 2016 (Aquino III → Duterte) and 2022 (Duterte → Marcos Jr.) are
          transition years counted for the incoming administration, since it was that
          administration in office when the year-end figure was taken. The cards above the chart
          are the two FactPH computations on this page, both simple arithmetic on already-published
          BTr figures, never estimated: the average is the mean of each administration's own
          year-end figures (excluding the partial 2026 snapshot); the amount added is that
          administration's own latest figure minus the debt level at the end of its predecessor's
          final year in office (for Aquino III, whose predecessor isn't in this dataset, that's
          BTr's own published 2009 figure instead) — so Marcos Jr.'s "added" figure is necessarily
          a running, not-yet-final total, since his term hasn't ended.
        </p>

        <h2 className="text-xl font-heading font-bold text-white mb-4">Full data</h2>
        <div className="glass-card overflow-x-auto mb-10">
          <table className="w-full text-sm text-left">
            <thead className="text-muted border-b border-grid">
              <tr>
                <th className="p-4">Year</th>
                <th className="p-4">Outstanding debt (₱ trillion)</th>
                <th className="p-4">Administration</th>
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
                      <span className="ml-2 text-footnote text-xs">(partial year)</span>
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

        <h2 className="text-xl font-heading font-bold text-white mb-2">Sources</h2>
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

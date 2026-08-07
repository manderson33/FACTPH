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
  dpwhBudgetByYear,
  dpwhBudgetSources,
  adminColors,
  adminLabels,
  type Admin,
} from "../../data/dpwhBudgetData";

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

export default function DPWHBudgetPage() {
  return (
    <div className="dot-grid min-h-screen pt-28 px-4 pb-16">
      <Navbar />
      <div className="max-w-4xl mx-auto">
        <Link to="/explore/infrastructure" className="flex items-center gap-2 text-accent text-sm mb-6">
          <ArrowLeft size={16} />
          Back to Infrastructure
        </Link>

        <p className="text-accent text-xs uppercase tracking-widest mb-2">Infrastructure</p>
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-white mb-3">
          DPWH Enacted Budget
        </h1>
        <p className="text-muted mb-8 max-w-2xl">
          The Department of Public Works and Highways' total enacted budget, 2010–2026 — the
          "TOTAL NEW APPROPRIATIONS" figure read directly from each year's General Appropriations
          Act. The budget grew from ₱100.8B in 2011 to a peak of ₱1.11 trillion in 2025, before
          being cut nearly in half to ₱529.6B for 2026 following the 2025 flood-control corruption
          scandal and the DPWH's own reform push.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-6 mb-6"
        >
          <ResponsiveContainer width="100%" height={360}>
            <BarChart
              data={dpwhBudgetByYear}
              margin={{ bottom: 12, right: 24, left: 4 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#27384E" />
              <XAxis dataKey="year" stroke="#9FB3C8" tickMargin={8} />
              <YAxis stroke="#9FB3C8" tickFormatter={(v) => `₱${v}B`} />
              <Tooltip
                contentStyle={{ background: "#0E1B2C", border: "1px solid #27384E" }}
                labelStyle={{ color: "#9FB3C8" }}
                itemStyle={{ color: "#FFFFFF" }}
                cursor={{ fill: "#2DD4BF", fillOpacity: 0.06 }}
                formatter={(value) => [
                  `₱${Number(value).toLocaleString(undefined, { maximumFractionDigits: 2 })}B`,
                  "Enacted budget",
                ]}
              />
              <Bar dataKey="budgetPhpBillion" radius={[3, 3, 0, 0]}>
                {dpwhBudgetByYear.map((row) => (
                  <Cell key={row.year} fill={adminColors[row.admin]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>

          <AdminLegend />
        </motion.div>

        <p className="text-footnote text-xs mb-10">
          Every figure is the literal "TOTAL NEW APPROPRIATIONS" grand total for DPWH as enacted
          in that year's General Appropriations Act — never a proposed National Expenditure
          Program figure, and never computed, netted, or estimated by FactPH. In every year shown,
          DPWH's entire department budget is lodged under the Office of the Secretary, so this is
          the department's full enacted appropriation, not a sub-total.
        </p>

        <h2 className="text-xl font-heading font-bold text-white mb-4">Full data</h2>
        <div className="glass-card overflow-x-auto mb-10">
          <table className="w-full text-sm text-left">
            <thead className="text-muted border-b border-grid">
              <tr>
                <th className="p-4">Year</th>
                <th className="p-4">Enacted budget (₱ billion)</th>
                <th className="p-4">Administration</th>
              </tr>
            </thead>
            <tbody>
              {dpwhBudgetByYear.map((row) => (
                <tr key={row.year} className="border-b border-grid/50">
                  <td className="p-4 font-semibold text-white">{row.year}</td>
                  <td className="p-4">
                    {row.budgetPhpBillion.toLocaleString(undefined, {
                      maximumFractionDigits: 4,
                    })}
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
          {dpwhBudgetSources.map((source) => (
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

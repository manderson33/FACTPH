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
  philhealthSubsidyByYear,
  philhealthSubsidySources,
  adminColors,
  adminLabels,
  type Admin,
} from "../../data/philhealthSubsidyData";

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

export default function PhilHealthSubsidyPage() {
  return (
    <div className="dot-grid min-h-screen pt-28 px-4 pb-16">
      <Navbar />
      <div className="max-w-4xl mx-auto">
        <Link to="/explore/health" className="flex items-center gap-2 text-accent text-sm mb-6">
          <ArrowLeft size={16} />
          Back to Health
        </Link>

        <p className="text-accent text-xs uppercase tracking-widest mb-2">Health</p>
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-white mb-3">
          PhilHealth Government Subsidy
        </h1>
        <p className="text-muted mb-8 max-w-2xl">
          The National Health Insurance Program (NHIP) subsidy for PhilHealth, 2010–2026 — from
          both the Department of Budget and Management and PhilHealth's own audited disclosures.
          The subsidy grew from ₱5.17B under Aquino III to a peak of ₱100.2B under Marcos Jr. in
          2023, before Congress cut it to zero for 2025 and rebounded to ₱69.78B for 2026. The
          2026 GAA separately appropriates a further ₱60B to return money the Supreme Court ruled
          was unconstitutionally swept from PhilHealth's reserves in 2024 — that amount is
          restitution, not new subsidy, so it's excluded from the figure shown here.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-6 mb-6"
        >
          <ResponsiveContainer width="100%" height={360}>
            <BarChart
              data={philhealthSubsidyByYear}
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
                  "Government subsidy",
                ]}
              />
              <Bar dataKey="subsidyPhpBillion" radius={[3, 3, 0, 0]}>
                {philhealthSubsidyByYear.map((row) => (
                  <Cell
                    key={row.year}
                    fill={adminColors[row.admin]}
                    fillOpacity={row.confidence === "proposed" ? 0.5 : 1}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>

          <AdminLegend />
        </motion.div>

        <p className="text-footnote text-xs mb-10">
          Every figure is a literal published amount — never computed, netted, or estimated by
          FactPH. 2010–2016, 2022–2024, and 2026 are enacted GAA totals or PhilHealth's own
          audited subsidy disclosures. 2017–2021 (shown lighter in the chart) are proposed-budget
          figures carried over from earlier research and not independently re-confirmed against
          the enacted GAA text — worth treating with more caution, since 2024's proposed figure
          (₱101.5B) turned out to differ substantially from what was actually enacted (₱61.5B).
          2025 shows the enacted amount (zero) rather than the ₱74.43B originally proposed. 2026's
          GAA appropriates ₱129.782B in total for PhilHealth, but ₱60B of that is a separate,
          explicitly-labeled line returning money the Supreme Court ruled was unconstitutionally
          taken from PhilHealth's own reserves in 2024 — restitution, not new subsidy, so it's
          excluded from the ₱69.782B shown here.
        </p>

        <h2 className="text-xl font-heading font-bold text-white mb-4">Full data</h2>
        <div className="glass-card overflow-x-auto mb-10">
          <table className="w-full text-sm text-left">
            <thead className="text-muted border-b border-grid">
              <tr>
                <th className="p-4">Year</th>
                <th className="p-4">Government subsidy (₱ billion)</th>
                <th className="p-4">Administration</th>
                <th className="p-4">Note</th>
              </tr>
            </thead>
            <tbody>
              {philhealthSubsidyByYear.map((row) => (
                <tr key={row.year} className="border-b border-grid/50">
                  <td className="p-4 font-semibold text-white">{row.year}</td>
                  <td className="p-4">
                    {row.subsidyPhpBillion.toLocaleString(undefined, {
                      maximumFractionDigits: 4,
                    })}
                    {row.confidence === "proposed" && (
                      <span className="ml-2 text-footnote text-xs">(proposed)</span>
                    )}
                  </td>
                  <td className="p-4" style={{ color: adminColors[row.admin] }}>
                    {adminLabels[row.admin]}
                  </td>
                  <td className="p-4 text-footnote">{row.sourceNote}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-heading font-bold text-white mb-2">Sources</h2>
        <div className="space-y-4 mb-10">
          {philhealthSubsidySources.map((source) => (
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

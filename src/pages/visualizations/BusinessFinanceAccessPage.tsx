import { Link } from "react-router-dom";
import { motion } from "motion/react";
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
  msmeLendingByYear,
  mandatoryAllocationPct,
  businessFinanceSources,
} from "../../data/businessFinanceData";

export default function BusinessFinanceAccessPage() {
  return (
    <div className="dot-grid min-h-screen pt-28 px-4 pb-16">
      <Navbar />
      <div className="max-w-4xl mx-auto">
        <Link
          to="/explore/business-entrepreneurship"
          className="flex items-center gap-2 text-accent text-sm mb-6"
        >
          <ArrowLeft size={16} />
          Back to Business and Entrepreneurship
        </Link>

        <p className="text-accent text-xs uppercase tracking-widest mb-2">
          Business and Entrepreneurship
        </p>
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-white mb-3">
          Access to Business Finance
        </h1>
        <p className="text-muted mb-8 max-w-2xl">
          Bank lending to micro, small and medium enterprises (MSMEs) rose from ₱480.5 billion in
          2020 to ₱574.8 billion in 2025. But its share of banks' total loan portfolios tells a
          different story: it fell from 4.9% in 2020 to 4.1% in 2023, then partially recovered to
          4.73% by end-2025 — still well short of the {mandatoryAllocationPct}% combined
          allocation mandated under the Magna Carta for MSMEs.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-6 mb-4"
        >
          <ResponsiveContainer width="100%" height={360}>
            <BarChart data={msmeLendingByYear}>
              <CartesianGrid strokeDasharray="3 3" stroke="#27384E" />
              <XAxis dataKey="year" stroke="#9FB3C8" />
              <YAxis stroke="#9FB3C8" tickFormatter={(v) => `₱${v}B`} />
              <Tooltip
                contentStyle={{ background: "#0E1B2C", border: "1px solid #27384E" }}
                cursor={{ fill: "#2DD4BF", fillOpacity: 0.06 }}
                formatter={(value) => [`₱${Number(value).toFixed(1)}B`, "Bank loans to MSMEs"]}
              />
              <Bar dataKey="loansBillionPHP" fill="#2DD4BF" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        <p className="text-footnote text-xs mb-10">
          "Share of total loans" is banks' MSME lending as a percentage of their total loan
          portfolio; not yet reported by BSP for 2024, so that cell is left blank rather than
          estimated. This series starts at 2020 — BSP's consolidated total-MSME-lending figure
          isn't reliably available from accessible sources for earlier years.
        </p>

        <h2 className="text-xl font-heading font-bold text-white mb-4">Full data</h2>
        <div className="glass-card overflow-x-auto mb-10">
          <table className="w-full text-sm text-left">
            <thead className="text-muted border-b border-grid">
              <tr>
                <th className="p-4">Year</th>
                <th className="p-4">Bank Loans to MSMEs</th>
                <th className="p-4">Share of Total Loan Portfolio</th>
              </tr>
            </thead>
            <tbody>
              {msmeLendingByYear.map((row) => (
                <tr key={row.year} className="border-b border-grid/50">
                  <td className="p-4 font-semibold text-white">{row.year}</td>
                  <td className="p-4">₱{row.loansBillionPHP.toFixed(1)} billion</td>
                  <td className="p-4">
                    {row.shareOfTotalLoansPct !== null ? `${row.shareOfTotalLoansPct}%` : "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-heading font-bold text-white mb-2">Sources</h2>
        <div className="space-y-4 mb-10">
          {businessFinanceSources.map((source) => (
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

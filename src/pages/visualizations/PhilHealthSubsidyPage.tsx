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
      {(["duterte", "marcos"] as Admin[]).map((admin) => (
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
          The national government's premium subsidy for PhilHealth's indirect (indigent, senior
          citizen, sponsored) members, 2018–2025. Subsidy held between ₱59.7B and ₱80.2B every
          year through 2023, then collapsed to ₱40.35B in 2024 and effectively zero — ₱5.6 million
          — in 2025.
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
                  <Cell key={row.year} fill={adminColors[row.admin]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>

          <AdminLegend />
        </motion.div>

        <p className="text-footnote text-xs mb-10">
          2018–2023 are PhilHealth's own "Premium for Indirect Contribution" figures from its
          audited 2023 Annual Report. 2024–2025 are the same accounting concept from PhilHealth's
          Stats and Charts booklets for those years. No FactPH computation, netting, or estimation
          of any kind. 2010–2017 are a genuine gap — PhilHealth's own published budget figures for
          that period use different concepts (initial GAA appropriation, or the sin-tax-earmarked
          portion only) that aren't directly comparable to 2018 onward, so they're left out rather
          than blended into a misleading trend line.
        </p>

        <h2 className="text-xl font-heading font-bold text-white mb-4">Full data</h2>
        <div className="glass-card overflow-x-auto mb-10">
          <table className="w-full text-sm text-left">
            <thead className="text-muted border-b border-grid">
              <tr>
                <th className="p-4">Year</th>
                <th className="p-4">Government subsidy (₱ billion)</th>
                <th className="p-4">Administration</th>
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

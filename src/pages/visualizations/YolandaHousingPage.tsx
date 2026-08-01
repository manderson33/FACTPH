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
  Legend,
  ResponsiveContainer,
} from "recharts";
import Navbar from "../../components/Navbar";
import { yolandaHousingData, yolandaHousingSources } from "../../data/housingData";

export default function YolandaHousingPage() {
  return (
    <div className="dot-grid min-h-screen pt-28 px-4 pb-16">
      <Navbar />
      <div className="max-w-4xl mx-auto">
        <Link to="/explore/all" className="flex items-center gap-2 text-accent text-sm mb-6">
          <ArrowLeft size={16} />
          Back to Explore Data
        </Link>

        <p className="text-accent text-xs uppercase tracking-widest mb-2">
          Housing &amp; Disaster Recovery
        </p>
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-white mb-3">
          Yolanda Housing: Completed vs. Unoccupied vs. Backlog
        </h1>
        <p className="text-muted mb-8 max-w-2xl">
          Three administrations have managed the Yolanda Permanent Housing Program since Super
          Typhoon Yolanda struck in 2013. Each bar reflects a Commission on Audit snapshot at the
          end of that administration's term, or the latest available audit for an ongoing term.
        </p>

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
  cursor={{ fill: "#2DD4BF", fillOpacity: 0.06 }}
/>
              <Legend />
              <Bar dataKey="completed" name="Completed" fill="#2DD4BF" radius={[4, 4, 0, 0]} />
              <Bar dataKey="unoccupied" name="Unoccupied" fill="#9FB3C8" radius={[4, 4, 0, 0]} />
              <Bar dataKey="backlog" name="Backlog" fill="#E8456B" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        <p className="text-footnote text-xs mb-2">
          Note: "Unoccupied" is a subset of "Completed," not an additional pool of units. Targets
          changed over time, so "Backlog" reflects each snapshot year's own stated target minus
          that year's completed total.
        </p>
        <p className="text-footnote text-xs mb-10">
          The Marcos-era figures are corroborated by a Philippine Senate document that directly
          quotes COA's 2023 NHA Annual Audit Report. A direct link to that specific COA PDF could
          not be located, so COA's report archive is linked instead.
        </p>

        <h2 className="text-xl font-heading font-bold text-white mb-4">Full data</h2>
        <div className="glass-card overflow-x-auto mb-10">
          <table className="w-full text-sm text-left">
            <thead className="text-muted border-b border-grid">
              <tr>
                <th className="p-4">Administration</th>
                <th className="p-4">Snapshot</th>
                <th className="p-4">Target</th>
                <th className="p-4">Completed</th>
                <th className="p-4">Unoccupied</th>
                <th className="p-4">Backlog</th>
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

        <h2 className="text-xl font-heading font-bold text-white mb-2">Sources</h2>
        <p className="text-muted text-sm mb-4">
          Primary sources are listed first, followed by independent journalistic verification.
        </p>
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
                  {source.sourceType === "primary" ? "Primary source" : "News coverage"}
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

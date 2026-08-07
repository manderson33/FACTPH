import { Link } from "react-router-dom";
import { motion } from "motion/react";
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
  return (
    <div className="dot-grid min-h-screen pt-28 px-4 pb-16">
      <Navbar />
      <div className="max-w-4xl mx-auto">
        <Link
          to="/explore/economy"
          className="flex items-center gap-2 text-accent text-sm mb-6"
        >
          <ArrowLeft size={16} />
          Back to Economy
        </Link>

        <p className="text-accent text-xs uppercase tracking-widest mb-2">
          Economy
        </p>
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-white mb-3">
          Consumer and Business Confidence
        </h1>
        <p className="text-muted mb-8 max-w-2xl">
          BSP's confidence indices (CI) are diffusion indices — the percentage of respondents who
          answered positively about the economy's outlook, minus the percentage who answered
          negatively. Zero is neutral. Business confidence has been positive in every quarter
          since 2011 except two (Q3 2020 and Q3 2021). Consumer confidence turned briefly
          positive from mid-2016 through mid-2018, and again from mid-2019 into early 2020, but
          has been negative every quarter since.
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
                name="Business CI"
                stroke="#2DD4BF"
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="consumerCI"
                name="Consumer CI"
                stroke="#E8456B"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        <p className="text-footnote text-xs mb-10">
          Business CI: current-quarter Overall Business Confidence Index, non-seasonally
          adjusted, Business Expectations Survey (top 7,000 corporations by assets). Consumer CI:
          current-quarter overall composite index, Consumer Expectations Survey (~5,000
          households). Every point is a literal quarterly reading transcribed from BSP's own
          published data files — none of these figures are averaged, estimated, or otherwise
          computed by FactPH. Q2 2020 is missing for both series because BSP cancelled that
          quarter's survey round during the nationwide COVID-19 community quarantine.
        </p>

        <h2 className="text-xl font-heading font-bold text-white mb-4">Full data</h2>
        <div className="glass-card overflow-x-auto mb-10">
          <table className="w-full text-sm text-left">
            <thead className="text-muted border-b border-grid">
              <tr>
                <th className="p-4">Quarter</th>
                <th className="p-4">Business CI</th>
                <th className="p-4">Consumer CI</th>
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

        <h2 className="text-xl font-heading font-bold text-white mb-2">Sources</h2>
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

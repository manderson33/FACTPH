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
import { confidenceByYear, confidenceSources } from "../../data/businessConfidenceData";

export default function ConsumerBusinessConfidencePage() {
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
          Consumer and Business Confidence
        </h1>
        <p className="text-muted mb-8 max-w-2xl">
          BSP's confidence indices (CI) are diffusion indices — the percentage of respondents who
          answered positively about the economy's outlook, minus the percentage who answered
          negatively, averaged across each year's quarterly surveys. Zero is neutral: businesses
          have stayed net-optimistic in every year since 2011, while consumers have been
          net-pessimistic in all but two (2016 and 2019).
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-6 mb-4"
        >
          <ResponsiveContainer width="100%" height={380}>
            <LineChart data={confidenceByYear} margin={{ bottom: 12, right: 24, left: 4 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#27384E" />
              <XAxis dataKey="year" stroke="#9FB3C8" interval={0} tickMargin={8} />
              <YAxis stroke="#9FB3C8" tickFormatter={(v) => `${v}`} />
              <ReferenceLine y={0} stroke="#6E839A" strokeDasharray="3 3" />
              <Tooltip
                contentStyle={{ background: "#0E1B2C", border: "1px solid #27384E" }}
                cursor={{ fill: "#2DD4BF", fillOpacity: 0.06 }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="businessCI"
                name="Business CI"
                stroke="#2DD4BF"
                strokeWidth={3}
                dot={{ r: 3 }}
              />
              <Line
                type="monotone"
                dataKey="consumerCI"
                name="Consumer CI"
                stroke="#E8456B"
                strokeWidth={3}
                dot={{ r: 3 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        <p className="text-footnote text-xs mb-10">
          Business CI: annual average of the current-quarter Overall Business Confidence Index,
          non-seasonally adjusted, Business Expectations Survey (top 7,000 corporations by
          assets). Consumer CI: annual average of the current-quarter overall composite index,
          Consumer Expectations Survey (~5,000 households). 2020's Business CI average excludes
          Q2 2020, when the survey was cancelled due to the nationwide COVID-19 quarantine.
        </p>

        <h2 className="text-xl font-heading font-bold text-white mb-4">Full data</h2>
        <div className="glass-card overflow-x-auto mb-10">
          <table className="w-full text-sm text-left">
            <thead className="text-muted border-b border-grid">
              <tr>
                <th className="p-4">Year</th>
                <th className="p-4">Business CI</th>
                <th className="p-4">Consumer CI</th>
              </tr>
            </thead>
            <tbody>
              {confidenceByYear.map((row) => (
                <tr key={row.year} className="border-b border-grid/50">
                  <td className="p-4 font-semibold text-white">{row.year}</td>
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

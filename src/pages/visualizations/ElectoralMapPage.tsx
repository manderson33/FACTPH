import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, ArrowUp, ArrowDown, ArrowUpDown, ExternalLink } from "lucide-react";
import Navbar from "../../components/Navbar";
import PhilippinesMap, { type MapMetric } from "../../components/PhilippinesMap";
import {
  electoralData,
  nationalElectoralTotals,
  electoralSources,
  type RegionElectoralData,
} from "../../data/electoralData";

type SortKey = "name" | "islandGroup" | "registeredVoters" | "votersWhoVoted" | "turnoutPct";

const COLUMNS: { key: SortKey; label: string }[] = [
  { key: "name", label: "Region" },
  { key: "islandGroup", label: "Island Group" },
  { key: "registeredVoters", label: "Registered Voters" },
  { key: "votersWhoVoted", label: "Voted" },
  { key: "turnoutPct", label: "Turnout" },
];

export default function ElectoralMapPage() {
  const [metric, setMetric] = useState<MapMetric>("voters");
  const [sortKey, setSortKey] = useState<SortKey>("registeredVoters");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");

  const handleSort = (key: SortKey) => {
    if (key === sortKey) {
      setSortDir((dir) => (dir === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir(key === "name" || key === "islandGroup" ? "asc" : "desc");
    }
  };

  const sortedData = useMemo(() => {
    const compare = (a: RegionElectoralData, b: RegionElectoralData) => {
      const aVal = a[sortKey];
      const bVal = b[sortKey];
      const cmp =
        typeof aVal === "string" && typeof bVal === "string"
          ? aVal.localeCompare(bVal)
          : (aVal as number) - (bVal as number);
      return sortDir === "asc" ? cmp : -cmp;
    };
    return [...electoralData].sort(compare);
  }, [sortKey, sortDir]);

  return (
    <div className="dot-grid min-h-screen pt-28 px-4 pb-16">
      <Navbar />
      <div className="max-w-4xl mx-auto">
        <Link to="/explore/all" className="flex items-center gap-2 text-accent text-sm mb-6">
          <ArrowLeft size={16} />
          Back to Explore Data
        </Link>

        <p className="text-accent text-xs uppercase tracking-widest mb-2">Elections</p>
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-white mb-3">
          Registered Voters by Region (2025)
        </h1>
        <p className="text-muted mb-8 max-w-2xl">
          {nationalElectoralTotals.registeredVotersDomestic.toLocaleString()} Filipinos were
          registered to vote domestically in the May 12, 2025 National and Local Elections,
          across the country's 18 regions — plus{" "}
          {nationalElectoralTotals.registeredVotersOverseas.toLocaleString()} registered
          overseas voters. Hover a region to see its numbers.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-6 mb-4"
        >
          <div className="flex justify-center gap-2 mb-6">
            <button
              onClick={() => setMetric("voters")}
              className={`text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full transition-colors ${
                metric === "voters"
                  ? "bg-accent text-navy"
                  : "border border-white/20 text-muted hover:text-white"
              }`}
            >
              Registered Voters
            </button>
            <button
              onClick={() => setMetric("turnout")}
              className={`text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full transition-colors ${
                metric === "turnout"
                  ? "bg-marcos text-navy"
                  : "border border-white/20 text-muted hover:text-white"
              }`}
            >
              Voter Turnout
            </button>
          </div>

          <div className="max-w-md mx-auto">
            <PhilippinesMap metric={metric} />
          </div>
        </motion.div>

        <p className="text-footnote text-xs mb-10">
          Negros Island Region (NIR) is reported by COMELEC as its own electoral region for
          2025, distinct from Region VI and Region VII, even though it was not formally
          re-established as an administrative region. Map boundaries reflect 2019 administrative
          divisions.
        </p>

        <h2 className="text-xl font-heading font-bold text-white mb-4">Full data</h2>
        <div className="glass-card overflow-x-auto mb-10">
          <table className="w-full text-sm text-left">
            <thead className="text-muted border-b border-grid">
              <tr>
                {COLUMNS.map((col) => (
                  <th key={col.key} className="p-4">
                    <button
                      onClick={() => handleSort(col.key)}
                      className="flex items-center gap-1.5 font-semibold hover:text-white transition-colors"
                    >
                      {col.label}
                      {sortKey === col.key ? (
                        sortDir === "asc" ? (
                          <ArrowUp size={14} className="text-accent" />
                        ) : (
                          <ArrowDown size={14} className="text-accent" />
                        )
                      ) : (
                        <ArrowUpDown size={14} className="opacity-40" />
                      )}
                    </button>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sortedData.map((row) => (
                <tr key={row.pcode} className="border-b border-grid/50">
                  <td className="p-4 font-semibold text-white">{row.name}</td>
                  <td className="p-4 text-muted">{row.islandGroup}</td>
                  <td className="p-4">{row.registeredVoters.toLocaleString()}</td>
                  <td className="p-4">{row.votersWhoVoted.toLocaleString()}</td>
                  <td className="p-4">{row.turnoutPct.toFixed(1)}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-heading font-bold text-white mb-2">Sources</h2>
        <p className="text-muted text-sm mb-4">
          Regional totals are COMELEC's own subtotal rows in the source document below, and were
          independently cross-checked by summing each region's province-level rows in the same
          report.
        </p>
        <div className="space-y-4 mb-10">
          {electoralSources.map((source) => (
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

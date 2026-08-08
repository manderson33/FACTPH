import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
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

export default function ElectoralMapPage() {
  const { t } = useTranslation();
  const [metric, setMetric] = useState<MapMetric>("voters");
  const [sortKey, setSortKey] = useState<SortKey>("registeredVoters");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");

  const COLUMNS: { key: SortKey; label: string }[] = [
    { key: "name", label: t("pages.electoralMap.tableRegion") },
    { key: "islandGroup", label: t("pages.electoralMap.tableIslandGroup") },
    { key: "registeredVoters", label: t("pages.electoralMap.tableRegisteredVoters") },
    { key: "votersWhoVoted", label: t("pages.electoralMap.tableVoted") },
    { key: "turnoutPct", label: t("pages.electoralMap.tableTurnout") },
  ];

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
        <Link to="/regions" className="flex items-center gap-2 text-accent text-sm mb-6">
          <ArrowLeft size={16} />
          {t("common.backTo", { category: t("regions.title") })}
        </Link>

        <p className="text-accent text-xs uppercase tracking-widest mb-2">
          {t("pages.electoralMap.eyebrow")}
        </p>
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-white mb-3">
          {t("pages.electoralMap.title")}
        </h1>
        <p className="text-muted mb-8 max-w-2xl">
          {t("pages.electoralMap.description", {
            domestic: nationalElectoralTotals.registeredVotersDomestic.toLocaleString(),
            overseas: nationalElectoralTotals.registeredVotersOverseas.toLocaleString(),
          })}
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
              {t("pages.electoralMap.toggleVoters")}
            </button>
            <button
              onClick={() => setMetric("turnout")}
              className={`text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full transition-colors ${
                metric === "turnout"
                  ? "bg-marcos text-navy"
                  : "border border-white/20 text-muted hover:text-white"
              }`}
            >
              {t("pages.electoralMap.toggleTurnout")}
            </button>
          </div>

          <div className="max-w-md mx-auto">
            <PhilippinesMap metric={metric} />
          </div>
        </motion.div>

        <p className="text-footnote text-xs mb-10">{t("pages.electoralMap.footnote")}</p>

        <h2 className="text-xl font-heading font-bold text-white mb-4">{t("common.fullData")}</h2>
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

        <h2 className="text-xl font-heading font-bold text-white mb-2">{t("common.sources")}</h2>
        <p className="text-muted text-sm mb-4">{t("pages.electoralMap.sourcesNote")}</p>
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

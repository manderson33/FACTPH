import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { ArrowLeft } from "lucide-react";
import Navbar from "../../components/Navbar";
import PopulationMap from "../../components/PopulationMap";
import { populationByRegion, nationalPopulationTotal } from "../../data/populationData";

export default function PopulationByRegionPage() {
  const { t } = useTranslation();
  const sortedByPopulation = [...populationByRegion].sort((a, b) => b.population - a.population);

  return (
    <div className="dot-grid min-h-screen pt-28 px-4 pb-16">
      <Navbar />
      <div className="max-w-4xl mx-auto">
        <Link to="/regions" className="flex items-center gap-2 text-accent text-sm mb-6">
          <ArrowLeft size={16} />
          {t("common.backTo", { category: t("regions.title") })}
        </Link>

        <p className="text-accent text-xs uppercase tracking-widest mb-2">
          {t("pages.populationByRegion.eyebrow")}
        </p>
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-white mb-3">
          {t("pages.populationByRegion.title")}
        </h1>
        <p className="text-muted mb-8 max-w-2xl">
          {t("pages.populationByRegion.description", {
            total: nationalPopulationTotal.toLocaleString(),
          })}
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-6 mb-4"
        >
          <div className="max-w-md mx-auto w-full">
            <PopulationMap />
          </div>
        </motion.div>

        <p className="text-footnote text-xs mb-10">{t("pages.populationByRegion.footnote")}</p>

        <h2 className="text-xl font-heading font-bold text-white mb-4">{t("common.fullData")}</h2>
        <div className="glass-card overflow-x-auto mb-10">
          <table className="w-full text-sm text-left">
            <thead className="text-muted border-b border-grid">
              <tr>
                <th className="p-4">{t("pages.populationByRegion.tableRegion")}</th>
                <th className="p-4">{t("pages.populationByRegion.tableIslandGroup")}</th>
                <th className="p-4">{t("pages.populationByRegion.tablePopulation")}</th>
              </tr>
            </thead>
            <tbody>
              {sortedByPopulation.map((row) => (
                <tr key={row.pcode} className="border-b border-grid/50">
                  <td className="p-4 font-semibold text-white">{row.name}</td>
                  <td className="p-4 text-muted">{row.islandGroup}</td>
                  <td className="p-4">{row.population.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-heading font-bold text-white mb-2">{t("common.sources")}</h2>
        <div className="space-y-4 mb-10">
          <div className="glass-card p-4">
            <div className="flex items-start justify-between gap-3">
              <span className="text-accent font-semibold">
                {t("pages.populationByRegion.sourceTitle")}
              </span>
              <span className="text-xs px-2 py-1 rounded-full whitespace-nowrap bg-accent/20 text-accent">
                {t("common.primarySource")}
              </span>
            </div>
            <p className="text-footnote text-xs mt-1">
              {t("pages.populationByRegion.sourcePublisher")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

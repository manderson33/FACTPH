import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import Navbar from "../../components/Navbar";
import PopulationMap from "../../components/PopulationMap";
import { populationByRegion, nationalPopulationTotal } from "../../data/populationData";

export default function PopulationByRegionPage() {
  const sortedByPopulation = [...populationByRegion].sort((a, b) => b.population - a.population);

  return (
    <div className="dot-grid min-h-screen pt-28 px-4 pb-16">
      <Navbar />
      <div className="max-w-4xl mx-auto">
        <Link to="/regions" className="flex items-center gap-2 text-accent text-sm mb-6">
          <ArrowLeft size={16} />
          Back to Regions
        </Link>

        <p className="text-accent text-xs uppercase tracking-widest mb-2">Regions</p>
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-white mb-3">
          Population by Region
        </h1>
        <p className="text-muted mb-8 max-w-2xl">
          {nationalPopulationTotal.toLocaleString()} Filipinos were counted across the country's
          18 regions in the 2024 Census of Population and Housing. Hover a region to see its
          population.
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

        <p className="text-footnote text-xs mb-10">
          PSA publishes population per-region only — no single Luzon/Visayas/Mindanao
          island-group total exists as a directly published figure, so no island-group breakdown
          is computed or shown here.
        </p>

        <h2 className="text-xl font-heading font-bold text-white mb-4">Full data</h2>
        <div className="glass-card overflow-x-auto mb-10">
          <table className="w-full text-sm text-left">
            <thead className="text-muted border-b border-grid">
              <tr>
                <th className="p-4">Region</th>
                <th className="p-4">Island Group</th>
                <th className="p-4">Population</th>
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

        <h2 className="text-xl font-heading font-bold text-white mb-2">Sources</h2>
        <div className="space-y-4 mb-10">
          <div className="glass-card p-4">
            <div className="flex items-start justify-between gap-3">
              <span className="text-accent font-semibold">
                2024 Census of Population and Housing (2024 POPCEN)
              </span>
              <span className="text-xs px-2 py-1 rounded-full whitespace-nowrap bg-accent/20 text-accent">
                Primary source
              </span>
            </div>
            <p className="text-footnote text-xs mt-1">
              Philippine Statistics Authority — population counts declared official via
              Proclamation No. 973 (July 11, 2025)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

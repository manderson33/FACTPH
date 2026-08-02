import { useState } from "react";
import { motion } from "motion/react";
import PopulationMap, { type PopulationMapMode } from "./PopulationMap";

export default function PopulationMapCard() {
  const [mode, setMode] = useState<PopulationMapMode>("region");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="glass-card p-6 flex flex-col md:col-span-2"
    >
      <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
        <h3 className="text-lg font-heading font-semibold text-white">Population by Region</h3>
        <div className="flex gap-2">
          <button
            onClick={() => setMode("region")}
            className={`text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full transition-colors ${
              mode === "region"
                ? "bg-aquino text-navy"
                : "border border-white/20 text-muted hover:text-white"
            }`}
          >
            By Region
          </button>
          <button
            onClick={() => setMode("island")}
            className={`text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full transition-colors ${
              mode === "island"
                ? "bg-white text-navy"
                : "border border-white/20 text-muted hover:text-white"
            }`}
          >
            By Island Group
          </button>
        </div>
      </div>
      <div className="max-w-md mx-auto w-full">
        <PopulationMap mode={mode} />
      </div>
      <p className="text-footnote text-xs mt-3">Source: PSA, 2024 Census of Population and Housing</p>
    </motion.div>
  );
}

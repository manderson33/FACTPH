import { motion } from "motion/react";
import PopulationMap from "./PopulationMap";

export default function PopulationMapCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="glass-card p-6 flex flex-col md:col-span-2"
    >
      <h3 className="text-lg font-heading font-semibold text-white mb-4">Population by Region</h3>
      <div className="max-w-md mx-auto w-full">
        <PopulationMap />
      </div>
      <p className="text-footnote text-xs mt-3">Source: PSA, 2024 Census of Population and Housing</p>
    </motion.div>
  );
}

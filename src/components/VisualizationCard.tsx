import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, Lock } from "lucide-react";

export interface VisualizationMeta {
  id: string;
  title: string;
  category: string;
  description: string;
  status: "published" | "coming-soon";
}

export default function VisualizationCard({ viz }: { viz: VisualizationMeta }) {
  const isPublished = viz.status === "published";

  const cardContent = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`glass-card p-6 h-full flex flex-col justify-between ${
        !isPublished ? "opacity-50" : ""
      }`}
    >
      <div>
        <p className="text-accent text-xs uppercase tracking-widest mb-2">{viz.category}</p>
        <h3 className="text-lg font-heading font-semibold text-white mb-2">{viz.title}</h3>
        <p className="text-muted text-sm">{viz.description}</p>
      </div>
      <div className="mt-4 flex items-center gap-2 text-sm font-semibold">
        {isPublished ? (
          <span className="flex items-center gap-1 text-accent">
            View visualization <ArrowRight size={14} />
          </span>
        ) : (
          <span className="flex items-center gap-1 text-footnote">
            <Lock size={12} /> Coming soon
          </span>
        )}
      </div>
    </motion.div>
  );

  return isPublished ? (
    <Link to={`/visualization/${viz.id}`}>{cardContent}</Link>
  ) : (
    <div className="cursor-not-allowed">{cardContent}</div>
  );
}
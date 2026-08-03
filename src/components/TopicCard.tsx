import { motion } from "motion/react";
import { Lock } from "lucide-react";

export default function TopicCard({ title }: { title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-card p-5 h-full flex flex-col justify-between opacity-50 cursor-not-allowed"
    >
      <h3 className="text-white font-heading font-semibold text-base">{title}</h3>
      <div className="mt-4 flex items-center gap-1 text-footnote text-xs font-semibold">
        <Lock size={12} /> Coming soon
      </div>
    </motion.div>
  );
}

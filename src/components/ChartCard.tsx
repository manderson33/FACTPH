import { motion } from "motion/react";
import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";

interface ChartCardProps {
  title: string;
  source: string;
  year: number;
  children: ReactNode;
}

export default function ChartCard({ title, source, year, children }: ChartCardProps) {
  const { t } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="glass-card p-6 flex flex-col"
    >
      <h3 className="text-lg font-heading font-semibold text-white mb-4">{title}</h3>
      <div className="flex-1 min-h-[260px]">{children}</div>
      <p className="text-footnote text-xs mt-3">
        {t("common.source")}: {source}, {year}
      </p>
    </motion.div>
  );
}
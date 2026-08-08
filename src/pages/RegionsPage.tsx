import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar";
import VisualizationCard from "../components/VisualizationCard";

export default function RegionsPage() {
  const { t } = useTranslation();

  const regionVisualizations = [
    {
      id: "electoral-map",
      title: t("nav.electoralMap"),
      category: t("regions.title"),
      description: t("regions.electoralMapDescription"),
      status: "published" as const,
    },
    {
      id: "population-by-region",
      title: t("nav.populationByRegion"),
      category: t("regions.title"),
      description: t("regions.populationByRegionDescription"),
      status: "published" as const,
    },
  ];

  return (
    <div className="dot-grid min-h-screen pt-28 px-4 pb-16">
      <Navbar />
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-heading font-bold text-white mb-2">{t("regions.title")}</h1>
        <p className="text-muted mb-10">{t("regions.subtitle")}</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {regionVisualizations.map((viz) => (
            <VisualizationCard key={viz.id} viz={viz} />
          ))}
        </div>
      </div>
    </div>
  );
}

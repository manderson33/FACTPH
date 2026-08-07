import Navbar from "../components/Navbar";
import VisualizationCard from "../components/VisualizationCard";

const regionVisualizations = [
  {
    id: "electoral-map",
    title: "Electoral Map",
    category: "Elections",
    description:
      "Registered voters and turnout by region in the 2025 National and Local Elections, per COMELEC.",
    status: "published" as const,
  },
  {
    id: "population-by-region",
    title: "Population by Region",
    category: "Population",
    description:
      "How the Philippines' 112.7 million people are distributed across its 18 regions, per the 2024 Census.",
    status: "published" as const,
  },
];

export default function RegionsPage() {
  return (
    <div className="dot-grid min-h-screen pt-28 px-4 pb-16">
      <Navbar />
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-heading font-bold text-white mb-2">Regions</h1>
        <p className="text-muted mb-10">
          Explore the Philippines region by region — click a card for the full map and data.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {regionVisualizations.map((viz) => (
            <VisualizationCard key={viz.id} viz={viz} />
          ))}
        </div>
      </div>
    </div>
  );
}

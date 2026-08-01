import Navbar from "../components/Navbar";
import VisualizationCard from "../components/VisualizationCard";
import { visualizations } from "../data/visualizations";

export default function DataExplorerPage() {
  return (
    <div className="dot-grid min-h-screen pt-28 px-4 pb-16">
      <Navbar />
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-heading font-bold text-white mb-2">Explore Data</h1>
        <p className="text-muted mb-10">
          Every visualization here is sourced directly from primary documents — government audits,
          statistics agencies, and official reports. Click any card to see the full data and sources.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visualizations.map((viz) => (
            <VisualizationCard key={viz.id} viz={viz} />
          ))}
        </div>
      </div>
    </div>
  );
}
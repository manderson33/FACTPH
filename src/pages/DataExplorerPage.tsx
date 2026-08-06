import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import VisualizationCard from "../components/VisualizationCard";
import TopicCard from "../components/TopicCard";
import CategorySelect from "../components/CategorySelect";
import { exploreCategories, type ExploreTopic } from "../data/exploreCategories";

function TopicOrVisualizationCard({
  topic,
  categoryTitle,
}: {
  topic: ExploreTopic;
  categoryTitle: string;
}) {
  if (topic.visualization) {
    return (
      <VisualizationCard
        viz={{
          id: topic.visualization.id,
          title: topic.title,
          category: categoryTitle,
          description: topic.visualization.description,
          status: topic.visualization.status,
        }}
      />
    );
  }
  return <TopicCard title={topic.title} />;
}

export default function DataExplorerPage() {
  const { category } = useParams();
  const activeCategory = exploreCategories.find((c) => c.slug === category);
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");

  const sortedCategories = useMemo(() => {
    const copy = [...exploreCategories];
    copy.sort((a, b) =>
      sortDir === "asc" ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)
    );
    return copy;
  }, [sortDir]);

  if (activeCategory) {
    return (
      <div className="dot-grid min-h-screen pt-28 px-4 pb-16">
        <Navbar />
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-heading font-bold text-white mb-2">
            {activeCategory.title}
          </h1>
          <p className="text-muted mb-6">
            {activeCategory.topics.length} {activeCategory.topics.length === 1 ? "topic" : "topics"}{" "}
            we're tracking for this category. Each one will get its own sourced, verified
            visualization as it's published.
          </p>

          <div className="mb-10">
            <CategorySelect activeSlug={activeCategory.slug} />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeCategory.topics.map((topic) => (
              <TopicOrVisualizationCard
                key={topic.title}
                topic={topic}
                categoryTitle={activeCategory.title}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="dot-grid min-h-screen pt-28 px-4 pb-16">
      <Navbar />
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-heading font-bold text-white mb-2">Explore Data</h1>
        <p className="text-muted mb-6">
          Every visualization here is sourced directly from primary documents — government audits,
          statistics agencies, and official reports. Click any card to see the full data and sources.
        </p>

        <div className="mb-14">
          <CategorySelect sortDir={sortDir} onSortDirChange={setSortDir} />
        </div>

        <div className="space-y-14">
          {sortedCategories.map((c) => (
            <div key={c.slug}>
              <h2 className="text-2xl font-heading font-bold text-white mb-1">{c.title}</h2>
              <p className="text-footnote text-xs uppercase tracking-widest mb-4">
                {c.topics.length} topics
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {c.topics.map((topic) => (
                  <TopicOrVisualizationCard key={topic.title} topic={topic} categoryTitle={c.title} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

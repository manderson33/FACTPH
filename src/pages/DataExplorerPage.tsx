import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();
  if (topic.visualization) {
    return (
      <VisualizationCard
        viz={{
          id: topic.visualization.id,
          title: t(`topics.${topic.visualization.id}.title`),
          category: categoryTitle,
          description: t(`topics.${topic.visualization.id}.description`),
          status: topic.visualization.status,
        }}
      />
    );
  }
  return <TopicCard title={topic.title} />;
}

export default function DataExplorerPage() {
  const { category } = useParams();
  const { t } = useTranslation();
  const activeCategory = exploreCategories.find((c) => c.slug === category);
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");

  const sortedCategories = useMemo(() => {
    const copy = [...exploreCategories];
    copy.sort((a, b) => {
      const aTitle = t(`categories.${a.slug}`);
      const bTitle = t(`categories.${b.slug}`);
      return sortDir === "asc" ? aTitle.localeCompare(bTitle) : bTitle.localeCompare(aTitle);
    });
    return copy;
  }, [sortDir, t]);

  if (activeCategory) {
    const activeCategoryTitle = t(`categories.${activeCategory.slug}`);
    return (
      <div className="dot-grid min-h-screen pt-28 px-4 pb-16">
        <Navbar />
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-heading font-bold text-white mb-2">
            {activeCategoryTitle}
          </h1>
          <p className="text-muted mb-6">
            {activeCategory.topics.length}{" "}
            {t("explorer.topicsTrackedSuffix", { count: activeCategory.topics.length })}
          </p>

          <div className="mb-10">
            <CategorySelect activeSlug={activeCategory.slug} />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeCategory.topics.map((topic) => (
              <TopicOrVisualizationCard
                key={topic.title}
                topic={topic}
                categoryTitle={activeCategoryTitle}
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
        <h1 className="text-4xl font-heading font-bold text-white mb-2">{t("explorer.title")}</h1>
        <p className="text-muted mb-6">{t("explorer.subtitle")}</p>

        <div className="mb-14">
          <CategorySelect sortDir={sortDir} onSortDirChange={setSortDir} />
        </div>

        <div className="space-y-14">
          {sortedCategories.map((c) => {
            const categoryTitle = t(`categories.${c.slug}`);
            return (
              <div key={c.slug}>
                <h2 className="text-2xl font-heading font-bold text-white mb-1">
                  {categoryTitle}
                </h2>
                <p className="text-footnote text-xs uppercase tracking-widest mb-4">
                  {c.topics.length} {t("explorer.topics", { count: c.topics.length })}
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {c.topics.map((topic) => (
                    <TopicOrVisualizationCard
                      key={topic.title}
                      topic={topic}
                      categoryTitle={categoryTitle}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

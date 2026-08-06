import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowUpAZ, ArrowDownZA } from "lucide-react";
import { exploreCategories } from "../data/exploreCategories";

interface CategorySelectProps {
  activeSlug?: string;
  /** Controlled sort direction — pass this + onSortDirChange to share the sort
   * with page content (e.g. section order on the "all categories" view).
   * Omit for a self-contained, uncontrolled toggle that only affects this
   * dropdown's own option order. */
  sortDir?: "asc" | "desc";
  onSortDirChange?: (dir: "asc" | "desc") => void;
}

export default function CategorySelect({
  activeSlug,
  sortDir: controlledSortDir,
  onSortDirChange,
}: CategorySelectProps) {
  const navigate = useNavigate();
  const [internalSortDir, setInternalSortDir] = useState<"asc" | "desc">("asc");
  const sortDir = controlledSortDir ?? internalSortDir;
  const toggleSortDir = () => {
    const next = sortDir === "asc" ? "desc" : "asc";
    if (onSortDirChange) onSortDirChange(next);
    else setInternalSortDir(next);
  };

  const sortedCategories = useMemo(() => {
    const copy = [...exploreCategories];
    copy.sort((a, b) =>
      sortDir === "asc" ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)
    );
    return copy;
  }, [sortDir]);

  return (
    <div className="flex items-center gap-2">
      <select
        value={activeSlug ?? ""}
        onChange={(e) => navigate(e.target.value ? `/explore/${e.target.value}` : "/explore/all")}
        className="bg-navy border border-white/20 text-white text-sm font-semibold rounded-lg px-4 py-2.5 focus:outline-none focus:border-accent transition-colors"
      >
        <option value="">All categories</option>
        {sortedCategories.map((c) => (
          <option key={c.slug} value={c.slug}>
            {c.title}
          </option>
        ))}
      </select>
      <button
        type="button"
        onClick={toggleSortDir}
        title={sortDir === "asc" ? "Sorted A–Z — click for Z–A" : "Sorted Z–A — click for A–Z"}
        aria-label="Toggle category sort order"
        className="flex items-center justify-center border border-white/20 text-muted hover:text-white hover:border-white/40 rounded-lg p-2.5 transition-colors"
      >
        {sortDir === "asc" ? <ArrowUpAZ size={16} /> : <ArrowDownZA size={16} />}
      </button>
    </div>
  );
}

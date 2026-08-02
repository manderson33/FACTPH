export interface VisualizationMeta {
  id: string;
  title: string;
  category: string;
  description: string;
  status: "published" | "coming-soon";
}

export const visualizations: VisualizationMeta[] = [
  {
    id: "yolanda-housing",
    title: "Yolanda Housing: Completed vs. Unoccupied vs. Backlog",
    category: "Housing & Disaster Recovery",
    description: "How three administrations performed on the Yolanda Permanent Housing Program, per COA audit snapshots.",
    status: "published",
  },
  {
    id: "poverty-inflation",
    title: "Poverty Reduction vs. Inflation",
    category: "Economy",
    description: "Comparing poverty reduction across administrations against annual inflation.",
    status: "coming-soon",
  },
  {
    id: "philhealth-subsidy",
    title: "PhilHealth National Government Subsidy",
    category: "Health",
    description: "Annual government subsidy to PhilHealth, 2010–2026.",
    status: "coming-soon",
  },
  {
    id: "electoral-map",
    title: "Registered Voters by Region (2025)",
    category: "Elections",
    description: "Interactive map of COMELEC's 2025 registered voter counts across all 18 of the Philippines' electoral regions.",
    status: "published",
  },
];
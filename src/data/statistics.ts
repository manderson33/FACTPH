export interface Stat {
  /** Translation key suffix under home.stats.* used for the display label. */
  labelKey: string;
  value: string;
  source: string;
  year: number;
  /** Overrides the default "{source} {year}" footnote when a fuller citation is needed. */
  note?: string;
}

export const statistics: Stat[] = [
  { labelKey: "population", value: "112.7M", source: "PSA", year: 2024, note: "PSA - 2024" },
  { labelKey: "gdp", value: "$461.6B", source: "World Bank", year: 2024 },
  { labelKey: "islands", value: "7,641", source: "NAMRIA", year: 2025 },
  { labelKey: "provinces", value: "82", source: "PSA", year: 2024 },
  { labelKey: "cities", value: "149", source: "PSA", year: 2026 },
  { labelKey: "regions", value: "18", source: "PSA", year: 2024 },
  { labelKey: "capital", value: "Manila", source: "PSA", year: 2024 },
];
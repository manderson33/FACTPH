export interface Stat {
  label: string;
  value: string;
  source: string;
  year: number;
}

export const statistics: Stat[] = [
  { label: "Population", value: "112.7M", source: "PSA", year: 2024 },
  { label: "GDP", value: "$461.6B", source: "World Bank", year: 2024 },
  { label: "Islands", value: "7,641", source: "NAMRIA", year: 2025 },
  { label: "Provinces", value: "82", source: "PSA", year: 2024 },
  { label: "Cities", value: "149", source: "PSA", year: 2026 },
  { label: "Regions", value: "18", source: "PSA", year: 2024 },
  { label: "Capital", value: "Manila", source: "PSA", year: 2024 },
];
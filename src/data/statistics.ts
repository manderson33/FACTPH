export interface Stat {
  label: string;
  value: string;
  source: string;
  year: number;
}

export const statistics: Stat[] = [
  { label: "Population", value: "114.2M", source: "PSA", year: 2024 },
  { label: "GDP", value: "$437B", source: "NEDA", year: 2023 },
  { label: "Islands", value: "7,641", source: "NAMRIA", year: 2024 },
  { label: "Provinces", value: "82", source: "PSA", year: 2024 },
  { label: "Regions", value: "17", source: "PSA", year: 2024 },
  { label: "Capital", value: "Manila", source: "PSA", year: 2024 },
];
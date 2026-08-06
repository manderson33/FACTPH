import { adminColors, adminLabels, type Admin } from "./costOfLivingData";

export { adminColors, adminLabels };
export type { Admin };

export interface TourismYear {
  year: number;
  arrivals: number;
  admin: Admin;
}

function adminForYear(year: number): Admin {
  if (year <= 2015) return "aquino";
  if (year <= 2021) return "duterte";
  return "marcos";
}

// Source: World Bank, "International tourism, number of arrivals — Philippines"
// (ultimately sourced from the Department of Tourism / UNWTO) for 2010-2020.
// 2021-2025 are the Department of Tourism's own published year-end foreign
// visitor arrival totals (excluding returning overseas Filipinos, matching
// the same convention used in the earlier years). These are literal
// published counts — no FactPH computation, growth-rate derivation, or
// estimation of any kind. 2022's figure is DOT's own rounded "2.02 million"
// as published; all other post-2020 figures are exact as reported.
const arrivalsByYear: { year: number; arrivals: number }[] = [
  { year: 2010, arrivals: 3520000 },
  { year: 2011, arrivals: 3917000 },
  { year: 2012, arrivals: 4273000 },
  { year: 2013, arrivals: 4681000 },
  { year: 2014, arrivals: 4833000 },
  { year: 2015, arrivals: 5361000 },
  { year: 2016, arrivals: 5967000 },
  { year: 2017, arrivals: 6621000 },
  { year: 2018, arrivals: 7168000 },
  { year: 2019, arrivals: 8261000 },
  { year: 2020, arrivals: 1483000 },
  { year: 2021, arrivals: 163879 },
  { year: 2022, arrivals: 2020000 },
  { year: 2023, arrivals: 5003475 },
  { year: 2024, arrivals: 5438967 },
  { year: 2025, arrivals: 5940975 },
];

export const tourismByYear: TourismYear[] = arrivalsByYear.map(({ year, arrivals }) => ({
  year,
  arrivals,
  admin: adminForYear(year),
}));

export const tourismSources = [
  {
    title: "International tourism, number of arrivals — Philippines (2010–2020)",
    url: "https://data.worldbank.org/indicator/ST.INT.ARVL?locations=PH",
    publisher: "World Bank, from Philippine Department of Tourism / UNWTO data",
    date: "2026",
    sourceType: "primary" as const,
  },
  {
    title: "DOT year-end foreign visitor arrival reports, 2021–2025",
    url: "https://beta.tourism.gov.ph/news_and_updates/",
    publisher: "Department of Tourism, Republic of the Philippines",
    date: "2022–2026 releases",
    sourceType: "primary" as const,
  },
];

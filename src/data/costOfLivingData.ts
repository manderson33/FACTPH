export type Admin = "aquino" | "duterte" | "marcos";

export const adminColors: Record<Admin, string> = {
  aquino: "#F6C915",
  duterte: "#34B36A",
  marcos: "#E8456B",
};

export const adminLabels: Record<Admin, string> = {
  aquino: "Aquino III",
  duterte: "Duterte",
  marcos: "Marcos Jr.",
};

function adminForYear(year: number): Admin {
  if (year <= 2015) return "aquino";
  if (year <= 2021) return "duterte";
  return "marcos";
}

export interface InflationYear {
  year: number;
  inflationPct: number;
  admin: Admin;
}

// Source: World Bank, "Inflation, consumer prices (annual %)" for the
// Philippines — ultimately sourced from PSA's Consumer Price Index. Matches
// PSA's own reported full-year averages for 2020-2025 (independently
// cross-checked). These are the published figures as-is — no FactPH
// computation or derivation of any kind.
const inflationRates: { year: number; inflationPct: number }[] = [
  { year: 2011, inflationPct: 4.72 },
  { year: 2012, inflationPct: 3.03 },
  { year: 2013, inflationPct: 2.58 },
  { year: 2014, inflationPct: 3.60 },
  { year: 2015, inflationPct: 0.67 },
  { year: 2016, inflationPct: 1.25 },
  { year: 2017, inflationPct: 2.85 },
  { year: 2018, inflationPct: 5.31 },
  { year: 2019, inflationPct: 2.39 },
  { year: 2020, inflationPct: 2.39 },
  { year: 2021, inflationPct: 3.93 },
  { year: 2022, inflationPct: 5.82 },
  { year: 2023, inflationPct: 5.98 },
  { year: 2024, inflationPct: 3.21 },
  { year: 2025, inflationPct: 1.66 },
];

export const inflationByYear: InflationYear[] = inflationRates.map(({ year, inflationPct }) => ({
  year,
  inflationPct,
  admin: adminForYear(year),
}));

export const inflationSources = [
  {
    title: "Inflation, consumer prices (annual %) — Philippines",
    url: "https://data.worldbank.org/indicator/FP.CPI.TOTL.ZG?locations=PH",
    publisher: "World Bank, from PSA Consumer Price Index data",
    date: "2025",
    sourceType: "primary" as const,
  },
];

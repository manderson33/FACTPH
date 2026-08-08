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
  label: string;
  inflationPct: number;
  admin: Admin;
  /** True for a year-to-date average rather than a completed full-year average. */
  partial: boolean;
}

// Source: World Bank, "Inflation, consumer prices (annual %)" for the
// Philippines — ultimately sourced from PSA's Consumer Price Index. Matches
// PSA's own reported full-year averages for 2020-2025 (independently
// cross-checked). These are the published figures as-is — no FactPH
// computation or derivation of any kind.
// 2026: not a completed calendar year yet. Shown instead as PSA's own
// published January-June 2026 average inflation rate (4.8%), from its
// June 2026 Summary Inflation Report — flagged as partial/provisional
// rather than presented as a full-year figure.
const inflationRates: { year: number; label: string; inflationPct: number; partial: boolean }[] = [
  { year: 2011, label: "2011", inflationPct: 4.72, partial: false },
  { year: 2012, label: "2012", inflationPct: 3.03, partial: false },
  { year: 2013, label: "2013", inflationPct: 2.58, partial: false },
  { year: 2014, label: "2014", inflationPct: 3.60, partial: false },
  { year: 2015, label: "2015", inflationPct: 0.67, partial: false },
  { year: 2016, label: "2016", inflationPct: 1.25, partial: false },
  { year: 2017, label: "2017", inflationPct: 2.85, partial: false },
  { year: 2018, label: "2018", inflationPct: 5.31, partial: false },
  { year: 2019, label: "2019", inflationPct: 2.39, partial: false },
  { year: 2020, label: "2020", inflationPct: 2.39, partial: false },
  { year: 2021, label: "2021", inflationPct: 3.93, partial: false },
  { year: 2022, label: "2022", inflationPct: 5.82, partial: false },
  { year: 2023, label: "2023", inflationPct: 5.98, partial: false },
  { year: 2024, label: "2024", inflationPct: 3.21, partial: false },
  { year: 2025, label: "2025", inflationPct: 1.66, partial: false },
  { year: 2026, label: "2026 (Jan–Jun)", inflationPct: 4.8, partial: true },
];

export const inflationByYear: InflationYear[] = inflationRates.map(
  ({ year, label, inflationPct, partial }) => ({
    year,
    label,
    inflationPct,
    partial,
    admin: adminForYear(year),
  })
);

export const inflationSources = [
  {
    title: "Summary Inflation Report Consumer Price Index (2018=100): June 2026",
    url: "https://psa.gov.ph/content/summary-inflation-report-consumer-price-index-2018100-june-2026",
    publisher: "Philippine Statistics Authority",
    date: "7 Jul. 2026",
    sourceType: "primary" as const,
  },
  {
    title: "Inflation, consumer prices (annual %) — Philippines",
    url: "https://data.worldbank.org/indicator/FP.CPI.TOTL.ZG?locations=PH",
    publisher: "World Bank, from PSA Consumer Price Index data",
    date: "2025",
    sourceType: "primary" as const,
  },
];

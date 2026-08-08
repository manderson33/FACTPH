export interface FoodVsHeadlineYear {
  year: number;
  label: string;
  headlinePct: number;
  foodPct: number;
  /** True for a single-month reading rather than a full calendar-year average. */
  partial: boolean;
}

// Source: Philippine Statistics Authority, Summary Inflation Report /
// December Consumer Price Index press releases — the full-year average
// inflation rate PSA itself states for "Food and Non-Alcoholic Beverages"
// versus the headline (all-items) rate, as originally published in each
// year's own December report. These are literal published figures — no
// FactPH computation, netting, or estimation of any kind.
// 2019-2021 were originally published under the 2012-based CPI. PSA
// rebased the CPI to 2018=100 in February 2022; 2021's headline rate was
// later restated to 3.9% under the new base (vs. the 4.5% shown here, as
// PSA itself reported it at the time) — both figures are PSA's own, just
// from different base-year vintages. 2022-2025 are already on the current
// 2018-based CPI, so no restatement applies to them.
// 2025's food figure is corroborated by GMA News' direct citation of PSA's
// year-end release, since PSA's own press release PDF for December 2025
// was not independently retrievable as of this writing.
// 2026: not a completed calendar year yet, and PSA's June 2026 Summary
// Inflation Report states a January-June year-to-date average only for
// headline and core inflation, not for the Food and Non-Alcoholic
// Beverages commodity group specifically. Rather than compute a food
// year-to-date average ourselves, 2026 shows PSA's own June 2026 monthly
// reading for both series instead, clearly flagged as a single month, not
// a year-to-date or annual average like every other year on this chart.
export const foodVsHeadlineByYear: FoodVsHeadlineYear[] = [
  { year: 2019, label: "2019", headlinePct: 2.5, foodPct: 2.1, partial: false },
  { year: 2020, label: "2020", headlinePct: 2.6, foodPct: 2.7, partial: false },
  { year: 2021, label: "2021", headlinePct: 4.5, foodPct: 5.2, partial: false },
  { year: 2022, label: "2022", headlinePct: 5.8, foodPct: 5.9, partial: false },
  { year: 2023, label: "2023", headlinePct: 5.98, foodPct: 7.9, partial: false },
  { year: 2024, label: "2024", headlinePct: 3.21, foodPct: 4.4, partial: false },
  { year: 2025, label: "2025", headlinePct: 1.66, foodPct: 1.2, partial: false },
  { year: 2026, label: "2026 (Jun)", headlinePct: 6.4, foodPct: 5.2, partial: true },
];

export const foodInflationSources = [
  {
    title: "Summary Inflation Report, Consumer Price Index (2018=100): June 2026",
    url: "https://psa.gov.ph/content/summary-inflation-report-consumer-price-index-2018100-june-2026",
    publisher: "Philippine Statistics Authority",
    date: "7 Jul. 2026",
    sourceType: "primary" as const,
  },
  {
    title: "Summary Inflation Report, Consumer Price Index (2018=100 / 2012=100 by year)",
    url: "https://psa.gov.ph/price-indices/cpi-ir",
    publisher: "Philippine Statistics Authority",
    date: "2019–2025 releases",
    sourceType: "primary" as const,
  },
  {
    title: "Philippines closes 2025 with 1.7% inflation rate",
    url: "https://www.gmanetwork.com/news/money/economy/971786/philippines-closes-2025-with-1-7-inflation-rate/story/",
    publisher: "GMA News, citing Philippine Statistics Authority",
    date: "6 Jan. 2026",
    sourceType: "primary" as const,
  },
];

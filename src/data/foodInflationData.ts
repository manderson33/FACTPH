export interface FoodVsHeadlineYear {
  year: number;
  headlinePct: number;
  foodPct: number;
}

// Source: Philippine Statistics Authority Consumer Price Index releases, food
// and non-alcoholic beverages sub-index vs. headline inflation, full-year
// averages. PSA's food-specific breakout isn't as consistently archived/
// accessible as headline inflation, so only these two years could be confirmed
// as clean, comparable full-year averages as of this writing.
export const foodVsHeadlineByYear: FoodVsHeadlineYear[] = [
  { year: 2023, headlinePct: 5.98, foodPct: 7.9 },
  { year: 2024, headlinePct: 3.21, foodPct: 4.5 },
];

// A more recent single-month reading, for context on how current the gap still
// is — not part of the annual chart series since it isn't a full-year average.
export const latestMonthlyReading = {
  month: "June 2026",
  headlinePct: 6.4,
  foodPct: 5.4,
};

export const foodInflationSources = [
  {
    title: "Summary Inflation Report, Consumer Price Index (2018=100)",
    url: "https://psa.gov.ph/price-indices/cpi-ir",
    publisher: "Philippine Statistics Authority",
    date: "2024–2026 releases",
    sourceType: "primary" as const,
  },
];

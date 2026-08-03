export interface BusinessRevenueYear {
  year: number;
  revenueTrillionPHP: number;
  establishments: number | null;
}

// Source: Philippine Statistics Authority, Annual Survey of Philippine Business
// and Industry (ASPBI), Economy Wide results (formal sector establishments only).
// This is not an unbroken series: 2018 was a Census year (Census of Philippine
// Business and Industry) rather than an ASPBI annual survey — different
// methodology (exhaustive count vs. sample survey), so it's excluded here to
// avoid mixing the two. 2016's economy-wide total could not be confirmed from a
// primary source as of this writing. 2020 and 2021 are ASPBI final results; 2022
// is the latest preliminary result PSA had released as of this writing — PSA had
// not yet published economy-wide totals for 2023 or later reference years.
export const businessRevenueByYear: BusinessRevenueYear[] = [
  { year: 2017, revenueTrillionPHP: 17.90, establishments: null },
  { year: 2019, revenueTrillionPHP: 25.46, establishments: null },
  { year: 2020, revenueTrillionPHP: 18.70, establishments: 237367 },
  { year: 2021, revenueTrillionPHP: 20.19, establishments: 281153 },
  { year: 2022, revenueTrillionPHP: 23.57, establishments: 281825 },
];

export const businessRevenueSources = [
  {
    title: "2022 Annual Survey of Philippine Business and Industry (ASPBI) — Economy Wide: Preliminary Results",
    url: "https://psa.gov.ph/content/2022-annual-survey-philippine-business-and-industry-aspbi-economy-wide-preliminary-results",
    publisher: "Philippine Statistics Authority",
    date: "2024",
    sourceType: "primary" as const,
  },
  {
    title: "2021 Annual Survey of Philippine Business and Industry (ASPBI) — Economywide: Final Results",
    url: "https://psa.gov.ph/content/2021-annual-survey-philippine-business-and-industry-aspbi-all-establishments-employment",
    publisher: "Philippine Statistics Authority",
    date: "2023",
    sourceType: "primary" as const,
  },
  {
    title: "2019 Annual Survey of Philippine Business and Industry (ASPBI) — Economywide Preliminary Results",
    url: "https://psa.gov.ph/content/2019-annual-survey-philippine-business-and-industry-aspbi-economywide-preliminary-results",
    publisher: "Philippine Statistics Authority",
    date: "2020",
    sourceType: "primary" as const,
  },
  {
    title: "2017 Annual Survey of Philippine Business and Industry (ASPBI) — Economy Wide All Establishments: Final Results",
    url: "https://psa.gov.ph/content/2017-annual-survey-philippine-business-and-industry-aspbi-economy-wide-all-establishments",
    publisher: "Philippine Statistics Authority",
    date: "2018",
    sourceType: "primary" as const,
  },
];

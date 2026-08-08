export interface RicePriceYear {
  year: number;
  pricePerKg: number;
  /** True for a full calendar-year average; false for a single December
   * snapshot (used only where PSA has not yet published that year's annual
   * average in its "Selected Statistics on Agriculture" series). */
  isAnnualAverage: boolean;
}

// Source: Philippine Statistics Authority, "Selected Statistics on
// Agriculture" (2015-2017) and "Selected Statistics on Agriculture and
// Fisheries" (2018-2022), Table 6.3 "Cereals: Average Domestic and World
// Prices by Type" — well-milled rice, retail, national average, full
// calendar-year figures as PSA itself publishes them. These are two
// different PSA data vintages: 2015-2017 uses PSA's older Retail Price
// Survey methodology; 2018 onward uses PSA's "new data series," the Retail
// Price Survey of Commodities for the 2018-based CPI — PSA's own SSAF
// documents flag this methodology change explicitly, which is why 2017 and
// 2018 are not perfectly comparable.
// 2023-2024: PSA has not yet published an SSAF edition covering these
// years, and its interim "Price Situationer" bulletins are bi-weekly
// snapshots, not annual averages — so rather than compute an average
// ourselves, these two years show PSA's own second-phase-of-December
// snapshot instead, clearly flagged as such (shown lighter in the chart).
const ricePriceByYearRaw: { year: number; pricePerKg: number; isAnnualAverage: boolean }[] = [
  { year: 2015, pricePerKg: 42.04, isAnnualAverage: true },
  { year: 2016, pricePerKg: 41.72, isAnnualAverage: true },
  { year: 2017, pricePerKg: 42.14, isAnnualAverage: true },
  { year: 2018, pricePerKg: 47.43, isAnnualAverage: true },
  { year: 2019, pricePerKg: 45.43, isAnnualAverage: true },
  { year: 2020, pricePerKg: 43.69, isAnnualAverage: true },
  { year: 2021, pricePerKg: 43.36, isAnnualAverage: true },
  { year: 2022, pricePerKg: 43.77, isAnnualAverage: true },
  { year: 2023, pricePerKg: 54.68, isAnnualAverage: false },
  { year: 2024, pricePerKg: 54.97, isAnnualAverage: false },
];

export const ricePriceByYear: RicePriceYear[] = ricePriceByYearRaw;

export interface RiceEvent {
  year: number;
  label: string;
  description: string;
}

export const riceEvents: RiceEvent[] = [
  {
    year: 2019,
    label: "RA 11203",
    description:
      "Rice Tariffication Law (signed March 2019) replaced import quotas with tariffs, opening rice imports and pushing retail prices down through 2021.",
  },
  {
    year: 2023,
    label: "EO 39",
    description:
      "Executive Order 39 (Sept–Oct 2023) imposed a price cap on regular- and well-milled rice amid a supply-driven price spike; it was lifted after about three weeks.",
  },
];

export const ricePriceSources = [
  {
    title: "Special Release: Price Situationer of Selected Agricultural Commodities, Second Phase of December 2024",
    url: "https://psa.gov.ph/system/files/psd/Special%20Release%20on%20Price%20Situationer%20of%20Agri%20Commodities_2ndPhaseDecember2024.pdf",
    publisher: "Philippine Statistics Authority",
    date: "27 Dec. 2024",
    sourceType: "primary" as const,
  },
  {
    title: "Special Release: Price Situationer of Selected Agricultural Commodities, Second Phase of December 2023",
    url: "https://psa.gov.ph/system/files/psd/Special%20Release%20on%20Price%20Situationer%20of%20Agri%20Commodities_2ndPhaseDec2023.pdf",
    publisher: "Philippine Statistics Authority",
    date: "29 Dec. 2023",
    sourceType: "primary" as const,
  },
  {
    title: "Selected Statistics on Agriculture and Fisheries (2018-2022), Table 6.3",
    url: "https://psa.gov.ph/system/files/main-publication/1-(ons-cleared)-Publication%20on%20SSAF-signed_0.pdf",
    publisher: "Philippine Statistics Authority",
    date: "2023",
    sourceType: "primary" as const,
  },
  {
    title: "Selected Statistics on Agriculture and Fisheries 2022 (2017-2021), Table 6.3",
    url: "https://psa.gov.ph/system/files/main-publication/(ons-cleared)_SSAF%202022%20as%20of%2030082022_ONS-signed.pdf",
    publisher: "Philippine Statistics Authority",
    date: "2022",
    sourceType: "primary" as const,
  },
  {
    title: "Selected Statistics on Agriculture 2020 (2015-2019), Table 6.3",
    url: "https://psa.gov.ph/system/files/main-publication/2_SSA2020_final_signed.pdf",
    publisher: "Philippine Statistics Authority",
    date: "2020",
    sourceType: "primary" as const,
  },
];

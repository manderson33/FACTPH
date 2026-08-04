export interface RicePriceYear {
  year: number;
  pricePerKg: number;
}

// Source: PSA retail price monitoring for well-milled rice, as reported in PSA
// price situationer releases and Philippine business press (BusinessWorld,
// citing PSA). This is not an unbroken annual series — PSA's price-situationer
// archive for 2011-2017 and 2021-2022 could not be retrieved from accessible
// sources as of this writing, so those years are left out rather than
// interpolated. The years available still capture the two defining events in
// recent rice-price policy:
export const ricePriceByYear: RicePriceYear[] = [
  { year: 2018, pricePerKg: 44.12 },
  { year: 2019, pricePerKg: 43.10 },
  { year: 2020, pricePerKg: 41.83 },
  { year: 2023, pricePerKg: 44.54 },
  { year: 2024, pricePerKg: 55.94 },
];

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
      "Rice Tariffication Law (signed March 2019) replaced import quotas with tariffs, opening rice imports and pushing retail prices down through 2020.",
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
    title: "Well-milled rice prices average P56.35 per kilogram",
    url: "https://www.bworldonline.com/economy/2024/07/02/605704/well-milled-rice-prices-average-p56-35-per-kilogram/",
    publisher: "BusinessWorld, citing Philippine Statistics Authority",
    date: "July 2024",
    sourceType: "primary" as const,
  },
];

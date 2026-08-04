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
  purchasingPowerIndex: number;
  admin: Admin;
}

// Inflation rate: World Bank, "Inflation, consumer prices (annual %)" for the
// Philippines — ultimately sourced from PSA's Consumer Price Index. Matches PSA's
// own reported full-year averages for 2020-2025 (independently cross-checked).
//
// Purchasing Power Index is NOT a PSA figure copied as-is — PSA publishes its own
// Purchasing Power of the Peso series on a 2018=100 base, starting January 2018,
// which we could not retrieve (PSA's site blocked automated access). Instead this
// column is FactPH's own computation: chain-link each year's inflation rate onto
// a 2011=100 CPI index, then take the reciprocal (100 / index * 100). It answers
// "what is ₱100 from 2011 worth today," which is the same purchasing-power
// concept on a different, fully transparent base year.
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

function buildInflationSeries(): InflationYear[] {
  let cpi = 100;
  return inflationRates.map(({ year, inflationPct }, i) => {
    if (i > 0) cpi = cpi * (1 + inflationPct / 100);
    return {
      year,
      inflationPct,
      purchasingPowerIndex: Math.round((100 / cpi) * 100 * 100) / 100,
      admin: adminForYear(year),
    };
  });
}

export const inflationByYear: InflationYear[] = buildInflationSeries();

export const inflationSources = [
  {
    title: "Inflation, consumer prices (annual %) — Philippines",
    url: "https://data.worldbank.org/indicator/FP.CPI.TOTL.ZG?locations=PH",
    publisher: "World Bank, from PSA Consumer Price Index data",
    date: "2025",
    sourceType: "primary" as const,
  },
];

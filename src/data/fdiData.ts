import { adminColors, adminLabels, type Admin } from "./costOfLivingData";

export { adminColors, adminLabels };
export type { Admin };

export interface FdiYear {
  year: number;
  fdiUsdMillion: number;
  admin: Admin;
}

function adminForYear(year: number): Admin {
  if (year <= 2015) return "aquino";
  if (year <= 2021) return "duterte";
  return "marcos";
}

// Source: Bangko Sentral ng Pilipinas (BSP) — Net Foreign Direct Investment
// Flows (BPM6 concept): nonresidents' equity capital (placements less
// withdrawals) + reinvestment of earnings + net debt instruments. Figures
// are BSP's own published annual net FDI totals in USD million, as
// reflected in the World Bank's BX.KLT.DINV.CD.WD series — cross-checked
// against BSP's own DTI-BPRI-prepared statistical data pack (July 2026
// release), which confirms 2024 ($9,398M) and 2025 ($7,791M) match
// exactly. Earlier news reports of "$8.93 billion" for 2024 were BSP's
// preliminary figure at the time and have since been revised upward by
// BSP itself — the figure below is the current, revised published total.
// No computation, estimation, or netting of any kind was performed by
// FactPH.
const fdiByYearRaw: { year: number; fdiUsdMillion: number }[] = [
  { year: 2010, fdiUsdMillion: 1070.387 },
  { year: 2011, fdiUsdMillion: 2007.151 },
  { year: 2012, fdiUsdMillion: 3215.415 },
  { year: 2013, fdiUsdMillion: 3737.372 },
  { year: 2014, fdiUsdMillion: 5739.574 },
  { year: 2015, fdiUsdMillion: 5639.156 },
  { year: 2016, fdiUsdMillion: 8279.548 },
  { year: 2017, fdiUsdMillion: 10256.442 },
  { year: 2018, fdiUsdMillion: 9948.599 },
  { year: 2019, fdiUsdMillion: 8671.366 },
  { year: 2020, fdiUsdMillion: 6822.133 },
  { year: 2021, fdiUsdMillion: 11983.363 },
  { year: 2022, fdiUsdMillion: 9492.235 },
  { year: 2023, fdiUsdMillion: 8925.128 },
  { year: 2024, fdiUsdMillion: 9398.327 },
  { year: 2025, fdiUsdMillion: 7791.345 },
];

export const fdiByYear: FdiYear[] = fdiByYearRaw.map(({ year, fdiUsdMillion }) => ({
  year,
  fdiUsdMillion,
  admin: adminForYear(year),
}));

export const fdiSources = [
  {
    title: "Foreign direct investment, net inflows (BoP, current US$) — Philippines",
    url: "https://data.worldbank.org/indicator/BX.KLT.DINV.CD.WD?locations=PH",
    publisher: "World Bank, from Bangko Sentral ng Pilipinas (BSP) balance-of-payments data",
    date: "2026",
    sourceType: "primary" as const,
  },
  {
    title: "Net Foreign Direct Investments (BPM6 Concept), January–April 2026",
    url: "https://dtiwebfiles.s3.ap-southeast-1.amazonaws.com/BPRI/Statistical%20Datapack%202026/July/As%20of%2031%20July/Net%20FDI.pdf",
    publisher: "Bureau of Policy Research and Innovation, DTI — Source: Bangko Sentral ng Pilipinas",
    date: "As of 14 July 2026",
    sourceType: "primary" as const,
  },
];

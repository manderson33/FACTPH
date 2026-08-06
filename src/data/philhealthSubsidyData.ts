import { adminColors, adminLabels, type Admin } from "./costOfLivingData";

export { adminColors, adminLabels };
export type { Admin };

export interface PhilHealthSubsidyYear {
  year: number;
  subsidyPhpBillion: number;
  admin: Admin;
}

function adminForYear(year: number): Admin {
  if (year <= 2015) return "aquino";
  if (year <= 2021) return "duterte";
  return "marcos";
}

// Source: Philippine Health Insurance Corporation (PhilHealth) — the
// national government subsidy recognized as premium contribution for
// indirect (indigent, senior citizen, sponsored) members, in PHP billion.
// These are literal published figures — no FactPH computation, netting,
// or estimation of any kind.
//
// 2018-2023 are PhilHealth's own "Premium for Indirect Contribution"
// figures from its audited 2023 Annual Report (the same table DOF used to
// justify the 89.9-billion excess-subsidy fund sweep in 2024). 2024-2025
// are PhilHealth's own "Indirect Contributors" premium-contribution
// figures from its Stats and Charts booklets for those years, the same
// underlying accounting concept reported through a different regular
// publication. 2025's near-zero figure independently confirms widely
// reported news coverage of PhilHealth receiving no national government
// subsidy that year.
//
// 2010-2017 are a genuine gap: PhilHealth's own budget/appropriation
// figures for that period are reported under different concepts (initial
// GAA appropriation, or the sin-tax-earmarked portion only) that are not
// directly comparable to the 2018-2025 "recognized premium contribution"
// series, so mixing them in would misrepresent the trend. They are left
// out rather than estimated.
const subsidyByYearRaw: { year: number; subsidyPhpBillion: number }[] = [
  { year: 2018, subsidyPhpBillion: 59.7 },
  { year: 2019, subsidyPhpBillion: 69.4 },
  { year: 2020, subsidyPhpBillion: 63.4 },
  { year: 2021, subsidyPhpBillion: 80.2 },
  { year: 2022, subsidyPhpBillion: 80.1 },
  { year: 2023, subsidyPhpBillion: 78.8 },
  { year: 2024, subsidyPhpBillion: 40.35 },
  { year: 2025, subsidyPhpBillion: 0.0056 },
];

export const philhealthSubsidyByYear: PhilHealthSubsidyYear[] = subsidyByYearRaw.map(
  ({ year, subsidyPhpBillion }) => ({
    year,
    subsidyPhpBillion,
    admin: adminForYear(year),
  })
);

export const philhealthSubsidySources = [
  {
    title: "2023 Annual Report — Note 34.1, \"Government Subsidy vs Utilization\" (2018-2023)",
    url: "https://www.philhealth.gov.ph/about_us/annual_report/AR2023.pdf",
    publisher: "Philippine Health Insurance Corporation",
    date: "2024",
    sourceType: "primary" as const,
  },
  {
    title: "Stats and Charts 2024 — Premium Contributions by Membership Category",
    url: "https://www.philhealth.gov.ph/about_us/statsncharts/SNC_2024_20250523_v1.3.pdf",
    publisher: "Philippine Health Insurance Corporation",
    date: "2025",
    sourceType: "primary" as const,
  },
  {
    title: "Stats and Charts 2025 — Premium Contributions by Membership Category",
    url: "https://www.philhealth.gov.ph/about_us/statsncharts/SNC_2025_20260623.pdf",
    publisher: "Philippine Health Insurance Corporation",
    date: "2026",
    sourceType: "primary" as const,
  },
];

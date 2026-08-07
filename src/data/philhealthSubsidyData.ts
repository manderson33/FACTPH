import { adminColors, adminLabels, type Admin } from "./costOfLivingData";

export { adminColors, adminLabels };
export type { Admin };

export interface PhilHealthSubsidyYear {
  year: number;
  subsidyPhpBillion: number;
  admin: Admin;
  sourceNote: string;
  confidence: "enacted" | "proposed";
}

function adminForYear(year: number): Admin {
  if (year <= 2015) return "aquino";
  if (year <= 2021) return "duterte";
  return "marcos";
}

// Source: Department of Budget and Management (DBM) General Appropriations
// Act (GAA) — the enacted law's total appropriation for PhilHealth/the
// National Health Insurance Program — cross-checked against PhilHealth's
// own audited financial statements and government-subsidy disclosures
// where available. These are literal published figures — no FactPH
// computation, netting, or estimation of any kind.
//
// 2010-2011: the subsidy was administered as an LGU counterpart fund
// under Allocations to Local Government Units (2010) and the Department
// of Health (2011) — before the NHIP budget was lodged directly under
// PhilHealth starting 2017 — so the figures for those two years cover a
// differently-structured but equivalent program.
// 2012-2016: PhilHealth's own audited financial statements and published
// "Government Subsidies" disclosures, which give the actual recognized
// subsidy amount for that year rather than what was merely appropriated.
// 2017-2021: retained from earlier research into DBM's "People's Budget"
// series; these are the Executive's PROPOSED budget figures, not
// independently re-confirmed against the enacted GAA text this round —
// flagged accordingly, since 2024's proposed figure (₱101.5B) turned out
// to differ substantially from what was actually enacted (₱61.5B).
// 2022-2024: the enacted GAA total, read directly from each year's GAA
// text (DBM's own Official Gazette volumes).
// 2025: the enacted amount is zero — Congress's bicameral conference
// committee cut PhilHealth's originally proposed ₱74.43B subsidy to zero
// in the final budget, independently confirmed by PhilHealth's own
// financial disclosures.
// 2026: the GAA FY 2026 text appropriates ₱129.782B in total for
// PhilHealth, but ₱60B of that is explicitly labeled "Additional
// Appropriation in Compliance with the Supreme Court Decision" — the
// Supreme Court ruled on Dec. 3, 2025 that the 2024 sweep of PhilHealth's
// reserves into the National Treasury was unconstitutional and ordered
// the remaining ₱60B balance returned to PhilHealth through the 2026
// GAA. That ₱60B is restitution of PhilHealth's own previously-seized
// money, not new government subsidy, so it is excluded here; the figure
// shown is the ₱69.782B that remains once it's subtracted.
const subsidyByYearRaw: {
  year: number;
  subsidyPhpBillion: number;
  sourceNote: string;
  confidence: "enacted" | "proposed";
}[] = [
  {
    year: 2010,
    subsidyPhpBillion: 5.17,
    sourceNote: "Premium Subsidy for Indigents under NHIP, GAA FY 2010 (Allocations to LGUs)",
    confidence: "enacted",
  },
  {
    year: 2011,
    subsidyPhpBillion: 3.5,
    sourceNote: "NHIP subsidy for indigents (₱3.0B) + informal sector workers (₱0.5B), GAA FY 2011 (DOH)",
    confidence: "enacted",
  },
  {
    year: 2012,
    subsidyPhpBillion: 14.274,
    sourceNote: "Total Premium Contributions – Sponsored Program, PhilHealth 2012 Audited Financial Statements",
    confidence: "enacted",
  },
  {
    year: 2013,
    subsidyPhpBillion: 16.899,
    sourceNote: "Total Premium Contributions – Sponsored Program, PhilHealth Annual Report 2013",
    confidence: "enacted",
  },
  {
    year: 2014,
    subsidyPhpBillion: 38.517,
    sourceNote: "\"Subsidies\" total (NHTS + special programs + sponsor counterpart), PhilHealth Annual Report 2014",
    confidence: "enacted",
  },
  {
    year: 2015,
    subsidyPhpBillion: 48.883,
    sourceNote: "PhilHealth's own published \"2015 Government Subsidies\" total",
    confidence: "enacted",
  },
  {
    year: 2016,
    subsidyPhpBillion: 50.176,
    sourceNote: "PhilHealth's own published \"2016 Government Subsidies\" total",
    confidence: "enacted",
  },
  {
    year: 2017,
    subsidyPhpBillion: 50.22,
    sourceNote: "Proposed budget figure (2017 People's Proposed Budget) — enacted GAA amount not independently re-confirmed",
    confidence: "proposed",
  },
  {
    year: 2018,
    subsidyPhpBillion: 57.0,
    sourceNote: "Proposed budget figure (2018 People's Proposed Budget) — enacted GAA amount not independently re-confirmed",
    confidence: "proposed",
  },
  {
    year: 2019,
    subsidyPhpBillion: 67.4,
    sourceNote: "Proposed budget figure (2019 People's Proposed Budget) — enacted GAA amount not independently re-confirmed",
    confidence: "proposed",
  },
  {
    year: 2020,
    subsidyPhpBillion: 67.4,
    sourceNote: "Proposed budget figure (2020 Budget at a Glance) — enacted GAA amount not independently re-confirmed",
    confidence: "proposed",
  },
  {
    year: 2021,
    subsidyPhpBillion: 71.4,
    sourceNote: "Proposed budget figure (Technical Notes on the 2021 Proposed Budget) — enacted GAA amount not independently re-confirmed",
    confidence: "proposed",
  },
  {
    year: 2022,
    subsidyPhpBillion: 79.991,
    sourceNote: "Total enacted appropriation, GAA FY 2022",
    confidence: "enacted",
  },
  {
    year: 2023,
    subsidyPhpBillion: 100.233,
    sourceNote: "Total enacted appropriation, GAA FY 2023",
    confidence: "enacted",
  },
  {
    year: 2024,
    subsidyPhpBillion: 61.515,
    sourceNote: "Total enacted appropriation, GAA FY 2024 (the ₱101.5B figure reported at proposal stage was not what was enacted)",
    confidence: "enacted",
  },
  {
    year: 2025,
    subsidyPhpBillion: 0,
    sourceNote: "Enacted amount — Congress cut the originally proposed ₱74.43B to zero in the final FY 2025 budget",
    confidence: "enacted",
  },
  {
    year: 2026,
    subsidyPhpBillion: 69.782,
    sourceNote: "Enacted GAA FY 2026 appropriation, excluding a separate ₱60B line that is court-ordered restitution, not new subsidy (see note below)",
    confidence: "enacted",
  },
];

export const philhealthSubsidyByYear: PhilHealthSubsidyYear[] = subsidyByYearRaw.map(
  ({ year, subsidyPhpBillion, sourceNote, confidence }) => ({
    year,
    subsidyPhpBillion,
    sourceNote,
    confidence,
    admin: adminForYear(year),
  })
);

export const philhealthSubsidySources = [
  {
    title: "GAA FY 2026, Volume I-B: Budgetary Support to Government Corporations, F.4 PhilHealth",
    url: "https://www.dbm.gov.ph/wp-content/uploads/GAA/GAA2026/VolumeIB/BSGC/F4.pdf",
    publisher: "Department of Budget and Management",
    date: "5 Jan. 2026",
    sourceType: "primary" as const,
  },
  {
    title: "Press Briefer, December 05, 2025 — ruling ordering the ₱60B PhilHealth fund return",
    url: "https://sc.judiciary.gov.ph/press-briefer-december-05-2025/",
    publisher: "Supreme Court of the Philippines",
    date: "5 Dec. 2025",
    sourceType: "primary" as const,
  },
  {
    title: "National Expenditure Program, FY 2025: Budgetary Support to Government Corporations",
    url: "https://www.dbm.gov.ph/wp-content/uploads/NEP2025/BSGC/E.pdf",
    publisher: "Department of Budget and Management",
    date: "2024",
    sourceType: "primary" as const,
  },
  {
    title: "GAA FY 2024: Budgetary Support to Government Corporations, PhilHealth",
    url: "https://www.dbm.gov.ph/wp-content/uploads/GAA/GAA2024/VolumeI/BSGC/E4.pdf",
    publisher: "Department of Budget and Management",
    date: "25 Dec. 2023",
    sourceType: "primary" as const,
  },
  {
    title: "GAA FY 2023: Budgetary Support to Government Corporations",
    url: "https://www.dbm.gov.ph/wp-content/uploads/GAA/GAA2023/VolumeI/BSGC/D.pdf",
    publisher: "Department of Budget and Management",
    date: "2022",
    sourceType: "primary" as const,
  },
  {
    title: "GAA FY 2022, Volume I: Budgetary Support to Government Corporations",
    url: "https://www.dbm.gov.ph/wp-content/uploads/GAA/GAA2022/VolumeI/BSGC/BSGC.pdf",
    publisher: "Department of Budget and Management",
    date: "3 Jan. 2022",
    sourceType: "primary" as const,
  },
  {
    title: "2016 Government Subsidies",
    url: "https://www.philhealth.gov.ph/about_us/transparency/accomplishment_report/PHIC_2016_Gov_Subsidies.pdf",
    publisher: "Philippine Health Insurance Corporation",
    date: "2016",
    sourceType: "primary" as const,
  },
  {
    title: "2015 Government Subsidies",
    url: "https://www.philhealth.gov.ph/about_us/transparency/accomplishment_report/PhilHealth_2015_GovSubsidies.pdf",
    publisher: "Philippine Health Insurance Corporation",
    date: "2015",
    sourceType: "primary" as const,
  },
  {
    title: "Annual Report 2014",
    url: "https://www.philhealth.gov.ph/about_us/annual_report/ar2014.pdf",
    publisher: "Philippine Health Insurance Corporation",
    date: "2014",
    sourceType: "primary" as const,
  },
  {
    title: "Annual Report 2013",
    url: "https://www.philhealth.gov.ph/about_us/annual_report/ar2013.pdf",
    publisher: "Philippine Health Insurance Corporation",
    date: "2013",
    sourceType: "primary" as const,
  },
  {
    title: "Annual Audit Report on PhilHealth for the Year Ended December 31, 2012",
    url: "https://www.philhealth.gov.ph/about_us/transparency/accomplishment_report/PHIC_FS_2012.pdf",
    publisher: "Philippine Health Insurance Corporation / Commission on Audit",
    date: "2012",
    sourceType: "primary" as const,
  },
  {
    title: "GAA FY 2011: Department of Health",
    url: "https://www.dbm.gov.ph/wp-content/uploads/GAA/GAA/GAA2011/DOH/A.pdf",
    publisher: "Department of Budget and Management",
    date: "2011",
    sourceType: "primary" as const,
  },
  {
    title: "GAA FY 2010: Allocations to Local Government Units — Premium Subsidy for Indigents under NHIP",
    url: "https://www.dbm.gov.ph/wp-content/uploads/GAA/GAA2010/ALGU/ALGU.pdf",
    publisher: "Department of Budget and Management",
    date: "2010",
    sourceType: "primary" as const,
  },
  {
    title: "PhilHealth has zero subsidy for 2025 due to P600B reserve funds",
    url: "https://newsinfo.inquirer.net/2014621/philhealth-has-zero-subsidy-for-2025-due-to-p600b-reserve-funds",
    publisher: "Philippine Daily Inquirer, reporting the bicameral conference committee's budget decision",
    date: "December 2024",
    sourceType: "primary" as const,
  },
];

import { adminColors, adminLabels, type Admin } from "./costOfLivingData";

export { adminColors, adminLabels };
export type { Admin };

export interface NationalDebtYear {
  year: number;
  label: string;
  debtPhpTrillion: number;
  admin: Admin;
  /** True for a mid-year snapshot rather than a completed calendar year-end figure. */
  partial: boolean;
}

// The president is inaugurated June 30, so every full calendar year in this
// series has a single administration in office at its Dec 31 snapshot date
// (the moment BTr's year-end debt figure is measured) — Aquino III was in
// office at every Dec 31 from 2010 through 2015, Duterte from 2016 through
// 2021, and Marcos Jr. from 2022 onward. That Dec-31-in-office test, not a
// simple "which admin held the seat longer that year" split, is what fixes
// these cutoffs, including for the two transition years (2016 and 2022).
function adminForYear(year: number): Admin {
  if (year <= 2015) return "aquino";
  if (year <= 2021) return "duterte";
  return "marcos";
}

// Source: Bureau of the Treasury (BTr) — National Government (NG) total
// outstanding debt, i.e. NG's own direct debt (domestic + external),
// excluding NG-guaranteed obligations of GOCCs, which BTr reports as a
// separate contingent-liability line. This is the same "total outstanding
// debt" figure BTr headlines in every monthly press release. These are
// literal published figures — no FactPH computation, netting, or
// estimation of any kind.
// 2010-2021: the "Actual" (non-guaranteed) row of BTr's own "National
// Government Outstanding Debt Stock, 1986-2021" annual series.
// 2022-2025: BTr's December NG Debt Press Release for each year, which
// states the year-end "TOTAL" (already excluding guaranteed debt) directly.
// 2025's figure (17.70781T) was independently re-confirmed against the
// "2025" column of the June 2026 press release's own appendix table — an
// exact match across two separately-published BTr documents.
// 2026: not a completed calendar year yet. The chart shows the latest
// available monthly snapshot instead of a year-end figure — end-June 2026,
// per BTr's most recent NG Debt Press Release as of this data's writing —
// clearly flagged as partial rather than presented as a year-end total.
const debtByYearRaw: {
  year: number;
  label: string;
  debtPhpTrillion: number;
  partial: boolean;
}[] = [
  { year: 2010, label: "2010", debtPhpTrillion: 4.718171, partial: false },
  { year: 2011, label: "2011", debtPhpTrillion: 4.951188, partial: false },
  { year: 2012, label: "2012", debtPhpTrillion: 5.437104, partial: false },
  { year: 2013, label: "2013", debtPhpTrillion: 5.681153, partial: false },
  { year: 2014, label: "2014", debtPhpTrillion: 5.735242, partial: false },
  { year: 2015, label: "2015", debtPhpTrillion: 5.954537, partial: false },
  { year: 2016, label: "2016", debtPhpTrillion: 6.090262, partial: false },
  { year: 2017, label: "2017", debtPhpTrillion: 6.652430, partial: false },
  { year: 2018, label: "2018", debtPhpTrillion: 7.292500, partial: false },
  { year: 2019, label: "2019", debtPhpTrillion: 7.731290, partial: false },
  { year: 2020, label: "2020", debtPhpTrillion: 9.795006, partial: false },
  { year: 2021, label: "2021", debtPhpTrillion: 11.728549, partial: false },
  { year: 2022, label: "2022", debtPhpTrillion: 13.41886, partial: false },
  { year: 2023, label: "2023", debtPhpTrillion: 14.61627, partial: false },
  { year: 2024, label: "2024", debtPhpTrillion: 16.0513, partial: false },
  { year: 2025, label: "2025", debtPhpTrillion: 17.70781, partial: false },
  { year: 2026, label: "2026 (Jun)", debtPhpTrillion: 19.06569, partial: true },
];

export interface InaugurationBoundary {
  admin: Admin;
  label: string;
  debtPhpTrillion: number;
}

// Debt at each administration's actual inauguration date (June 30) — used
// only for the "debt added since taking office" cards below the chart, not
// for the chart itself (which shows Dec 31 year-end snapshots, colored by
// whoever held office that Dec 31, per adminForYear above). Those two
// things measure different questions: the chart's Dec-31 boundary
// correctly shows what the debt level *was* on any given year-end: the
// figure that day is simply true, whoever colored the bar. But "debt added
// since taking office" is trying to isolate what an administration itself
// borrowed — and for that, a Dec-31 boundary silently attributes roughly
// six months of the outgoing administration's own borrowing (Jan 1-Jun 29
// of the transition year) to the incoming one, since the president isn't
// inaugurated until June 30. These four BTr press-release figures, each at
// an actual inauguration date, fix that:
export const inaugurationBoundaries: InaugurationBoundary[] = [
  { admin: "aquino", label: "Jun 2010", debtPhpTrillion: 4.5824 },
  { admin: "duterte", label: "Jun 2016", debtPhpTrillion: 5.947999 },
  { admin: "marcos", label: "Jun 2022", debtPhpTrillion: 12.791829 },
];

export const nationalDebtByYear: NationalDebtYear[] = debtByYearRaw.map(
  ({ year, label, debtPhpTrillion, partial }) => ({
    year,
    label,
    debtPhpTrillion,
    partial,
    admin: adminForYear(year),
  })
);

export const nationalDebtSources = [
  {
    title: "National Government Debt Recorded at P12.79 trillion as of end-June 2022",
    url: "https://www.treasury.gov.ph/wp-content/uploads/2022/08/NG-Debt-Press-Release-June-2022_ed.pdf",
    publisher: "Bureau of the Treasury",
    date: "5 Aug. 2022",
  },
  {
    title: "National Government Debt Recorded at P5,948 Billion as of end-June 2016",
    url: "https://www.treasury.gov.ph/wp-content/uploads/2017/10/National-Government-Debt-Recorded-at-P5948-Billion-as-of-end-June-2016.pdf",
    publisher: "Bureau of the Treasury",
    date: "2 Aug. 2016",
  },
  {
    title: "National Government Debt Increased to P4.582 Trillion as of June 2010",
    url: "https://www.treasury.gov.ph/wp-content/uploads/2017/10/National-Government-Debt-Increased-to-P4.582-Trillion-as-of-June-2010.pdf",
    publisher: "Bureau of the Treasury",
    date: "8 Sep. 2010",
  },
  {
    title: "NG Debt Increases to P19.07 Trillion as of End-June 2026",
    url: "https://www.treasury.gov.ph/wp-content/uploads/2026/07/NG-Debt-Press-Release-June-2026.pdf",
    publisher: "Bureau of the Treasury",
    date: "30 Jul. 2026",
  },
  {
    title: "NG Outstanding Debt Rises to P17.71 Trillion at Year-End 2025",
    url: "https://www.treasury.gov.ph/wp-content/uploads/2026/02/NG-Debt-Press-Release-December-2025-2.pdf",
    publisher: "Bureau of the Treasury",
    date: "3 Feb. 2026",
  },
  {
    title: "National Government Debt Recorded at P14.62 Trillion as of End-2023",
    url: "https://www.treasury.gov.ph/wp-content/uploads/2024/01/NG-Debt-Press-Release-December-2023.pdf",
    publisher: "Bureau of the Treasury",
    date: "31 Jan. 2024",
  },
  {
    title: "National Government Outstanding Debt Stock, 1986–2021",
    url: "https://www.treasury.gov.ph/wp-content/uploads/2022/02/Annual-Debt-1986-2021_web.pdf",
    publisher: "Bureau of the Treasury",
    date: "2022",
  },
];

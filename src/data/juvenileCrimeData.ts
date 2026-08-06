import { adminColors, adminLabels, type Admin } from "./costOfLivingData";

export { adminColors, adminLabels };
export type { Admin };

export interface JuvenileCrimeYear {
  year: number;
  cases: number;
  admin: Admin;
}

function adminForYear(year: number): Admin {
  if (year <= 2015) return "aquino";
  if (year <= 2021) return "duterte";
  return "marcos";
}

// Source: Philippine National Police (PNP) — recorded cases of Children in
// Conflict with the Law (CICL), as presented by the Juvenile Justice and
// Welfare Council (JJWC). PNP collects this data through its Crime
// Information Reporting and Analysis System (PNP-CIRAS); JJWC's wider CICL
// count also draws on the Bureau of Jail Management and Penology (BJMP)
// and Local Social Welfare and Development Offices (LSWDOs) for children
// already in detention or under local intervention.
//
// This full 2016-2025 series was presented on the record by JJWC
// Executive Director Tricia Clare Oco at a public forum at the DSWD main
// office, explicitly described as "data from the Philippine National
// Police," and reported by the Philippine Daily Inquirer. It replaces an
// earlier, shorter FactPH chart that combined PNP-only figures (2012-2018,
// from an ASEAN Intergovernmental Commission on Human Rights report) with
// JJWC's separately-tracked consolidated count (2019 onward) — those two
// series use different methodologies and are not directly comparable
// (JJWC's own consolidated 2017 figure, for example, is nearly double the
// PNP-only figure for that year). Using this single, continuously
// reported series avoids blending incompatible methodologies into one
// misleading trend line. 2011 and earlier, and any partial-year 2026
// figures, are not included since no equivalent single-source annual
// total was presented for those periods.
const cicByYearRaw: { year: number; cases: number }[] = [
  { year: 2016, cases: 24683 },
  { year: 2017, cases: 26850 },
  { year: 2018, cases: 23767 },
  { year: 2019, cases: 19557 },
  { year: 2020, cases: 15897 },
  { year: 2021, cases: 11696 },
  { year: 2022, cases: 6185 },
  { year: 2023, cases: 10035 },
  { year: 2024, cases: 4383 },
  { year: 2025, cases: 8654 },
];

export const juvenileCrimeByYear: JuvenileCrimeYear[] = cicByYearRaw.map(({ year, cases }) => ({
  year,
  cases,
  admin: adminForYear(year),
}));

export const juvenileCrimeSources = [
  {
    title: "PNP data show general decline in number of child offenders – JJWC",
    url: "https://newsinfo.inquirer.net/2253060/govt-civil-society-groups-split-on-reviewing-juvenile-justice-law",
    publisher: "Philippine Daily Inquirer, reporting JJWC Executive Director Tricia Clare Oco's presentation of PNP data",
    date: "June 26, 2026",
    sourceType: "primary" as const,
  },
];

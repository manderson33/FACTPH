export interface AdminHousingData {
  admin: string;
  shortName: string;
  colorVar: string;
  snapshotDate: string;
  target: number;
  completed: number;
  unoccupied: number;
  backlog: number;
  occupancyRate: number;
}

export const yolandaHousingData: AdminHousingData[] = [
  {
    admin: "Aquino III",
    shortName: "Aquino",
    colorVar: "#F6C915",
    snapshotDate: "Dec 31, 2016",
    target: 205128,
    completed: 42499,
    unoccupied: 31024,
    backlog: 162629,
    occupancyRate: 27,
  },
  {
    admin: "Duterte",
    shortName: "Duterte",
    colorVar: "#34B36A",
    snapshotDate: "Dec 31, 2022",
    target: 210317,
    completed: 166034,
    unoccupied: 51538,
    backlog: 44283,
    occupancyRate: 69,
  },
  {
    admin: "Marcos Jr.",
    shortName: "Marcos",
    colorVar: "#E8456B",
    snapshotDate: "Dec 31, 2023",
    target: 202036,
    completed: 171230,
    unoccupied: 32845,
    backlog: 30806,
    occupancyRate: 81,
  },
];

export interface Source {
  title: string;
  publisher: string;
  date: string;
  url: string;
  sourceType: "primary" | "secondary";
  note?: string;
}

export const yolandaHousingSources: Source[] = [
  {
    title: "National Housing Authority Annual Audit Report 2016",
    publisher: "Commission on Audit (COA)",
    date: "July 2, 2017",
    url: "https://www.coa.gov.ph/wpfd_file/national-housing-authority-annual-audit-report-2016/",
    sourceType: "primary",
    note: "Direct COA PDF. Basis for the Aquino-era snapshot: 205,128 target, 42,499 completed, 27% occupancy.",
  },
  {
    title: "National Housing Authority Annual Audit Report 2022",
    publisher: "Commission on Audit (COA)",
    date: "July 12, 2023",
    url: "https://www.coa.gov.ph/wpfd_file/national-housing-authority-annual-audit-report-2022/",
    sourceType: "primary",
    note: "Direct COA PDF. Basis for the Duterte-era snapshot: 166,034 completed, 51,538 (31%) unoccupied.",
  },
  {
    title: "NHA Needs to Hasten Strategies to Achieve Target Production, Sales and Disposition, and Collection (2015–2022 Performance Audit)",
    publisher: "Commission on Audit (COA)",
    date: "November 21, 2023",
    url: "https://www.coa.gov.ph/national-housing-authority-housing-programs/",
    sourceType: "primary",
    note: "Direct COA PDF. Broader performance audit covering all NHA housing programs, not just Yolanda — ₱65.43B budgeted, 341,407 units completed 2015–2022.",
  },
  {
    title: "Senate Bill seeking to amend RA — cites 2023 COA Annual Audit Report on NHA",
    publisher: "Senate of the Philippines",
    date: "2025",
    url: "https://legacy.senate.gov.ph/lisdata/4755843565!.pdf",
    sourceType: "primary",
    note: "Directly quotes COA's 2023 NHA Annual Audit Report: 171,230 housing units (84.75% of the revised 202,036 target) completed after a decade of YPHP implementation.",
  },
  {
    title: "COA Annual Audit Reports Archive — National Government Agencies",
    publisher: "Commission on Audit (COA)",
    date: "Ongoing",
    url: "https://www.coa.gov.ph/reports/annual-audit-reports/aar-ngs/",
    sourceType: "primary",
    note: "Official COA archive — navigate here for the full 2023 NHA Annual Audit Report and all other yearly reports.",
  },
  {
    title: "FACT CHECK: Panelo inaccurately claims that 160,000 houses were built for Yolanda victims under Aquino admin",
    publisher: "VERA Files",
    date: "June 18, 2024",
    url: "https://verafiles.org/articles/fact-check-panelo-inaccurately-claims-that-160000-houses-were-built-for-yolanda-victims-under-aquino-admin",
    sourceType: "secondary",
    note: "Independent journalistic verification cross-checking the Aquino and Duterte-era COA figures.",
  },
];
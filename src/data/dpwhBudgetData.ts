import { adminColors, adminLabels, type Admin } from "./costOfLivingData";

export { adminColors, adminLabels };
export type { Admin };

export interface DPWHBudgetYear {
  year: number;
  budgetPhpBillion: number;
  admin: Admin;
}

function adminForYear(year: number): Admin {
  if (year <= 2015) return "aquino";
  if (year <= 2021) return "duterte";
  return "marcos";
}

// Source: the enacted General Appropriations Act (GAA) for each fiscal year —
// the "TOTAL NEW APPROPRIATIONS" grand total for the Department of Public
// Works and Highways, read directly from each year's GAA text as published
// by the Official Gazette / Department of Budget and Management. This is
// DPWH's whole enacted budget (Office of the Secretary, which in every GAA
// covers the full department — there is no separate bureau-level line), not
// the proposed National Expenditure Program figure and not a FactPH
// computation of any kind.
const budgetByYearRaw: { year: number; budgetPhpBillion: number }[] = [
  { year: 2010, budgetPhpBillion: 126.930988 },
  { year: 2011, budgetPhpBillion: 100.826083 },
  { year: 2012, budgetPhpBillion: 109.833405 },
  { year: 2013, budgetPhpBillion: 155.517533 },
  { year: 2014, budgetPhpBillion: 206.634047 },
  { year: 2015, budgetPhpBillion: 290.470888 },
  { year: 2016, budgetPhpBillion: 384.287164 },
  { year: 2017, budgetPhpBillion: 454.721013 },
  { year: 2018, budgetPhpBillion: 637.864483 },
  { year: 2019, budgetPhpBillion: 549.390514 },
  { year: 2020, budgetPhpBillion: 580.886011 },
  { year: 2021, budgetPhpBillion: 694.822718 },
  { year: 2022, budgetPhpBillion: 785.725522 },
  { year: 2023, budgetPhpBillion: 893.121040 },
  { year: 2024, budgetPhpBillion: 996.791684 },
  { year: 2025, budgetPhpBillion: 1113.764447 },
  { year: 2026, budgetPhpBillion: 529.595195 },
];

export const dpwhBudgetByYear: DPWHBudgetYear[] = budgetByYearRaw.map(
  ({ year, budgetPhpBillion }) => ({
    year,
    budgetPhpBillion,
    admin: adminForYear(year),
  })
);

export const dpwhBudgetSources = [
  {
    title: "GAA FY 2026, Volume I-B: Department of Public Works and Highways",
    url: "https://www.dbm.gov.ph/wp-content/uploads/GAA/GAA2026/VolumeIB/DPWH/DPWH.pdf",
    publisher: "Department of Budget and Management",
    date: "5 Jan. 2026",
  },
  {
    title: "GAA FY 2025, Volume I-B: Department of Public Works and Highways",
    url: "https://www.dbm.gov.ph/wp-content/uploads/GAA/GAA2025/VolumeIB/DPWH/DPWH.pdf",
    publisher: "Department of Budget and Management",
    date: "6 Jan. 2025",
  },
  {
    title: "GAA FY 2024, Volume I: Department of Public Works and Highways",
    url: "https://www.dbm.gov.ph/wp-content/uploads/GAA/GAA2024/VolumeI/DPWH/DPWH.pdf",
    publisher: "Department of Budget and Management",
    date: "25 Dec. 2023",
  },
  {
    title: "GAA FY 2023, Volume I: Department of Public Works and Highways",
    url: "https://www.dbm.gov.ph/wp-content/uploads/GAA/GAA2023/VolumeI/DPWH/DPWH.pdf",
    publisher: "Department of Budget and Management",
    date: "2022",
  },
  {
    title: "GAA FY 2022, Volume I: Department of Public Works and Highways",
    url: "https://www.dbm.gov.ph/wp-content/uploads/GAA/GAA2022/VolumeI/DPWH/DPWH.pdf",
    publisher: "Department of Budget and Management",
    date: "3 Jan. 2022",
  },
  {
    title: "GAA FY 2021, Department of Public Works and Highways",
    url: "https://www.dbm.gov.ph/wp-content/uploads/GAA/GAA2021/TechGAA2021/DPWH/DPWH.pdf",
    publisher: "Department of Budget and Management",
    date: "2021",
  },
  {
    title: "GAA FY 2020, Volume I: Department of Public Works and Highways",
    url: "https://www.dbm.gov.ph/wp-content/uploads/GAA/GAA2020/VolumeI/DPWH/DPWH.pdf",
    publisher: "Department of Budget and Management",
    date: "6 Jan. 2020",
  },
  {
    title: "GAA FY 2019, Volume I: Department of Public Works and Highways",
    url: "https://www.dbm.gov.ph/wp-content/uploads/GAA/GAA2019/VolumeI/DPWH/DPWH.pdf",
    publisher: "Department of Budget and Management",
    date: "29 Apr. 2019",
  },
  {
    title: "GAA FY 2018, Volume I: Department of Public Works and Highways",
    url: "https://www.dbm.gov.ph/wp-content/uploads/GAA/GAA2018/VolumeI/DPWH/DPWH.pdf",
    publisher: "Department of Budget and Management",
    date: "29 Dec. 2017",
  },
  {
    title: "GAA FY 2017, Volume I: Department of Public Works and Highways",
    url: "https://www.dbm.gov.ph/wp-content/uploads/GAA/GAA2017/VolumeI/DPWH/DPWH.pdf",
    publisher: "Department of Budget and Management",
    date: "29 Dec. 2016",
  },
  {
    title: "GAA FY 2016, Department of Public Works and Highways (UACS edition)",
    url: "https://www.dbm.gov.ph/wp-content/uploads/GAA/GAA2016/UACS/DPWH.pdf",
    publisher: "Department of Budget and Management",
    date: "29 Dec. 2015",
  },
  {
    title: "GAA FY 2015, Volume I (with UACS): Department of Public Works and Highways",
    url: "https://www.dbm.gov.ph/wp-content/uploads/GAA/GAA2015/GAA%202015%20Volume%201%20with%20UACS/DPWH.pdf",
    publisher: "Department of Budget and Management",
    date: "25 Dec. 2014",
  },
  {
    title: "GAA FY 2014, Department of Public Works and Highways",
    url: "https://www.dbm.gov.ph/wp-content/uploads/GAA/Archived/GAA2014.zip",
    publisher: "Department of Budget and Management",
    date: "27 Dec. 2013",
  },
  {
    title: "GAA FY 2013, Department of Public Works and Highways",
    url: "https://www.dbm.gov.ph/wp-content/uploads/GAA/Archived/GAA2013.zip",
    publisher: "Department of Budget and Management",
    date: "28 Dec. 2012",
  },
  {
    title: "GAA FY 2012, Department of Public Works and Highways",
    url: "https://www.dbm.gov.ph/wp-content/uploads/GAA/Archived/GAA2012.zip",
    publisher: "Department of Budget and Management",
    date: "2011",
  },
  {
    title: "GAA FY 2011, Department of Public Works and Highways",
    url: "https://www.dbm.gov.ph/wp-content/uploads/GAA/Archived/GAA2011.zip",
    publisher: "Department of Budget and Management",
    date: "2010",
  },
  {
    title: "GAA FY 2010, Department of Public Works and Highways",
    url: "https://www.dbm.gov.ph/wp-content/uploads/GAA/Archived/gaa2010.zip",
    publisher: "Department of Budget and Management",
    date: "2010",
  },
];

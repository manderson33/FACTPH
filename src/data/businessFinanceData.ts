export interface MsmeLendingYear {
  year: number;
  loansBillionPHP: number;
  shareOfTotalLoansPct: number | null;
}

// Source: Bangko Sentral ng Pilipinas (BSP), bank compliance data on lending to
// micro, small and medium enterprises (MSMEs), as reported in BSP's annual
// disclosures and covered in Philippine business press (Philstar, BusinessWorld,
// BusinessMirror). The mandatory allocation under the Magna Carta for MSMEs
// (RA 9501) is 8% for micro/small and 2% for medium enterprises — a combined
// 10% target that the banking system has not met in any of these years. This
// series starts at 2020: BSP's consolidated total-MSME-lending figure isn't
// reliably available from accessible sources for earlier years (older coverage
// tends to report only a "reserve-requirement compliance" subset, a different
// and much smaller number, not the full lending total used here).
export const msmeLendingByYear: MsmeLendingYear[] = [
  { year: 2020, loansBillionPHP: 480.5, shareOfTotalLoansPct: 4.9 },
  { year: 2021, loansBillionPHP: 463.1, shareOfTotalLoansPct: 4.6 },
  { year: 2022, loansBillionPHP: 493.5, shareOfTotalLoansPct: 4.3 },
  { year: 2023, loansBillionPHP: 503.0, shareOfTotalLoansPct: 4.1 },
  { year: 2024, loansBillionPHP: 546.2, shareOfTotalLoansPct: null },
  { year: 2025, loansBillionPHP: 574.8, shareOfTotalLoansPct: 4.73 },
];

export const mandatoryAllocationPct = 10;

export const businessFinanceSources = [
  {
    title: "Banks' loans to MSMEs rise to P536 billion (end-Sept. 2025); full-year update to P574.8 billion",
    url: "https://www.philstar.com/business/2025/12/10/2493084/banks-loans-msmes-rise-p536-billion",
    publisher: "Philstar.com, citing Bangko Sentral ng Pilipinas",
    date: "December 2025",
    sourceType: "primary" as const,
  },
  {
    title: "MSME lending slips to P463.13 billion in 2021",
    url: "https://www.philstar.com/business/2022/03/10/2166120/msme-lending-slips-p46313-billion-2021",
    publisher: "Philstar.com, citing Bangko Sentral ng Pilipinas",
    date: "March 2022",
    sourceType: "primary" as const,
  },
  {
    title: "MSMEs underfunded as bank loans rise (4.73% of P12.143T total loan portfolio, end-2025)",
    url: "https://businessmirror.com.ph/2026/03/03/msmes-underfunded-as-bank-loans-rise/",
    publisher: "BusinessMirror, citing Bangko Sentral ng Pilipinas",
    date: "March 2026",
    sourceType: "primary" as const,
  },
];

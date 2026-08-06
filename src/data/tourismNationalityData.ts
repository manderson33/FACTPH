export interface NationalityArrivals {
  country: string;
  arrivals: number;
  sharePercent: number;
}

// Source: Bureau of Policy Research and Innovation (BPRI), Department of
// Trade and Industry — "Tourist Arrivals to PH, 2024-2025" statistical data
// pack, full-year 2025 (Jan-Dec) column, ranked by full-year 2025
// performance. Figures are by country of residence (DTI/DOT's own
// classification, which can include Philippine passport holders
// permanently residing abroad) and include the "Others" catch-all category
// exactly as published. These are literal published counts and percentage
// shares — no FactPH computation of any kind. Top 10 + Others sums exactly
// to DTI's own published total of 5,865,319, confirming the figures are
// transcribed correctly.
export const nationalityArrivals2025: NationalityArrivals[] = [
  { country: "South Korea", arrivals: 1251581, sharePercent: 21.34 },
  { country: "United States", arrivals: 1126499, sharePercent: 19.21 },
  { country: "Japan", arrivals: 502546, sharePercent: 8.57 },
  { country: "Australia", arrivals: 346412, sharePercent: 5.91 },
  { country: "Canada", arrivals: 313027, sharePercent: 5.34 },
  { country: "China", arrivals: 267660, sharePercent: 4.56 },
  { country: "Taiwan", arrivals: 203599, sharePercent: 3.47 },
  { country: "Singapore", arrivals: 198461, sharePercent: 3.38 },
  { country: "United Kingdom", arrivals: 193999, sharePercent: 3.31 },
  { country: "Malaysia", arrivals: 100603, sharePercent: 1.72 },
  { country: "Others", arrivals: 1360932, sharePercent: 23.20 },
];

export const nationalityArrivalsTotal2025 = 5865319;

export const nationalitySources = [
  {
    title: "Tourist Arrivals to PH, 2024–2025 (full-year 2025)",
    url: "https://dtiwebfiles.s3.ap-southeast-1.amazonaws.com/BPRI/Statistical%20Datapack%202026/February/As%20of%20February%2016/Tourist%20Arrivals.pdf",
    publisher: "Bureau of Policy Research and Innovation, Department of Trade and Industry",
    date: "As of 29 January 2026",
    sourceType: "primary" as const,
  },
];

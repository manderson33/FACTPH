export interface ConfidenceYear {
  year: number;
  businessCI: number;
  consumerCI: number;
}

// Source: Bangko Sentral ng Pilipinas (BSP) — Business Expectations Survey (BES)
// and Consumer Expectations Survey (CES). Each value is the annual average of the
// current-quarter overall Confidence Index (CI), non-seasonally adjusted, across
// that year's available quarterly surveys. CI is a diffusion index: percent of
// respondents answering positively minus percent answering negatively, so 0 is
// neutral — positive means optimists outnumber pessimists. 2020's average
// excludes Q2 2020 (BES) since that survey round was cancelled during the
// nationwide COVID-19 community quarantine. Extracted directly from BSP's
// published historical BES/CES data files (BES.xls, CES.xlsx).
export const confidenceByYear: ConfidenceYear[] = [
  { year: 2011, businessCI: 37.6, consumerCI: -21.6 },
  { year: 2012, businessCI: 44.3, consumerCI: -14.5 },
  { year: 2013, businessCI: 47.9, consumerCI: -11.5 },
  { year: 2014, businessCI: 42.8, consumerCI: -21.1 },
  { year: 2015, businessCI: 46.8, consumerCI: -11.5 },
  { year: 2016, businessCI: 43.9, consumerCI: -0.1 },
  { year: 2017, businessCI: 40.9, consumerCI: 10.4 },
  { year: 2018, businessCI: 34.0, consumerCI: -6.0 },
  { year: 2019, businessCI: 38.3, consumerCI: 1.0 },
  { year: 2020, businessCI: 9.2, consumerCI: -33.7 },
  { year: 2021, businessCI: 13.2, consumerCI: -27.2 },
  { year: 2022, businessCI: 29.6, consumerCI: -11.9 },
  { year: 2023, businessCI: 36.6, consumerCI: -12.4 },
  { year: 2024, businessCI: 35.7, consumerCI: -14.5 },
  { year: 2025, businessCI: 28.2, consumerCI: -14.7 },
];

export const confidenceSources = [
  {
    title: "Business Expectations Survey Report, Q4 2025 (and historical BES data series)",
    url: "https://www.bsp.gov.ph/SitePages/MediaAndResearch/Business%20Expectations%20Report.aspx",
    publisher: "Bangko Sentral ng Pilipinas",
    date: "Q4 2025 release",
    sourceType: "primary" as const,
  },
  {
    title: "Consumer Expectations Survey Report, Q4 2025 (and historical CES data series)",
    url: "https://www.bsp.gov.ph/SitePages/MediaAndResearch/ConsumerExpectationSurvey.aspx",
    publisher: "Bangko Sentral ng Pilipinas",
    date: "Q4 2025 release",
    sourceType: "primary" as const,
  },
];

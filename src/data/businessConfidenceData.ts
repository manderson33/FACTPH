export interface ConfidenceQuarter {
  label: string;
  year: number;
  quarter: number;
  businessCI: number;
  consumerCI: number;
}

// Source: Bangko Sentral ng Pilipinas (BSP) — Business Expectations Survey (BES)
// and Consumer Expectations Survey (CES), current-quarter overall Confidence
// Index (CI), non-seasonally adjusted. CI is a diffusion index: percent of
// respondents answering positively minus percent answering negatively, so 0 is
// neutral — positive means optimists outnumber pessimists.
//
// These are literal quarterly readings transcribed directly from BSP's own
// published historical data files (BES.xls, CES.xlsx) — no averaging or other
// computation of any kind. Q2 2020 is missing for both series because BSP
// cancelled that quarter's survey round during the nationwide COVID-19
// community quarantine; it is omitted rather than estimated.
const rawQuarters: [number, number, number, number][] = [
  // year, quarter, businessCI, consumerCI
  [2011, 1, 47.5, -23.1],
  [2011, 2, 31.8, -24.1],
  [2011, 3, 34.1, -18.7],
  [2011, 4, 36.9, -20.6],
  [2012, 1, 40.5, -14.7],
  [2012, 2, 44.5, -19.5],
  [2012, 3, 42.5, -13.3],
  [2012, 4, 49.5, -10.4],
  [2013, 1, 41.5, -11.2],
  [2013, 2, 54.9, -5.7],
  [2013, 3, 42.8, -7.9],
  [2013, 4, 52.3, -21.3],
  [2014, 1, 37.8, -18.8],
  [2014, 2, 50.7, -17.3],
  [2014, 3, 34.4, -26.3],
  [2014, 4, 48.3, -21.8],
  [2015, 1, 45.2, -10.0],
  [2015, 2, 49.2, -16.2],
  [2015, 3, 41.4, -11.6],
  [2015, 4, 51.3, -8.1],
  [2016, 1, 41.9, -5.7],
  [2016, 2, 48.7, -6.4],
  [2016, 3, 45.4, 2.5],
  [2016, 4, 39.8, 9.2],
  [2017, 1, 39.4, 8.7],
  [2017, 2, 43.0, 13.1],
  [2017, 3, 37.9, 10.2],
  [2017, 4, 43.3, 9.5],
  [2018, 1, 39.5, 1.7],
  [2018, 2, 39.3, 3.8],
  [2018, 3, 30.1, -7.1],
  [2018, 4, 27.2, -22.5],
  [2019, 1, 35.2, -0.5],
  [2019, 2, 40.5, -1.3],
  [2019, 3, 37.3, 4.6],
  [2019, 4, 40.2, 1.3],
  [2020, 1, 22.3, 1.3],
  // Q2 2020 omitted — survey cancelled (COVID-19 community quarantine)
  [2020, 3, -5.3, -54.5],
  [2020, 4, 10.6, -47.9],
  [2021, 1, 17.4, -34.7],
  [2021, 2, 1.4, -30.9],
  [2021, 3, -5.6, -19.3],
  [2021, 4, 39.7, -24.0],
  [2022, 1, 32.9, -15.1],
  [2022, 2, 35.4, -5.2],
  [2022, 3, 26.1, -12.9],
  [2022, 4, 23.9, -14.6],
  [2023, 1, 34.0, -10.4],
  [2023, 2, 40.8, -10.5],
  [2023, 3, 35.8, -9.6],
  [2023, 4, 35.9, -19.0],
  [2024, 1, 33.1, -10.9],
  [2024, 2, 32.1, -20.5],
  [2024, 3, 32.9, -15.6],
  [2024, 4, 44.5, -11.1],
  [2025, 1, 31.2, -13.0],
  [2025, 2, 28.8, -14.0],
  [2025, 3, 23.2, -9.8],
  [2025, 4, 29.7, -22.2],
];

export const confidenceByQuarter: ConfidenceQuarter[] = rawQuarters.map(
  ([year, quarter, businessCI, consumerCI]) => ({
    label: `Q${quarter} ${year}`,
    year,
    quarter,
    businessCI,
    consumerCI,
  })
);

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

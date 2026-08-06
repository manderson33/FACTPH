import { adminColors, adminLabels, type Admin } from "./costOfLivingData";

export { adminColors, adminLabels };
export type { Admin };

export interface SatisfactionPoint {
  admin: Admin;
  person: string;
  period: string;
  decimalDate: number;
  netSatisfaction: number;
  sourceUrl: string;
  sourcePublisher: string;
  sourceDate: string;
}

// Source: Social Weather Stations (SWS) quarterly surveys — the signed
// "Net Satisfaction Rating" SWS itself publishes as a single headline
// number for the sitting President (never derived by FactPH from separate
// satisfied/dissatisfied percentages). Points with a conflicting figure
// across sources for the same survey round were excluded rather than
// picked arbitrarily — for example, two SWS-titled releases gave different
// numbers for Duterte's Q4 2017 round, and two outlets gave irreconcilable
// pairs for Marcos's Q1-Q2 2024 rounds, so both are left out. Q1-Q3 2020 is
// a genuine gap: SWS suspended face-to-face fieldwork during the COVID-19
// lockdowns.
export const presidentialSatisfactionData: SatisfactionPoint[] = [
  // Benigno "Noynoy" Aquino III — June 30, 2010 to June 30, 2016
  { admin: "aquino", person: "Aquino III", period: "Q1 2011 (Mar)", decimalDate: 2011.167, netSatisfaction: 46, sourceUrl: "https://newsinfo.inquirer.net", sourcePublisher: "Philippine Daily Inquirer", sourceDate: "2011-04" },
  { admin: "aquino", person: "Aquino III", period: "Q2 2011 (Jun)", decimalDate: 2011.417, netSatisfaction: 45, sourceUrl: "https://newsinfo.inquirer.net", sourcePublisher: "Philippine Daily Inquirer", sourceDate: "2011-07" },
  { admin: "aquino", person: "Aquino III", period: "Q3 2011 (Sep)", decimalDate: 2011.667, netSatisfaction: 56, sourceUrl: "https://newsinfo.inquirer.net/65631", sourcePublisher: "Philippine Daily Inquirer", sourceDate: "2011-10" },
  { admin: "aquino", person: "Aquino III", period: "Q4 2011 (Dec)", decimalDate: 2011.917, netSatisfaction: 58, sourceUrl: "https://newsinfo.inquirer.net", sourcePublisher: "Philippine Daily Inquirer", sourceDate: "2012-01" },
  { admin: "aquino", person: "Aquino III", period: "Q1 2012 (Mar 11–13)", decimalDate: 2012.167, netSatisfaction: 49, sourceUrl: "https://newsinfo.inquirer.net", sourcePublisher: "Philippine Daily Inquirer", sourceDate: "2012-04" },
  { admin: "aquino", person: "Aquino III", period: "Q2 2012 (May 24–27)", decimalDate: 2012.417, netSatisfaction: 42, sourceUrl: "https://newsinfo.inquirer.net", sourcePublisher: "Philippine Daily Inquirer — “Satisfaction with Aquino drops to +42”", sourceDate: "2012-07" },
  { admin: "aquino", person: "Aquino III", period: "Q3 2012 (Aug/Sep)", decimalDate: 2012.667, netSatisfaction: 67, sourceUrl: "https://www.rappler.com/newsbreak/in-depth/137614", sourcePublisher: "Rappler / GMA News", sourceDate: "2012-09" },
  { admin: "aquino", person: "Aquino III", period: "Q4 2012 (Dec 8–11)", decimalDate: 2012.917, netSatisfaction: 55, sourceUrl: "https://newsinfo.inquirer.net", sourcePublisher: "Philippine Daily Inquirer", sourceDate: "2013-01" },
  { admin: "aquino", person: "Aquino III", period: "Q1 2013", decimalDate: 2013.167, netSatisfaction: 59, sourceUrl: "https://www.sws.org.ph/swsmain/artcldisppage/?artcsyscode=ART-20151214132140", sourcePublisher: "Social Weather Stations", sourceDate: "2013-04" },
  { admin: "aquino", person: "Aquino III", period: "Q2 2013 (Jun 28–30)", decimalDate: 2013.417, netSatisfaction: 64, sourceUrl: "https://www.sws.org.ph/swsmain/artcldisppage/?artcsyscode=ART-20151217094928", sourcePublisher: "Social Weather Stations", sourceDate: "2013-07" },
  { admin: "aquino", person: "Aquino III", period: "Q3 2013 (Sep 20–23)", decimalDate: 2013.667, netSatisfaction: 49, sourceUrl: "https://newsinfo.inquirer.net/506541", sourcePublisher: "Philippine Daily Inquirer — “Aquino net satisfaction rating dips – SWS”", sourceDate: "2013-10" },
  { admin: "aquino", person: "Aquino III", period: "Q4 2013 (Dec)", decimalDate: 2013.917, netSatisfaction: 49, sourceUrl: "https://newsinfo.inquirer.net", sourcePublisher: "Philippine Daily Inquirer", sourceDate: "2014-01" },
  { admin: "aquino", person: "Aquino III", period: "Q1 2014 (Mar)", decimalDate: 2014.167, netSatisfaction: 45, sourceUrl: "https://newsinfo.inquirer.net", sourcePublisher: "Philippine Daily Inquirer", sourceDate: "2014-04" },
  { admin: "aquino", person: "Aquino III", period: "Q2 2014 (Jun)", decimalDate: 2014.417, netSatisfaction: 25, sourceUrl: "https://newsinfo.inquirer.net", sourcePublisher: "Philippine Daily Inquirer (President's personal rating, distinct from the National Administration's +29 that quarter)", sourceDate: "2014-07" },
  { admin: "aquino", person: "Aquino III", period: "Q3 2014 (Sep)", decimalDate: 2014.667, netSatisfaction: 34, sourceUrl: "https://newsinfo.inquirer.net", sourcePublisher: "Philippine Daily Inquirer", sourceDate: "2014-10" },
  { admin: "aquino", person: "Aquino III", period: "Q4 2014 (Dec)", decimalDate: 2014.917, netSatisfaction: 39, sourceUrl: "https://newsinfo.inquirer.net", sourcePublisher: "Philippine Daily Inquirer", sourceDate: "2015-01" },
  { admin: "aquino", person: "Aquino III", period: "Q2 2015 (Jun 5–8)", decimalDate: 2015.417, netSatisfaction: 30, sourceUrl: "https://www.officialgazette.gov.ph/2015/07/07", sourcePublisher: "Official Gazette (citing SWS, President's personal rating)", sourceDate: "2015-07-07" },
  { admin: "aquino", person: "Aquino III", period: "Q3 2015 (Sep 2–5)", decimalDate: 2015.667, netSatisfaction: 41, sourceUrl: "https://www.rappler.com/philippines", sourcePublisher: "Rappler (President's personal rating, distinct from the National Administration's +37 that quarter)", sourceDate: "2015-09-17" },
  { admin: "aquino", person: "Aquino III", period: "Q4 2015 (Dec)", decimalDate: 2015.917, netSatisfaction: 32, sourceUrl: "https://www.rappler.com/philippines/129887", sourcePublisher: "Rappler", sourceDate: "2016-01" },
  { admin: "aquino", person: "Aquino III", period: "Q1 2016 (Mar 30–Apr 2)", decimalDate: 2016.25, netSatisfaction: 27, sourceUrl: "https://www.sws.org.ph/swsmain/artcldisppage/?artcsyscode=ART-20160524100519", sourcePublisher: "Social Weather Stations", sourceDate: "2016-05-24" },
  { admin: "aquino", person: "Aquino III", period: "Q2 2016 (Jun 24–27, final)", decimalDate: 2016.5, netSatisfaction: 29, sourceUrl: "https://www.sws.org.ph/swsmain/artcldisppage/?artcsyscode=ART-20160907145317", sourcePublisher: "Social Weather Stations", sourceDate: "2016-09-07" },

  // Rodrigo Duterte — June 30, 2016 to June 30, 2022
  { admin: "duterte", person: "Duterte", period: "Q3 2016 (Sep 24–27)", decimalDate: 2016.667, netSatisfaction: 64, sourceUrl: "https://www.sws.org.ph/swsmain/artcldisppage/?artcsyscode=ART-20161006061108", sourcePublisher: "Social Weather Stations", sourceDate: "2016-10-06" },
  { admin: "duterte", person: "Duterte", period: "Q4 2016 (Dec 3–6)", decimalDate: 2016.917, netSatisfaction: 63, sourceUrl: "https://newsinfo.inquirer.net", sourcePublisher: "Philippine Daily Inquirer (explicitly the President's personal rating, distinct from the National Administration's +61 that quarter)", sourceDate: "2017-01-10" },
  { admin: "duterte", person: "Duterte", period: "Q1 2017", decimalDate: 2017.167, netSatisfaction: 63, sourceUrl: "https://www.sws.org.ph/swsmain/artcldisppage/?artcsyscode=ART-20170410071525", sourcePublisher: "Social Weather Stations", sourceDate: "2017-04-10" },
  { admin: "duterte", person: "Duterte", period: "Q2 2017", decimalDate: 2017.417, netSatisfaction: 66, sourceUrl: "https://www.sws.org.ph/swsmain/artcldisppage/?artcsyscode=ART-20170706173742", sourcePublisher: "Social Weather Stations", sourceDate: "2017-07-06" },
  { admin: "duterte", person: "Duterte", period: "Q3 2017", decimalDate: 2017.667, netSatisfaction: 48, sourceUrl: "https://newsinfo.inquirer.net/936447", sourcePublisher: "Philippine Daily Inquirer", sourceDate: "2017-10" },
  { admin: "duterte", person: "Duterte", period: "Q1 2018", decimalDate: 2018.167, netSatisfaction: 56, sourceUrl: "https://www.sws.org.ph/swsmain/artcldisppage/?artcsyscode=ART-20180411144206", sourcePublisher: "Social Weather Stations", sourceDate: "2018-04-11" },
  { admin: "duterte", person: "Duterte", period: "Q2 2018", decimalDate: 2018.417, netSatisfaction: 45, sourceUrl: "https://www.sws.org.ph/swsmain/artcldisppage/?artcsyscode=ART-20180710155308", sourcePublisher: "Social Weather Stations", sourceDate: "2018-07-10" },
  { admin: "duterte", person: "Duterte", period: "Q3 2018", decimalDate: 2018.667, netSatisfaction: 54, sourceUrl: "https://www.sws.org.ph/swsmain/artcldisppage/?artcsyscode=ART-20180929094256", sourcePublisher: "Social Weather Stations", sourceDate: "2018-09-29" },
  { admin: "duterte", person: "Duterte", period: "Q4 2018", decimalDate: 2018.917, netSatisfaction: 60, sourceUrl: "https://www.sws.org.ph/downloads/media_release/pr20181228", sourcePublisher: "Social Weather Stations", sourceDate: "2018-12-28" },
  { admin: "duterte", person: "Duterte", period: "Q1 2019", decimalDate: 2019.167, netSatisfaction: 66, sourceUrl: "https://www.sws.org.ph/swsmain/artcldisppage/?artcsyscode=ART-20190410190723", sourcePublisher: "Social Weather Stations", sourceDate: "2019-04-10" },
  { admin: "duterte", person: "Duterte", period: "Q2 2019", decimalDate: 2019.417, netSatisfaction: 68, sourceUrl: "https://www.sws.org.ph/swsmain/artcldisppage/?artcsyscode=ART-20190708142248", sourcePublisher: "Social Weather Stations", sourceDate: "2019-07-08" },
  { admin: "duterte", person: "Duterte", period: "Q3 2019 (Sep 27–30)", decimalDate: 2019.667, netSatisfaction: 65, sourceUrl: "https://www.sws.org.ph", sourcePublisher: "Social Weather Stations", sourceDate: "2019-10" },
  { admin: "duterte", person: "Duterte", period: "Q4 2019 (Dec 13–16)", decimalDate: 2019.917, netSatisfaction: 72, sourceUrl: "https://www.sws.org.ph/swsmain/artcldisppage/?artcsyscode=ART-20200121185102", sourcePublisher: "Social Weather Stations", sourceDate: "2020-01-21" },
  { admin: "duterte", person: "Duterte", period: "Nov 21–25, 2020", decimalDate: 2020.833, netSatisfaction: 79, sourceUrl: "https://www.sws.org.ph/swsmain/artcldisppage/?artcsyscode=ART-20210924093127", sourcePublisher: "Social Weather Stations (delayed release, COVID-era backlog)", sourceDate: "2021-09-24" },
  { admin: "duterte", person: "Duterte", period: "May 2021", decimalDate: 2021.333, netSatisfaction: 65, sourceUrl: "https://www.sws.org.ph/swsmain/artcldisppage/?artcsyscode=ART-20210924093127", sourcePublisher: "Social Weather Stations (delayed release, COVID-era backlog)", sourceDate: "2021-09-24" },
  { admin: "duterte", person: "Duterte", period: "Jun 2021", decimalDate: 2021.417, netSatisfaction: 62, sourceUrl: "https://www.sws.org.ph/swsmain/artcldisppage/?artcsyscode=ART-20210924093127", sourcePublisher: "Social Weather Stations (delayed release, COVID-era backlog)", sourceDate: "2021-09-24" },
  { admin: "duterte", person: "Duterte", period: "Q3 2021 (Sep 12–16)", decimalDate: 2021.667, netSatisfaction: 52, sourceUrl: "https://mb.com.ph/2021/10/29", sourcePublisher: "Manila Bulletin", sourceDate: "2021-10-29" },
  { admin: "duterte", person: "Duterte", period: "Q4 2021 (Dec 12–16)", decimalDate: 2021.917, netSatisfaction: 60, sourceUrl: "https://www.sws.org.ph/swsmain/artcldisppage/?artcsyscode=ART-20220208145352", sourcePublisher: "Social Weather Stations", sourceDate: "2022-02-08" },
  { admin: "duterte", person: "Duterte", period: "Apr 19–27, 2022", decimalDate: 2022.25, netSatisfaction: 65, sourceUrl: "https://www.sws.org.ph/swsmain/artcldisppage/?artcsyscode=ART-20220713100837", sourcePublisher: "Social Weather Stations", sourceDate: "2022-07-13" },
  { admin: "duterte", person: "Duterte", period: "Jun 2022 (final)", decimalDate: 2022.417, netSatisfaction: 81, sourceUrl: "https://www.gmanetwork.com/news/topstories/nation/845914", sourcePublisher: "GMA News / Inquirer / Philstar", sourceDate: "2022-07-15" },

  // Ferdinand "Bongbong" Marcos Jr. — June 30, 2022 to present
  { admin: "marcos", person: "Marcos Jr.", period: "Oct 2022", decimalDate: 2022.75, netSatisfaction: 63, sourceUrl: "https://newsinfo.inquirer.net", sourcePublisher: "Philippine Daily Inquirer", sourceDate: "2022-11" },
  { admin: "marcos", person: "Marcos Jr.", period: "Q4 2022 (Dec)", decimalDate: 2022.917, netSatisfaction: 68, sourceUrl: "https://www.rappler.com/nation/marcos-sws-december-2022-survey", sourcePublisher: "Rappler", sourceDate: "2023-02" },
  { admin: "marcos", person: "Marcos Jr.", period: "Q1 2023 (Mar)", decimalDate: 2023.167, netSatisfaction: 56, sourceUrl: "https://www.sws.org.ph", sourcePublisher: "Social Weather Stations", sourceDate: "2023-04" },
  { admin: "marcos", person: "Marcos Jr.", period: "Q2 2023 (Jun)", decimalDate: 2023.417, netSatisfaction: 58, sourceUrl: "https://www.sws.org.ph", sourcePublisher: "Social Weather Stations", sourceDate: "2023-07" },
  { admin: "marcos", person: "Marcos Jr.", period: "Q3 2023 (Sep)", decimalDate: 2023.667, netSatisfaction: 44, sourceUrl: "https://www.sws.org.ph", sourcePublisher: "Social Weather Stations", sourceDate: "2023-10" },
  { admin: "marcos", person: "Marcos Jr.", period: "Q4 2023 (Dec)", decimalDate: 2023.917, netSatisfaction: 47, sourceUrl: "https://mb.com.ph/2024/2/8", sourcePublisher: "Manila Bulletin", sourceDate: "2024-02-08" },
  { admin: "marcos", person: "Marcos Jr.", period: "Q3 2024 (Sep)", decimalDate: 2024.667, netSatisfaction: 32, sourceUrl: "https://www.sws.org.ph", sourcePublisher: "Social Weather Stations", sourceDate: "2024-10" },
  { admin: "marcos", person: "Marcos Jr.", period: "Q4 2024 (Dec)", decimalDate: 2024.917, netSatisfaction: 19, sourceUrl: "https://newsinfo.inquirer.net/2024965", sourcePublisher: "Philippine Daily Inquirer", sourceDate: "2025-01" },
  { admin: "marcos", person: "Marcos Jr.", period: "Apr 2025", decimalDate: 2025.25, netSatisfaction: -10, sourceUrl: "https://mb.com.ph", sourcePublisher: "Manila Bulletin", sourceDate: "2025-05" },
  { admin: "marcos", person: "Marcos Jr.", period: "Jun 2025 (Q2)", decimalDate: 2025.417, netSatisfaction: 10, sourceUrl: "https://www.gmanetwork.com/news/topstories/nation/960854", sourcePublisher: "GMA News Online", sourceDate: "2025-07" },
  { admin: "marcos", person: "Marcos Jr.", period: "Sep 2025 (Q3)", decimalDate: 2025.667, netSatisfaction: -5, sourceUrl: "https://www.sws.org.ph/social-weather-report-net-satisfaction-with-president-ferdinand-marcos-jr-falls-from-3-in-november-2025-to-15-in-march-2026", sourcePublisher: "Social Weather Stations (cited as prior-quarter baseline in the Nov 2025 release)", sourceDate: "2025-12" },
  { admin: "marcos", person: "Marcos Jr.", period: "Nov 2025", decimalDate: 2025.833, netSatisfaction: -3, sourceUrl: "https://www.sws.org.ph/social-weather-report-net-satisfaction-with-president-ferdinand-marcos-jr-falls-from-3-in-november-2025-to-15-in-march-2026", sourcePublisher: "Social Weather Stations", sourceDate: "2025-12" },
  { admin: "marcos", person: "Marcos Jr.", period: "Q1 2026 (Mar)", decimalDate: 2026.167, netSatisfaction: -15, sourceUrl: "https://www.sws.org.ph/wp-content/uploads/2026/05/pr20260526-SWR2026-I.pdf", sourcePublisher: "Social Weather Stations", sourceDate: "2026-05-26" },
  { admin: "marcos", person: "Marcos Jr.", period: "Q2 2026 (Jun, most recent)", decimalDate: 2026.417, netSatisfaction: -7, sourceUrl: "https://www.sws.org.ph/social-weather-report-net-satisfaction-with-president-ferdinand-marcos-jr-rises-to-7-in-june-2026-from-15-in-march-2026", sourcePublisher: "Social Weather Stations", sourceDate: "2026-07" },
];

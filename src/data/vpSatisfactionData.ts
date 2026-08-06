import type { Admin } from "./costOfLivingData";

export type { Admin };

// VP-specific colors, distinct from the presidential admin-color convention:
// Binay (yellow), Robredo (pink), Sara Duterte (green).
export const adminColors: Record<Admin, string> = {
  aquino: "#F6C915",
  duterte: "#E8456B",
  marcos: "#34B36A",
};

export const adminLabels: Record<Admin, string> = {
  aquino: "Binay",
  duterte: "Robredo",
  marcos: "S. Duterte",
};

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
// number for the sitting Vice President (never derived by FactPH from
// separate satisfied/dissatisfied percentages). Points with no pinned
// citation, a citation that turned out to describe a different survey
// round, or an unresolved date/figure conflict were excluded rather than
// guessed — including a claimed "Q1 2021" Robredo round whose only source
// actually covered Q4 2021, and an "Apr 2022" figure that couldn't be
// pinned to +8 vs. +9 with confidence. Robredo's entire 2020 is a genuine
// gap — SWS suspended face-to-face fieldwork during the COVID-19
// lockdowns. Sara Duterte's Q1-Q2 2025 is also a genuine gap, coinciding
// with the impeachment proceedings against her.
export const vpSatisfactionData: SatisfactionPoint[] = [
  // Jejomar Binay — June 30, 2010 to June 30, 2016
  { admin: "aquino", person: "Binay", period: "Sep 2010", decimalDate: 2010.667, netSatisfaction: 58, sourceUrl: "https://www.gmanetwork.com/news/news/nation/383285", sourcePublisher: "GMA News", sourceDate: "2014-11" },
  { admin: "aquino", person: "Binay", period: "Nov 2010", decimalDate: 2010.833, netSatisfaction: 57, sourceUrl: "https://www.gmanetwork.com/news/news/nation/383285", sourcePublisher: "GMA News", sourceDate: "2014-11" },
  { admin: "aquino", person: "Binay", period: "Q1 2011 (Mar)", decimalDate: 2011.167, netSatisfaction: 74, sourceUrl: "https://www.philstar.com/opinion/2011/04/05/672773", sourcePublisher: "Philstar.com (opinion, citing SWS)", sourceDate: "2011-04-05" },
  { admin: "aquino", person: "Binay", period: "May 24–27, 2012", decimalDate: 2012.333, netSatisfaction: 70, sourceUrl: "https://www.philstar.com/headlines/2012/07/20/829588", sourcePublisher: "Philstar.com", sourceDate: "2012-07-20" },
  { admin: "aquino", person: "Binay", period: "Q3 2012 (Aug 24–27)", decimalDate: 2012.667, netSatisfaction: 76, sourceUrl: "https://www.hudcc.gov.ph/pr091412", sourcePublisher: "Social Weather Stations (republished by HUDCC)", sourceDate: "2012-09-14" },
  { admin: "aquino", person: "Binay", period: "Dec 2014", decimalDate: 2014.917, netSatisfaction: 44, sourceUrl: "https://www.gmanetwork.com/news/news/nation/402078", sourcePublisher: "GMA News — “VP Binay satisfaction rating drops to record low in Q4 2014”", sourceDate: "2014-11" },
  { admin: "aquino", person: "Binay", period: "Mar 2015", decimalDate: 2015.167, netSatisfaction: 31, sourceUrl: "https://www.pressreader.com/philippines/the-philippine-star/20150414/281496454809410", sourcePublisher: "The Philippine Star (via PressReader)", sourceDate: "2015-04-14" },
  { admin: "aquino", person: "Binay", period: "Jun 2015", decimalDate: 2015.417, netSatisfaction: 42, sourceUrl: "https://www.philstar.com/headlines/2015/10/06/1508029", sourcePublisher: "Philstar.com", sourceDate: "2015-10-06" },
  { admin: "aquino", person: "Binay", period: "Q3 2015 (Sep 2–5)", decimalDate: 2015.667, netSatisfaction: 33, sourceUrl: "https://www.philstar.com/headlines/2015/10/06/1508029", sourcePublisher: "Philstar.com", sourceDate: "2015-10-06" },
  { admin: "aquino", person: "Binay", period: "Q1 2016", decimalDate: 2016.167, netSatisfaction: 25, sourceUrl: "https://www.sws.org.ph/swsmain/artcldisppage/?artcsyscode=ART-20160915160717", sourcePublisher: "Social Weather Stations", sourceDate: "2016-09-15" },

  // Leni Robredo — June 30, 2016 to June 30, 2022
  { admin: "duterte", person: "Robredo", period: "Sep 2016", decimalDate: 2016.667, netSatisfaction: 49, sourceUrl: "https://www.sws.org.ph/swsmain/artcldisppage/?artcsyscode=ART-20161228094108", sourcePublisher: "Social Weather Stations (cited as prior-round baseline)", sourceDate: "2016-12-28" },
  { admin: "duterte", person: "Robredo", period: "Q4 2016 (Dec)", decimalDate: 2016.917, netSatisfaction: 37, sourceUrl: "https://www.sws.org.ph/swsmain/artcldisppage/?artcsyscode=ART-20161228094108", sourcePublisher: "Social Weather Stations", sourceDate: "2016-12-28" },
  { admin: "duterte", person: "Robredo", period: "Q1 2017 (Mar 25–28)", decimalDate: 2017.167, netSatisfaction: 26, sourceUrl: "https://www.gmanetwork.com/news/topstories/nation/606682", sourcePublisher: "GMA News Online", sourceDate: "2017-04" },
  { admin: "duterte", person: "Robredo", period: "Q3 2017 (Sep 23–27)", decimalDate: 2017.667, netSatisfaction: 41, sourceUrl: "https://interaksyon.philstar.com/breaking-news/2017/10/13/103142", sourcePublisher: "Interaksyon (Philstar)", sourceDate: "2017-10-13" },
  { admin: "duterte", person: "Robredo", period: "Q4 2017 (Dec)", decimalDate: 2017.917, netSatisfaction: 42, sourceUrl: "https://www.rappler.com/philippines/192412", sourcePublisher: "Rappler", sourceDate: "2017-12" },
  { admin: "duterte", person: "Robredo", period: "Q3 2018 (Sep)", decimalDate: 2018.667, netSatisfaction: 34, sourceUrl: "https://www.sws.org.ph/swsmain/artcldisppage/?artcsyscode=ART-20181016174837", sourcePublisher: "Social Weather Stations", sourceDate: "2018-10-16" },
  { admin: "duterte", person: "Robredo", period: "Q4 2018 (Dec)", decimalDate: 2018.917, netSatisfaction: 27, sourceUrl: "https://www.philstar.com/headlines/2019/01/15/1885446", sourcePublisher: "Philstar.com", sourceDate: "2019-01-15" },
  { admin: "duterte", person: "Robredo", period: "Q1 2019 (Mar 28–31)", decimalDate: 2019.167, netSatisfaction: 42, sourceUrl: "https://www.philstar.com/headlines/2019/04/25/1912412", sourcePublisher: "Philstar.com", sourceDate: "2019-04-25" },
  { admin: "duterte", person: "Robredo", period: "Q3 2019 (Sep)", decimalDate: 2019.667, netSatisfaction: 33, sourceUrl: "https://www.sws.org.ph/swsmain/artcldisppage/?artcsyscode=ART-20191016152026", sourcePublisher: "Social Weather Stations", sourceDate: "2019-10-16" },
  { admin: "duterte", person: "Robredo", period: "Q4 2019 (Dec 13–16)", decimalDate: 2019.917, netSatisfaction: 36, sourceUrl: "https://www.manilatimes.net/2020/03/03/latest-stories/breakingnews/sws-robredo-cayetano-sotto-satisfaction-ratings-up/699705", sourcePublisher: "Manila Times", sourceDate: "2020-03-03" },
  { admin: "duterte", person: "Robredo", period: "Q3 2021 (Sep)", decimalDate: 2021.667, netSatisfaction: 24, sourceUrl: "https://mb.com.ph/2022/03/11/robredos-net-satisfaction-rating-dips-in-4q-2021-sws-survey/", sourcePublisher: "Manila Bulletin (cited as prior-round baseline)", sourceDate: "2022-03-11" },
  { admin: "duterte", person: "Robredo", period: "Q4 2021 (Dec 12–16)", decimalDate: 2021.917, netSatisfaction: 1, sourceUrl: "https://www.philstar.com/headlines/2022/03/13/2166857", sourcePublisher: "Philstar.com / Manila Bulletin / Rappler / CNN Philippines / Inquirer", sourceDate: "2022-03-13" },
  { admin: "duterte", person: "Robredo", period: "Jun 26–29, 2022 (final)", decimalDate: 2022.417, netSatisfaction: 7, sourceUrl: "https://mb.com.ph/2022/10/03/robredo-ends-term-with-neutral-net-satisfaction-rating-sotto-very-good-rating-sws/", sourcePublisher: "Manila Bulletin / Inquirer / Philstar / UNTV News", sourceDate: "2022-10-03" },

  // Sara Duterte — June 30, 2022 to present
  { admin: "marcos", person: "S. Duterte", period: "Sep 2022", decimalDate: 2022.667, netSatisfaction: 73, sourceUrl: "https://www.rappler.com/newsbreak/data-documents/sara-duterte-sws-ratings-second-impeachment-trial/", sourcePublisher: "Rappler (SWS ratings retrospective)", sourceDate: "2025" },
  { admin: "marcos", person: "S. Duterte", period: "Q4 2022 (Dec)", decimalDate: 2022.917, netSatisfaction: 77, sourceUrl: "https://www.rappler.com/philippines/sara-duterte-satisfaction-rating-end-2022-sws-survey/", sourcePublisher: "Rappler / Manila Bulletin", sourceDate: "2023-02-07" },
  { admin: "marcos", person: "S. Duterte", period: "Q1 2023 (Mar)", decimalDate: 2023.167, netSatisfaction: 71, sourceUrl: "https://www.rappler.com/newsbreak/data-documents/sara-duterte-sws-ratings-second-impeachment-trial/", sourcePublisher: "Rappler (SWS ratings retrospective)", sourceDate: "2025" },
  { admin: "marcos", person: "S. Duterte", period: "Q2 2023 (Jun)", decimalDate: 2023.417, netSatisfaction: 69, sourceUrl: "https://www.rappler.com/newsbreak/data-documents/sara-duterte-sws-ratings-second-impeachment-trial/", sourcePublisher: "Rappler (SWS ratings retrospective)", sourceDate: "2025" },
  { admin: "marcos", person: "S. Duterte", period: "Q3 2023 (Sep)", decimalDate: 2023.667, netSatisfaction: 57, sourceUrl: "https://www.gmanetwork.com/news/topstories/nation/902758", sourcePublisher: "GMA News Online (cited as prior-round baseline)", sourceDate: "2024" },
  { admin: "marcos", person: "S. Duterte", period: "Q4 2023 (Dec 8–11)", decimalDate: 2023.917, netSatisfaction: 61, sourceUrl: "https://mb.com.ph/2024/2/8/marcos-duterte-see-slightly-higher-net-satisfaction-ratings-in-q4-2023-sws", sourcePublisher: "Manila Bulletin / GMA News / Philstar", sourceDate: "2024-02-08" },
  { admin: "marcos", person: "S. Duterte", period: "Q2 2024 (Jun 23–Jul 1)", decimalDate: 2024.5, netSatisfaction: 44, sourceUrl: "https://www.gmanetwork.com/news/topstories/nation/916580", sourcePublisher: "GMA News Online", sourceDate: "2024-08-09" },
  { admin: "marcos", person: "S. Duterte", period: "Q3 2024 (Sep)", decimalDate: 2024.667, netSatisfaction: 27, sourceUrl: "https://newsinfo.inquirer.net/2180634", sourcePublisher: "Philippine Daily Inquirer (cited as prior-round baseline)", sourceDate: "2025" },
  { admin: "marcos", person: "S. Duterte", period: "Q4 2024 (Dec 12–18)", decimalDate: 2024.917, netSatisfaction: 21, sourceUrl: "https://www.philstar.com/headlines/2025/01/16/2414560", sourcePublisher: "Philstar.com", sourceDate: "2025-01-16" },
  { admin: "marcos", person: "S. Duterte", period: "Q3 2025 (Sep)", decimalDate: 2025.667, netSatisfaction: 22, sourceUrl: "https://www.gmanetwork.com/news/topstories/nation/976108", sourcePublisher: "GMA News Online (cited as prior-round baseline)", sourceDate: "2026" },
  { admin: "marcos", person: "S. Duterte", period: "Q4 2025 (Nov 24–30)", decimalDate: 2025.917, netSatisfaction: 28, sourceUrl: "https://www.gmanetwork.com/news/topstories/nation/976108", sourcePublisher: "GMA News Online / Manila Bulletin / Inquirer / Daily Tribune", sourceDate: "2026-02" },
  { admin: "marcos", person: "S. Duterte", period: "Q1 2026 (Mar 24–31)", decimalDate: 2026.25, netSatisfaction: 29, sourceUrl: "https://www.philstar.com/headlines/2026/05/31/2531767", sourcePublisher: "Philstar.com / GMA News / Daily Tribune", sourceDate: "2026-05-31" },
  { admin: "marcos", person: "S. Duterte", period: "Q2 2026 (Jun 20–29, most recent)", decimalDate: 2026.5, netSatisfaction: 31, sourceUrl: "https://www.gmanetwork.com/news/topstories/nation/995121", sourcePublisher: "GMA News Online / Inquirer / Manila Times / Philstar", sourceDate: "2026-07-16" },
];

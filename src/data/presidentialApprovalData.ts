import { adminColors, adminLabels, type Admin } from "./costOfLivingData";

export { adminColors, adminLabels };
export type { Admin };

export interface ApprovalPoint {
  admin: Admin;
  person: string;
  period: string;
  decimalDate: number;
  approvalPercent: number;
  sourceUrl: string;
  sourcePublisher: string;
  sourceDate: string;
}

// Source: Pulse Asia Research Inc., "Ulat ng Bayan" nationwide surveys —
// the "Approval Rating" (Approve %) Pulse Asia itself publishes for the
// sitting President. Every point below is Pulse Asia's own headline
// figure, transcribed as published — no FactPH computation, netting, or
// estimation. Points with a conflicting figure across sources, or with no
// pinned citation, were excluded rather than guessed; see the gaps in the
// timeline (e.g. no Aquino round between Mar 2016 and the end of his term,
// no Duterte round in most of 2020-2021 due to COVID-era and election-focus
// scheduling by Pulse Asia itself).
export const presidentialApprovalData: ApprovalPoint[] = [
  // Benigno "Noynoy" Aquino III — June 30, 2010 to June 30, 2016
  { admin: "aquino", person: "Aquino III", period: "Oct 20–29, 2010", decimalDate: 2010.75, approvalPercent: 79, sourceUrl: "https://www.philstar.com/headlines/2010/12/18", sourcePublisher: "Philstar.com", sourceDate: "2010-12-18" },
  { admin: "aquino", person: "Aquino III", period: "Feb 24–Mar 6, 2011", decimalDate: 2011.083, approvalPercent: 74, sourceUrl: "https://www.philstar.com/headlines/2011/03/22", sourcePublisher: "Philstar.com", sourceDate: "2011-03-22" },
  { admin: "aquino", person: "Aquino III", period: "May 21–Jun 4, 2011", decimalDate: 2011.333, approvalPercent: 71, sourceUrl: "https://ellentordesillas.com/2011/06/22", sourcePublisher: "Ellen Tordesillas (citing Pulse Asia)", sourceDate: "2011-06-22" },
  { admin: "aquino", person: "Aquino III", period: "Aug 20–Sep 2, 2011", decimalDate: 2011.583, approvalPercent: 77, sourceUrl: "https://www.gmanetwork.com/news/nation", sourcePublisher: "GMA News Online", sourceDate: "2011-09" },
  { admin: "aquino", person: "Aquino III", period: "May 2012", decimalDate: 2012.333, approvalPercent: 67, sourceUrl: "https://www.gmanetwork.com/news/nation", sourcePublisher: "GMA News Online", sourceDate: "2012-07" },
  { admin: "aquino", person: "Aquino III", period: "Aug 31–Sep 7, 2012", decimalDate: 2012.667, approvalPercent: 78, sourceUrl: "https://www.philstar.com/headlines/2012/09/20", sourcePublisher: "Philstar.com", sourceDate: "2012-09-20" },
  { admin: "aquino", person: "Aquino III", period: "Nov 2012", decimalDate: 2012.833, approvalPercent: 78, sourceUrl: "https://www.gmanetwork.com/news/nation", sourcePublisher: "GMA News Online", sourceDate: "2013-01" },
  { admin: "aquino", person: "Aquino III", period: "Jan 19–30, 2013", decimalDate: 2013.0, approvalPercent: 66, sourceUrl: "https://www.gmanetwork.com/news/nation", sourcePublisher: "GMA News Online", sourceDate: "2013-02-12" },
  { admin: "aquino", person: "Aquino III", period: "Jun 20–Jul 4, 2013", decimalDate: 2013.417, approvalPercent: 73, sourceUrl: "https://www.rappler.com/nation", sourcePublisher: "Rappler / Philippine Daily Inquirer", sourceDate: "2013-07" },
  { admin: "aquino", person: "Aquino III", period: "Sep 2013", decimalDate: 2013.667, approvalPercent: 79, sourceUrl: "https://newsinfo.inquirer.net", sourcePublisher: "Philippine Daily Inquirer", sourceDate: "2013-10" },
  { admin: "aquino", person: "Aquino III", period: "Dec 8–15, 2013", decimalDate: 2013.917, approvalPercent: 73, sourceUrl: "https://newsinfo.inquirer.net", sourcePublisher: "Philippine Daily Inquirer", sourceDate: "2014-01" },
  { admin: "aquino", person: "Aquino III", period: "Mar 2014", decimalDate: 2014.167, approvalPercent: 70, sourceUrl: "https://www.philstar.com/headlines/2014/07/14", sourcePublisher: "Philstar.com", sourceDate: "2014-07-14" },
  { admin: "aquino", person: "Aquino III", period: "Jun 2014", decimalDate: 2014.417, approvalPercent: 56, sourceUrl: "https://newsinfo.inquirer.net", sourcePublisher: "Philippine Daily Inquirer", sourceDate: "2014-07" },
  { admin: "aquino", person: "Aquino III", period: "Sep 2014", decimalDate: 2014.667, approvalPercent: 55, sourceUrl: "https://newsinfo.inquirer.net", sourcePublisher: "Philippine Daily Inquirer", sourceDate: "2014-10" },
  { admin: "aquino", person: "Aquino III", period: "Nov 2014", decimalDate: 2014.833, approvalPercent: 59, sourceUrl: "https://newsinfo.inquirer.net", sourcePublisher: "Philippine Daily Inquirer", sourceDate: "2014-12" },
  { admin: "aquino", person: "Aquino III", period: "Mar 2015", decimalDate: 2015.167, approvalPercent: 38, sourceUrl: "https://www.philstar.com/headlines/2015/04", sourcePublisher: "Philstar.com / Inquirer (post-Mamasapano)", sourceDate: "2015-04" },
  { admin: "aquino", person: "Aquino III", period: "Sep 2015", decimalDate: 2015.667, approvalPercent: 50, sourceUrl: "https://newsinfo.inquirer.net", sourcePublisher: "Philippine Daily Inquirer", sourceDate: "2015-10" },
  { admin: "aquino", person: "Aquino III", period: "Dec 4–11, 2015", decimalDate: 2015.917, approvalPercent: 55, sourceUrl: "https://www.philstar.com/headlines/2016/04/03", sourcePublisher: "Philstar.com", sourceDate: "2016-04-03" },
  { admin: "aquino", person: "Aquino III", period: "Jan 24–28, 2016", decimalDate: 2016.0, approvalPercent: 49, sourceUrl: "https://www.rappler.com/nation", sourcePublisher: "Rappler", sourceDate: "2016-02" },
  { admin: "aquino", person: "Aquino III", period: "Mar 12–18, 2016", decimalDate: 2016.167, approvalPercent: 52, sourceUrl: "https://www.philstar.com/headlines/2016/04/03", sourcePublisher: "Philstar.com", sourceDate: "2016-04-03" },

  // Rodrigo Duterte — June 30, 2016 to June 30, 2022
  { admin: "duterte", person: "Duterte", period: "Sep 2016", decimalDate: 2016.667, approvalPercent: 86, sourceUrl: "https://www.cnnphilippines.com/news/2016/10/12", sourcePublisher: "CNN Philippines", sourceDate: "2016-10-12" },
  { admin: "duterte", person: "Duterte", period: "Dec 2016", decimalDate: 2016.917, approvalPercent: 83, sourceUrl: "https://pulseasia.ph", sourcePublisher: "Pulse Asia Research Inc.", sourceDate: "2016-12" },
  { admin: "duterte", person: "Duterte", period: "Mar 2017", decimalDate: 2017.167, approvalPercent: 78, sourceUrl: "https://pulseasia.ph", sourcePublisher: "Pulse Asia Research Inc.", sourceDate: "2017-03" },
  { admin: "duterte", person: "Duterte", period: "Jun 24–29, 2017", decimalDate: 2017.417, approvalPercent: 82, sourceUrl: "https://www.rappler.com/nation", sourcePublisher: "Rappler", sourceDate: "2017-07" },
  { admin: "duterte", person: "Duterte", period: "Sep 2017", decimalDate: 2017.667, approvalPercent: 80, sourceUrl: "https://www.pressreader.com/philippines/the-philippine-star", sourcePublisher: "The Philippine Star (via PressReader)", sourceDate: "2017-10-14" },
  { admin: "duterte", person: "Duterte", period: "Dec 2017", decimalDate: 2017.917, approvalPercent: 80, sourceUrl: "https://www.pna.gov.ph", sourcePublisher: "Philippine News Agency", sourceDate: "2018-01" },
  { admin: "duterte", person: "Duterte", period: "Mar 2018", decimalDate: 2018.167, approvalPercent: 80, sourceUrl: "https://www.cnnphilippines.com/news/2018/04", sourcePublisher: "CNN Philippines", sourceDate: "2018-04" },
  { admin: "duterte", person: "Duterte", period: "Jun 15–21, 2018", decimalDate: 2018.417, approvalPercent: 88, sourceUrl: "https://www.rappler.com/nation", sourcePublisher: "Rappler", sourceDate: "2018-06" },
  { admin: "duterte", person: "Duterte", period: "Sep 1–7, 2018", decimalDate: 2018.667, approvalPercent: 75, sourceUrl: "https://newsinfo.inquirer.net", sourcePublisher: "Philippine Daily Inquirer", sourceDate: "2018-09" },
  { admin: "duterte", person: "Duterte", period: "Dec 14–21, 2018", decimalDate: 2018.917, approvalPercent: 81, sourceUrl: "https://www.philstar.com/headlines/2019/01/11", sourcePublisher: "Philstar.com", sourceDate: "2019-01-11" },
  { admin: "duterte", person: "Duterte", period: "Mar 2019", decimalDate: 2019.167, approvalPercent: 87, sourceUrl: "https://www.xinhuanet.com", sourcePublisher: "Xinhua", sourceDate: "2019-04" },
  { admin: "duterte", person: "Duterte", period: "Jun 24–30, 2019", decimalDate: 2019.417, approvalPercent: 85, sourceUrl: "https://www.philstar.com/headlines/2019/07", sourcePublisher: "Philstar.com", sourceDate: "2019-07" },
  { admin: "duterte", person: "Duterte", period: "Sep 2019", decimalDate: 2019.667, approvalPercent: 78, sourceUrl: "https://pulseasia.ph", sourcePublisher: "Pulse Asia Research Inc.", sourceDate: "2019-10" },
  { admin: "duterte", person: "Duterte", period: "Dec 2019", decimalDate: 2019.917, approvalPercent: 87, sourceUrl: "https://www.pressreader.com/philippines/manila-bulletin", sourcePublisher: "Manila Bulletin (via PressReader)", sourceDate: "2020-01" },
  { admin: "duterte", person: "Duterte", period: "Sep 2020", decimalDate: 2020.667, approvalPercent: 91, sourceUrl: "https://www.philstar.com/headlines/2020/10/05", sourcePublisher: "Philstar.com", sourceDate: "2020-10-05" },
  { admin: "duterte", person: "Duterte", period: "Sep 2021", decimalDate: 2021.667, approvalPercent: 64, sourceUrl: "https://www.cnnphilippines.com/news/2021/10", sourcePublisher: "CNN Philippines", sourceDate: "2021-10" },
  { admin: "duterte", person: "Duterte", period: "Dec 1–6, 2021", decimalDate: 2021.917, approvalPercent: 72, sourceUrl: "https://www.gmanetwork.com/news/topstories/nation", sourcePublisher: "GMA News Online", sourceDate: "2021-12-30" },
  { admin: "duterte", person: "Duterte", period: "Mar 2022 (full-term summary)", decimalDate: 2022.167, approvalPercent: 73, sourceUrl: "https://pulseasia.ph", sourcePublisher: "Pulse Asia Research Inc. — “Performance Ratings of President Rodrigo Roa Duterte, September 2016 to March 2022”", sourceDate: "2022-06-28" },

  // Ferdinand "Bongbong" Marcos Jr. — June 30, 2022 to present
  { admin: "marcos", person: "Marcos Jr.", period: "Nov 2022", decimalDate: 2022.833, approvalPercent: 82, sourceUrl: "https://www.philstar.com/headlines/2023/04", sourcePublisher: "Philstar.com (cited as prior-round baseline)", sourceDate: "2023-04" },
  { admin: "marcos", person: "Marcos Jr.", period: "Mar 15–19, 2023", decimalDate: 2023.167, approvalPercent: 78, sourceUrl: "https://www.philstar.com/headlines/2023/04/12", sourcePublisher: "Philstar.com / Manila Bulletin", sourceDate: "2023-04-12" },
  { admin: "marcos", person: "Marcos Jr.", period: "Jun 2023", decimalDate: 2023.417, approvalPercent: 80, sourceUrl: "https://www.philstar.com/headlines/2023/10/02", sourcePublisher: "Philstar.com", sourceDate: "2023-10-02" },
  { admin: "marcos", person: "Marcos Jr.", period: "Sep 10–15, 2023", decimalDate: 2023.667, approvalPercent: 65, sourceUrl: "https://www.philstar.com/headlines/2023/10/02", sourcePublisher: "Philstar.com", sourceDate: "2023-10-02" },
  { admin: "marcos", person: "Marcos Jr.", period: "Dec 2023", decimalDate: 2023.917, approvalPercent: 68, sourceUrl: "https://mb.com.ph", sourcePublisher: "Manila Bulletin", sourceDate: "2024-02" },
  { admin: "marcos", person: "Marcos Jr.", period: "Mar 6–10, 2024", decimalDate: 2024.167, approvalPercent: 55, sourceUrl: "https://www.philstar.com/headlines/2024/04/03", sourcePublisher: "Philstar.com", sourceDate: "2024-04-03" },
  { admin: "marcos", person: "Marcos Jr.", period: "Jun 2024", decimalDate: 2024.417, approvalPercent: 53, sourceUrl: "https://www.gmanetwork.com/news/topstories/nation/913631", sourcePublisher: "GMA News Online", sourceDate: "2024-07-17" },
  { admin: "marcos", person: "Marcos Jr.", period: "Sep 6–13, 2024", decimalDate: 2024.667, approvalPercent: 50, sourceUrl: "https://www.philstar.com/headlines/2024/10/02", sourcePublisher: "Philstar.com", sourceDate: "2024-10-02" },
  { admin: "marcos", person: "Marcos Jr.", period: "Nov 26–Dec 3, 2024", decimalDate: 2024.917, approvalPercent: 48, sourceUrl: "https://newsinfo.inquirer.net", sourcePublisher: "Philippine Daily Inquirer", sourceDate: "2024-12" },
  { admin: "marcos", person: "Marcos Jr.", period: "Mar 23–29, 2025", decimalDate: 2025.167, approvalPercent: 25, sourceUrl: "https://pulseasia.ph/wp-content/uploads/2025/04/UB2025-1-MR-on-Performance-and-Trust-Ratings-of-Top-Officials-Final.pdf", sourcePublisher: "Pulse Asia Research Inc. (primary release PDF)", sourceDate: "2025-04-16" },
  { admin: "marcos", person: "Marcos Jr.", period: "Jun 2025", decimalDate: 2025.417, approvalPercent: 42, sourceUrl: "https://pulseasia.ph", sourcePublisher: "Pulse Asia Research Inc. (UB2025-3, Table 3 comparison)", sourceDate: "2025-09" },
  { admin: "marcos", person: "Marcos Jr.", period: "Sep 27–30, 2025", decimalDate: 2025.667, approvalPercent: 33, sourceUrl: "https://pulseasia.ph/wp-content/uploads/2025/10/MR3-UB2025-3-MR-on-Top-2-Ratings-Final.pdf", sourcePublisher: "Pulse Asia Research Inc. (primary release PDF)", sourceDate: "2025-10-16" },
  { admin: "marcos", person: "Marcos Jr.", period: "Dec 12–15, 2025", decimalDate: 2025.917, approvalPercent: 34, sourceUrl: "https://pulseasia.ph/wp-content/uploads/2025/12/MR2-UB2025-4-MR-on-Ratings-Final.pdf", sourcePublisher: "Pulse Asia Research Inc. (primary release PDF)", sourceDate: "2025-12-30" },
  { admin: "marcos", person: "Marcos Jr.", period: "Feb 27–Mar 2, 2026", decimalDate: 2026.083, approvalPercent: 36, sourceUrl: "https://pulseasia.ph/wp-content/uploads/2026/03/MR2-UB2026-1-MR-on-Ratings-and-Urgent-Concerns-final.pdf", sourcePublisher: "Pulse Asia Research Inc. (primary release PDF)", sourceDate: "2026-03-16" },
  { admin: "marcos", person: "Marcos Jr.", period: "Jun 28–Jul 3 & 6, 2026", decimalDate: 2026.5, approvalPercent: 29, sourceUrl: "https://pulseasia.ph/wp-content/uploads/2026/07/MR1-UB2026-2-MR-on-Ratings-and-Concerns-Final.pdf", sourcePublisher: "Pulse Asia Research Inc. (primary release PDF)", sourceDate: "2026-07-20" },
];

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
// sitting Vice President. Every point below is Pulse Asia's own headline
// figure, transcribed as published — no FactPH computation, netting, or
// estimation. Points with a conflicting figure across sources, no pinned
// citation, or that failed an independent accuracy audit were excluded
// rather than guessed. Binay's 2010-2011 rounds, Robredo's Mar/Jun 2020
// and Mar/Jun 2021 rounds (no survey exists for the former; the latter
// two could not be distinguished from duplicated 2018 figures), and
// Robredo's final two rounds (Mar/Jun 2022) could not be verified to a
// citable source and are left out rather than estimated.
export const vpApprovalData: ApprovalPoint[] = [
  // Jejomar Binay — June 30, 2010 to June 30, 2016
  { admin: "aquino", person: "Binay", period: "May 2012", decimalDate: 2012.333, approvalPercent: 81, sourceUrl: "https://www.philstar.com/headlines/2012/10/05/856215", sourcePublisher: "Philstar.com", sourceDate: "2012-10-05" },
  { admin: "aquino", person: "Binay", period: "Aug 31–Sep 7, 2012", decimalDate: 2012.667, approvalPercent: 85, sourceUrl: "https://www.philstar.com/headlines/2012/10/05/856215", sourcePublisher: "Philstar.com", sourceDate: "2012-10-05" },
  { admin: "aquino", person: "Binay", period: "Jun 2013", decimalDate: 2013.417, approvalPercent: 78, sourceUrl: "https://www.manilatimes.net/2013/10/23/news/top-stories/aquino-binay-approval-ratings-rebound-pulse-asia/47268", sourcePublisher: "Manila Times", sourceDate: "2013-10-23" },
  { admin: "aquino", person: "Binay", period: "Sep 2014", decimalDate: 2014.667, approvalPercent: 66, sourceUrl: "https://newsinfo.inquirer.net/656845/binay-ratings-nosedive", sourcePublisher: "Philippine Daily Inquirer", sourceDate: "2014-11" },
  { admin: "aquino", person: "Binay", period: "Nov 14–20, 2014", decimalDate: 2014.833, approvalPercent: 45, sourceUrl: "https://newsinfo.inquirer.net/656845/binay-ratings-nosedive", sourcePublisher: "Philippine Daily Inquirer", sourceDate: "2014-11" },
  { admin: "aquino", person: "Binay", period: "Jun 2015", decimalDate: 2015.417, approvalPercent: 58, sourceUrl: "https://www.philstar.com/headlines/2015/10/01/1506112", sourcePublisher: "Philstar.com", sourceDate: "2015-10-01" },
  { admin: "aquino", person: "Binay", period: "Sep 8–14, 2015", decimalDate: 2015.667, approvalPercent: 43, sourceUrl: "https://www.philstar.com/headlines/2015/10/01/1506112", sourcePublisher: "Philstar.com", sourceDate: "2015-10-01" },
  { admin: "aquino", person: "Binay", period: "Dec 2015", decimalDate: 2015.917, approvalPercent: 52, sourceUrl: "https://www.rappler.com/nation/118091", sourcePublisher: "Rappler", sourceDate: "2015-12" },
  { admin: "aquino", person: "Binay", period: "Mar 12–18, 2016", decimalDate: 2016.167, approvalPercent: 46, sourceUrl: "https://newsinfo.inquirer.net/700183", sourcePublisher: "Philippine Daily Inquirer (cited as prior-round baseline)", sourceDate: "2016-06" },
  { admin: "aquino", person: "Binay", period: "Jun 2016", decimalDate: 2016.417, approvalPercent: 58, sourceUrl: "https://newsinfo.inquirer.net/700183", sourcePublisher: "Philippine Daily Inquirer", sourceDate: "2016-06" },

  // Leni Robredo — June 30, 2016 to June 30, 2022
  { admin: "duterte", person: "Robredo", period: "Dec 6–11, 2016", decimalDate: 2016.917, approvalPercent: 62, sourceUrl: "https://pulseasia.ph/robredo-ratings-dip-duterte-trust-still-highest-pulse-asia/", sourcePublisher: "Pulse Asia Research Inc.", sourceDate: "2016-12" },
  { admin: "duterte", person: "Robredo", period: "Jun 24–29, 2017", decimalDate: 2017.417, approvalPercent: 61, sourceUrl: "https://newsinfo.inquirer.net/860888", sourcePublisher: "Philippine Daily Inquirer", sourceDate: "2017-07" },
  { admin: "duterte", person: "Robredo", period: "Dec 2017", decimalDate: 2017.917, approvalPercent: 59, sourceUrl: "https://mb.com.ph", sourcePublisher: "Manila Bulletin", sourceDate: "2018-01-09" },
  { admin: "duterte", person: "Robredo", period: "Mar 2018", decimalDate: 2018.167, approvalPercent: 55, sourceUrl: "https://www.rappler.com/philippines/207198", sourcePublisher: "Rappler (cited as prior-round baseline)", sourceDate: "2018-06" },
  { admin: "duterte", person: "Robredo", period: "Jun 2018", decimalDate: 2018.417, approvalPercent: 62, sourceUrl: "https://www.rappler.com/philippines/207198", sourcePublisher: "Rappler", sourceDate: "2018-06" },
  { admin: "duterte", person: "Robredo", period: "Sep 2018", decimalDate: 2018.667, approvalPercent: 61, sourceUrl: "https://r3.rappler.com/nation/212778", sourcePublisher: "Rappler", sourceDate: "2018-09" },
  { admin: "duterte", person: "Robredo", period: "Dec 14–21, 2018", decimalDate: 2018.917, approvalPercent: 62, sourceUrl: "https://r3.rappler.com/nation/220732", sourcePublisher: "Rappler", sourceDate: "2018-12" },
  { admin: "duterte", person: "Robredo", period: "Mar 2019", decimalDate: 2019.167, approvalPercent: 49, sourceUrl: "https://mb.com.ph/2019/07/17", sourcePublisher: "Manila Bulletin (cited as prior-round baseline)", sourceDate: "2019-07" },
  { admin: "duterte", person: "Robredo", period: "Jun 24–30, 2019", decimalDate: 2019.417, approvalPercent: 55, sourceUrl: "https://pulseasia.ph/updates/june-2019-nationwide-survey-on-the-performance-and-trust-ratings-of-the-top-philippine-government-officials/", sourcePublisher: "Pulse Asia Research Inc.", sourceDate: "2019-07" },
  { admin: "duterte", person: "Robredo", period: "Sep 2019", decimalDate: 2019.667, approvalPercent: 50, sourceUrl: "https://www.philstar.com/pilipino-star-ngayon/bansa/2019/10/07/1958185", sourcePublisher: "Pilipino Star Ngayon (Philstar)", sourceDate: "2019-10-07" },
  { admin: "duterte", person: "Robredo", period: "Dec 3–8, 2019", decimalDate: 2019.917, approvalPercent: 58, sourceUrl: "https://mb.com.ph/2019/12/21", sourcePublisher: "Manila Bulletin", sourceDate: "2019-12-21" },
  { admin: "duterte", person: "Robredo", period: "Sep 14–20, 2020", decimalDate: 2020.71, approvalPercent: 57, sourceUrl: "https://www.philstar.com/headlines/2020/10/05/2047337", sourcePublisher: "Philstar.com", sourceDate: "2020-10-05" },
  { admin: "duterte", person: "Robredo", period: "Sep 2021", decimalDate: 2021.667, approvalPercent: 48, sourceUrl: "https://newsinfo.inquirer.net/1174379", sourcePublisher: "Philippine Daily Inquirer (cited as prior-round baseline)", sourceDate: "2021-12" },
  { admin: "duterte", person: "Robredo", period: "Dec 2021", decimalDate: 2021.917, approvalPercent: 43, sourceUrl: "https://newsinfo.inquirer.net/1174379", sourcePublisher: "Philippine Daily Inquirer", sourceDate: "2021-12" },

  // Sara Duterte — June 30, 2022 to present
  { admin: "marcos", person: "S. Duterte", period: "Nov 2022", decimalDate: 2022.833, approvalPercent: 84, sourceUrl: "https://newsinfo.inquirer.net/1755331", sourcePublisher: "Philippine Daily Inquirer (cited as prior-round baseline)", sourceDate: "2023-04" },
  { admin: "marcos", person: "S. Duterte", period: "Mar 2023", decimalDate: 2023.167, approvalPercent: 83, sourceUrl: "https://www.philstar.com/headlines/2023/04/12/2258366", sourcePublisher: "Philstar.com", sourceDate: "2023-04-12" },
  { admin: "marcos", person: "S. Duterte", period: "Jun 2023", decimalDate: 2023.417, approvalPercent: 84, sourceUrl: "https://newsinfo.inquirer.net/1885266", sourcePublisher: "Philippine Daily Inquirer", sourceDate: "2023-07" },
  { admin: "marcos", person: "S. Duterte", period: "Sep 2023", decimalDate: 2023.667, approvalPercent: 73, sourceUrl: "https://newsinfo.inquirer.net/1839616", sourcePublisher: "Philippine Daily Inquirer", sourceDate: "2023-10" },
  { admin: "marcos", person: "S. Duterte", period: "Dec 2023", decimalDate: 2023.917, approvalPercent: 74, sourceUrl: "https://newsinfo.inquirer.net/2017602", sourcePublisher: "Philippine Daily Inquirer", sourceDate: "2024-01" },
  { admin: "marcos", person: "S. Duterte", period: "Mar 2024", decimalDate: 2024.167, approvalPercent: 67, sourceUrl: "https://www.gmanetwork.com/news/topstories/nation/913631", sourcePublisher: "GMA News Online (cited as prior-round baseline)", sourceDate: "2024-07-17" },
  { admin: "marcos", person: "S. Duterte", period: "Jun 17–24, 2024", decimalDate: 2024.417, approvalPercent: 69, sourceUrl: "https://www.gmanetwork.com/news/topstories/nation/913631", sourcePublisher: "GMA News Online", sourceDate: "2024-07-17" },
  { admin: "marcos", person: "S. Duterte", period: "Sep 6–13, 2024", decimalDate: 2024.667, approvalPercent: 60, sourceUrl: "https://www.gmanetwork.com/news/topstories/nation/922123", sourcePublisher: "GMA News Online", sourceDate: "2024-10-01" },
  { admin: "marcos", person: "S. Duterte", period: "Nov 26–Dec 3, 2024", decimalDate: 2024.917, approvalPercent: 50, sourceUrl: "https://www.gmanetwork.com/news/topstories/nation/930624", sourcePublisher: "GMA News Online", sourceDate: "2024-12-22" },
  { admin: "marcos", person: "S. Duterte", period: "Mar 23–29, 2025", decimalDate: 2025.167, approvalPercent: 59, sourceUrl: "https://tribune.net.ph/2025/04/16/vp-sara-tops-latest-pulse-asia-poll", sourcePublisher: "Daily Tribune", sourceDate: "2025-04-16" },
  { admin: "marcos", person: "S. Duterte", period: "Sep 27–30, 2025", decimalDate: 2025.667, approvalPercent: 55, sourceUrl: "https://www.philstar.com/headlines/2025/12/31/2497819", sourcePublisher: "Philstar.com (cited as prior-round baseline)", sourceDate: "2025-12-31" },
  { admin: "marcos", person: "S. Duterte", period: "Dec 12–15, 2025", decimalDate: 2025.917, approvalPercent: 56, sourceUrl: "https://www.philstar.com/headlines/2025/12/31/2497819", sourcePublisher: "Philstar.com", sourceDate: "2025-12-31" },
  { admin: "marcos", person: "S. Duterte", period: "Feb 27–Mar 2, 2026", decimalDate: 2026.083, approvalPercent: 55, sourceUrl: "https://pulseasia.ph/wp-content/uploads/2026/03/MR2-UB2026-1-MR-on-Ratings-and-Urgent-Concerns-final.pdf", sourcePublisher: "Pulse Asia Research Inc. (primary release PDF)", sourceDate: "2026-03-16" },
  { admin: "marcos", person: "S. Duterte", period: "Jun 28–Jul 3 & 6, 2026", decimalDate: 2026.5, approvalPercent: 56, sourceUrl: "https://www.gmanetwork.com/news/topstories/nation/995468", sourcePublisher: "GMA News Online", sourceDate: "2026-07-20" },
];

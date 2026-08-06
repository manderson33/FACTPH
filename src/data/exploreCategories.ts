export interface TopicVisualization {
  id: string;
  description: string;
  status: "published" | "coming-soon";
}

export interface ExploreTopic {
  title: string;
  visualization?: TopicVisualization;
}

export interface ExploreCategory {
  slug: string;
  title: string;
  topics: ExploreTopic[];
}

export const exploreCategories: ExploreCategory[] = [
  {
    slug: "cost-of-living-prices",
    title: "Cost of Living and Prices",
    topics: [
      {
        title: "Overall inflation",
        visualization: {
          id: "overall-inflation",
          description:
            "Inflation has been positive every year since 2011 — the full 15-year run of PSA/World Bank headline inflation rates.",
          status: "published",
        },
      },
      {
        title: "Food inflation",
        visualization: {
          id: "food-inflation",
          description:
            "In both confirmed years, food prices rose faster than headline inflation — 7.9% vs 5.98% in 2023, 4.5% vs 3.21% in 2024.",
          status: "published",
        },
      },
      {
        title: "Rice and food prices",
        visualization: {
          id: "rice-food-prices",
          description:
            "Well-milled rice fell after the 2019 tariffication law, then spiked 26% in 2024 — tracked against RA 11203 and the 2023 EO 39 price cap.",
          status: "published",
        },
      },
    ],
  },
  {
    slug: "housing-basic-services",
    title: "Housing and Basic Services",
    topics: [
      {
        title: "Housing ownership and tenure",
        visualization: {
          id: "yolanda-housing",
          description:
            "How three administrations performed on the Yolanda Permanent Housing Program, per COA audit snapshots.",
          status: "published",
        },
      },
    ],
  },
  {
    slug: "business-entrepreneurship",
    title: "Business and Entrepreneurship",
    topics: [
      {
        title: "Consumer and Business Confidence",
        visualization: {
          id: "consumer-business-confidence",
          description:
            "BSP's quarterly confidence indices: businesses have stayed net-optimistic since 2023 while consumers have stayed net-pessimistic.",
          status: "published",
        },
      },
      {
        title: "Foreign direct investment",
        visualization: {
          id: "fdi-by-administration",
          description:
            "Net FDI inflows across Aquino III, Duterte, and Marcos Jr. — BSP's own published annual balance-of-payments figures, 2010 to present.",
          status: "published",
        },
      },
    ],
  },
  {
    slug: "culture-tourism",
    title: "Culture and Tourism",
    topics: [
      {
        title: "Real tourism growth",
        visualization: {
          id: "tourism-growth",
          description:
            "Foreign visitor arrivals collapsed 98% in 2021, then took four years to fully recover — Aquino III, Duterte, and Marcos Jr. compared, 2010 to present.",
          status: "published",
        },
      },
      {
        title: "Arrivals by nationality",
        visualization: {
          id: "tourism-nationality",
          description:
            "South Korea and the United States accounted for 4 in 10 foreign visitor arrivals in 2025 — the top 10 source markets, DTI's own published breakdown.",
          status: "published",
        },
      },
    ],
  },
  {
    slug: "politics-public-opinion",
    title: "Politics and Public Opinion",
    topics: [
      {
        title: "Presidential approval ratings",
        visualization: {
          id: "presidential-approval-ratings",
          description:
            "Pulse Asia's own Approval Rating for Aquino III, Duterte and Marcos Jr., from inauguration to the most recent survey.",
          status: "published",
        },
      },
      {
        title: "Vice presidential approval ratings",
        visualization: {
          id: "vp-approval-ratings",
          description:
            "Pulse Asia's own Approval Rating for Binay, Robredo and Sara Duterte, from inauguration to the most recent survey.",
          status: "published",
        },
      },
      {
        title: "Presidential net satisfaction ratings",
        visualization: {
          id: "presidential-net-satisfaction",
          description:
            "SWS's own Net Satisfaction Rating for Aquino III, Duterte and Marcos Jr., from inauguration to the most recent survey.",
          status: "published",
        },
      },
      {
        title: "Vice presidential net satisfaction ratings",
        visualization: {
          id: "vp-net-satisfaction",
          description:
            "SWS's own Net Satisfaction Rating for Binay, Robredo and Sara Duterte, from inauguration to the most recent survey.",
          status: "published",
        },
      },
    ],
  },
  {
    slug: "crime-safety",
    title: "Crime and Safety",
    topics: [
      {
        title: "Juvenile Crime in the Philippines",
        visualization: {
          id: "juvenile-crime",
          description:
            "PNP-recorded cases of children in conflict with the law, 2016–2025 — cases fell from 26,850 in 2017 to 4,383 in 2024, then rose again to 8,654 in 2025.",
          status: "published",
        },
      },
    ],
  },
  {
    slug: "health",
    title: "Health",
    topics: [
      {
        title: "PhilHealth government subsidy",
        visualization: {
          id: "philhealth-subsidy",
          description:
            "PhilHealth's own published figures: government subsidy held near ₱60-80B a year through 2023, then collapsed to ₱40.35B in 2024 and effectively zero in 2025.",
          status: "published",
        },
      },
    ],
  },
];

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
            "Food prices have outpaced headline inflation in 5 of the last 7 years — PSA's own published annual averages, 2019 to 2025.",
          status: "published",
        },
      },
      {
        title: "Rice and food prices",
        visualization: {
          id: "rice-food-prices",
          description:
            "Well-milled rice fell after the 2019 tariffication law to a low of ₱43.36/kg in 2021, then jumped roughly 25% by December 2023 — PSA's own figures, 2015 to 2024.",
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
    slug: "economy",
    title: "Economy",
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
      {
        title: "National government debt",
        visualization: {
          id: "national-debt",
          description:
            "The National Government's outstanding debt nearly quadrupled from ₱4.72 trillion in 2010 to ₱17.71 trillion in 2025, per the Bureau of the Treasury's own year-end figures.",
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
            "From ₱5.17B under Aquino III to zero under Congress's 2025 cut, rebounding to ₱69.78B for 2026 — excluding the separate ₱60B the Supreme Court ordered returned to PhilHealth.",
          status: "published",
        },
      },
    ],
  },
  {
    slug: "infrastructure",
    title: "Infrastructure",
    topics: [
      {
        title: "DPWH enacted budget",
        visualization: {
          id: "dpwh-budget",
          description:
            "DPWH's enacted budget grew from ₱100.8B in 2011 to a peak of ₱1.11 trillion in 2025, then was cut nearly in half to ₱529.6B for 2026 after the flood-control corruption scandal.",
          status: "published",
        },
      },
    ],
  },
];

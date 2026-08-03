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
    slug: "population-demographics",
    title: "Population and Demographics",
    topics: [
      { title: "Population size and growth" },
      { title: "Age and sex distribution" },
      { title: "Household size" },
      { title: "Births and deaths" },
      { title: "Life expectancy" },
      { title: "Population density" },
      { title: "Urban and rural population" },
      { title: "Internal migration" },
    ],
  },
  {
    slug: "cost-of-living-prices",
    title: "Cost of Living and Prices",
    topics: [
      { title: "Overall inflation" },
      { title: "Food inflation" },
      { title: "Consumer Price Index" },
      { title: "Purchasing power of the peso" },
      { title: "Rice and food prices" },
      { title: "Fuel prices" },
      { title: "Electricity and water rates" },
      { title: "Transportation costs" },
      { title: "Housing and rental costs" },
    ],
  },
  {
    slug: "jobs-wages-employment",
    title: "Jobs, Wages and Employment",
    topics: [
      { title: "Employment" },
      { title: "Unemployment" },
      { title: "Underemployment" },
      { title: "Labor-force participation" },
      { title: "Average wages" },
      { title: "Minimum wages" },
      { title: "Real wage growth" },
      { title: "Employment by industry" },
      { title: "Youth employment" },
      { title: "Informal employment" },
    ],
  },
  {
    slug: "income-poverty-inequality",
    title: "Income, Poverty and Inequality",
    topics: [
      {
        title: "Poverty incidence",
        visualization: {
          id: "poverty-inflation",
          description: "Comparing poverty reduction across administrations against annual inflation.",
          status: "coming-soon",
        },
      },
      { title: "Number of poor Filipinos" },
      { title: "Subsistence incidence" },
      { title: "Poverty and food thresholds" },
      { title: "Average and median family income" },
      { title: "Family expenditure" },
      { title: "Income inequality" },
      { title: "Regional income differences" },
    ],
  },
  {
    slug: "education-learning",
    title: "Education and Learning",
    topics: [
      { title: "School enrollment" },
      { title: "School participation" },
      { title: "Completion and graduation" },
      { title: "Dropout rates" },
      { title: "Literacy and functional literacy" },
      { title: "Learning outcomes" },
      { title: "Teachers and classrooms" },
      { title: "Student–teacher ratio" },
      { title: "Access to higher education" },
      { title: "Technical and vocational education" },
    ],
  },
  {
    slug: "health-nutrition",
    title: "Health and Nutrition",
    topics: [
      { title: "Life expectancy" },
      { title: "Leading causes of death" },
      { title: "Maternal and infant mortality" },
      { title: "Child malnutrition" },
      { title: "Communicable diseases" },
      { title: "Noncommunicable diseases" },
      { title: "Mental health" },
      { title: "Health facilities and hospital beds" },
      { title: "Doctors, nurses and health workers" },
      {
        title: "Health insurance coverage",
        visualization: {
          id: "philhealth-subsidy",
          description: "Annual government subsidy to PhilHealth, 2010–2026.",
          status: "coming-soon",
        },
      },
    ],
  },
  {
    slug: "food-agriculture",
    title: "Food and Agriculture",
    topics: [
      { title: "Food production" },
      { title: "Rice production and supply" },
      { title: "Farmgate and retail prices" },
      { title: "Agricultural employment and wages" },
      { title: "Crop and livestock production" },
      { title: "Fisheries" },
      { title: "Agricultural imports and exports" },
      { title: "Food security" },
      { title: "Farm losses from disasters" },
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
      { title: "Housing affordability" },
      { title: "Informal settlements" },
      { title: "Overcrowding" },
      { title: "Electricity access" },
      { title: "Safe drinking water" },
      { title: "Sanitation" },
      { title: "Waste collection" },
      { title: "Household amenities" },
    ],
  },
  {
    slug: "transportation-mobility",
    title: "Transportation and Mobility",
    topics: [
      { title: "Public transportation" },
      { title: "Traffic and travel time" },
      { title: "Road density and condition" },
      { title: "Vehicle registrations" },
      { title: "Road accidents" },
      { title: "Rail, air and sea passengers" },
      { title: "Transport fares" },
      { title: "Walking and cycling infrastructure" },
    ],
  },
  {
    slug: "energy-electricity",
    title: "Energy and Electricity",
    topics: [
      { title: "Electricity rates" },
      { title: "Household electrification" },
      { title: "Electricity consumption" },
      { title: "Power demand and supply" },
      { title: "Power interruptions" },
      { title: "Generation capacity" },
      { title: "Energy sources" },
      { title: "Renewable-energy share" },
      { title: "Petroleum and LPG prices" },
    ],
  },
  {
    slug: "technology-digital-access",
    title: "Technology and Digital Access",
    topics: [
      { title: "Household internet access" },
      { title: "Mobile and fixed broadband" },
      { title: "Internet speed" },
      { title: "Internet affordability" },
      { title: "Computer and smartphone ownership" },
      { title: "Mobile subscriptions" },
      { title: "Digital payments" },
      { title: "Digital literacy" },
      { title: "Regional connectivity gaps" },
    ],
  },
  {
    slug: "environment-natural-resources",
    title: "Environment and Natural Resources",
    topics: [
      { title: "Air quality" },
      { title: "Water quality" },
      { title: "Forest cover" },
      { title: "Land use" },
      { title: "Solid waste" },
      { title: "Plastic waste" },
      { title: "Coastal and marine resources" },
      { title: "Biodiversity" },
      { title: "Protected areas" },
      { title: "Carbon emissions" },
    ],
  },
  {
    slug: "weather-climate-disasters",
    title: "Weather, Climate and Disasters",
    topics: [
      { title: "Temperature and rainfall" },
      { title: "Tropical cyclones" },
      { title: "Floods and landslides" },
      { title: "Earthquakes and volcanic activity" },
      { title: "Extreme heat" },
      { title: "People affected by disasters" },
      { title: "Deaths and injuries" },
      { title: "Economic and agricultural damage" },
      { title: "Community hazard exposure" },
    ],
  },
  {
    slug: "business-entrepreneurship",
    title: "Business and Entrepreneurship",
    topics: [
      {
        title: "Business Revenues",
        visualization: {
          id: "business-revenue",
          description:
            "Total revenue of all formal-sector establishments grew from ₱18.70 trillion in 2020 to ₱23.57 trillion in 2022, per PSA's ASPBI.",
          status: "published",
        },
      },
      {
        title: "Access to Business Finance",
        visualization: {
          id: "business-finance-access",
          description:
            "Bank lending to MSMEs rose to ₱574.8 billion in 2025, but its share of total bank loans keeps shrinking, per BSP.",
          status: "published",
        },
      },
      {
        title: "Consumer and Business Confidence",
        visualization: {
          id: "consumer-business-confidence",
          description:
            "BSP's quarterly confidence indices: businesses have stayed net-optimistic since 2023 while consumers have stayed net-pessimistic.",
          status: "published",
        },
      },
    ],
  },
  {
    slug: "personal-finance-financial-inclusion",
    title: "Personal Finance and Financial Inclusion",
    topics: [
      { title: "Bank and financial accounts" },
      { title: "Savings" },
      { title: "Household debt" },
      { title: "Access to credit" },
      { title: "Interest rates" },
      { title: "Insurance" },
      { title: "Digital financial services" },
      { title: "Remittances" },
      { title: "Financial literacy" },
      { title: "Financial resilience" },
    ],
  },
  {
    slug: "overseas-filipinos-migration",
    title: "Overseas Filipinos and Migration",
    topics: [
      { title: "Number of overseas Filipinos" },
      { title: "OFW deployment" },
      { title: "Countries of destination" },
      { title: "Occupations" },
      { title: "Remittance flows" },
      { title: "Regional origins" },
      { title: "Returning OFWs" },
      { title: "Reasons for migration" },
      { title: "Use of remittances" },
    ],
  },
  {
    slug: "public-safety-crime",
    title: "Public Safety and Crime",
    topics: [
      { title: "Reported crime" },
      { title: "Crime rates" },
      { title: "Road safety" },
      { title: "Fire incidents" },
      { title: "Violence against women and children" },
      { title: "Disaster-related safety" },
      { title: "Emergency-response availability" },
      { title: "Cybercrime and online fraud" },
    ],
  },
  {
    slug: "culture-tourism-quality-of-life",
    title: "Culture, Tourism and Quality of Life",
    topics: [
      { title: "Domestic and international tourism" },
      { title: "Tourist destinations" },
      { title: "Visitor spending" },
      { title: "Recreation and public spaces" },
      { title: "Museums and heritage sites" },
      { title: "Sports participation" },
      { title: "Time use" },
      { title: "Life satisfaction" },
      { title: "Work–life balance" },
    ],
  },
  {
    slug: "politics-public-opinion",
    title: "Politics and Public Opinion",
    topics: [
      { title: "Approval and Trust Ratings" },
      { title: "Elections and Voter Preferences" },
      { title: "Public Opinion on Issues" },
      { title: "Political Institutions" },
      { title: "Political Profiles and Records" },
      { title: "Survey Analysis and Methodology" },
    ],
  },
];

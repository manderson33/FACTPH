export interface RegionElectoralData {
  pcode: string;
  name: string;
  shortName: string;
  islandGroup: "Luzon" | "Visayas" | "Mindanao";
  registeredVoters: number;
  votersWhoVoted: number;
  turnoutPct: number;
}

// Source: COMELEC, Records and Statistics Division (ERSD), "Number and Turn-Out
// of Registered Voters and Voters Who Actually Voted" for the May 12, 2025
// National and Local Elections, snapshot as of August 2025. Regional figures are
// COMELEC's own subtotals and independently reconcile, province-by-province, to
// the national total of 68,431,965 (domestic/Local AES) reported in the same
// document.
export const electoralData: RegionElectoralData[] = [
  {
    pcode: "PH130000000",
    name: "National Capital Region",
    shortName: "NCR",
    islandGroup: "Luzon",
    registeredVoters: 7563520,
    votersWhoVoted: 6040069,
    turnoutPct: 79.86,
  },
  {
    pcode: "PH140000000",
    name: "Cordillera Administrative Region",
    shortName: "CAR",
    islandGroup: "Luzon",
    registeredVoters: 1105063,
    votersWhoVoted: 946327,
    turnoutPct: 85.64,
  },
  {
    pcode: "PH010000000",
    name: "Region I – Ilocos Region",
    shortName: "Region I",
    islandGroup: "Luzon",
    registeredVoters: 3633900,
    votersWhoVoted: 3178310,
    turnoutPct: 87.46,
  },
  {
    pcode: "PH020000000",
    name: "Region II – Cagayan Valley",
    shortName: "Region II",
    islandGroup: "Luzon",
    registeredVoters: 2358587,
    votersWhoVoted: 2000940,
    turnoutPct: 84.84,
  },
  {
    pcode: "PH030000000",
    name: "Region III – Central Luzon",
    shortName: "Region III",
    islandGroup: "Luzon",
    registeredVoters: 7699404,
    votersWhoVoted: 6527627,
    turnoutPct: 84.78,
  },
  {
    pcode: "PH040000000",
    name: "Region IV-A – CALABARZON",
    shortName: "CALABARZON",
    islandGroup: "Luzon",
    registeredVoters: 9714079,
    votersWhoVoted: 7849709,
    turnoutPct: 80.81,
  },
  {
    pcode: "PH170000000",
    name: "Region IV-B – MIMAROPA",
    shortName: "MIMAROPA",
    islandGroup: "Luzon",
    registeredVoters: 2055827,
    votersWhoVoted: 1704649,
    turnoutPct: 82.92,
  },
  {
    pcode: "PH050000000",
    name: "Region V – Bicol Region",
    shortName: "Region V",
    islandGroup: "Luzon",
    registeredVoters: 4053977,
    votersWhoVoted: 3450811,
    turnoutPct: 85.12,
  },
  {
    pcode: "PH060000000",
    name: "Region VI – Western Visayas",
    shortName: "Region VI",
    islandGroup: "Visayas",
    registeredVoters: 3128562,
    votersWhoVoted: 2686216,
    turnoutPct: 85.86,
  },
  {
    pcode: "PH180000000",
    name: "Negros Island Region",
    shortName: "NIR",
    islandGroup: "Visayas",
    registeredVoters: 3059321,
    votersWhoVoted: 2585766,
    turnoutPct: 84.52,
  },
  {
    pcode: "PH070000000",
    name: "Region VII – Central Visayas",
    shortName: "Region VII",
    islandGroup: "Visayas",
    registeredVoters: 4389344,
    votersWhoVoted: 3797086,
    turnoutPct: 86.51,
  },
  {
    pcode: "PH080000000",
    name: "Region VIII – Eastern Visayas",
    shortName: "Region VIII",
    islandGroup: "Visayas",
    registeredVoters: 3259554,
    votersWhoVoted: 2747755,
    turnoutPct: 84.30,
  },
  {
    pcode: "PH090000000",
    name: "Region IX – Zamboanga Peninsula",
    shortName: "Region IX",
    islandGroup: "Mindanao",
    registeredVoters: 2869368,
    votersWhoVoted: 2384181,
    turnoutPct: 83.09,
  },
  {
    pcode: "PH100000000",
    name: "Region X – Northern Mindanao",
    shortName: "Region X",
    islandGroup: "Mindanao",
    registeredVoters: 3179252,
    votersWhoVoted: 2731299,
    turnoutPct: 85.91,
  },
  {
    pcode: "PH110000000",
    name: "Region XI – Davao Region",
    shortName: "Region XI",
    islandGroup: "Mindanao",
    registeredVoters: 3376470,
    votersWhoVoted: 2779125,
    turnoutPct: 82.31,
  },
  {
    pcode: "PH120000000",
    name: "Region XII – SOCCSKSARGEN",
    shortName: "Region XII",
    islandGroup: "Mindanao",
    registeredVoters: 2701992,
    votersWhoVoted: 2200890,
    turnoutPct: 81.45,
  },
  {
    pcode: "PH160000000",
    name: "Region XIII – Caraga",
    shortName: "Caraga",
    islandGroup: "Mindanao",
    registeredVoters: 1904917,
    votersWhoVoted: 1613102,
    turnoutPct: 84.68,
  },
  {
    pcode: "PH150000000",
    name: "Bangsamoro Autonomous Region in Muslim Mindanao",
    shortName: "BARMM",
    islandGroup: "Mindanao",
    registeredVoters: 2378828,
    votersWhoVoted: 1846549,
    turnoutPct: 77.62,
  },
];

export const nationalElectoralTotals = {
  registeredVotersDomestic: 68431965,
  registeredVotersOverseas: 1241688,
  registeredVotersGrandTotal: 69673653,
  votersWhoVotedDomestic: 57070411,
  turnoutPctDomestic: 83.40,
};

export const electoralSources = [
  {
    title: "Number and Turn-Out of Registered Voters and Voters Who Actually Voted — May 12, 2025 National and Local Elections",
    url: "https://www.comelec.gov.ph/php-tpls-attachments/2025NLE/Statistics/2025_NLE_VotersTurnoutbyCityMun_OFOV_112525.pdf",
    publisher: "Commission on Elections, Records and Statistics Division (ERSD)",
    date: "As of August 2025",
    sourceType: "primary" as const,
  },
];

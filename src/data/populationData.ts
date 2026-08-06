export type IslandGroup = "Luzon" | "Visayas" | "Mindanao";

export interface RegionPopulation {
  pcode: string;
  name: string;
  shortName: string;
  islandGroup: IslandGroup;
  population: number;
}

// Source: Philippine Statistics Authority, 2024 Census of Population and Housing
// (2024 POPCEN), population counts declared official via Proclamation No. 973
// (July 11, 2025). National total: 112,729,484. The 18 regional figures below sum
// to 112,727,776 — a 1,708-person (0.0015%) residual versus the official national
// total, consistent with PSA's own unreported/institutional population not
// attributed to a specific region.
export const populationByRegion: RegionPopulation[] = [
  { pcode: "PH130000000", name: "National Capital Region", shortName: "NCR", islandGroup: "Luzon", population: 14001751 },
  { pcode: "PH140000000", name: "Cordillera Administrative Region", shortName: "CAR", islandGroup: "Luzon", population: 1808985 },
  { pcode: "PH010000000", name: "Region I – Ilocos Region", shortName: "Region I", islandGroup: "Luzon", population: 5342453 },
  { pcode: "PH020000000", name: "Region II – Cagayan Valley", shortName: "Region II", islandGroup: "Luzon", population: 3777608 },
  { pcode: "PH030000000", name: "Region III – Central Luzon", shortName: "Region III", islandGroup: "Luzon", population: 12989074 },
  { pcode: "PH040000000", name: "Region IV-A – CALABARZON", shortName: "CALABARZON", islandGroup: "Luzon", population: 16933234 },
  { pcode: "PH170000000", name: "Region IV-B – MIMAROPA", shortName: "MIMAROPA", islandGroup: "Luzon", population: 3245446 },
  { pcode: "PH050000000", name: "Region V – Bicol Region", shortName: "Region V", islandGroup: "Luzon", population: 6064426 },
  { pcode: "PH060000000", name: "Region VI – Western Visayas", shortName: "Region VI", islandGroup: "Visayas", population: 4861911 },
  { pcode: "PH180000000", name: "Negros Island Region", shortName: "NIR", islandGroup: "Visayas", population: 4904944 },
  { pcode: "PH070000000", name: "Region VII – Central Visayas", shortName: "Region VII", islandGroup: "Visayas", population: 6640875 },
  { pcode: "PH080000000", name: "Region VIII – Eastern Visayas", shortName: "Region VIII", islandGroup: "Visayas", population: 4625929 },
  { pcode: "PH090000000", name: "Region IX – Zamboanga Peninsula", shortName: "Region IX", islandGroup: "Mindanao", population: 5089934 },
  { pcode: "PH100000000", name: "Region X – Northern Mindanao", shortName: "Region X", islandGroup: "Mindanao", population: 5178326 },
  { pcode: "PH110000000", name: "Region XI – Davao Region", shortName: "Region XI", islandGroup: "Mindanao", population: 5389422 },
  { pcode: "PH120000000", name: "Region XII – SOCCSKSARGEN", shortName: "Region XII", islandGroup: "Mindanao", population: 4462776 },
  { pcode: "PH160000000", name: "Region XIII – Caraga", shortName: "Caraga", islandGroup: "Mindanao", population: 2865196 },
  { pcode: "PH150000000", name: "Bangsamoro Autonomous Region in Muslim Mindanao", shortName: "BARMM", islandGroup: "Mindanao", population: 4545486 },
];

export const nationalPopulationTotal = 112729484;

// Note: PSA publishes population per-region only — no single Luzon/Visayas/
// Mindanao island-group total exists as a directly published figure, so no
// island-group breakdown is provided here rather than summing regions ourselves.

export interface LandAreaShare {
  region: string;
  areaKm2: number;
}

export const landAreaByRegionGroup: LandAreaShare[] = [
  { region: "Luzon", areaKm2: 141395 },
  { region: "Visayas", areaKm2: 56606 },
  { region: "Mindanao", areaKm2: 102000 },
];

export interface IslandGroupPopulation {
  group: string;
  population: number;
}

export const populationByIslandGroup: IslandGroupPopulation[] = [
  { group: "Luzon", population: 57500000 },
  { group: "Visayas", population: 21200000 },
  { group: "Mindanao", population: 26400000 },
];

export interface LandAreaShare {
  region: string;
  areaKm2: number;
}

export const landAreaByRegionGroup: LandAreaShare[] = [
  { region: "Luzon", areaKm2: 141395 },
  { region: "Visayas", areaKm2: 56606 },
  { region: "Mindanao", areaKm2: 102000 },
];
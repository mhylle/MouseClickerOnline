import {SpawnerType} from "./spawner/SpawnerType";
export interface Spawner {
  name: string;
  mps: number[];
  cost: number[];
  costFactor: number;
  productionFactor: number;
  type: SpawnerType;
  avatar?: string;
  critrate: number,
  critDamage: number
}

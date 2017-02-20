import {Spawner} from "../Spawner";
export interface User {
  id: string;
  name: string;
  score: number[];
  items?: {amount: number, spawner: Spawner}[];
}

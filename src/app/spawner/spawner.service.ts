import {Injectable} from '@angular/core';
import {Spawner} from "../Spawner";

@Injectable()
export class SpawnerService {
  private _spawners: Spawner[];
  private _units: string[];

  constructor() {
    this._spawners = [{
      name: 'S1',
      mps: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      cost: [10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      costFactor: 1.01,
      productionFactor: 1.25
    }, {
      name: 'S2',
      mps: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      cost: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      costFactor: 1.3,
      productionFactor: 1.2
    }, {
      name: 'S3',
      mps: [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      cost: [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      costFactor: 1.3,
      productionFactor: 1.2
    }, {
      name: 'S4',
      mps: [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
      cost: [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
      costFactor: 1.3,
      productionFactor: 1.2
    }, {
      name: 'S5',
      mps: [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
      cost: [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
      costFactor: 1.3,
      productionFactor: 1.2
    }, {
      name: 'S6',
      mps: [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
      cost: [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
      costFactor: 1.3,
      productionFactor: 1.2
    }, {
      name: 'S7',
      mps: [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
      cost: [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
      costFactor: 1.3,
      productionFactor: 1.2
    }, {
      name: 'S8',
      mps: [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
      cost: [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
      costFactor: 1.3,
      productionFactor: 1.2
    }, {
      name: 'S9',
      mps: [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
      cost: [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
      costFactor: 1.3,
      productionFactor: 1.2
    }, {
      name: 'S10',
      mps: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
      cost: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
      costFactor: 1.3,
      productionFactor: 1.2
    }, {
      name: 'S11',
      mps: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
      cost: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
      costFactor: 1.3,
      productionFactor: 1.2
    }, {
      name: 'S12',
      mps: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      cost: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      costFactor: 1.3,
      productionFactor: 1.2
    }];

    this._units = ["", "Kilo", "Mega", "Giga", "Tera", "Peta", "Quadra", "Penta", "Octa", "Supra", "Incra", "Wowsa"];
  }

  get spawners(): Spawner[] {
    return this._spawners;
  }

  get units() {
    return this._units;
  }

}

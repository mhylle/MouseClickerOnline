import {Injectable} from '@angular/core';
import {Spawner} from "../Spawner";

@Injectable()
export class SpawnerService {
  private _spawners: Spawner[];

  constructor() {
    this._spawners = [{
      name: 'S1',
      mps: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      cost: [15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      costFactor: 1.16,
      productionFactor: 1.05
    }, {
      name: 'S2',
      mps: [10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      cost: [100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      costFactor: 1.16,
      productionFactor: 1.05
    }, {
      name: 'S3',
      mps: [100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      cost: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      costFactor: 1.16,
      productionFactor: 1.05
    }, {
      name: 'S4',
      mps: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      cost: [0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      costFactor: 1.15,
      productionFactor: 1.14
    }, {
      name: 'S5',
      mps: [0, 250, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      cost: [0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      costFactor: 1.2,
      productionFactor: 1.15
    }, {
      name: 'S6',
      mps: [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      cost: [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
      costFactor: 1.13,
      productionFactor: 1.12
    }, {
      name: 'S7',
      mps: [0, 0, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      cost: [0, 0, 0, 500, 0, 0, 0, 0, 0, 0, 0, 0],
      costFactor: 1.13,
      productionFactor: 1.12
    }, {
      name: 'S8',
      mps: [0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0],
      cost: [0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0],
      costFactor: 1.13,
      productionFactor: 1.12
    }, {
      name: 'S9',
      mps: [0, 0, 0, 0, 250, 0, 0, 0, 0, 0, 0, 0],
      cost: [0, 0, 0, 0, 500, 0, 0, 0, 0, 0, 0, 0],
      costFactor: 1.13,
      productionFactor: 1.12
    }, {
      name: 'S10',
      mps: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
      cost: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
      costFactor: 1.13,
      productionFactor: 1.12
    }, {
      name: 'S11',
      mps: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
      cost: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
      costFactor: 1.13,
      productionFactor: 1.12
    }, {
      name: 'S12',
      mps: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      cost: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      costFactor: 1.13,
      productionFactor: 1.12
    }];


  }

  get spawners(): Spawner[] {
    return this._spawners;
  }
}

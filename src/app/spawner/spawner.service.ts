import {Injectable} from "@angular/core";
import {Spawner} from "../Spawner";
import {SpawnerType} from "./SpawnerType";

@Injectable()
export class SpawnerService {
  private _spawners: Spawner[];

  constructor() {
    this._spawners = [{
      name: 'Mousetrap A',
      mps: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      cost: [15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      costFactor: 1.16,
      productionFactor: 1.05,
      type: SpawnerType.TRAP,
      avatar: 'mousetrap_001.gif',
      critrate: 0.25,
      critDamage: 2.00
    }, {
      name: 'Mousetrap B',
      mps: [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      cost: [15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      costFactor: 1.16,
      productionFactor: 1.05,
      type: SpawnerType.TRAP,
      critrate: 0.01,
      critDamage: 1.25
    }, {
      name: 'S3',
      mps: [100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      cost: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      costFactor: 1.16,
      type: SpawnerType.FEEDER,
      productionFactor: 1.05,
      critrate: 0,
      critDamage: 2.00
    }, {
      name: 'S4',
      mps: [80, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      cost: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      costFactor: 1.15,
      type: SpawnerType.FEEDER,
      productionFactor: 1.14,
      critrate: 0.01,
      critDamage: 1.25
    }, {
      name: 'S5',
      mps: [0, 250, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      cost: [0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      costFactor: 1.2,
      type: SpawnerType.PETTING,
      productionFactor: 1.15,
      critrate: 0,
      critDamage: 2.00
    }, {
      name: 'S6',
      mps: [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      cost: [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
      costFactor: 1.13,
      type: SpawnerType.PETTING,
      productionFactor: 1.12,
      critrate: 0.01,
      critDamage: 1.25
    }, {
      name: 'S7',
      mps: [0, 0, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      cost: [0, 0, 0, 500, 0, 0, 0, 0, 0, 0, 0, 0],
      costFactor: 1.13,
      type: SpawnerType.MORPHER,
      productionFactor: 1.12,
      critrate: 0,
      critDamage: 2.00
    }, {
      name: 'S8',
      mps: [0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0],
      cost: [0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0],
      costFactor: 1.13,
      type: SpawnerType.MORPHER,
      productionFactor: 1.12,
      critrate: 0.01,
      critDamage: 1.25
    }, {
      name: 'S9',
      mps: [0, 0, 0, 0, 250, 0, 0, 0, 0, 0, 0, 0],
      cost: [0, 0, 0, 0, 500, 0, 0, 0, 0, 0, 0, 0],
      costFactor: 1.13,
      type: SpawnerType.UTILITY,
      productionFactor: 1.12,
      critrate: 0,
      critDamage: 2.00
    }, {
      name: 'S10',
      mps: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
      cost: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
      costFactor: 1.13,
      type: SpawnerType.UTILITY,
      productionFactor: 1.12,
      critrate: 0.01,
      critDamage: 1.25
    }, {
      name: 'S11',
      mps: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
      cost: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
      costFactor: 1.13,
      type: SpawnerType.MULTIPLIER,
      productionFactor: 1.12,
      critrate: 0,
      critDamage: 2.00
    }, {
      name: 'S12',
      mps: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      cost: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      costFactor: 1.13,
      type: SpawnerType.MULTIPLIER,
      productionFactor: 1.12,
      critrate: 0.01,
      critDamage: 1.25
    }];


  }

  get spawners(): Spawner[] {
    return this._spawners;
  }
}

import {Component, OnInit} from "@angular/core";
import {ShopService} from "./shop.service";
import {Spawner} from "../Spawner";
import {SpawnerService} from "../spawner/spawner.service";
import {UserService} from "../services/user.service";
import {ScoreService} from "../services/score.service";
import {NumbersService} from "../services/numbers.service";
import {SpawnerType} from "../spawner/SpawnerType";

@Component({
  selector: 'shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
  providers: [ShopService]
})
export class ShopComponent implements OnInit {
  private spawners: Spawner[];
  private spawnerTypes: string[];
  selectedSpawners: Spawner[];
  private selectedSpawnerType: SpawnerType;

  constructor(private shopService: ShopService, private spawnerService: SpawnerService, private userService: UserService, private scoreService: ScoreService) {
    this.spawnerTypes = EnumEx.getNames(SpawnerType);
  }

  ngOnInit() {
    this.spawners = this.spawnerService.spawners;
  }

  convertToCost(spawner: Spawner) {
    return this.shopService.getUnit(spawner);
  }

  purchase(spawner: Spawner) {
    this.shopService.purchase(spawner);
  }

  owned(spawner: Spawner) {
    if (this.userService.user.items) {
      for (let i = 0; i < this.userService.user.items.length; i++) {
        let obj = this.userService.user.items[i];
        if (spawner == obj.spawner) {
          return obj.amount;
        }
      }
    }
    return 0;
  }

  mps(spawner: Spawner) {
    if (this.userService.user.items) {
      for (let i = 0; i < this.userService.user.items.length; i++) {
        let obj = this.userService.user.items[i];
        if (spawner == obj.spawner) {
          return NumbersService.toMostSignificant(this.scoreService.calculateMps(obj.amount, spawner));
        }
      }
    }

    return NumbersService.toMostSignificant(spawner.mps);
  }

  canAfford(spawner: Spawner) {
    let cost = this.shopService.calculateCost(this.userService.user, spawner);
    for (let i = cost.length - 1; i >= 0; i--) {
      if (this.userService.user.score && this.userService.user.score[i] > 0) {
        if (cost[i] == 0) {
          return false;
        }
        if (cost[i] <= this.userService.user.score[i]) {
          return false;
        }
      }

      if (cost[i] > 0) {
        return true;
      }
    }
    return true;
  }

  toggleSpawners(spawnerType: SpawnerType) {

    if (this.selectedSpawners) {
      if (this.selectedSpawnerType.toString() === spawnerType.toString()) {
        this.selectedSpawners = null;
        return;
      }
    }
    this.selectedSpawners = [];
    this.selectedSpawnerType = spawnerType;
    for (let i = 0; i < this.spawners.length; i++) {
      let spawner = this.spawners[i];
      if (SpawnerType[spawner.type] === spawnerType.toString()) {
        this.selectedSpawners.push(spawner);
      }
    }
  }

  hideSpawners() {
    this.selectedSpawners = null;
  }

}
class EnumEx {
  static getNamesAndValues<T extends number>(e: any) {
    return EnumEx.getNames(e).map(n => ({name: n, value: e[n] as T}));
  }

  static getNames(e: any) {
    return EnumEx.getObjValues(e).filter(v => typeof v === "string") as string[];
  }

  static getValues<T extends number>(e: any) {
    return EnumEx.getObjValues(e).filter(v => typeof v === "number") as T[];
  }

  static getObjValues(e: any): (number|string)[] {
    return Object.keys(e).map(k => e[k]);
  }
}

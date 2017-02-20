import {Injectable} from "@angular/core";
import {Spawner} from "../Spawner";
import {SpawnerService} from "../spawner/spawner.service";
import {UserService} from "../services/user.service";
import {ScoreService} from "../services/score.service";

@Injectable()
export class ShopService {


  constructor(private spawnerService: SpawnerService, private userService: UserService, private scoreService: ScoreService) {

  }

  getUnit(spawner: Spawner) {
    for (let i = 0; i < spawner.cost.length; i++) {
      if (spawner.cost[i] > 0) {
        return Math.floor(spawner.cost[i]) + " " + this.spawnerService.units[i];
      }
    }
  }

  purchase(spawner: Spawner) {
    let user = this.userService.user;
    if (user.items) {
      let items = user.items;
      for (let i = 0; i < items.length; i++) {
        let obj = items[i];
        if (obj.spawner === spawner) {
          obj.amount += 1;
          if (obj.amount > 1) {
            let costFactor = 1;
            for (let j = 1; j < obj.amount; j++) {
              costFactor *= spawner.costFactor;
            }
            let tmpCost = spawner.cost;
            for (let j = 0; j < tmpCost.length; j++) {
              tmpCost[j] *= costFactor;
              if (tmpCost[j] > 999) {
                tmpCost[j] = tmpCost[j] - 1000;
                if (j < tmpCost.length - 1) {
                  tmpCost[j + 1] += 1;
                }
              }
            }
            this.scoreService.decrementScore(tmpCost);
          } else {
            this.scoreService.decrementScore(spawner.cost);
          }
        }
      }
    } else {
      user.items = [];
    }
  }
}

import {Injectable} from "@angular/core";
import {Spawner} from "../Spawner";
import {SpawnerService} from "../spawner/spawner.service";
import {UserService} from "../services/user.service";
import {ScoreService} from "../services/score.service";
import {NumbersService} from "../services/numbers.service";
import {User} from "../user/User";

@Injectable()
export class ShopService {


  constructor(private spawnerService: SpawnerService, private userService: UserService, private scoreService: ScoreService) {

  }

  getUnit(spawner: Spawner) {
    let user = this.userService.user;
    let cost = this.calculateCost(user, spawner);
    for (let i = 0; i < cost.length; i++) {
      if (cost[i] > 0) {
        return Math.floor(cost[i]) + " " + this.spawnerService.units[i];
      }
    }
  }

  calculateCost(user: User, spawner: Spawner) {
    let cost = spawner.cost;
    if (user.items) {
      let items = user.items;
      for (let i = 0; i < items.length; i++) {
        let obj = items[i];
        if (obj.spawner === spawner) {
          let factor = 1;
          if (obj.amount > 0) {
            for (let j = 1; j < obj.amount; j++) {
              factor = factor * obj.spawner.costFactor;
            }
          }
          cost =  NumbersService.multiply(obj.spawner.cost, factor);
        }
      }
    }
    return cost;
  }

  purchase(spawner: Spawner) {
    let user = this.userService.user;
    if (user.items) {
      let items = user.items;
      let foundItem : boolean = false;
      for (let i = 0; i < items.length; i++) {
        let obj = items[i];
        if (obj.spawner === spawner) {
          this.scoreService.decrementScore(this.calculateCost(user, spawner));
          obj.amount += 1;
          foundItem = true;
        }
      }
      if (!foundItem) {
        this.scoreService.decrementScore(spawner.cost);
        user.items = [{amount: 1, spawner: spawner}];
      }
    } else {
      this.scoreService.decrementScore(spawner.cost);
      user.items = [{amount: 1, spawner: spawner}];
    }
  }
}

import {Injectable} from "@angular/core";
import {Spawner} from "../Spawner";
import {UserService} from "../services/user.service";
import {ScoreService} from "../services/score.service";
import {NumbersService} from "../services/numbers.service";
import {User} from "../user/User";

@Injectable()
export class ShopService {


  constructor(private userService: UserService, private scoreService: ScoreService) {

  }

  getUnit(spawner: Spawner) {
    let user = this.userService.user;
    let cost = this.calculateCost(user, spawner);
    return NumbersService.toMostSignificant(cost)
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
            for (let j = 0; j < obj.amount; j++) {
              factor = factor * obj.spawner.costFactor;
            }
          }
          cost = NumbersService.multiply(obj.spawner.cost, factor);
        }
      }
    }
    return cost;
  }

  purchase(spawner: Spawner) {
    let user = this.userService.user;
    if (user.slots[spawner.type] != null) {
      for (let i = 0; i < user.items.length; i++) {
        if (user.items[i].spawner === spawner) {
          user.items[i].amount += 1;
          this.scoreService.decrementScore(this.calculateCost(user, spawner));
          this.scoreService.updateTotalMps();
        }
      }
    } else {
      this.scoreService.decrementScore(spawner.cost);
      user.items.push({amount: 1, spawner: spawner, slot: spawner.type});
      user.slots[spawner.type] = spawner;
      this.scoreService.updateTotalMps();
    }
  }
}

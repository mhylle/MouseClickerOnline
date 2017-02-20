import {Injectable} from "@angular/core";
import {Spawner} from "../Spawner";
import {SpawnerService} from "../spawner/spawner.service";
import {UserService} from "../services/user.service";

@Injectable()
export class ShopService {


  constructor(private spawnerService: SpawnerService, private userService: UserService) {

  }

  getUnit(spawner: Spawner) {
    for (let i = 0; i < spawner.cost.length; i++) {
      if (spawner.cost[i] > 0) {
        return spawner.cost[i] + " " + this.spawnerService.units[i];
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
        }
      }
    } else {
      user.items = [];
    }
  }
}

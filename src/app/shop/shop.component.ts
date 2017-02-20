import {Component, OnInit} from "@angular/core";
import {ShopService} from "./shop.service";
import {Spawner} from "../Spawner";
import {SpawnerService} from "../spawner/spawner.service";
import {UserService} from "../services/user.service";

@Component({
  selector: 'shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
  providers: [ShopService]
})
export class ShopComponent implements OnInit {
  private spawners: Spawner[];

  constructor(private shopService: ShopService, private spawnerService: SpawnerService, private userService: UserService) {
  }

  ngOnInit() {
    this.spawners = this.spawnerService.spawners;
    console.log("spawners: " + this.spawners);
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

  canAfford(spawner: Spawner) {
    let cost = spawner.cost;
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

}

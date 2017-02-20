import {Injectable} from "@angular/core";
import {User} from "../user/User";
import {SpawnerService} from "../spawner/spawner.service";

@Injectable()
export class UserService {
  private _user: User;
  constructor(private spawnerService: SpawnerService) { }

  newUser(name: string) {
    let spawners = this.spawnerService.spawners;
    this._user = {
      id: "1",
      name: name,
      score: [0,0,0,0,0,0,0,0,0,0,0,0],
      items: []
    };

    for (let i = 0; i < spawners.length; i++) {
      let obj = spawners[i];
      this._user.items.push({amount: 0, spawner: obj});
    }
  }
  set user(user: User) {
    this._user = user;
  }

  get user() {
    return this._user;
  }

}

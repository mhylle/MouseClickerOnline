import {Injectable} from "@angular/core";
import {User} from "../user/User";
import {SpawnerService} from "../spawner/spawner.service";

@Injectable()
export class UserService {
  private _user: User;
  constructor() { }

  newUser(name: string) {
    this._user = {
      id: "1",
      name: name,
      score: [0,0,0,0,0,0,0,0,0,0,0,0],
      items: []
    };
  }
  set user(user: User) {
    this._user = user;
  }

  get user() {
    return this._user;
  }

}

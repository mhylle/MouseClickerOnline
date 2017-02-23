import {Component} from "@angular/core";
import {UserService} from "./services/user.service";
import {AchievementEngineService} from "./achievements/Engine";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  clicked(event) {
    this.achievementService.process(event, 'clicked');
  }

  constructor(private userService: UserService, private achievementService: AchievementEngineService) {
    userService.newUser( "Martin");
  }
}

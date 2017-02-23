import {Component} from "@angular/core";
import {UserService} from "./services/user.service";
import {AchievementEngineService} from "./achievements/Engine";
import {ClickRule} from "./achievements/ClickRule";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(private userService: UserService, private achievementService: AchievementEngineService) {
    userService.newUser( "Martin");
    achievementService.addRule(new ClickRule());
  }

  mouseClicked(event) {
    console.log("clicked, event: " + event);
    this.achievementService.process(event, 'clicked');
  }
}

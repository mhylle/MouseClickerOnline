import { Component, OnInit } from '@angular/core';
import {ScoreService} from "../score.service";

@Component({
  selector: 'mouse',
  templateUrl: './mouse.component.html',
  styleUrls: ['./mouse.component.css']
})
export class MouseComponent implements OnInit {

  constructor(private scoreService: ScoreService) { }

  ngOnInit() {
  }

  doClick() {
    this.scoreService.incrementScore(1);
  }
}

import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {ScoreService} from "../services/score.service";

@Component({
  selector: 'mouse',
  templateUrl: './mouse.component.html',
  styleUrls: ['./mouse.component.css']
})
export class MouseComponent implements OnInit {

  constructor(private scoreService: ScoreService) { }

  @Input()
  clickCount: number = 0;

  @Output()
  clicked: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit() {
  }

  doClick() {
    this.scoreService.incrementScore([20,0,0,0,0,0,0,0,0,0,0,0]);
    this.clickCount++;
    this.clicked.emit(this.clickCount);
  }
}

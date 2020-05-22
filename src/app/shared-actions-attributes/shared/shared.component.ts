import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss']
})
export class SharedComponent implements OnInit {
  @Input() title: string;
  @Input() step: number;
  @Output() clickedPrev = new EventEmitter()
  @Output() clickedNext = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  moveToPrevious(){
    this.clickedPrev.emit()
  }

  moveToNext(){
    this.clickedNext.emit()
  }

}

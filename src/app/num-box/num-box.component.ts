import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {animate, keyframes, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-num-box',
  templateUrl: './num-box.component.html',
  styleUrls: ['./num-box.component.scss'],
  animations: [
    trigger('changeState', [
      state('false', style({
        backgroundColor: '#E0E0E0',
        color: '#747474',
      })),
      state('true', style({
        backgroundColor: '#206109',
        color: 'white'
      })),
      transition('true <=> false', [
        animate('.2s', keyframes([
          style({transform: 'rotateX(0)'}),
          style({transform: 'rotateX(90deg)'}),
          style({transform: 'rotateX(0deg)'}),
        ]))
      ]),

    ])
  ],
})
export class NumBoxComponent implements OnInit {

  @Input()
  value=false;

  @Input()
  changeable = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  @Output()
  changeValue = new EventEmitter<boolean>();


  changeState() {
    if (!this.changeable) return

    this.value = !this.value;
    this.changeValue.emit(this.value);
  }
}

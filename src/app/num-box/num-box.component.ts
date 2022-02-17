import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-num-box',
  templateUrl: './num-box.component.html',
  styleUrls: ['./num-box.component.css']
})
export class NumBoxComponent implements OnInit {

  @Input()
  value: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}

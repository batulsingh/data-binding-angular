import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template:`
  <input #myInput type="text">
  <button (click)="logMessage(myInput.value)">Log</button>`,
  styles: []
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  logMessage(value){
      console.log(value);
  }

}

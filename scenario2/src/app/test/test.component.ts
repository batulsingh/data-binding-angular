import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<input [(ngModel)]="name" type="text">
  {{name}}
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public name = "";

  constructor() { }

  ngOnInit() {
  }

}

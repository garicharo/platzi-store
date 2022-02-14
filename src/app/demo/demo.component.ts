import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'platzi-store';

  name = '';

  coupon = 0;

  items = [ 'gari', 'momis', 'regis', 'otro' ];

  addItem() {
    this.items.push(this.name);
    this.name = '';
  }

  deleteItem(index : number) {
    this.items.splice(index, 1);
  }

  power:number = 10;

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baitap-binding',
  templateUrl: './baitap-binding.component.html',
  styleUrls: ['./baitap-binding.component.scss']
})
export class BaitapBindingComponent implements OnInit {

  email:string = "";
  name:string = "";

  constructor() { }

  ngOnInit() {
  }

  eventBinding(ten) {
    this.name = ten;
    console.log(ten);
  }
}

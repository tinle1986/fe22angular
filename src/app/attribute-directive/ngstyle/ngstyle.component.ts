import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.scss']
})
export class NgstyleComponent implements OnInit {
  bg: string = "green";
  name: string = "le trung tin";

  constructor() { }

  ngOnInit() {
  }

}

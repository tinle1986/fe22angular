import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ng-class",
  templateUrl: "./ng-class.component.html",
  styleUrls: ["./ng-class.component.scss"]
})
export class NgClassComponent implements OnInit {
  mauChu: boolean = true;
  fontSize: boolean = true;

  constructor() {}

  ngOnInit() {}
}

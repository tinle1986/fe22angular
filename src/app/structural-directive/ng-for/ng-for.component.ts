import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent implements OnInit {

  DSNV:any = [
    {ten: "Le Trung Tin", tuoi: 18},
    {ten: "Ngo Trung Truc", tuoi: 17},
    {ten: "Nguyen Van Ti", tuoi: 21},
    {ten: "Ho Van Ha", tuoi: 22}
  ]

  constructor() { }

  ngOnInit() {
  }

}

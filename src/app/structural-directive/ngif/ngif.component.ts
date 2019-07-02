import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.scss']
})
export class NgifComponent implements OnInit {

  status:boolean = true;
  statusLogin:boolean = true;

  constructor() { }

  ngOnInit() {
  }

  hidden() {
    if (this.status == true) {
      this.status = false;
    } else {
      this.status = true;
    }
  }

  dangXuat() {
    this.statusLogin = false;
  }

  dangNhap() {
    this.statusLogin = true;
  }

}

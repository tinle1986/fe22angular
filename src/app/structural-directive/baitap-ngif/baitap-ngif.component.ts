import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baitap-ngif',
  templateUrl: './baitap-ngif.component.html',
  styleUrls: ['./baitap-ngif.component.scss']
})
export class BaitapNgifComponent implements OnInit {

  statusLogin:boolean = false;
  username:string = "";
  password:string = "";

  constructor() { }

  ngOnInit() {
    // loi localstorage -> neu co thong tin, giu nguyen trang thai Login
    console.log("ngOnInit");
  }

  dangNhap(ten, matkhau) {
    if (ten === "abc" && matkhau === "pass") {
      this.statusLogin = true;
      this.username = ten;
      localStorage.setItem("user", JSON.stringify(ten));
    } else {
      this.statusLogin = false;
    }
  }

}

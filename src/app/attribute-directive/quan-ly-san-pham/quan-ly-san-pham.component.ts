import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-quan-ly-san-pham",
  templateUrl: "./quan-ly-san-pham.component.html",
  styleUrls: ["./quan-ly-san-pham.component.scss"]
})
export class QuanLySanPhamComponent implements OnInit {
  mangSp: any = [];

  constructor() {}

  ngOnInit() {}

  eventBinding(ma, ten, gia) {
    let sp = { masp: ma, tensp:ten, giasp:gia };
    this.mangSp.push(sp);
  }
}

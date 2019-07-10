import { Component, OnInit, ViewChildren, QueryList, TestabilityRegistry } from "@angular/core";
import { ItemPhimComponent } from "./item-phim/item-phim.component";
import { importExpr } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: "app-danh-sach-phim",
  templateUrl: "./danh-sach-phim.component.html",
  styleUrls: ["./danh-sach-phim.component.scss"]
})
export class DanhSachPhimComponent implements OnInit {
  @ViewChildren(ItemPhimComponent) tagListPhim: QueryList<ItemPhimComponent>;

  danhSachPhim = [
    {
      maPhim: 1,
      tenPhim: "Minions",
      gia: "85000",
      hinhAnh: "./assets/img/minions.jpg"
    },
    {
      maPhim: 2,
      tenPhim: "Home",
      gia: "85000",
      hinhAnh: "./assets/img/home.jpg"
    },
    {
      maPhim: 3,
      tenPhim: "Harvie",
      gia: "85000",
      hinhAnh: "./assets/img/harvie.jpg"
    },
    {
      maPhim: 4,
      tenPhim: "Insideout",
      gia: "85000",
      hinhAnh: "./assets/img/insideout.jpg"
    },
    {
      maPhim: 5,
      tenPhim: "Insideout",
      gia: "85000",
      hinhAnh: "./assets/img/insideout.jpg"
    }
  ];

  danhSachLike = [
    { maPhim: 1, tenPhim: "Minions", soLike: 0 },
    { maPhim: 2, tenPhim: "Home", soLike: 0 },
    { maPhim: 3, tenPhim: "Harvie", soLike: 0 },
    { maPhim: 4, tenPhim: "Insideout", soLike: 0 }
  ];

  constructor() {}

  ngOnInit() {}

  like(maPhim) {
    console.log(maPhim);
    this.danhSachLike.map(item => {
      if (item.maPhim === maPhim) {
        item.soLike++;
      }
    });
  }

  themPhim(phim: any) {
    this.danhSachPhim.push(phim);
  }

  viewChildren() {
    this.tagListPhim.map(item => {
      // console.log(item);
      if(item.phim.maPhim === 2) {
        item.phim.gia = "100000";
      }
    })
  }
}

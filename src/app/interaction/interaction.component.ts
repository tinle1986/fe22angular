import { Component, OnInit, ViewChild } from '@angular/core';
import { DanhSachPhimComponent } from "./danh-sach-phim/danh-sach-phim.component";

@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.scss']
})
export class InteractionComponent implements OnInit {

  @ViewChild(DanhSachPhimComponent, {static: false}) tagDanhSachPhim: DanhSachPhimComponent;

  constructor() { }

  ngOnInit() {
  }

  btnThemPhim(_maPhim, _tenPhim, _giaPhim, _anhPhim) {
    const objPhim = {
      maPhim: _maPhim,
      tenPhim: _tenPhim,
      gia: _giaPhim,
      hinhAnh: _anhPhim
    };
    this.tagDanhSachPhim.themPhim(objPhim);
  }

}

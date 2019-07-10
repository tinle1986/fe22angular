import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatVeBusComponent } from './dat-ve-bus.component';
import { DanhSachGheComponent } from './danh-sach-ghe/danh-sach-ghe.component';
import { ItemGheComponent } from './item-ghe/item-ghe.component';
import { GheDaBookComponent } from './ghe-da-book/ghe-da-book.component';

@NgModule({
  declarations: [DatVeBusComponent, DanhSachGheComponent, ItemGheComponent, GheDaBookComponent],
  exports: [DatVeBusComponent],
  imports: [
    CommonModule
  ]
})
export class DatVeBusModule { }

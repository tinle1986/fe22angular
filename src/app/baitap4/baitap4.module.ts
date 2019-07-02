import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Baitap4Component } from '../baitap4/baitap4.component';
import { Baitap4HeaderComponent } from './baitap4-header/baitap4-header.component';
import { Baitap4CarouselComponent } from './baitap4-carousel/baitap4-carousel.component';
import { Baitap4BestSmartphoneComponent } from './baitap4-best-smartphone/baitap4-best-smartphone.component';
import { Baitap4BestLaptopComponent } from './baitap4-best-laptop/baitap4-best-laptop.component';
import { Baitap4PromotionComponent } from './baitap4-promotion/baitap4-promotion.component';
import { Baitap4BestItemComponent } from './baitap4-best-item/baitap4-best-item.component';

@NgModule({
  declarations: [Baitap4Component, Baitap4HeaderComponent, Baitap4CarouselComponent, Baitap4BestSmartphoneComponent, Baitap4BestLaptopComponent, Baitap4PromotionComponent, Baitap4BestItemComponent],
  exports: [Baitap4Component],
  imports: [
    CommonModule
  ]
})
export class Baitap4Module { }

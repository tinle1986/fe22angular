import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructuralDirectiveComponent } from './structural-directive.component';
import { NgifComponent } from './ngif/ngif.component';
import { BaitapNgifComponent } from './baitap-ngif/baitap-ngif.component';

@NgModule({
  declarations: [StructuralDirectiveComponent, NgifComponent, BaitapNgifComponent],
  exports: [StructuralDirectiveComponent],
  imports: [
    CommonModule
  ]
})
export class StructuralDirectiveModule { }

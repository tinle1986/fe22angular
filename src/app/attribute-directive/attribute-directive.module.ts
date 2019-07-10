import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttributeDirectiveComponent } from './attribute-directive.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgstyleComponent } from './ngstyle/ngstyle.component';
import { QuanLySanPhamComponent } from './quan-ly-san-pham/quan-ly-san-pham.component';
import { HighLightDirective } from './high-light.directive';

@NgModule({
  declarations: [AttributeDirectiveComponent, NgClassComponent, NgstyleComponent, QuanLySanPhamComponent, HighLightDirective],
  exports: [AttributeDirectiveComponent],
  imports: [
    CommonModule
  ]
})
export class AttributeDirectiveModule { }

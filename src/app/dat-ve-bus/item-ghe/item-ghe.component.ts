import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-ghe',
  templateUrl: './item-ghe.component.html',
  styleUrls: ['./item-ghe.component.scss']
})
export class ItemGheComponent implements OnInit {

  @Input() ghe: any;
  @Output() eventBook = new EventEmitter();

  trangThaiChon: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  datGhe() {
    this.trangThaiChon = !this.trangThaiChon;
    console.log(this.ghe.SoGhe);
    this.eventBook.emit(this.ghe.SoGhe);
  }

}

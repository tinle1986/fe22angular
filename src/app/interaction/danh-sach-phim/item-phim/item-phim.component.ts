import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-phim',
  templateUrl: './item-phim.component.html',
  styleUrls: ['./item-phim.component.scss']
})
export class ItemPhimComponent implements OnInit {

  @Input() phim:any;
  @Output() eventLike = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  likePhim() {
    console.log(this.phim.maPhim);
    this.eventLike.emit(this.phim.maPhim);
  }

}

import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-ghe-da-book",
  templateUrl: "./ghe-da-book.component.html",
  styleUrls: ["./ghe-da-book.component.scss"]
})
export class GheDaBookComponent implements OnInit {

  tongGhe: number = 0;
  tongTien: number = 0;

  @Input() gheBook: any;
  @Output() eventCancel = new EventEmitter();

  constructor() {}

  ngOnInit() {
    /* this.gheBook.map(item => {
      if (item.TrangThai === true) {
        this.gheDaBook.push(item);
      }
    });
    console.log(this.gheDaBook); */
  }

  huyGhe(stt) {
    console.log(stt);
    this.eventCancel.emit(stt);
  }
}

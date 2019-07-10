import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ghe-da-book',
  templateUrl: './ghe-da-book.component.html',
  styleUrls: ['./ghe-da-book.component.scss']
})
export class GheDaBookComponent implements OnInit {

  gheDaBook: any = [];
  @Input() gheBook:any;

  constructor() { }

  ngOnInit() {
    this.gheBook.map(item => {
      if(item.TrangThai) {
        this.gheDaBook.push(item);
      }
    })
    console.log(this.gheDaBook);
  }

}

import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'lib-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookComponent implements OnInit {

  @Input() book: Book;
  @Output() rateUp = new EventEmitter();
  @Output() rateDown = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  doRateUp() {
    this.rateUp.emit();
  }

  doRateDown() {
    this.rateDown.emit();
  }

  log() {
    console.log('CD');
    return '';
  }

}





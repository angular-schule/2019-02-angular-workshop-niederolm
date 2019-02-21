import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Book } from 'books-shared';
import { CreateBook } from '../actions/book.actions';

@Component({
  selector: 'br-create-book-container',
  templateUrl: './create-book-container.component.html',
  styleUrls: ['./create-book-container.component.css']
})
export class CreateBookContainerComponent implements OnInit {

  constructor(private store: Store<any>) { }

  ngOnInit() {
  }

  createBook(book: Book) {
    this.store.dispatch(new CreateBook({ book }));
  }

}

import { Component, OnInit } from '@angular/core';
import { Book } from 'books-shared';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  books: Book[];

  constructor(private bs: BookStoreService) { }

  ngOnInit() {
    this.books = this.bs.getAllStatic();
  }

  updateList(book: Book) {
    this.books = this.books.map(b => b.isbn === book.isbn ? book : b);
  }

}

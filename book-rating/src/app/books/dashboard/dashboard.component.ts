import { Component, OnInit } from '@angular/core';
import { Book } from 'books-shared';
import { BookStoreService } from '../shared/book-store.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  books$: Observable<Book[]>;

  constructor(private bs: BookStoreService) { }

  ngOnInit() {
    // this.books = this.bs.getAllStatic();

    this.books$ = this.bs.getAll();
  }

  updateList(book: Book) {
    // TODO
    // this.books = this.books.map(b => b.isbn === book.isbn ? book : b);
  }

}

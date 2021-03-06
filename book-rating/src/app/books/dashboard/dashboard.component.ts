import { Component, OnInit } from '@angular/core';
import { Book } from 'books-shared';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { State } from '../../reducers';
import { LoadBooks, RateDown, RateUp } from '../actions/book.actions';
import { getAllBooks, getBooksLoading, getLimitedBooks } from '../selectors/book.selectors';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  books$ = this.store.pipe(select(getAllBooks));
  loading$ = this.store.pipe(select(getBooksLoading));

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.store.dispatch(new LoadBooks());
  }

  rateUp(isbn: string) {
    this.store.dispatch(new RateUp({ isbn }));
  }

  rateDown(isbn: string) {
    this.store.dispatch(new RateDown({ isbn }));
  }

}

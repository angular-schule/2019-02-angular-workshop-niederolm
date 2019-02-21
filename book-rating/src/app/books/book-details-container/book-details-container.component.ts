import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from '../../reducers';
import { ActivatedRoute } from '@angular/router';
import { LoadBook } from '../actions/book.actions';
import { getBookByIsbn } from '../selectors/book.selectors';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Book } from 'books-shared';

@Component({
  selector: 'br-book-details-container',
  templateUrl: './book-details-container.component.html',
  styleUrls: ['./book-details-container.component.css']
})
export class BookDetailsContainerComponent implements OnInit {

  book$: Observable<Book>;

  constructor(private store: Store<State>, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      map(params => params.get('isbn'))
    ).subscribe(isbn => {
      this.store.dispatch(new LoadBook({ isbn }));
      this.book$ = this.store.pipe(
        select(getBookByIsbn, { isbn })
      );
    });
  }

}

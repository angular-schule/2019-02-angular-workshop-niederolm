import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookStoreService } from '../shared/book-store.service';
import { Book } from 'books-shared';
import { Observable } from 'rxjs';
import { concatMap, switchMap, map } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { State } from '../../reducers';
import { LoadBook } from '../actions/book.actions';
import { getBookByIsbn } from '../selectors/book.selectors';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  book$: Observable<Book>;

  constructor(
    private route: ActivatedRoute,
    private bs: BookStoreService,
    private store: Store<State>) { }

  ngOnInit() {
    // Alternative
    // const isbn = this.route.snapshot.paramMap.get('isbn');

    /*this.route.paramMap.pipe(
      map(params => params.get('isbn')),
      map(isbn => new LoadBook({ isbn }))
    ).subscribe(this.store);*/


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

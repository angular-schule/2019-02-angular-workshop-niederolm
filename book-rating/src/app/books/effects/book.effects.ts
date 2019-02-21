import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';



import { BookActionTypes, LoadBooksSuccess, LoadBooksFail, LoadBook, LoadBookSuccess, BookActions } from '../actions/book.actions';
import { BookStoreService } from '../shared/book-store.service';
import { map, exhaustMap, catchError, mergeMap, withLatestFrom, filter } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { State } from '../../reducers';
import { getAllBooks } from '../selectors/book.selectors';

@Injectable()
export class BookEffects {

  @Effect()
  loadBooks$ = this.actions$.pipe(
    ofType(BookActionTypes.LoadBooks),
    exhaustMap(() => this.bs.getAll().pipe( // oder switchMap()
      map(books => new LoadBooksSuccess({ books })),
      catchError(error => of(new LoadBooksFail({ error })))
    ))
  );

  @Effect()
  loadBook$ = this.actions$.pipe(
    ofType(BookActionTypes.LoadBook),
    map(action => action.payload.isbn),
    withLatestFrom(this.store.pipe(select(getAllBooks))), // [isbn, books]
    filter(([isbn, books]) => !books.find(b => b.isbn === isbn)),
    mergeMap(([isbn]) => this.bs.getSingle(isbn)),
    map(book => new LoadBookSuccess({ book }))
  );

  constructor(
    private actions$: Actions<BookActions>,
    private bs: BookStoreService,
    private store: Store<State>) {}
}

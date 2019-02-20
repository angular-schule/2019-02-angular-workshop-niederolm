import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';



import { BookActionTypes, LoadBooksSuccess, LoadBooksFail, LoadBook, LoadBookSuccess } from '../actions/book.actions';
import { BookStoreService } from '../shared/book-store.service';
import { map, exhaustMap, catchError, mergeMap, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';

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
    ofType<LoadBook>(BookActionTypes.LoadBook),
    map(action => action.payload.isbn),
    mergeMap(isbn => this.bs.getSingle(isbn)),
    map(book => new LoadBookSuccess({ book }))
  );

  constructor(private actions$: Actions, private bs: BookStoreService) {}

}

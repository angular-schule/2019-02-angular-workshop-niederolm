import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';



import { BookActionTypes, LoadBooksSuccess, LoadBooksFail } from '../actions/book.actions';
import { BookStoreService } from '../shared/book-store.service';
import { map, exhaustMap, catchError } from 'rxjs/operators';
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

  constructor(private actions$: Actions, private bs: BookStoreService) {}

}

import { HttpErrorResponse } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { Book } from 'books-shared';

export enum BookActionTypes {
  LoadBooks = '[Book] Load Books',
  LoadBooksSuccess = '[Book] Load Books Success',
  LoadBooksFail = '[Book] Load Books Fail',
  LoadBook = '[Book] Load Book',
  LoadBookSuccess = '[Book] Load Book Success',
  RateUp = '[Book] Rate Up',
  RateDown = '[Book] Rate Down',
  CreateBook = '[Book] Create Book',
  CreateBookSuccess = '[Book] Create Book Success',
}

export class LoadBooks implements Action {
  readonly type = BookActionTypes.LoadBooks;
}

export class LoadBooksSuccess implements Action {
  readonly type = BookActionTypes.LoadBooksSuccess;
  constructor(public payload: { books: Book[] }) {}
}

export class LoadBooksFail implements Action {
  readonly type = BookActionTypes.LoadBooksFail;
  constructor(public payload: { error: HttpErrorResponse }) {}
}

export class LoadBook implements Action {
  readonly type = BookActionTypes.LoadBook;
  constructor(public payload: { isbn: string }) {}
}

export class LoadBookSuccess implements Action {
  readonly type = BookActionTypes.LoadBookSuccess;
  constructor(public payload: { book: Book }) {}
}

export class CreateBook implements Action {
  readonly type = BookActionTypes.CreateBook;
  constructor(public payload: { book: Book }) {}
}

export class CreateBookSuccess implements Action {
  readonly type = BookActionTypes.CreateBookSuccess;
  // constructor(public payload: { book: Book }) {}
}

export class RateUp implements Action {
  readonly type = BookActionTypes.RateUp;
  constructor(public payload: { isbn: string }) {}
}

export class RateDown implements Action {
  readonly type = BookActionTypes.RateDown;
  constructor(public payload: { isbn: string }) {}
}

export type BookActions =
 | LoadBooks
 | LoadBooksSuccess
 | LoadBooksFail
 | LoadBook
 | LoadBookSuccess
 | RateUp
 | RateDown
 | CreateBook
 | CreateBookSuccess;

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from '../reducers/book.reducer';
import { State as CounterState } from '../../reducers/counter.reducer';

export const getBookState = createFeatureSelector<State>('book');
export const getCounterState = createFeatureSelector<CounterState>('counter');

export const getBooksLoading = createSelector(
    getBookState,
    bookState => bookState.loading
);

export const getAllBooks = createSelector(
    getBookState,
    bookState => bookState.books
);

export const getLimitedBooks = createSelector(
    getAllBooks,
    getCounterState,
    (books, counterState) => {
        const counter = counterState.counter;
        return books.slice(0, counter);
    }
);

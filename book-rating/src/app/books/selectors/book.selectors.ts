import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State, adapter } from '../reducers/book.reducer';
import { State as CounterState } from '../../reducers/counter.reducer';

export const getBookState = createFeatureSelector<State>('book');
export const getCounterState = createFeatureSelector<CounterState>('counter');

const adapterSelectors = adapter.getSelectors();

export const getBooksLoading = createSelector(
    getBookState,
    bookState => bookState.loading
);

export const getAllBooks = createSelector(
    getBookState,
    adapterSelectors.selectAll
);

export const getLimitedBooks = createSelector(
    getAllBooks,
    getCounterState,
    (books, counterState) => {
        const counter = counterState.counter;
        return books.slice(0, counter);
    }
);

export const getBookEntities = createSelector(
    getBookState,
    adapterSelectors.selectEntities
);


export const getBookByIsbn = createSelector(
    getBookEntities,
    (entities, props) => entities[props.isbn]
);

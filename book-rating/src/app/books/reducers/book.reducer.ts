import { EntityState, createEntityAdapter } from '@ngrx/entity';

import { BookActions, BookActionTypes } from '../actions/book.actions';
import { Book } from 'books-shared';

export const adapter = createEntityAdapter<Book>({
  selectId: book => book.isbn
});

export interface State extends EntityState<Book> {
  loading: boolean;
}

export const initialState: State = adapter.getInitialState({
  loading: false
});

export function reducer(state = initialState, action: BookActions): State {
  switch (action.type) {

    case BookActionTypes.LoadBooks: {
      return {
        ...state,
        loading: true
      };
    }

    case BookActionTypes.LoadBooksSuccess: {
      const { books } = action.payload;

      return {
        ...adapter.addAll(books, state),
        loading: false
      };
    }

    case BookActionTypes.LoadBookSuccess: {
      const { book } = action.payload;
      return adapter.upsertOne(book, state);
    }

    case BookActionTypes.RateUp: {
      const { isbn } = action.payload;
      const book = state.entities[isbn];

      const update = {
        id: isbn,
        changes: {
          rating: Math.min(5, book.rating + 1)
        }
      };

      return adapter.updateOne(update, state);
    }

    case BookActionTypes.RateDown: {
      const { isbn } = action.payload;
      const book = state.entities[isbn];

      const update = {
        id: isbn,
        changes: {
          rating: Math.max(1, book.rating - 1)
        }
      };

      return adapter.updateOne(update, state);
    }

    case BookActionTypes.CreateBook: {
      const { book } = action.payload;

      return adapter.addOne(book, state);
    }

    default:
      return state;
  }
}

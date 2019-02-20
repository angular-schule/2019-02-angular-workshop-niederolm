import { Action } from '@ngrx/store';
import { CounterActions, CounterActionTypes } from '../actions/counter.actions';


export interface State {
  counter: number;
}

export const initialState: State = {
  counter: 0
};

export function reducer(state = initialState, action: CounterActions): State {
  switch (action.type) {

    case CounterActionTypes.Increment: {
      return {
        ...state,
        counter: state.counter + 1
      };
    }

    case CounterActionTypes.Decrement: {
      return {
        ...state,
        counter: state.counter - 1
      };
    }

    case CounterActionTypes.Reset: {
      return {
        ...state,
        counter: 0
      };
    }

    default:
      return state;
  }
}

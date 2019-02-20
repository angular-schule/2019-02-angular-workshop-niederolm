import { Action } from '@ngrx/store';


export interface State {
  counter: number;
}

export const initialState: State = {
  counter: 0
};

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {

    default:
      return state;
  }
}

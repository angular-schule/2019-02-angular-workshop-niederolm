import { Injectable } from '@angular/core';
import { Book } from 'books-shared';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { scan, shareReplay, startWith } from 'rxjs/operators';

export interface MyState {
  counter: number;
  books: Book[];
  foo: string;
}


@Injectable({
  providedIn: 'root'
})
export class StateService {

  private state: MyState = {
    counter: 0,
    books: [],
    foo: 'bar'
  };

  private messages$ = new Subject<string>();

  state$: Observable<MyState> = this.messages$.pipe(
    startWith('init'),
    scan(this.calculateState, this.state),
    shareReplay(1)
  );

  private calculateState(state: MyState, message: string): MyState {
    switch (message) {
      case 'Increment': {
        return {
          ...state,
          counter: state.counter + 1
        };
      }

      case 'Decrement': {
        return {
          ...state,
          counter: state.counter - 1
        };
      }
      
      case 'Reset': {
        return {
          ...state,
          counter: 0
        };
      }

      default: return state;
    }
  }

  dispatch(message: string) {
    this.messages$.next(message);
  }

  
}

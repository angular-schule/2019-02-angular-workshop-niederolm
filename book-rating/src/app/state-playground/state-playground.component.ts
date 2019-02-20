import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { State } from '../reducers';
import { Increment, Decrement, Reset } from '../actions/counter.actions';

@Component({
  selector: 'br-state-playground',
  templateUrl: './state-playground.component.html',
  styleUrls: ['./state-playground.component.scss']
})
export class StatePlaygroundComponent implements OnInit {

  counter$ = this.store.pipe(
    map(state => state.counter.counter)
  );

  constructor(
    public service: StateService,
    private store: Store<State>) { }

  ngOnInit() {
  }

  increment() {
    this.store.dispatch(new Increment());
  }

  decrement() {
    this.store.dispatch(new Decrement());
  }

  reset() {
    this.store.dispatch(new Reset(0));
  }

}

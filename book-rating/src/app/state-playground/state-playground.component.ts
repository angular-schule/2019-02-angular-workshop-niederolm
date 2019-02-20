import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'br-state-playground',
  templateUrl: './state-playground.component.html',
  styleUrls: ['./state-playground.component.scss']
})
export class StatePlaygroundComponent implements OnInit {

  counter$ = this.service.state$.pipe(
    map(state => state.counter)
  );

  constructor(public service: StateService) { }

  ngOnInit() {
  }

  increment() {
    this.service.dispatch('Increment');
  }

  decrement() {
    this.service.dispatch('Decrement');
  }

  reset() {
    this.service.dispatch('Reset');
  }

}

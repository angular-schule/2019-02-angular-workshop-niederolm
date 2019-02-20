import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatePlaygroundComponent } from './state-playground.component';

describe('StatePlaygroundComponent', () => {
  let component: StatePlaygroundComponent;
  let fixture: ComponentFixture<StatePlaygroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatePlaygroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatePlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDetailsContainerComponent } from './book-details-container.component';
import { Store, StoreModule } from '@ngrx/store';

describe('BookDetailsContainerComponent', () => {
  let component: BookDetailsContainerComponent;
  let fixture: ComponentFixture<BookDetailsContainerComponent>;
  let store: Store<any>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ BookDetailsContainerComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailsContainerComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

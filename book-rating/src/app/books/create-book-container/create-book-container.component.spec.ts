import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBookContainerComponent } from './create-book-container.component';
import { Store, StoreModule } from '@ngrx/store';

describe('CreateBookContainerComponent', () => {
  let component: CreateBookContainerComponent;
  let fixture: ComponentFixture<CreateBookContainerComponent>;
  let store: Store<any>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ CreateBookContainerComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBookContainerComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

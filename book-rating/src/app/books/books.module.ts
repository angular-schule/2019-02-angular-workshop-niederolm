import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ButtonSharedModule } from '../button-shared/button-shared.module';
import { BooksSharedModule } from 'books-shared';
import { BookDetailsComponent } from './book-details/book-details.component';
import { SearchComponent } from './search/search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import * as fromBook from './reducers/book.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BookEffects } from './effects/book.effects';
import { BookDetailsContainerComponent } from './book-details-container/book-details-container.component';
import { CreateBookContainerComponent } from './create-book-container/create-book-container.component';
import { BookFormComponent } from './book-form/book-form.component';

@NgModule({
  declarations: [
    DashboardComponent,
    BookDetailsComponent,
    SearchComponent,
    BookDetailsContainerComponent,
    CreateBookContainerComponent,
    BookFormComponent,
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    BooksSharedModule,
    ButtonSharedModule,
    ReactiveFormsModule,
    StoreModule.forFeature('book', fromBook.reducer),
    EffectsModule.forFeature([BookEffects])
  ]
})
export class BooksModule { }

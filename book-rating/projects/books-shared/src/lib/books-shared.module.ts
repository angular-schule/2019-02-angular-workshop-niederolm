import { NgModule } from '@angular/core';
import { BookComponent } from './book/book.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BookComponent],
  imports: [
    RouterModule
  ],
  exports: [BookComponent]
})
export class BooksSharedModule { }

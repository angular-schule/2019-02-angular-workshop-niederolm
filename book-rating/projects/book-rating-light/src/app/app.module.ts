import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BooksSharedModule } from 'books-shared';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BooksSharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

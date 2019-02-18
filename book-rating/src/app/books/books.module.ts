import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ButtonSharedModule } from '../button-shared/button-shared.module';
import { BooksSharedModule } from 'books-shared';

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    BooksSharedModule,
    ButtonSharedModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class BooksModule { }

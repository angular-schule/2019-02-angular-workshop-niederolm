import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchComponent } from './search/search.component';
import { BookDetailsContainerComponent } from './book-details-container/book-details-container.component';
import { CreateBookContainerComponent } from './create-book-container/create-book-container.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'search', component: SearchComponent },
  { path: 'create', component: CreateBookContainerComponent },
  { path: ':isbn', component: BookDetailsContainerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }

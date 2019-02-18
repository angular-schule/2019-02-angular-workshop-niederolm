import { Component } from '@angular/core';
import { Book } from 'books-shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'book-rating-light';

  book: Book = {
    isbn: '222',
    title: 'Vue.js',
    price: 22.90,
    description: 'Für Hipster',
    rating: 4
  };
}

import { Injectable } from '@angular/core';
import { Book } from 'books-shared';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {

  constructor() { }

  getAllStatic(): Book[] {
    return [
      {
        isbn: '000',
        title: 'Angular',
        description: 'Grundlagen und Best Practices',
        price: 34.90,
        rating: 5
      },
      {
        isbn: '111',
        title: 'React',
        description: 'Ein anderes Framework',
        price: 32.90,
        rating: 2
      },
    ];
  }
}

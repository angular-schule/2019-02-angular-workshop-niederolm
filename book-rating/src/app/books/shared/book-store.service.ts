import { Injectable } from '@angular/core';
import { Book } from 'books-shared';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {
  private apiUrl = 'https://api.angular.schule';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Book[]> {
    // TODO: Mapping
    return this.http.get<Book[]>(this.apiUrl + '/booksfff').pipe(
      retry(3),
      map(rawBooks => rawBooks.map(rawBook => this.mapToBook(rawBook))),
      /*catchError(err => {
        console.error('Fehler:', err);
        return of(this.getAllStatic());
      })*/
    );
  }

  getSingle(isbn: string): Observable<Book> {
    return this.http
      .get<Book>(this.apiUrl + '/book/' + isbn)
      .pipe(map(rawBook => this.mapToBook(rawBook)));
  }

  create(book: Book): Observable<any> {
    return this.http.post(this.apiUrl + '/book', book, {
      responseType: 'text'
    });
  }

  search(term: string): Observable<Book[]> {
    return this.http.get<any[]>(`${this.apiUrl}/books/search/${term}`).pipe(
      map(rawBooks => (rawBooks ? rawBooks : [])),
      map(rawBooks => rawBooks.map(rawBook => this.mapToBook(rawBook)))
    );
  }

  // TODO: konkreten Typ verwenden statt any
  private mapToBook(rawBook: any): Book {
    return {
      title: rawBook.title,
      description: rawBook.description,
      isbn: rawBook.isbn,
      price: rawBook.price,
      rating: rawBook.rating
    };
  }

  getAllStatic(): Book[] {
    return [
      {
        isbn: '000',
        title: 'Angular',
        description: 'Grundlagen und Best Practices',
        price: 34.9,
        rating: 5
      },
      {
        isbn: '111',
        title: 'React',
        description: 'Ein anderes Framework',
        price: 32.9,
        rating: 2
      }
    ];
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookStoreService } from '../shared/book-store.service';
import { Book } from 'books-shared';
import { Observable } from 'rxjs';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  book$: Observable<Book>;

  constructor(
    private route: ActivatedRoute,
    private bs: BookStoreService) { }

  ngOnInit() {
    // Alternative
    // const isbn = this.route.snapshot.paramMap.get('isbn');

    this.route.paramMap.subscribe(params => {
      const isbn = params.get('isbn');
      this.book$ = this.bs.getSingle(isbn);
    }); // TODO: Verschachtete Subscriptions vermeiden

  }

}

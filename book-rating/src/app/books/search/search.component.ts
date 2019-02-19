import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { BookStoreService } from '../shared/book-store.service';
import { switchMap, filter, debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Book } from 'books-shared';

@Component({
  selector: 'br-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  isLoading = false;

  searchForm: FormGroup;
  results$: Observable<Book[]>;

  constructor(private bs: BookStoreService) { }

  ngOnInit() {
    this.searchForm = new FormGroup({
      search: new FormControl('')
    });

    this.results$ = this.searchForm.get('search').valueChanges.pipe(
      filter(term => term.length >= 3),
      debounceTime(500),
      distinctUntilChanged(),
      tap(() => this.isLoading = true),
      switchMap(term => this.bs.search(term)),
      tap(() => this.isLoading = false),
    );

      /*
      Länge >= 3 ✅
      bremsen ✅
      keine 2 gleichen Suchbegriffe nacheinander ✅
      Suchergebnisse anzeigen ✅
      Ladeanzeige ✅
      */

  }

}

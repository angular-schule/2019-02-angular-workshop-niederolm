import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { BookStoreService } from '../shared/book-store.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'br-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchForm: FormGroup;

  constructor(private bs: BookStoreService) { }

  ngOnInit() {
    this.searchForm = new FormGroup({
      search: new FormControl('')
    });

    this.searchForm.get('search').valueChanges.pipe(
      switchMap(term => this.bs.search(term))
    ).subscribe(e => console.log(e));

      /*
      Länge >= 3
      bremsen
      keine 2 gleichen Suchbegriffe nacheinander
      Suchergebnisse anzeigen

      */

  }

}

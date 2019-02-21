import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Book } from 'books-shared/public_api';

@Component({
  selector: 'br-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  bookForm: FormGroup;
  @Output() create = new EventEmitter<Book>();

  constructor() { }

  ngOnInit() {
    this.bookForm = new FormGroup({
      isbn: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(13)
      ]),
      title: new FormControl('', Validators.required),
      description: new FormControl(''),
      price: new FormControl()
    });
  }

  submitForm() {
    if (this.bookForm.invalid) {
      return;
    }

    const newBook: Book = {
      ...this.bookForm.value,
      rating: 1
    };

    this.create.emit(newBook);
  }

}

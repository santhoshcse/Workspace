import { Component } from '@angular/core';
import { BookService, Book } from './book.service';
import { DocumentChangeAction } from 'angularfire2/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public books : DocumentChangeAction<Book>[];

  private bookCounter = 0;

  constructor(
    public bookService: BookService) {
      this.getAll();
  }

  add() {
    let book : Book = { title: 'book ' + this.bookCounter++ };
    this.bookService.addBook(book);
  }

  delete(book : DocumentChangeAction<Book>) {
    this.bookService.deleteBook(book);
  }

  get(bookId : string) {
    this.bookService.getBook(bookId);
  }

  update(book : DocumentChangeAction<Book>) {
    this.bookService.updateBook(book);
  }

  getAll() {
    this.bookService.getBooks().subscribe(res => (this.books = res));
  }
}
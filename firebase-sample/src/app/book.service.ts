import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentChangeAction } from 'angularfire2/firestore';
import { reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(public firestore: AngularFirestore) { }

  addBook(book : Book) {
    this.firestore
    .collection<Book>('books')
    .add(book)
    .then(res => {}, err => reject(err));
  }

  getBook(bookId) {
    // TODO
  }

  getBooks() {
    return this.firestore
    .collection<Book>('books')
    .snapshotChanges();
  }

  deleteBook(book : DocumentChangeAction<Book>) {
    return this.firestore
    .collection<Book>('books')
    .doc<Book>(book.payload.doc.id)
    .delete();
  }

  updateBook(book : DocumentChangeAction<Book>) {
    this.firestore
    .collection<Book>('books')
    .doc<Book>(book.payload.doc.id)
    .set({ title: 'book updated' });
  }
}

export interface Book {
  title: string;
}
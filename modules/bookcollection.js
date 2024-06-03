
import Book from './modules/book.js';

export default class BookCollection {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('books')) || [];
  }

  addBook = (book) => {
    this.books.push(book);
    this.updateLocalStorage();
  };

  removeBook = (index) => {
    this.books.splice(index, 1);
    this.updateLocalStorage();
  };

  updateLocalStorage = () => {
    localStorage.setItem('books', JSON.stringify(this.books));
  };
}
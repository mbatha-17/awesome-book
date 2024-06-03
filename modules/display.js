
import BookCollection from './bookcollection.js';
import Book from './book.js';

const bookCollection = new BookCollection();

export const displayBooks = () => {
  const bookList = document.querySelector('#book-list');
  bookList.innerHTML = '';
  bookCollection.books.forEach((book, index) => {
    const bookItem = document.createElement('div');
    bookItem.innerHTML = `
      <p>"${book.title}" by ${book.author}</p>
      <button data-index="${index}" class="remove-btn">Remove</button>
    `;
    bookList.appendChild(bookItem);
  });
};

export const addBookToList = () => {
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const book = new Book(title, author);
    bookCollection.addBook(book);
    displayBooks();
  };
  
  export const removeBookFromList = (e) => {
    if (e.target.classList.contains('remove-btn')) {
      const index = e.target.getAttribute('data-index');
      bookCollection.removeBook(index);
      displayBooks();
    }
  };
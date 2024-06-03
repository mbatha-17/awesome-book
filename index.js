import { getCurrentDateTime } from './date.js';
import { displayBooks, addBookToList, removeBookFromList } from './modules/display.js';

const currentDate = getCurrentDateTime();
document.getElementById('current-date').textContent = currentDate;

document.addEventListener('DOMContentLoaded', displayBooks);
document.querySelector('#add-book').addEventListener('click', addBookToList);
document.querySelector('#book-list').addEventListener('click', removeBookFromList);
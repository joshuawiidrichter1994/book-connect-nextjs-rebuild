import React from 'react';
import BookCard from './BookCard';
import { books, authors, genres } from '../../data/data.js';
import styles from './page.module.css'; // Make sure to import your CSS module here

/**
 * @typedef {object} Filters
 * @property {string | null} phrase
 * @property {string | 'any'} genre
 * @property {string | 'any'} author
 */

/**
 * @param {string} id
 * @returns {Book}
 */
export const getBookById = (id) => {
  let result = null;

  for (const singleBook of books) {
    if (result) break;
    if (singleBook.id === id) result = singleBook;
  }

  return result;
};

/**
 * @returns {React.ReactNode}
 */
export const createAuthorsFragment = () => {
  const optionElements = [];
  optionElements.push(<option key="any" value="any">All Authors</option>);

  for (const [id, name] of Object.entries(authors)) {
    optionElements.push(<option key={id} value={id}>{name}</option>);
  }

  return optionElements;
};

/**
 * @returns {React.ReactNode}
 */
export const createGenresFragment = () => {
  const optionElements = [];
  optionElements.push(<option key="any" value="any">All Genres</option>);

  for (const [id, name] of Object.entries(genres)) {
    optionElements.push(<option key={id} value={id}>{name}</option>);
  }

  return optionElements;
};

export default function MainLayout() {
  return (
    <main className={styles.list}>
      <div className={styles.list__items} data-list-items>
        <BookCard />
      </div>
      <div className={styles.list__message} data-list-message>
        No results found. Your filters might be too narrow.
      </div>
      <button className={styles.list__button} data-list-button></button>
    </main>
  );
}

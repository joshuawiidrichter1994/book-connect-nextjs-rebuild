import BookCard from "./BookCard";
import { books, authors, genres } from "../../data/data.js";
/**
 * @typedef {object} Filters
 * @property {string | null} phrase
 * @property {string | 'any'} genre
 * @property {string | 'any'} author
 */

export default function MainLayout() {
  return (
    <>
      <main className={styles.list}>
        <div className={styles.list__items} data-list-items>
          <BookCard />
        </div>
        <div className={styles.list__message} data-list-message>
          No results found. Your filters might be too narrow.
        </div>
        <button className={styles.list__button} data-list-button></button>
      </main>
    </>
  );
}

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
 * @returns {HTMLElement}
 */
export const createAuthorsFragment = () => {
  const fragment = document.createDocumentFragment();
  const option = createOption("any", "All Authors");
  fragment.appendChild(option);

  for (const [id, name] of Object.entries(authors)) {
    const option = createOption(id, name);
    fragment.appendChild(option);
  }

  return fragment;
};

/**
 *
 * @returns
 */
export const createGenresFragment = () => {
  const fragment = document.createDocumentFragment();
  const option = createOption("any", "All Genres");
  fragment.appendChild(option);

  for (const [id, name] of Object.entries(genres)) {
    const option = createOption(id, name);
    fragment.appendChild(option);
  }

  return fragment;
};

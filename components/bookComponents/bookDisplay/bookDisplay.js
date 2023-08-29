import { useEffect, useState } from "react";
import BookItem from "../book/bookItem";
import styles from "./bookDisplay.module.css";

function BookDisplay(props) {
  const { books, BOOKS_PER_PAGE } = props;

  const [visibleBooks, setVisibleBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const loadMore = () => {
    const startIndex = (currentPage - 1) * BOOKS_PER_PAGE;
    const endIndex = startIndex + BOOKS_PER_PAGE;
    const newVisibleBooks = books.slice(0, endIndex);
    setVisibleBooks(newVisibleBooks);
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    loadMore();
  }, []);

  return (
    <main className={styles.list}>
      <div className={styles.list__items} data-list-items>
        {visibleBooks.map((book) => (
          <BookItem
            key={book.id}
            id={book.id}
            book={book}
            authors={props.authors}
            authorId={book.author}
          />
        ))}
      </div>
      <div className={styles.list__message} data-list-message>
        No results found. Your filters might be too narrow.
      </div>
      {visibleBooks.length < books.length && (
        <button
          className={styles.list__button}
          onClick={loadMore}
          data-list-button
        >
          Show more ({books.length - visibleBooks.length})
        </button>
      )}
    </main>
  );
}

export default BookDisplay;

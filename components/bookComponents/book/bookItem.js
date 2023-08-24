import { Fragment } from "react";
import styles from "./bookItem.module.css";

function BookItem(props) {
  const { id, book, authors, authorId } = props; // Destructure authors and authorId

  //const exploreLink = `/events/${id}`;

  // Find the author's name using the authorId
  const authorName = authors[authorId];

  return (
    <button className={styles.preview} data-preview={id}>
      <img className={styles.preview__image} src={book.image} alt={book.title} />
      <div className={styles.preview__info}>
        <h3 className={styles.preview__title}>{book.title}</h3>
        <div className={styles.preview__author}>{authorName}</div> {/* Display author's name */}
      </div>
    </button>
  );
}

export default BookItem;

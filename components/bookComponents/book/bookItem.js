import styles from "./bookItem.module.css";
import Link from "next/link";
import Image from "next/image";

function BookItem(props) {
  const { id, Book, authors, authorId } = props; // Destructure authors and authorId

  //const exploreLink = `/events/${id}`;

  // Find the author's name using the authorId
  const authorName = authors[authorId];

  return (
    <Link href={`/${Book.id}`}>
      <button className={styles.preview} data-preview={id}>
        <Image
          className={styles.preview__image}
          src={Book.image}
          alt={Book.title}
          width={300} // Adjust this value according to the actual width of the image
          height={400} // Adjust this value according to the actual height of the image
        />
        <div className={styles.preview__info}>
          <h3 className={styles.preview__title}>{Book.title}</h3>
          <div className={styles.preview__author}>{authorName}</div>{" "}
          {/* Display author's name */}
        </div>
      </button>
    </Link>
  );
}

export default BookItem;

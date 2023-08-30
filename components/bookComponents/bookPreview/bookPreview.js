import Image from "next/image";
import styles from "./bookPreview.module.css";

function BookPreview(props) {
  const { Book, authors, closePreview } = props;

  return (
    <dialog className={styles.overlay} open={true}>
      {Book && (
        <>
          <div className={styles.overlay__preview}>
            <Image
              className={styles.overlay__blur}
              src={Book.image}
              alt=""
              width={300} // Adjust this value according to the actual width of the image
              height={400} // Adjust this value according to the actual height of the image
            />
            <Image
              className={styles.overlay__image}
              src={Book.image}
              alt=""
              width={300} // Adjust this value according to the actual width of the image
              height={400} // Adjust this value according to the actual height of the image
            />
          </div>
          <div className={styles.overlay__content}>
            <h3 className={styles.overlay__title}>{Book.title}</h3>
            <div className={styles.overlay__data}>
              {`${authors[Book.author]} (${new Date(
                Book.published
              ).getFullYear()})`}
            </div>
            <p
              className={`${styles.overlay__data} ${styles.overlay__data_secondary}`}
            >
              {Book.description}
            </p>
          </div>
          <div className={styles.overlay__row}>
            <button
              className={`${styles.overlay__button} ${styles.overlay__button_primary}`}
              onClick={() => closePreview()}
            >
              Close
            </button>
          </div>
        </>
      )}
    </dialog>
  );
}

export default BookPreview;

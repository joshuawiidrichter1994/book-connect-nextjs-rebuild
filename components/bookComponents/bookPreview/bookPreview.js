import Image from "next/image";
import styles from "./bookPreview.module.css";
import { useRouter } from 'next/router';


function BookPreview(props) {
  const router = useRouter();
  const { Book, authors } = props;

  const handleClose = () => {
    router.push('/'); // Replace '/' with the actual path to your index page
  };

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
              height={250} // Adjust this value according to the actual height of the image
            />
            <Image
              className={styles.overlay__image}
              src={Book.image}
              alt=""
              width={300} // Adjust this value according to the actual width of the image
              height={250} // Adjust this value according to the actual height of the image
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
              className={`${styles.overlay__button} ${styles.overlay__button_primary}`} onClick={handleClose}
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

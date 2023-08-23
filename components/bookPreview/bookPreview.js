import styles from "./bookPreview.module.css";
import Image from "next/image";


function BookPreview() {
  return (
    <dialog className={styles.overlay} data-list-active>
      <div className={styles.overlay__preview}>
        <Image className={styles.overlay__blur} data-list-blur src="" />
        <Image className={styles.overlay__image} data-list-image src="" />
      </div>
      <div className={styles.overlay__content}>
        <h3 className={styles.overlay__title} data-list-title></h3>
        <div className={styles.overlay__data} data-list-subtitle></div>
        <p
          className={`${styles.overlay__data} ${styles.overlay__data_secondary}`}
          data-list-description
        ></p>
      </div>

      <div className={styles.overlay__row}>
        <button
          className={`${styles.overlay__button} ${styles.overlay__button_primary}`}
          data-list-close
        >
          Close
        </button>
      </div>
    </dialog>
  );
}

export default BookPreview;

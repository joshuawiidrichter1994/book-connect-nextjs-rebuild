import styles from "./page.module.css";
/**
 * @typedef {object} Filters
 * @property {string | null} phrase
 * @property {string | 'any'} genre
 * @property {string | 'any'} author
 */

export default function BookPreviewCard() {
  return (
    <>
      <dialog className={styles.overlay} data-list-active>
        <div className={styles.overlay__preview}>
          <img className={styles.overlay__blur} data-list-blur src="" />
          <img className={styles.overlay__image} data-list-image src="" />
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
    </>
  );
}

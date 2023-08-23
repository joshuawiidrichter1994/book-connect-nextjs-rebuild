import styles from "./search.module.css";

function Search() {
  return (
    <dialog className={styles.overlay} data-search-overlay>
      <div className={styles.overlay__content}>
        <form className={styles.overlay__form} data-search-form id="search">
          <label className={styles.overlay__field}>
            <div className={styles.overlay__label}>Title</div>
            <input
              className={styles.overlay__input}
              data-search-title
              name="title"
              placeholder="Any"
            ></input>
          </label>

          <label className={styles.overlay__field}>
            <div className={styles.overlay__label}>Genre</div>
            <select
              className={`${styles.overlay__input} ${styles.overlay__input_select}`}
              data-search-genres
              name="genre"
            ></select>
          </label>

          <label className={styles.overlay__field}>
            <div className={styles.overlay__label}>Author</div>
            <select
              className={`${styles.overlay__input} ${styles.overlay__input_select}`}
              data-search-authors
              name="author"
            ></select>
          </label>
        </form>

        <div className={styles.overlay__row}>
          <button className={styles.overlay__button} data-search-cancel>
            Cancel
          </button>
          <button
            className={`${styles.overlay__button} ${styles.overlay__button_primary}`}
            type="submit"
            form="search"
          >
            Search
          </button>
        </div>
      </div>
    </dialog>
  );
}

export default Search;

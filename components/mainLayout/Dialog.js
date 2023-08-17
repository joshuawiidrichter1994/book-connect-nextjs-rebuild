import styles from "./page.module.css";

export default function Dialog() {
  return (
    <>
      <dialog className={styles.overlay} data-list-active>
        <div className={styles.overlay__preview}>
          <img className={styles.overlay__blur} data-list-blur src="" />
          <img className="overlay__image" data-list-image src="" />
        </div>
        <div className={styles.overlay__content}>
          <h3 className={styles.overlay__title} data-list-title></h3>
          <div className={styles.overlay__data} data-list-subtitle></div>
          <p
            className="overlay__data overlay__data_secondary"
            data-list-description
          ></p>
        </div>

        <div className={styles.overlay__row}>
          <button
            className="overlay__button overlay__button_primary"
            data-list-close
          >
            Close
          </button>
        </div>
      </dialog>

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
                className="overlay__input overlay__input_select"
                data-search-genres
                name="genre"
              ></select>
            </label>

            <label className={styles.overlay__field}>
              <div className={styles.overlay__label}>Author</div>
              <select
                className="overlay__input overlay__input_select"
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
              className="overlay__button overlay__button_primary"
              type="submit"
              form="search"
            >
              Search
            </button>
          </div>
        </div>
      </dialog>

      <dialog className={styles.overlay} data-settings-overlay>
        <div className={styles.overlay__content}>
          <form
            className={styles.overlay__form}
            data-settings-form
            id="settings"
          >
            <label className={styles.overlay__field}>
              <div className={styles.overlay__label}>Theme</div>

              <select
                className="overlay__input overlay__input_select"
                data-settings-theme
                name="theme"
              >
                <option value="day">Day</option>
                <option value="night">Night</option>
              </select>
            </label>
          </form>

          <div className={styles.overlay__row}>
            <button className={styles.overlay__button} data-settings-cancel>
              Cancel
            </button>
            <button
              className="overlay__button overlay__button_primary"
              type="submit"
              form="settings"
            >
              Save
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}

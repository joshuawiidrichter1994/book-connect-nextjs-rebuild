import styles from "./page.module.css";

export default function ThemeDialog() {
  return (
    <>
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
                className={`${styles.overlay__input} ${styles.overlay__input_select}`}
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
              className={`${styles.overlay__button} ${styles.overlay__button_primary}`}
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

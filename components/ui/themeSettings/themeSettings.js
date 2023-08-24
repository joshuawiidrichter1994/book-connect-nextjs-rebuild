import styles from "./themeSettings.module.css";

function ThemeSettings(props) {
  const { Book } = props;

  const css = {
    day: {
      dark: "10, 10, 20",
      light: "255, 255, 255",
    },
    night: {
      dark: "255, 255, 255",
      light: "10, 10, 20",
    },
  };


    const  cancel = () => {
        document.querySelector(`[data-settings-overlay]`).open = false;
      };

  const    submit = (event) => {
        event.preventDefault();
        const { theme } = convertSubmit(event);
        setTheme(theme || "day");
        document.querySelector(`[data-settings-overlay]`).open = false;
      };


  /**
   * @param {SubmitEvent} event
   * @returns {object}
   */
  const convertSubmit = (event) => {
    const formData = new FormData(event.target);
    const result = Object.fromEntries(formData);
    return result;
  };

  /**
   * @param {'day' | 'night'} theme
   */
  const setTheme = (theme) => {
    document.documentElement.style.setProperty("--color-dark", css[theme].dark);
    document.documentElement.style.setProperty(
      "--color-light",
      css[theme].light
    );
  };

  return (
    <dialog className={styles.overlay} data-settings-overlay>
      <div className={styles.overlay__content}>
        <form
          className={styles.overlay__form}
          onSubmit={submit}
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
          <button
            className={styles.overlay__button}
            onClick={cancel}
            data-settings-cancel
          >
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
  );
}

export default ThemeSettings;

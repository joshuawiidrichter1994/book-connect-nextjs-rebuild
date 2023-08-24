import styles from "./search.module.css";

function Search(props) {
  const { Book, books, authors, BOOKS_PER_PAGE, genres } = props;
  let { page, matches } = props;

  const updateRemaining = () => {
    const initial = matches.length - page * BOOKS_PER_PAGE;
    const hasRemaining = initial > 0;

    const remaining = hasRemaining ? initial : 0;

    document.querySelector(`[data-list-button]`).disabled = !hasRemaining;
    document.querySelector(`[data-list-button]`).innerHTML = /* html */ `
                <span>Show more</span>
                <span class="list__remaining"> (${remaining})</span>
            `;
  };

  const recreate = (display) => {
    matches = display;
    page = 1;

    if (display.length < 1) {
      document.querySelector(`[data-list-message]`).classList.add("list__message_show");
    } else {
      document.querySelector(`[data-list-message]`).classList.remove("list__message_show");
    }

    document.querySelector(`[data-list-items]`).innerHTML = "";
    const fragments = createPreviewsFragment(display, [0, 36]);
    document.querySelector(`[data-list-items]`).appendChild(fragments);
    updateRemaining();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const cancel = () => {
    document.querySelector(`[data-search-overlay]`).open = false;
  };

  const submit = (event) => {
    event.preventDefault();
    const response = convertSubmit(event);
    const result = filter(books, response);
    recreate(result);
    document.querySelector(`[data-search-overlay]`).open = false;
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
   * ...
   *
   * @param {Book[]} book
   * @param {Filters} filters
   * @returns {Book[]}
   */
  const filter = (books, filters) => {
    let result = [];

    for (const book of books) {
      const titleMatch =
        filters.title.trim() === "" ||
        book.title.toLowerCase().includes(filters.title.toLowerCase());
      const authorMatch =
        filters.author === "any" || book.author === filters.author;
      let genreMatch = filters.genre === "any";

      for (const singleGenre of book.genres) {
        if (genreMatch) break;

        if (singleGenre === filters.genre) {
          genreMatch = true;
        }
      }

      if (titleMatch && authorMatch && genreMatch) result.push(book);
    }

    return result;
  };

  /**
   * ...
   *
   * @param {Book} props
   * @returns {HTMLButtonElement}
   */
  const createPreview = (props) => {
    const { author: authorId, id, image, title } = props;

    const element = document.createElement("button");
    element.classList = styles.preview;
    element.setAttribute("data-preview", id);

    element.innerHTML =
      /* html */ `
          <img
              class=` +
      styles.preview__image +
      `
              src=` +
      image +
      `
          />
          
          <div className=` +
      styles.preview__info +
      `>
              <h3 className=` +
      styles.preview__title +
      `>${title}</h3>
              <div className=` +
      styles.preview__author +
      `>${authors[authorId]}</div>
          </div>
      `;

    return element;
  };

  const createPreviewsFragment = (source, range) => {
    if (!source || !Array.isArray(source)) throw new Error("Source required");
    if (!range || range.length < 2)
      throw new Error("Range must be an array with two numbers");

    const fragment = document.createDocumentFragment();

    const [start, end] = range;

    /**
     * @type {Book[]}
     */
    const extracted = source.slice(start, end);

    for (const { author, image, title, id } of extracted) {
      const preview = createPreview({
        author,
        id,
        image,
        title,
      });

      fragment.appendChild(preview);
    }

    return fragment;
  };

  return (
    <dialog className={styles.overlay} data-search-overlay>
      <div className={styles.overlay__content}>
        <form
          className={styles.overlay__form}
          onSubmit={submit}
          data-search-form
          id="search"
        >
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
          <button
            className={styles.overlay__button}
            onClick={cancel}
            data-search-cancel
          >
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

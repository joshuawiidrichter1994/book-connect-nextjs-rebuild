import styles from "./bookDisplay.module.css";
import { useRouter } from "next/router"; // Import the useRouter hook
import { useEffect } from "react";
import BookItem from "../book/bookItem";

function BookDisplay(props) {
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

  const increase = () => {
    const newPage = page + 1;
    const start = (newPage - 1) * BOOKS_PER_PAGE;
    const end = newPage * BOOKS_PER_PAGE;

    updateRemaining();
    page = newPage;
  };

  const recreate = (display) => {
    matches = display;
    page = 1;

    if (display.length < 1) {
      document
        .querySelector(`[data-list-message]`)
        .classList.add("list__message_show");
    } else {
      document
        .querySelector(`[data-list-message]`)
        .classList.remove("list__message_show");
    }

    document.querySelector(`[data-list-items]`).innerHTML = "";
    //const fragments = createPreviewsFragment(display, [0, 36]);
    document.querySelector(`[data-list-items]`).appendChild(fragments);
    updateRemaining();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const close = () => {
    document.querySelector(`[data-list-active]`).open = false;
  };

  const open = (event) => {
    const previewId = event.target.dataset.preview;

    if (previewId) {
      const active = getBookById(previewId);
      // Instead of opening a preview, navigate to the dynamic route
      router.push(`/preview/${active.id}`);
    }
  };

  const router = useRouter();

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

  const initialise = () => {
    document.querySelector(`[data-list-items]`);
    //.appendChild(createPreviewsFragment(books, [0, BOOKS_PER_PAGE]));
    document
      .querySelector(`[data-search-genres]`)
      .appendChild(createGenresFragment(genres));
    document
      .querySelector(`[data-search-authors]`)
      .appendChild(createAuthorsFragment(authors));
    document.querySelector(`[data-settings-theme]`).value = isDarkMode()
      ? "night"
      : "day";
    setTheme(isDarkMode() ? "night" : "day");

    const remaining = books.length - BOOKS_PER_PAGE;
    document.querySelector(
      `[data-list-button]`
    ).innerText = `Show more (${remaining})`;
  };

  /**
   * @param {string} id
   * @returns {Book}
   */
  const getBookById = (id) => {
    let result = null;

    for (const singleBook of books) {
      if (result) break;
      if (singleBook.id === id) result = singleBook;
    }

    return result;
  };
  /*
  const createPreviewsFragment = (source, range) => {
    if (!source || !Array.isArray(source)) throw new Error("Source required");
    if (!range || range.length < 2)
      throw new Error("Range must be an array with two numbers");

    const fragment = document.createDocumentFragment();

    const [start, end] = range;

    /**
     * @type {Book[]}
     */
  /*const extracted = source.slice(start, end);

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
  };*/

  /**
   * @returns {HTMLElement}
   */
  const createAuthorsFragment = () => {
    const fragment = document.createDocumentFragment();
    const option = createOption("any", "All Authors");
    fragment.appendChild(option);

    for (const [id, name] of Object.entries(authors)) {
      const option = createOption(id, name);
      fragment.appendChild(option);
    }

    return fragment;
  };

  /**
   *
   * @returns
   */
  const createGenresFragment = () => {
    const fragment = document.createDocumentFragment();
    const option = createOption("any", "All Genres");
    fragment.appendChild(option);

    for (const [id, name] of Object.entries(genres)) {
      const option = createOption(id, name);
      fragment.appendChild(option);
    }

    return fragment;
  };

  /**
   * @param {string} value
   * @param {string} text
   * @returns {HTMLElement}
   */
  const createOption = (value, text) => {
    const element = document.createElement("option");
    element.value = value;
    element.innerText = text;
    return element;
  };

  /**
   *
   * @returns {boolean}
   */
  const isDarkMode = () =>
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  useEffect(() => {
    initialise();
  }, []);

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
    <main className={styles.list}>
      <div className={styles.list__items} onClick={open} data-list-items>
        {books.map((book) => (
          <BookItem
            key={book.id}
            id={book.id}
            book={book}
            authors={authors} // Pass the authors data
            authorId={book.author}
          />
        ))}
      </div>
      <div className={styles.list__message} data-list-message>
        No results found. Your filters might be too narrow.
      </div>
      <button
        className={styles.list__button}
        onClick={increase}
        data-list-button
      ></button>
    </main>
  );
}

export default BookDisplay;

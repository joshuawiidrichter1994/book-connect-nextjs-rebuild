import { Inter } from "next/font/google";
import path from "path";
import fs from "fs/promises";
import { useEffect } from "react";
import styles from "./pages.module.css";
import HTMLHead from "@/components/head/htmlHead";
import Header from "@/components/header/header";
import Main from "@/components/main/main";
import Search from "@/components/search/search";
import ThemeSettings from "@/components/themeSettings/themeSettings";
import BookPreview from "@/components/bookPreview/bookPreview";
import { useRouter } from "next/router"; // Import the useRouter hook
const inter = Inter({ subsets: ["latin"] });


export default function Home(props) {
  const { Book, books, authors, BOOKS_PER_PAGE, genres } = props;
  const router = useRouter();

  /**
   * @type {number}
   */
  let page = 1;

  /**
   * @type {Book[]}
   */
  let matches = books;

  const DOM = {
    list: {
      items: () => getDOM("list-items"),
      button: () => getDOM("list-button"),
      message: () => getDOM("list-message"),
      close: () => getDOM("list-close"),
      active: () => getDOM("list-active"),
      blur: () => getDOM("list-blur"),
      image: () => getDOM("list-image"),
      title: () => getDOM("list-title"),
      subtitle: () => getDOM("list-subtitle"),
      description: () => getDOM("list-description"),
    },
    header: {
      search: () => getDOM("header-search"),
      settings: () => getDOM("header-settings"),
    },
    search: {
      title: () => getDOM("search-title"),
      genres: () => getDOM("search-genres"),
      authors: () => getDOM("search-authors"),
      form: () => getDOM("search-form"),
      cancel: () => getDOM("search-cancel"),
      overlay: () => getDOM("search-overlay"),
    },
    settings: {
      theme: () => getDOM("settings-theme"),
      form: () => getDOM("settings-form"),
      cancel: () => getDOM("settings-cancel"),
      overlay: () => getDOM("settings-overlay"),
    },
  };

  const actions = {
    list: {
      updateRemaining: () => {
        let initial = matches.length - page * BOOKS_PER_PAGE;
        let hasRemaining = initial > 0;

        let remaining = hasRemaining ? initial : 0;

        DOM.list.button().disabled = !hasRemaining;
        DOM.list.button().innerHTML =
          /* html */ `
               <span>Show more</span>
               <span className=` +
          styles.list__remaining +
          `> (${remaining})</span>
           `;
      },

      increase: () => {
        let newPage = page + 1;
        let start = (newPage - 1) * BOOKS_PER_PAGE;
        let end = newPage * BOOKS_PER_PAGE;

        DOM.list
          .items()
          .appendChild(createPreviewsFragment(matches, [start, end]));
        actions.list.updateRemaining();
        page = newPage;
      },

      recreate: (display) => {
        matches = display;
        page = 1;

        if (display.length < 1) {
          DOM.list.message().classList.add(styles.list__message_show);
        } else {
          DOM.list.message().classList.remove(styles.list__message_show);
        }

        DOM.list.items().innerHTML = "";
        const fragments = createPreviewsFragment(display, [0, 36]);
        DOM.list.items().appendChild(fragments);
        actions.list.updateRemaining();
        window.scrollTo({ top: 0, behavior: "smooth" });
      },

      close: () => {
        DOM.list.active().open = false;
      },

open: (event) => {
  const pathArray = Array.from(event.path || event.composedPath());

  /**
   * @type {null | Book}
   */
  let active = null;

  for (const node of pathArray) {
    if (active) break;
    const previewId = node?.dataset?.preview;
    if (previewId) active = getBookById(previewId);
  }

  if (!active) return;

  // Instead of opening a preview, navigate to the dynamic route
  router.push(`/preview/${active.id}`);
},

    },

    header: {
      search: () => {
        DOM.search.overlay().open = true;
        DOM.search.title().focus();
      },

      settings: () => {
        DOM.settings.overlay().open = true;
      },
    },

    search: {
      cancel: () => {
        DOM.search.overlay().open = false;
      },

      submit: (event) => {
        event.preventDefault();
        const response = convertSubmit(event);
        const result = filter(books, response);
        actions.list.recreate(result);
        DOM.search.overlay().open = false;
      },
    },

    settings: {
      cancel: () => {
        DOM.settings.overlay().open = false;
      },

      submit: (event) => {
        event.preventDefault();
        const { theme } = convertSubmit(event);
        setTheme(theme || "day");
        DOM.settings.overlay().open = false;
      },
    },
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

  /**
   * @param {SubmitEvent} event
   * @returns {object}
   */
  const convertSubmit = (event) => {
    const formData = new FormData(event.target);
    const result = Object.fromEntries(formData);
    return result;
  };

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
   *
   * @returns {boolean}
   */
  const isDarkMode = () =>
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

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

  const initialise = () => {
    DOM.list
      .items()
      .appendChild(createPreviewsFragment(books, [0, BOOKS_PER_PAGE]));
    DOM.search.genres().appendChild(createGenresFragment(genres));
    DOM.search.authors().appendChild(createAuthorsFragment(authors));
    DOM.settings.theme().value = isDarkMode() ? "night" : "day";
    setTheme(isDarkMode() ? "night" : "day");

    const remaining = books.length - BOOKS_PER_PAGE;
    DOM.list.button().innerText = `Show more (${remaining})`;
  };

  /**
   * @param {string} attribute
   */
  const getDOM = (attribute) => {
    if (typeof document === "undefined") {
      throw new Error("`getDOM` can only be used in the browser environment");
    }

    let result = document.querySelector(`[data-${attribute}]`);
    if (!result) throw new Error(`"[data-${attribute}]" is required in HTML`);
    return result;
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

  useEffect(() => {
    initialise();

    // Attach event listeners
    DOM.search.cancel().addEventListener("click", actions.search.cancel);
    DOM.search.form().addEventListener("submit", actions.search.submit);
    DOM.settings.cancel().addEventListener("click", actions.settings.cancel);
    DOM.settings.form().addEventListener("submit", actions.settings.submit);
    DOM.header.search().addEventListener("click", actions.header.search);
    DOM.header.settings().addEventListener("click", actions.header.settings);
    DOM.list.button().addEventListener("click", actions.list.increase);
    DOM.list.items().addEventListener("click", actions.list.open);
    DOM.list.close().addEventListener("click", actions.list.close);

    // Additional event listeners from the provided actions object
    DOM.header.search().addEventListener("click", actions.header.search);
    DOM.header.settings().addEventListener("click", actions.header.settings);
  }, []);

  return (
    <>
      <HTMLHead />
      <Header />
      <Main />
      <BookPreview />
      <Search />
      <ThemeSettings />

      <div className={styles.backdrop}></div>
    </>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return {
    /**
     * ...
     *
     * @typedef {object} Book
     * @prop {string[]} books
     * @prop {string[]} authors
     * @prop {number} BOOKS_PER_PAGE
     * @prop {string[]} genres
     */
    props: {
      Book: data.Book,
      books: data.books,
      authors: data.authors,
      BOOKS_PER_PAGE: data.BOOKS_PER_PAGE,
      genres: data.genres,
    },
  };
}

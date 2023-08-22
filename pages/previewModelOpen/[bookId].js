import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import path from "path";
import fs from "fs/promises";
import { useEffect } from "react";
import styles from "../pages.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home(props) {
  const { Book, books, authors, BOOKS_PER_PAGE, genres } = props;

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
  };

  const actions = {
    list: {
      updateRemaining: () => {
        let initial = matches.length - page * BOOKS_PER_PAGE;
        let hasRemaining = initial > 0;

        let remaining = hasRemaining ? initial : 0;
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

        const year = new Date(active.published).getFullYear();

        DOM.list.active().open = true;
        DOM.list.blur().src = active.image;
        DOM.list.image().src = active.image;
        DOM.list.title().innerText = active.title;
        DOM.list.subtitle().innerText = `${authors[active.author]} (${year})`;

        DOM.list.description().innerText = active.description;
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
    setTheme(isDarkMode() ? "night" : "day");

    const remaining = books.length - BOOKS_PER_PAGE;
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
    DOM.list.items().addEventListener("click", actions.list.open);
    DOM.list.close().addEventListener("click", actions.list.close);
  }, []);

  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/meta/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/meta/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/meta/favicon-16x16.png"
        />
        <link rel="manifest" href="/meta/manifest.json" />
        <link
          rel="mask-icon"
          href="/meta/safari-pinned-tab.svg"
          color="#0096ff"
        />
        <link rel="shortcut icon" href="/meta/favicon.ico" />
        <meta name="msapplication-TileColor" content="#0a0a14" />
        <meta name="msapplication-config" content="/meta/browserconfig.xml" />
        <meta name="theme-color" content="#0a0a14" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <header className={styles.header}>
        <div className={styles.header__inner}>
          <div className={styles.header__logo}>
            <svg
              className={styles.header__shape}
              viewBox="0 0 89 68"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M52.88 57.62 4.126 37.897a3 3 0 0 0-2.25 5.562L58.95 66.55a11.062 11.062 0 0 0 2.1.849l.154.062c.351.142.714.213 1.071.22 5.35.912 10.682-2.253 12.34-7.577l14.27-45.83C90.694 8.473 87.456 2.307 81.654.5c-5.8-1.806-11.966 1.432-13.773 7.233l-8.23 26.429L49.03 4.479a5 5 0 1 0-9.415 3.37l14.04 39.23-31.087-31.085a4 4 0 1 0-5.657 5.656l35.97 35.97Z"></path>
            </svg>

            <svg
              className={styles.header__text}
              viewBox="0 0 652 74"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M49.344 37.056c3.84 1.216 6.848 3.264 9.024 6.144 2.176 2.816 3.264 6.304 3.264 10.464 0 5.888-2.304 10.432-6.912 13.632C50.176 70.432 43.52 72 34.752 72H0V4.8h32.832c8.192 0 14.464 1.568 18.816 4.704 4.416 3.136 6.624 7.392 6.624 12.768 0 3.264-.8 6.176-2.4 8.736-1.536 2.56-3.712 4.576-6.528 6.048ZM15.456 16.512v15.84h15.456c3.84 0 6.752-.672 8.736-2.016 1.984-1.344 2.976-3.328 2.976-5.952s-.992-4.576-2.976-5.856c-1.984-1.344-4.896-2.016-8.736-2.016H15.456ZM33.6 60.288c4.096 0 7.168-.672 9.216-2.016 2.112-1.344 3.168-3.424 3.168-6.24 0-5.568-4.128-8.352-12.384-8.352H15.456v16.608H33.6ZM92.126 72.768c-5.44 0-10.336-1.12-14.688-3.36-4.288-2.304-7.648-5.472-10.08-9.504-2.432-4.032-3.648-8.608-3.648-13.728 0-5.12 1.216-9.696 3.648-13.728 2.432-4.032 5.792-7.168 10.08-9.408 4.352-2.304 9.248-3.456 14.688-3.456 5.44 0 10.304 1.152 14.592 3.456 4.288 2.24 7.648 5.376 10.08 9.408 2.432 4.032 3.648 8.608 3.648 13.728 0 5.12-1.216 9.696-3.648 13.728-2.432 4.032-5.792 7.2-10.08 9.504-4.288 2.24-9.152 3.36-14.592 3.36Zm0-12.288c3.84 0 6.976-1.28 9.408-3.84 2.496-2.624 3.744-6.112 3.744-10.464s-1.248-7.808-3.744-10.368c-2.432-2.624-5.568-3.936-9.408-3.936s-7.008 1.312-9.504 3.936c-2.496 2.56-3.744 6.016-3.744 10.368s1.248 7.84 3.744 10.464c2.496 2.56 5.664 3.84 9.504 3.84ZM150.232 72.768c-5.44 0-10.336-1.12-14.688-3.36-4.288-2.304-7.648-5.472-10.08-9.504-2.432-4.032-3.648-8.608-3.648-13.728 0-5.12 1.216-9.696 3.648-13.728 2.432-4.032 5.792-7.168 10.08-9.408 4.352-2.304 9.248-3.456 14.688-3.456 5.44 0 10.305 1.152 14.593 3.456 4.288 2.24 7.647 5.376 10.079 9.408 2.432 4.032 3.649 8.608 3.649 13.728 0 5.12-1.217 9.696-3.649 13.728s-5.791 7.2-10.079 9.504c-4.288 2.24-9.153 3.36-14.593 3.36Zm0-12.288c3.84 0 6.977-1.28 9.409-3.84 2.496-2.624 3.744-6.112 3.744-10.464s-1.248-7.808-3.744-10.368c-2.432-2.624-5.569-3.936-9.409-3.936-3.84 0-7.008 1.312-9.503 3.936-2.496 2.56-3.745 6.016-3.745 10.368s1.249 7.84 3.745 10.464c2.495 2.56 5.663 3.84 9.503 3.84ZM205.939 51.744l-7.2 7.104V72h-14.976V.768h14.976v40.32l21.888-20.736h17.856L216.979 42.24 240.403 72h-18.144l-16.32-20.256ZM297.941 73.152c-6.848 0-13.056-1.472-18.624-4.416-5.504-3.008-9.856-7.136-13.056-12.384-3.136-5.312-4.704-11.296-4.704-17.952 0-6.656 1.568-12.608 4.704-17.856 3.2-5.312 7.552-9.44 13.056-12.384 5.568-3.008 11.808-4.512 18.72-4.512 5.824 0 11.072 1.024 15.744 3.072 4.736 2.048 8.704 4.992 11.904 8.832l-9.984 9.216c-4.544-5.248-10.176-7.872-16.896-7.872-4.16 0-7.872.928-11.136 2.784-3.264 1.792-5.824 4.32-7.68 7.584-1.792 3.264-2.688 6.976-2.688 11.136 0 4.16.896 7.872 2.688 11.136 1.856 3.264 4.416 5.824 7.68 7.68 3.264 1.792 6.976 2.688 11.136 2.688 6.72 0 12.352-2.656 16.896-7.968l9.984 9.216c-3.2 3.904-7.168 6.88-11.904 8.928-4.736 2.048-10.016 3.072-15.84 3.072Z"></path>

              <path d="M353.126 72.768c-5.44 0-10.336-1.12-14.688-3.36-4.288-2.304-7.648-5.472-10.08-9.504-2.432-4.032-3.648-8.608-3.648-13.728 0-5.12 1.216-9.696 3.648-13.728 2.432-4.032 5.792-7.168 10.08-9.408 4.352-2.304 9.248-3.456 14.688-3.456 5.44 0 10.304 1.152 14.592 3.456 4.288 2.24 7.648 5.376 10.08 9.408 2.432 4.032 3.648 8.608 3.648 13.728 0 5.12-1.216 9.696-3.648 13.728-2.432 4.032-5.792 7.2-10.08 9.504-4.288 2.24-9.152 3.36-14.592 3.36Zm0-12.288c3.84 0 6.976-1.28 9.408-3.84 2.496-2.624 3.744-6.112 3.744-10.464s-1.248-7.808-3.744-10.368c-2.432-2.624-5.568-3.936-9.408-3.936s-7.008 1.312-9.504 3.936c-2.496 2.56-3.744 6.016-3.744 10.368s1.248 7.84 3.744 10.464c2.496 2.56 5.664 3.84 9.504 3.84ZM418.049 19.584c6.4 0 11.552 1.92 15.456 5.76 3.968 3.84 5.952 9.536 5.952 17.088V72H424.48V44.736c0-4.096-.895-7.136-2.687-9.12-1.792-2.048-4.384-3.072-7.776-3.072-3.776 0-6.784 1.184-9.024 3.552-2.24 2.304-3.36 5.76-3.36 10.368V72h-14.977V20.352h14.305V26.4c1.984-2.176 4.448-3.84 7.392-4.992 2.944-1.216 6.176-1.824 9.696-1.824ZM479.624 19.584c6.4 0 11.552 1.92 15.456 5.76 3.968 3.84 5.952 9.536 5.952 17.088V72h-14.976V44.736c0-4.096-.896-7.136-2.688-9.12-1.792-2.048-4.384-3.072-7.776-3.072-3.776 0-6.784 1.184-9.024 3.552-2.24 2.304-3.36 5.76-3.36 10.368V72h-14.976V20.352h14.304V26.4c1.984-2.176 4.448-3.84 7.392-4.992 2.944-1.216 6.176-1.824 9.696-1.824ZM560.961 46.368c0 .192-.096 1.536-.288 4.032h-39.072c.704 3.2 2.368 5.728 4.992 7.584 2.624 1.856 5.888 2.784 9.792 2.784 2.688 0 5.056-.384 7.104-1.152 2.112-.832 4.064-2.112 5.856-3.84l7.968 8.64c-4.864 5.568-11.968 8.352-21.312 8.352-5.824 0-10.976-1.12-15.456-3.36-4.48-2.304-7.936-5.472-10.368-9.504-2.432-4.032-3.648-8.608-3.648-13.728 0-5.056 1.184-9.6 3.552-13.632 2.432-4.096 5.728-7.264 9.888-9.504 4.224-2.304 8.928-3.456 14.112-3.456 5.056 0 9.632 1.088 13.728 3.264 4.096 2.176 7.296 5.312 9.6 9.408 2.368 4.032 3.552 8.736 3.552 14.112Zm-26.784-15.456c-3.392 0-6.24.96-8.544 2.88-2.304 1.92-3.712 4.544-4.224 7.872h25.44c-.512-3.264-1.92-5.856-4.224-7.776-2.304-1.984-5.12-2.976-8.448-2.976ZM591.091 72.768c-5.504 0-10.464-1.12-14.88-3.36-4.352-2.304-7.776-5.472-10.272-9.504-2.432-4.032-3.647-8.608-3.647-13.728 0-5.12 1.215-9.696 3.647-13.728 2.496-4.032 5.92-7.168 10.272-9.408 4.416-2.304 9.376-3.456 14.88-3.456 5.44 0 10.176 1.152 14.208 3.456 4.097 2.24 7.072 5.472 8.928 9.696l-11.615 6.24c-2.688-4.736-6.561-7.104-11.617-7.104-3.904 0-7.136 1.28-9.696 3.84-2.559 2.56-3.84 6.048-3.84 10.464s1.281 7.904 3.84 10.464c2.56 2.56 5.792 3.84 9.696 3.84 5.12 0 8.993-2.368 11.617-7.104l11.615 6.336c-1.856 4.096-4.831 7.296-8.928 9.6-4.032 2.304-8.768 3.456-14.208 3.456Z"></path>

              <path d="M652.112 69.504c-1.472 1.088-3.296 1.92-5.472 2.496-2.112.512-4.352.768-6.72.768-6.144 0-10.912-1.568-14.304-4.704-3.328-3.136-4.992-7.744-4.992-13.824V33.024h-7.968v-11.52h7.968V8.928H635.6v12.576h12.864v11.52H635.6v21.024c0 2.176.544 3.872 1.632 5.088 1.152 1.152 2.752 1.728 4.8 1.728 2.368 0 4.384-.64 6.048-1.92l4.032 10.56Z"></path>
            </svg>
          </div>
          <div>
            <button className={styles.header__button} data-header-search>
              <svg
                className={styles.header__icon}
                viewBox="0 96 960 960"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M795 963 526 695q-29 22.923-68.459 35.962Q418.082 744 372 744q-115.162 0-195.081-80Q97 584 97 471t80-193q80-80 193.5-80t193 80Q643 358 643 471.15q0 44.85-12.5 83.35Q618 593 593 627l270 268-68 68ZM371.353 650q74.897 0 126.272-52.25T549 471q0-74.5-51.522-126.75T371.353 292q-75.436 0-127.895 52.25Q191 396.5 191 471t52.311 126.75Q295.623 650 371.353 650Z"></path>
              </svg>
            </button>

            <button className={styles.header__button} data-header-settings>
              <svg
                className={styles.header__icon}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 960 960"
              >
                <path d="M479.796 562q-77.203 0-126-48.796Q305 464.407 305 387.204 305 310 353.796 261q48.797-49 126-49Q557 212 606.5 261T656 387.204q0 77.203-49.5 126Q557 562 479.796 562ZM135 934V813.205q0-44.507 22.828-77.721Q180.656 702.27 217 685q69-31 133.459-46.5T479.731 623q66.731 0 130.5 16 63.769 16 131.69 46.194 37.911 16.085 60.995 49.445Q826 768 826 812.945V934H135Zm94-94h502v-23q0-15.353-9.5-29.323Q712 773.706 698 767q-60-28-110.495-38.5-50.496-10.5-108-10.5Q424 718 371.5 728.5 319 739 261.429 766.844 247 773.559 238 787.575q-9 14.016-9 29.425v23Zm250.796-372Q515 468 538 445.154t23-58.119q0-35.685-22.796-58.36-22.797-22.675-58-22.675Q445 306 422 328.721t-23 57.819q0 35.51 22.796 58.485 22.797 22.975 58 22.975Zm.204-81Zm0 453Z"></path>
              </svg>
            </button>
          </div>
        </div>
      </header>

      <main className={styles.list}>
        <div className={styles.list__items} data-list-items></div>
        <div className={styles.list__message} data-list-message>
          No results found. Your filters might be too narrow.
        </div>
      </main>

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

      <div className={styles.backdrop}></div>
    </>
  );
}

export async function getStaticPaths() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  const bookIds = data.books.map((book) => book.id); // Extract book IDs

  const paths = bookIds.map((bookId) => ({
    params: { bookId },
  }));

  return {
    paths,
    fallback: false, // or 'blocking' or true, depending on your requirements
  };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  const book = data.books.find((book) => book.id === params.bookId);

  return {
    /**
     * ...
     *
     * @typedef {object} Book
     * @prop {string} id
     * @prop {string} title
     * @prop {string} author
     * @prop {string} image
     * @prop {string[]} genres
     * @prop {string} published
     * @prop {number} pages
     * @prop {number} popularity
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

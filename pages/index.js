import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import path from "path";
import fs from "fs/promises";

const inter = Inter({ subsets: ["latin"] });

export default function Home(props) {
  const { products } = props;

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
        DOM.list.button().innerHTML = /* html */ `
               <span>Show more</span>
               <span class="list__remaining"> (${remaining})</span>
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
        setPage = newPage;
      },

      recreate: (display) => {
        matches = display;
        page = 1;

        if (display.length < 1) {
          DOM.list.message().classList.add("list__message_show");
        } else {
          DOM.list.message().classList.remove("list__message_show");
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
      <main>
        <div>
          <ul>
            {products.map((product) => (
              <li key={product.id}>{product.title}</li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return {
    props: {
      products: data.products,
      Book: data.Book,
      books: data.books,
      authors: data.authors,
      BOOKS_PER_PAGE: data.BOOKS_PER_PAGE,
    },
  };
}

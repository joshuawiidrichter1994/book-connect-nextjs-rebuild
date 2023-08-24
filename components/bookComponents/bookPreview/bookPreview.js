import styles from "./bookPreview.module.css";
import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from 'next/router'; // Import the useRouter hook

function BookPreview(props) {
  const { Book, books, authors, BOOKS_PER_PAGE, genres } = props;
  let { page, matches } = props;

  const actions = {
    list: {
      updateRemaining: () => {
        const initial = matches.length - page * BOOKS_PER_PAGE;
        const hasRemaining = initial > 0;

        const remaining = hasRemaining ? initial : 0;

        document.querySelector(`[data-list-button]`).disabled = !hasRemaining;
        document.querySelector(`[data-list-button]`).innerHTML = /* html */ `
                <span>Show more</span>
                <span class="list__remaining"> (${remaining})</span>
            `;
      },

      increase: () => {
        const newPage = page + 1;
        const start = (newPage - 1) * BOOKS_PER_PAGE;
        const end = newPage * BOOKS_PER_PAGE;

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
          document.querySelector(`[data-list-message]`).classList.add("list__message_show");
        } else {
          document.querySelector(`[data-list-message]`).classList.remove("list__message_show");
        }

        document.querySelector(`[data-list-items]`).innerHTML = "";
        const fragments = createPreviewsFragment(display, [0, 36]);
        document.querySelector(`[data-list-items]`).appendChild(fragments);
        actions.list.updateRemaining();
        window.scrollTo({ top: 0, behavior: "smooth" });
      },
      
      close: () => {
        router.push('/'); // Navigate back to the index page
      },
      

      open: (book) => { // Remove the event parameter and use the `book` parameter
        const year = new Date(book.published).getFullYear();
      
        document.querySelector(`[data-list-active]`).open = true;
        document.querySelector(`[data-list-blur]`).src = book.image;
        document.querySelector(`[data-list-image]`).src = book.image;
        document.querySelector(`[data-list-title]`).innerText = book.title;
        document.querySelector(`[data-list-subtitle]`).innerText = `${authors[book.author]} (${year})`;
        document.querySelector(`[data-list-description]`).innerText = book.description;
      },

    },
  };

  const router = useRouter(); // Initialize the useRouter hook

  useEffect(() => {
    // Extract the bookId from the URL parameters
    const { bookId } = router.query;

    // Find the book with the extracted bookId
    const selectedBook = books.find((book) => book.id === bookId);

    // Open the previews fragment for the selected book
    if (selectedBook) {
      actions.list.open(selectedBook);
    }
  }, []);

  return (
    <dialog className={styles.overlay} data-list-active>
      <div className={styles.overlay__preview}>
        <Image className={styles.overlay__blur} data-list-blur src="" alt="" />
        <Image
          className={styles.overlay__image}
          data-list-image
          src=""
          alt=""
        />
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
          onClick={actions.list.close}
          data-list-close
        >
          Close
        </button>
      </div>
    </dialog>
  );
}

export default BookPreview;

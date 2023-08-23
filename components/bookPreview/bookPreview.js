import styles from "./bookPreview.module.css";
import Image from "next/image";
import { DOM } from "../../dom/dom";

function BookPreview(props) {
  const { Book, books, authors, BOOKS_PER_PAGE, genres } = props;
  let { page, matches } = props;

  const actions = {
    list: {
      updateRemaining: () => {
        const initial = matches.length - page * BOOKS_PER_PAGE;
        const hasRemaining = initial > 0;

        const remaining = hasRemaining ? initial : 0;

        DOM.list.button().disabled = !hasRemaining;
        DOM.list.button().innerHTML = /* html */ `
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
        const previewId = event.target.dataset.preview;

        if (previewId) {
          const active = getBookById(previewId);
          // Instead of opening a preview, navigate to the dynamic route
          router.push(`/preview/${active.id}`);
        }
      },
    },
  };

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

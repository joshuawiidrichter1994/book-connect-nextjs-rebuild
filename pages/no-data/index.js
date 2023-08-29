import styles from "./pages.module.css";

function noData() {



  return (
    <dialog className={styles.overlay} data-search-overlay>
      <div className={styles.overlay__content}>
        <h1>No Data</h1>
      </div>
    </dialog>
  );
}

export default noData;

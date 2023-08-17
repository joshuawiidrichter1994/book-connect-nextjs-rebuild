import styles from "./page.module.css";

export default function Main() {
  return (
    <>
      <main className={styles.list}>
        <div className={styles.list__items} data-list-items></div>
        <div className={styles.list__message} data-list-message>
          No results found. Your filters might be too narrow.
        </div>
        <button className={styles.list__button} data-list-button></button>
      </main>
    </>
  );
}

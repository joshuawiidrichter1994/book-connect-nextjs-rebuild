import styles from "./bookPreview.module.css";
import HTMLHead from "../../head/htmlHead";
import Header from "../../header/header";
import BookDisplay from "../bookDisplay/bookDisplay";
import BookPreview from "../bookPreview/bookPreview";

export default function Preview(props) {

  return (
    <>
      <HTMLHead />
      <Header />
      <BookDisplay {...props} />
      <BookPreview {...props} />

      <div className={styles.backdrop}></div>
    </>
  );
}

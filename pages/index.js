import styles from "./pages.module.css";
import HTMLHead from "../components/head/htmlHead";
import Header from "../components/header/header";
import BookDisplay from "../components/bookComponents/bookDisplay/bookDisplay";
import Search from "../components/ui/search/search";
import ThemeSettings from "../components/ui/themeSettings/themeSettings";
import BookPreview from "../components/bookComponents/bookPreview/bookPreview";
import { getAllBooks, getAllGenres, getAllAuthors } from "../helpers/api-util";

export default function Home(props) {

  return (
    <>
      <HTMLHead />
      <Header {...props} />
      <BookDisplay {...props} />
      <BookPreview {...props} />
      <Search {...props} />
      <ThemeSettings {...props} />

      <div className={styles.backdrop}></div>
    </>
  );
}


export async function getStaticProps() {
  const books = await getAllBooks();
  const authors = await getAllAuthors();
  const genres = await getAllGenres();
  return {
    /**
     * @prop {string[]} books
     * @prop {string[]} authors
     * @prop {number} BOOKS_PER_PAGE
     * @prop {string[]} genres
     */
    props: {
      books: books,
      authors: authors,
      BOOKS_PER_PAGE: 36,
      genres: genres,
    },
    revalidate: 1800
  };
}

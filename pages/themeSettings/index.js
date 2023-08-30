import styles from "./pages.module.css";
import HTMLHead from "../../components/head/htmlHead";
import Header from "../../components/header/header";
import BookDisplay from "../../components/bookComponents/bookDisplay/bookDisplay";
import { getAllBooks, getAllGenres, getAllAuthors } from "../../helpers/api-util";
import ThemeSettings from "../../components/ui/themeSettings/themeSettings";

export default function Home(props) {
  const { books, authors, genres } = props;

  console.log(books);
  console.log(authors);
  console.log(genres);

  return (
    <>
      <HTMLHead />
      <ThemeSettings {...props}/>
      <Header {...props} />
      <BookDisplay {...props} />
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
    revalidate: 1800,
  };
}

import styles from "../pages.module.css";
import HTMLHead from "../../components/head/htmlHead";
import Header from "../../components/header/header";
import BookDisplay from "../../components/bookComponents/bookDisplay/bookDisplay";
import BookPreview from "../../components/bookComponents/bookPreview/bookPreview";
import { getBookById, getAllBooks, getAllGenres, getAllAuthors} from "../helpers/api-util";

export default function Preview(props) {

  const book = props.Book;

  if (!book) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

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

export async function getStaticProps(context) {
  const bookId = context.params.bookId;

  const book = await getBookById(bookId);
  const books = await getAllBooks();
  const authors = await getAllAuthors();
  const genres = await getAllGenres();

  return {
    props:{
      Book: book, 
    /**
     * @prop {string[]} books
     * @prop {string[]} authors
     * @prop {number} BOOKS_PER_PAGE
     * @prop {string[]} genres
     */
      books: books,
      authors: authors,
      BOOKS_PER_PAGE: 36,
      genres: genres,
      /**
       * @type {number}
       */
      page: 1,

      /**
       * @type {Book[]}
       */
      matches: books,
    },
    revalidate: 30
  }
}

export async function getStaticPaths() {
  const books = await getAllBooks();
  const paths = books.map(book => ({params: {bookId: book.id}}));

  return {
    paths: paths,
    fallback: 'blocking',
  };
}
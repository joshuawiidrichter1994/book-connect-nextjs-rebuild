import { Inter } from "next/font/google";
import path from "path";
import fs from "fs/promises";
import styles from "../pages.module.css";
import HTMLHead from "@/components/head/htmlHead";
import Header from "@/components/header/header";
import Main from "@/components/main/main";
import Search from "@/components/search/search";
import ThemeSettings from "@/components/themeSettings/themeSettings";
import BookPreview from "@/components/bookPreview/bookPreview";

const inter = Inter({ subsets: ["latin"] });

export default function Preview(props) {
  const { Book, books, authors, BOOKS_PER_PAGE, genres } = props;

  return (
    <>
      <HTMLHead />
      <Header {...props} />
      <Main {...props} />
      <BookPreview {...props} />
      <Search {...props} />
      <ThemeSettings {...props} />

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

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return {
    /**
     * ...
     *
     * @typedef {object} Book
     * @prop {string[]} books
     * @prop {string[]} authors
     * @prop {number} BOOKS_PER_PAGE
     * @prop {string[]} genres
     */
    props: {
      Book: data.Book,
      books: data.books,
      authors: data.authors,
      BOOKS_PER_PAGE: data.BOOKS_PER_PAGE,
      genres: data.genres,
      /**
       * @type {number}
       */
      page: 1,

      /**
       * @type {Book[]}
       */
      matches: data.books,
    },
  };
}


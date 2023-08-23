import BookList from "@/components/books/book-list";
import BookSearch from "@/components/books/books-search";
import { getAllBooks } from "@/data/dummy-data";
import { Fragment } from "react";
import { useRouter } from "next/router";

function AllBooksPage() {
  const books = getAllBooks();
  const router = useRouter();

  function findBooksHandler(year, month) {
    console.log(`/bookDescriptionModelOpen/${year}/${month}`);
    const fullPath = `/bookDescriptionModelOpen/${year}/${month}`;
  
router.push(fullPath);
}

  return (
    <Fragment>
      <BookSearch onSearch={findBooksHandler} />
      <BookList items={books} />
    </Fragment>
  );
}

export default AllBooksPage;
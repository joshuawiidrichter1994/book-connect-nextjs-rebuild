import BookList from "@/components/books/book-list";
import ResultsTitle from "@/components/books/results-title";
import Button from "@/components/ui/button";
import ErrorAlert from "@/components/ui/error-alert";
import { getFilteredBooks } from "@/data/dummy-data";
import { useRouter } from "next/router";
import { Fragment } from "react";

function FilteredBooksPage() {
  const router = useRouter();
  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>Invalid filter. Please adjust your values!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/searchModelOpen">Show All Books</Button>
        </div>
      </Fragment>
    );
  }
  const filteredBooks = getFilteredBooks({
    year: numYear,
    month: numMonth,
  });

  if (!filteredBooks || filteredBooks.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No books found for the chosen filter!</p>
        </ErrorAlert>
        <div>
          <Button link="/searchModelOpen">Show All Books</Button>
        </div>
      </Fragment>
    );
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <Fragment>
      <ResultsTitle date={date} />
      <BookList items={filteredBooks} />
    </Fragment>
  );
}

export default FilteredBooksPage;
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://hpcwnfzsqbzxiqlagnbg.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhwY3duZnpzcWJ6eGlxbGFnbmJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMzNDE1ODksImV4cCI6MjAwODkxNzU4OX0.yF2n6vLOFOvdZDCGX5_zbYvYi4JyriXxWYJfH5Zo07I"
);

export async function getAllBooks() {
  //const response = await fetch("/dummy-backend.json");
  //const data = await response.json();
  const data = supabase.from("books").select();
  console.log(data);
  const books = [];
/*
  for (const key in data.books) {
    books.push({
      id: key,
      ...data[key],
    });
  }
  console.log(books);
  */
  return books;
}

export async function getAllGenres() {
  //const response = await fetch("/dummy-backend.json");
  //const data = await response.json();
  const data = supabase.from("genres").select();
  console.log(data);
  const genres = [];
/*
  for (const key in data) {
    genres.push({
      id: key,
      ...data[key],
    });
  }
*/
  return genres;
}

export async function getAllAuthors() {
  //const response = await fetch("../data/dummy-backend.json");
  //const data = await response.json();
  const data = supabase.from("authors").select();
  console.log(data);
  const authors = [];
/*
  for (const key in data) {
    authors.push({
      id: key,
      ...data[key],
    });
  }
*/
  return authors;
}

export async function getBookById(id) {
  const allBooks = await getAllBooks();
  return allBooks.find((book) => book.id === id);
}

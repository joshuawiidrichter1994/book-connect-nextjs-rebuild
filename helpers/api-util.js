import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://hpcwnfzsqbzxiqlagnbg.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhwY3duZnpzcWJ6eGlxbGFnbmJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMzNDE1ODksImV4cCI6MjAwODkxNzU4OX0.yF2n6vLOFOvdZDCGX5_zbYvYi4JyriXxWYJfH5Zo07I"
);

export async function getAllBooks() {
  const { data: books } = await supabase.from("books").select("*");
  return books;
}

export async function getAllGenres() {
  const { data: genres } = await supabase.from("genres").select("*");
  return genres;
}

export async function getAllAuthors() {
  const { data: authors } = await supabase.from("authors").select("*");
  return authors;
}

export async function getBookById(id) {
  const allBooks = await getAllBooks();
  return allBooks.find((book) => book.id === id);
}

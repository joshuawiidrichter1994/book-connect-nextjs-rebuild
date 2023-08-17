import styles from "./page.module.css";
import { books, authors, genres } from '../../data.js'

export default function SearchButton(books, authors, genres) {
    /**
 * ...
 * 
 * @param {Book[]} book 
 * @param {Filters} filters
 * @returns {Book[]}
 */
const filter = (books, filters) => {
    let result = []

    for (const book of books) {
        const titleMatch = filters.title.trim() === '' || book.title.toLowerCase().includes(filters.title.toLowerCase())
        const authorMatch = filters.author === 'any' || book.author === filters.author
        let genreMatch = filters.genre === 'any'

        for (const singleGenre of book.genres) {
            if (genreMatch) break;

            if (singleGenre === filters.genre) {
                genreMatch = true
            }
        }

        if (titleMatch && authorMatch && genreMatch) result.push(book)
    }

    return result
}
  return (
    <>

    </>
  );
}







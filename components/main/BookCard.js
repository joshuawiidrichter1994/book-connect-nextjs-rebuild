import BookPreviewCard from "./BookPreviewCard";
import styles from "./page.module.css";

/**
 * @typedef {object} Filters
 * @property {string | null} phrase
 * @property {string | 'any'} genre
 * @property {string | 'any'} author
 */

export default function BookCard() {
  return (
    <>
      <BookPreviewCard />
    </>
  );
}


/**
 * ...
 * 
 * @param {Book} props
 * @returns {HTMLButtonElement}
 */
const createPreview = (props) => {
  const { author: authorId, id, image, title } = props

  const element = document.createElement('button')
  element.classList = 'preview'
  element.setAttribute('data-preview', id)

  element.innerHTML = /* html */ `
      <img
          class="preview__image"
          src="${image}"
      />
      
      <div class="preview__info">
          <h3 class="preview__title">${title}</h3>
          <div class="preview__author">${authors[authorId]}</div>
      </div>
  `

  return element
}

/**
* ...
* 
* @param {import('./data').Book[]} source
* @param {[number, number]} range 
* @returns {HTMLElement}
*/
export const createPreviewsFragment = (source, range) => {
  if (!source || !Array.isArray(source)) throw new Error('Source required') 
  if (!range || range.length < 2) throw new Error('Range must be an array with two numbers')

  const fragment = document.createDocumentFragment()

  const [start, end] = range

  /**
   * @type {Book[]}
   */
  const extracted = source.slice(start, end)

  for (const { author, image, title, id } of extracted) {
      const preview = createPreview({
          author,
          id,
          image,
          title
      })
  
      fragment.appendChild(preview)
  }
  
  return fragment
}

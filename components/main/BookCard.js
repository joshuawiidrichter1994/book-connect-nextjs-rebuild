import React from "react";
import BookPreviewCard from "./BookPreviewCard";
import styles from "./page.module.css";

/**
 * @typedef {object} Filters
 * @property {string | null} phrase
 * @property {string | 'any'} genre
 * @property {string | 'any'} author
 */

/**
 * ...
 * 
 * @param {Book} props
 * @returns {JSX.Element}
 */
const createPreview = (props) => {
  const { author: authorId, id, image, title } = props;

  return (
    <button className="preview" data-preview={id}>
      <img className="preview__image" src={image} />
      <div className="preview__info">
        <h3 className="preview__title">{title}</h3>
        <div className="preview__author">{authors[authorId]}</div>
      </div>
    </button>
  );
};

/**
* ...
* 
* @param {import('./data').Book[]} source
* @param {[number, number]} range 
* @returns {JSX.Element}
*/
export const createPreviewsFragment = (source, range) => {
  if (!source || !Array.isArray(source)) throw new Error('Source required'); 
  if (!range || range.length < 2) throw new Error('Range must be an array with two numbers');

  const [start, end] = range;

  /**
   * @type {Book[]}
   */
  const extracted = source.slice(start, end);

  return (
    <React.Fragment>
      {extracted.map(({ author, image, title, id }) => (
        <React.Fragment key={id}>
          {createPreview({
            author,
            id,
            image,
            title
          })}
        </React.Fragment>
      ))}
    </React.Fragment>
  );
};

export default function BookCard() {
  return (
    <div>
      <BookPreviewCard />
    </div>
  );
}

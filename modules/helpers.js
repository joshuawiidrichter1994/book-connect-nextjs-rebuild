import { books, authors, genres } from './data.js'

/**
 * @typedef {object} Filters
 * @property {string | null} phrase
 * @property {string | 'any'} genre
 * @property {string | 'any'} author
 */

const css = {
    day: {
        dark: '10, 10, 20',
        light: '255, 255, 255',
    },
    night: {
        dark: '255, 255, 255',
        light: '10, 10, 20',
    }
}


/**
 * @param {SubmitEvent} event
 * @returns {object}
 */
export const convertSubmit = (event) => {
    const formData = new FormData(event.target)
    const result = Object.fromEntries(formData)
    return result
}

/**
 * 
 * @returns {boolean}
 */
export const isDarkMode = () => window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

/**
 * @param {'day' | 'night'} theme
 */
export const setTheme = (theme) => {
    document.documentElement.style.setProperty('--color-dark', css[theme].dark);
    document.documentElement.style.setProperty('--color-light', css[theme].light);
}

/**
 * @param {string} attribute 
 */
export const getDOM = (attribute) => {
    const result = document.querySelector(`[data-${attribute}]`)
    if (!result) throw new Error(`"[data-${attribute}]" is required in HTML`)
    return result
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

/**
 * @param {string} value 
 * @param {string} text 
 * @returns {HTMLElement}
 */
const createOption = (value, text) => {
    const element = document.createElement('option')
    element.value = value
    element.innerText = text
    return element
}

/**
 * @returns {HTMLElement}
 */
export const createAuthorsFragment = () => {
    const fragment = document.createDocumentFragment()
    const option = createOption('any', 'All Authors')
    fragment.appendChild(option)


    for (const [id, name] of Object.entries(authors)) {
        const option = createOption(id, name)
        fragment.appendChild(option)
    }
    
    return fragment
}

/**
 * 
 * @returns 
 */
export const createGenresFragment = () => {
    const fragment = document.createDocumentFragment()
    const option = createOption('any', 'All Genres')
    fragment.appendChild(option)

    for (const [id, name] of Object.entries(genres)) {
        const option = createOption(id, name)
        fragment.appendChild(option)
    }
    
    return fragment
}

/**
 * ...
 * 
 * @param {Book[]} book 
 * @param {Filters} filters
 * @returns {Book[]}
 */
export const filter = (books, filters) => {
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

/**
 * @param {string} id 
 * @returns {Book}
 */
export const getBookById = (id) => {
    let result = null
    
    for (const singleBook of books) {
        if (result) break;
        if (singleBook.id === id) result = singleBook
    } 

    return result
}

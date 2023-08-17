import { books, authors, genres, BOOKS_PER_PAGE } from './data.js'

import {
    createAuthorsFragment,
    createGenresFragment, 
    createPreviewsFragment,
    getDOM, 
    setTheme,
    isDarkMode,
} from './helpers.js'

export const DOM = {
    list: {
        items: () => getDOM('list-items'),
        button: () => getDOM('list-button'),
        message: () => getDOM('list-message'),
        close: () => getDOM('list-close'),
        active: () => getDOM('list-active'),
        blur: () => getDOM('list-blur'),
        image: () => getDOM('list-image'),
        title: () => getDOM('list-title'),
        subtitle: () => getDOM('list-subtitle'),
        description: () => getDOM('list-description'),
    },
    header: {
        search: () => getDOM('header-search'),
        settings: () => getDOM('header-settings'),
    },
    search: {
        title: () => getDOM('search-title'),
        genres: () => getDOM('search-genres'),
        authors: () => getDOM('search-authors'),
        form: () => getDOM('search-form'),
        cancel: () => getDOM('search-cancel'),
        overlay: () => getDOM('search-overlay'),
    },
    settings: {
        theme: () => getDOM('settings-theme'),
        form: () => getDOM('settings-form'),
        cancel: () => getDOM('settings-cancel'),
        overlay: () => getDOM('settings-overlay'),
    }
}

export const initialise = () => {
    DOM.list.items().appendChild(createPreviewsFragment(books, [0, BOOKS_PER_PAGE]))
    DOM.search.genres().appendChild(createGenresFragment(genres))
    DOM.search.authors().appendChild(createAuthorsFragment(authors))
    DOM.settings.theme().value = isDarkMode() ? 'night' : 'day'
    setTheme(isDarkMode() ? 'night' : 'day')
    
    const remaining = books.length - BOOKS_PER_PAGE
    DOM.list.button().innerText = `Show more (${remaining})`
}
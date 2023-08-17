import { Book, books, BOOKS_PER_PAGE, authors } from './modules/data.js'
import { initialise, DOM } from './modules/view.js'

import {
    createPreviewsFragment,
    convertSubmit,
    setTheme,
    filter,
    getBookById
} from './modules/helpers.js'

initialise()

/**
 * @type {number}
 */
let page = 1;

/**
 * @type {Book[]}
 */
let matches = books

const actions = {
    list: {
        updateRemaining: () => {
            const initial = matches.length - (page * BOOKS_PER_PAGE)
            const hasRemaining = initial > 0

            const remaining = hasRemaining ? initial : 0

            DOM.list.button().disabled = !hasRemaining
            DOM.list.button().innerHTML = /* html */ `
                <span>Show more</span>
                <span class="list__remaining"> (${remaining})</span>
            `
        },

        increase: () => {
            const newPage = page + 1
            const start = (newPage - 1) * BOOKS_PER_PAGE
            const end = newPage  * BOOKS_PER_PAGE

            DOM.list.items().appendChild(createPreviewsFragment(matches, [start, end]))
            actions.list.updateRemaining()
            page = newPage
        },   

        recreate: (display) => {
            matches = display
            page = 1;

            if (display.length < 1) {
                DOM.list.message().classList.add('list__message_show')
            } else {
                DOM.list.message().classList.remove('list__message_show')
            }

            DOM.list.items().innerHTML = ''
            const fragments = createPreviewsFragment(display, [0, 36])
            DOM.list.items().appendChild(fragments)
            actions.list.updateRemaining()
            window.scrollTo({top: 0, behavior: 'smooth'});
        },

        close: () => {
            DOM.list.active().open = false
        },

        open: (event) => {
            const pathArray = Array.from(event.path || event.composedPath())

            /**
             * @type {null | Book}
             */
            let active = null

            for (const node of pathArray) {
                if (active) break
                const previewId = node?.dataset?.preview
                if (previewId) active = getBookById(previewId)
            }
            
            if (!active) return
 
            const year = new Date(active.published).getFullYear()

            DOM.list.active().open = true
            DOM.list.blur().src = active.image
            DOM.list.image().src = active.image
            DOM.list.title().innerText = active.title
            DOM.list.subtitle().innerText = `${authors[active.author]} (${year})`
            
            DOM.list.description().innerText = active.description
        }
    },

    header: {
        search: () => { 
            DOM.search.overlay().open = true 
            DOM.search.title().focus()
        },

        settings: () => { 
            DOM.settings.overlay().open = true 
        },
    },

    search: {
        cancel: () => { DOM.search.overlay().open = false },

        submit: (event) => {
            event.preventDefault()
            const response = convertSubmit(event)
            const result = filter(books, response)
            actions.list.recreate(result)
            DOM.search.overlay().open = false
        }
    },

    settings: {
        cancel: () => { DOM.settings.overlay().open = false },

        submit: (event) => {
            event.preventDefault()
            const { theme } = convertSubmit(event)
            setTheme(theme || 'day')
            DOM.settings.overlay().open = false
        },
    }
}

actions.list.updateRemaining()

DOM.search.cancel().addEventListener('click', actions.search.cancel)
DOM.search.form().addEventListener('submit', actions.search.submit)
DOM.settings.cancel().addEventListener('click', actions.settings.cancel)
DOM.settings.form().addEventListener('submit', actions.settings.submit)
DOM.header.search().addEventListener('click', actions.header.search)
DOM.header.settings().addEventListener('click', actions.header.settings)
DOM.list.button().addEventListener('click', actions.list.increase)
DOM.list.items().addEventListener('click', actions.list.open)
DOM.list.close().addEventListener('click', actions.list.close)

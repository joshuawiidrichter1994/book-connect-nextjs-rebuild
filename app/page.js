import Image from 'next/image'
import styles from './page.module.css'
import MainLayout from '../components/main/MainLayout'
import path from 'path'
import fs from 'fs/promises';

export default async function Home() {
  const {Book, books, authors, BOOKS_PER_PAGE, genres} = await getData();

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
  

  return (
    <>
      <MainLayout />
    </>
  )
}

export async function getData() {
// The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  const filePath = path.join(process.cwd(), 'data', 'data.js')
  const data = await fs.readFile(filePath);
  console.log(data);

  if (!data.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return  {
    props: {
      Book: data.Book,
      books: data.books,
      authors: data.authors,
      BOOKS_PER_PAGE: data.BOOKS_PER_PAGE,
    },
  };
}

/**
 * @param {string} attribute 
 */
export const getDOM = (attribute) => {
  const result = document.querySelector(`[data-${attribute}]`)
  if (!result) throw new Error(`"[data-${attribute}]" is required in HTML`)
  return result
}

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
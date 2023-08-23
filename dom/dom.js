export const DOM = {
  list: {
    items: () => getDOM("list-items"),
    button: () => getDOM("list-button"),
    message: () => getDOM("list-message"),
    close: () => getDOM("list-close"),
    active: () => getDOM("list-active"),
    blur: () => getDOM("list-blur"),
    image: () => getDOM("list-image"),
    title: () => getDOM("list-title"),
    subtitle: () => getDOM("list-subtitle"),
    description: () => getDOM("list-description"),
  },
  header: {
    search: () => getDOM("header-search"),
    settings: () => getDOM("header-settings"),
  },
  search: {
    title: () => getDOM("search-title"),
    genres: () => getDOM("search-genres"),
    authors: () => getDOM("search-authors"),
    form: () => getDOM("search-form"),
    cancel: () => getDOM("search-cancel"),
    overlay: () => getDOM("search-overlay"),
  },
  settings: {
    theme: () => getDOM("settings-theme"),
    form: () => getDOM("settings-form"),
    cancel: () => getDOM("settings-cancel"),
    overlay: () => getDOM("settings-overlay"),
  },
};

/**
 * @param {string} attribute
 */
const getDOM = (attribute) => {
  if (typeof document === "undefined") {
    throw new Error("`getDOM` can only be used in the browser environment");
  }

  let result = document.querySelector(`[data-${attribute}]`);
  if (!result) throw new Error(`"[data-${attribute}]" is required in HTML`);
  return result;
};
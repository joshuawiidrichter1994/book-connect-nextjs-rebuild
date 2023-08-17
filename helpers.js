


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

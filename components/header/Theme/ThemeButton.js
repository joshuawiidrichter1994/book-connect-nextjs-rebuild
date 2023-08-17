import styles from "./page.module.css";

export default function ThemeButton() {
  return (
    <>

    </>
  );
}

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
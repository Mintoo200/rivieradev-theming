
const defaultTheme = (window.matchMedia('(prefers-color-scheme: dark)').matches)
    ? 'dark'
    : 'light'
document.body.setAttribute('data-theme', defaultTheme)

const themeSelect = document.querySelector('select');

themeSelect.addEventListener('change', (event) => {
    const newTheme = event.currentTarget.value;
    if (!newTheme) { document.body.setAttribute('data-theme', defaultTheme) }
    else { document.body.setAttribute('data-theme', newTheme) }
})

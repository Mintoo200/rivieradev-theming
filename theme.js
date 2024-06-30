const themeSelect = document.querySelector('select');

themeSelect.addEventListener('change', (event) => {
    const newTheme = event.currentTarget.value;
    if (!newTheme) { document.body.removeAttribute('data-theme') }
    else { document.body.setAttribute('data-theme', newTheme) }
})

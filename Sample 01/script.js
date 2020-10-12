
let theme = localStorage.getItem('theme')
let cssThemes = document.querySelector('#theme-style')
let themeSelect = document.querySelectorAll('.theme-dot')

// SET THEME BASED ON LAST SELECTED THEME
if(theme == null) {
    cssThemes.attributes.href.value = 'style.css'
} else {
    cssThemes.attributes.href.value = theme + '.css'
}

function changeTheme(backgroundStyle) {
    backgroundStyle = this.dataset.mode;
    cssThemes.attributes.href.value = backgroundStyle + '.css';

    // store theme for next usage
    localStorage.setItem('theme', backgroundStyle)
}

themeSelect.forEach(el => {
    el.addEventListener('click', changeTheme)
});
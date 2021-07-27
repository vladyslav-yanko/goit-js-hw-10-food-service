import createTemplate from './template/menu.hbs';
import menu from './data/menu.json';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const refs = {
    menu: document.querySelector(".js-menu"),
    input: document.querySelector('#theme-switch-toggle'),
    body: document.body,
}
const state = JSON.parse(localStorage.getItem('theme'));

refs.input.checked = state?.checked;
refs.body.classList.add(state?.theme ? state.theme : Theme.LIGHT) 

refs.menu.innerHTML = createTemplate(menu);
refs.input.addEventListener('change', onChangeTheme)

function onChangeTheme(e) {
    e.target.checked ? toggleTheme(Theme.DARK, Theme.LIGHT) : toggleTheme(Theme.LIGHT, Theme.DARK);
}

function toggleTheme(add, rem) {
    const state = {
        theme: add,
        checked: add === Theme.DARK,
    }
    refs.body.classList.replace(rem, add)
    localStorage.setItem('theme', JSON.stringify(state));
}



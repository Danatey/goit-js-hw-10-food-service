const bodyEl = document.querySelector('body');
const checkboxEl = document.querySelector('#theme-switch-toggle');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const lightThemeFunc = () => {
    bodyEl.classList.add(Theme.LIGHT);
    bodyEl.classList.remove(Theme.DARK);
    localStorage.removeItem('theme');
    localStorage.setItem('theme', Theme.LIGHT);
};

const darkThemeFunc = () => {
    bodyEl.classList.add(Theme.DARK);
    bodyEl.classList.remove(Theme.LIGHT);
    localStorage.removeItem('theme');
    localStorage.setItem('theme', Theme.DARK);
};

const changeThemeFunc = () => {
    if (!checkboxEl.checked) {
        lightThemeFunc();
    } else {
        darkThemeFunc();
    }
};

checkboxEl.addEventListener('change', changeThemeFunc);

if (localStorage.getItem('theme') === Theme.DARK) {
  checkboxEl.checked = 'true';
  darkThemeFunc();
}
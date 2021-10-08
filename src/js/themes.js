const bodyRef = document.body;
const checkboxRef = document.querySelector('#theme-switch-toggle')
const currentTheme = localStorage.getItem('theme');
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

checkboxRef.addEventListener('change', onChangeTheme);

function changeTheme(addTheme, removeTheme){
    bodyRef.classList.add(addTheme)
    bodyRef.classList.remove(removeTheme)
};

if (currentTheme === Theme.DARK) {
    checkboxRef.checked = true;
    changeTheme(Theme.DARK, Theme.LIGHT);
};

function onChangeTheme() {
    if (checkboxRef.checked) {
        changeTheme(Theme.DARK, Theme.LIGHT);
        localStorage.setItem('theme', Theme.DARK);
    } else {
        changeTheme(Theme.LIGHT, Theme.DARK);
        localStorage.removeItem('theme');
        localStorage.setItem('theme', Theme.LIGHT);
    }
};
import menuList from './menu.json';
import template from './template.hbs';

const card = template(menuList) ;
const addCard = document.querySelector('.js-menu');

addCard.insertAdjacentHTML('beforeend', card);
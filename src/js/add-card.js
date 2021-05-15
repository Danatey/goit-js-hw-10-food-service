import cardArray from '../menu.json';

import template from '../template/card.hbs';

const menuEl = document.querySelector('.js-menu');

const markup = template(cardArray);

menuEl.insertAdjacentHTML('beforeend', markup);
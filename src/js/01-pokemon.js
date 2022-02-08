import sampleTpl from '../templates/sample.hbs';
import '../css/common.css';
import API from './api-service';
import getRefs from './get-refs';

const refs = getRefs();
refs.searchForm.addEventListener('submit', oneSearch);

function oneSearch(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const serrchQuery = form.elements.query.value;

  API.fetcPokemon(serrchQuery)
    .then(renderInterfaceCard)
    .catch(onFetchEror)
    .finally(() => form.reset());
}

function renderInterfaceCard(pokemon) {
  const markup = sampleTpl(pokemon);
  refs.cardContainer.innerHTML = markup;
}
function onFetchEror() {
  alert('Упс братан Ошибочка получаеться');
}

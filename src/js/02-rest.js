import articlesTpl from '../templates/articles.hbs';
import '../css/common.css';
import NewsApiService from './02-news-service';
const refs = {
  serchForm: document.querySelector('.js-search-form'),
  articlesContainer: document.querySelector('.js-articles-container'),
  loadMoreBtn: document.querySelector('[data-acttion="load-more"]'),
};

const newsApiService = new NewsApiService();
refs.serchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

function onSearch(e) {
  e.preventDefault();

  newsApiService.query = e.currentTarget.elements.query.value;
  newsApiService.resetPage();
  newsApiService.fetchArticles().then(articles => {
    clearArticlesContainer();
    appendArticlesMarcup(articles);
  });
}

function onLoadMore() {
  newsApiService.fetchArticles().then(appendArticlesMarcup);
}
function appendArticlesMarcup(articles) {
  refs.articlesContainer.insertAdjacentHTML('beforeend', articlesTpl(articles));
}
function clearArticlesContainer() {
  refs.articlesContainer.innerHTML = '';
}

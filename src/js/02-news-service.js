/* const API_KEY = 'a7cff487e6274380843b0bbdb7ed9ea0'; */
const BASE_URL = 'https://newsapi.org/v2';
/* const options = {
  headers: {
    Authorization: API_KEY,
  },
}; */
export default class NewsApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchArticles() {
    return fetch(
      `${BASE_URL}/everything?q=${this.searchQuery}&apiKey=a7cff487e6274380843b0bbdb7ed9ea0&pageSize=5&page=${this.page}`,
    )
      .then(response => response.json())
      .then(({ articles }) => {
        this.incrementPage();
        return articles;
      });
  }
  incrementPage() {
    this.page += 1;
  }
  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}

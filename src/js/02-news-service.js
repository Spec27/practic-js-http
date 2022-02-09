export default class NewsApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }
  fetchArticles() {
    /* const options = {
      headers: {
        Authorization: 'a7cff487e6274380843b0bbdb7ed9ea0',
      },
    }; */
    const url = `https://newsapi.org/v2/everything?q=${this.searchQuery}&apiKey=a7cff487e6274380843b0bbdb7ed9ea0&language=en&pageSize=5&page=${this.page}`;
    return fetch(url /* options */)
      .then(r => r.json())
      .then(data => {
        this.incrementPage();
        return data.articles;
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

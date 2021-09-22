export default class newsApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  async fetchImages() {
    const KEY = '23515062-e57009621e5a3c522e7f';

    try {
      const response = await fetch(
        `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${KEY}`,
      );

      const images = response.json();
      this.incrementPage();

      return images;
    } catch (error) {
      console.log('Ошибочка! Что-то пошло не так...');
    }
  }

  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
  resetPage() {
    this.page = 1;
  }
  incrementPage() {
    this.page += 1;
  }
}

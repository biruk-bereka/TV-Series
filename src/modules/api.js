const baseURL = 'https://api.tvmaze.com/shows?page=1';
export default class Api {
  static async getFilms() {
    const req = await fetch(baseURL);
    const response = await req.json();
    return response;
  }
}

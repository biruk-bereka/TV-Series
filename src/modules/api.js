const baseURL = 'https://api.tvmaze.com/shows';
export default class Api {
  static async getSeries() {
    const req = await fetch(`${baseURL}?page=1`);
    const response = await req.json();
    return response;
  }

 static async getMovie(id) {
    const req = await fetch(`${baseURL}/${id}`)
    const movie = await req.json();
    return movie;
  }
}
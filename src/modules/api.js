const baseURL = 'https://api.tvmaze.com/shows?page=1';
const baseURLInvolvement =
  'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ER2rFBidmmnXOpDOOVHm';

export default class Api {
  static async getFilms() {
    const req = await fetch(baseURL);
    const response = await req.json();
    return response;
  }
}

const baseURL = 'https://api.tvmaze.com/shows?page=1';
const baseURLInvolvement = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ER2rFBidmmnXOpDOOVHm';
export default class Api {
  static async getSeries() {
    const req = await fetch(baseURL);
    const response = await req.json();
    return response;
  }

  static async addNewLike(itemId) {
    const response = await fetch(`${baseURLInvolvement}/likes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ item_id: itemId }),
    });
    return response.status;
  }
}
const baseURLInvolvement = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ER2rFBidmmnXOpDOOVHm';
const baseURL = 'https://api.tvmaze.com/shows';
export default class Api {
  static async getSeries() {
    const req = await fetch(`${baseURL}?page=1`);
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

  static async likesCounter(itemId) {
    const req = await fetch(`${baseURLInvolvement}/likes`);
    const data = await req.json();
    let nbLikes = 0;
    for (let i = 0; i < data.length; i += 1) {
      const serie = data[i];
      if (serie.item_id === itemId) {
        nbLikes = serie.likes;
        break;
      }
    }
    return nbLikes;
  }

  static async getMovie(id) {
    const req = await fetch(`${baseURL}/${id}`);
    const movie = await req.json();
    return movie;
  }

  static addComment = async (id, name, comment) => {
    const response = await fetch(`${baseURLInvolvement}/comments`, {
      method: 'POST',
      body: JSON.stringify({
        item_id: id,
        username: name,
        comment,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const status = await response.text();
    return status;
  }

  static getComments = async (id) => {
    const response = await fetch(`${baseURLInvolvement}/comments?item_id=${id}`);
    const comments = await response.json();
    return comments;
  }
}
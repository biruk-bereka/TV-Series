export default class CommentAPI {
  constructor() {
    this.baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/WWOK0bWjrP9cmMnhRfLg';
  }

    addComment = async (id, name, comment) => {
      const response = await fetch(`${this.baseURL}/comments`, {
        method: 'POST',
        body: JSON.stringify({
          item_id: id,
          username: name,
          comment,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      const status = await response.text();
      return status;
    }

    getComments = async (id) => {
      const response = await fetch(`${this.baseURL}/comments?item_id=${id}`);
      const comments = await response.json();
      return comments;
    }
}
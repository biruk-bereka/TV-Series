export default class CommentAPI {
  constructor() {
    this.baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/WWOK0bWjrP9cmMnhRfLg';
  }

    addComment = async (id, name, comment) => {
      await fetch(`${this.baseURL}/comments`, {
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
        .then((response) => response.json());
    }

    getComments = async (id) => {
      const comments = await fetch(`${this.baseURL}/comments?item_id=${id}`);
      return comments;
    }
}
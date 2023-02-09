import Api from './api.js';

const itemsCounter = (items) => items?.length || 0;
const likesCounter = (itemId) => Api.likesCounter(itemId);

export { itemsCounter, likesCounter };

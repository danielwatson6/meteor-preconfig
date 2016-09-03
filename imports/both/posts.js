import Collection from './collection.js';

export default new Collection('posts', {
  title: String,
  createdAt: Date,
  lastEditAt: Date,
})

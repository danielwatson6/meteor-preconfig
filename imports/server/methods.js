import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import Posts from '../both/posts.js';

// Add all collection insert, update, and remove
// methods here. These can be trusted since they
// are executed directly on the server.
Meteor.methods({
  
  'posts.insert'(title) {
    const createdAt = new Date();
    const lastEditAt = createdAt;
    const post = {title, createdAt, lastEditAt};
    Posts.validate(post);
    Posts.insert(post);
  },

  'posts.update'(_id, title) {
    check(title, Posts.schema.title);
    const lastEditAt = new Date();
    Posts.update(_id, {$set: {title, lastEditAt} })
  },

  'posts.remove'(_id) {
    Posts.remove(_id);
  },

});

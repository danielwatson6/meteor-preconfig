import { Meteor } from 'meteor/meteor';

import Posts from '/imports/both/posts.js';


Meteor.publish('posts', function() {
  return Posts.find();
});

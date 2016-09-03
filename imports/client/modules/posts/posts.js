import { Template } from 'meteor/templating';

import Posts from '/imports/both/posts.js';

import './posts.tpl.jade';


Template.posts.helpers({

  posts() {
    return Posts.find();
  },

  date() {
    return this.createdAt.toDateString();
  },

});

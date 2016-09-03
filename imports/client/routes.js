import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';


// Register a route and its corresponding template
// to the router. By default, this renders the template
// inside the layout, but this can be overriden by
// passing a custom `action` in the options parameter.
const route = function(route, template, options={}) {
  FlowRouter.route(route, _.extend({
    action() {
      BlazeLayout.render('mainLayout', {template})
    }
  }, options));
};

// Important: call this function and pass the returned
// function into the router options, not the function itself.
// This is done so that the context is unchanged.
const subscribe = function(subscription) {
  return function() {
    this.register(subscription, Meteor.subscribe(subscription));
  };
};


//=== ROUTES ===//

route('/', 'posts', {
  subscriptions: subscribe('posts')
});

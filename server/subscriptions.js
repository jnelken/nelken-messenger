Meteor.publish('messages', function () {
  return Messages.find();
});

Messages.allow({
  'insert': function () {
    return !! Meteor.user();
  }
});

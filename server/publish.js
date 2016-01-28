Meteor.publish('messages', function () {
  return Messages.find();
});

Messages.allow({
  'insert': function () {
    return !! Meteor.user();
  }
});

Meteor.publish('rooms', function () {
  var currentUserId = this.userId;
  return Rooms.find({ roomUsers : {userId: currentUserId}});
});

Rooms.allow({
  'insert': function () {
    return !! Meteor.user();
  }
});

Meteor.publish("users", function () {
  var users =  Meteor.users.find({}, {fields: { username: 1 }});
  addUsersToGlobalRoom(users);
  return users;
});

var addUsersToGlobalRoom = function(users) {
  var userIds = users.map((user) => {
    return { "userId" : user._id };
  });
  
  Rooms.update(
    { title : "global" },
    {
      title : "global",
      roomUsers : userIds
    },
    { upsert: true }
  );
};

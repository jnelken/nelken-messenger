Meteor.startup(function () {
  if (!Rooms.findOne()) {
    var defaultRooms = [
      {
        title: 'global',
        roomUsers : [],
        createdAt : new Date()
      },
    ];
    _.each(defaultRooms, function(room) {
      Rooms.insert(room);
    });
  }
  Rooms.remove({title: null});
});

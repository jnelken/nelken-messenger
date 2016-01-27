Meteor.startup(function () {
  if (!Rooms.findOne()) {

    var defaultRooms = [
      {
        title: 'global',
      },
    ];

    _.each(defaultRooms, function(room) {
      Rooms.insert(room);
    });

  }
});

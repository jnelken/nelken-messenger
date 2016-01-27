Meteor.startup(function () {
  if (!Rooms.findOne().title) {

    var defaultRooms = [
      {
        title: 'general',
      },
      {
        title: 'random',
      },
      {
        title: 'developer',
      }
    ];

    _.each(defaultRooms, function(room) {
      Rooms.insert(room);
    });

  }
});

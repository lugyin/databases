var db = require('../db');


module.exports = {
  messages: {
    get: function (callback) {
      db.connect();
      db.query("SELECT * FROM `messages`", function(err, results){
        callback(results);
      });
      db.end();
    }, // a function which produces all the messages
    post: function (data,callback) {

      var username = data.username;
      var message = data.message;
      var roomname = data.roomname;
      var createdat = new Date().toString();

      db.connect();

      db.query("INSERT INTO `messages` ('username', 'roomname', 'createat', 'text') values (?,?,?,?) ", [username,roomname,createdat,message], function(err, results){
          callback(results))
      };

      db.end();

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {
      db.connect();
      db.query("SELECT * FROM `users`", function(err, results){
        callback(results);
      });
      db.end();
    },
    post: function () {
      var username = data.username;

      //abstract data into managible sizes
      // transform 'data' into sql
        //send to mysql
      //create function to handle res return from database
      db.connect();

      db.query("INSERT INTO `users` ('username') values (?) ", username, function(err, results){
          callback(results))
      };

      db.end();
    }
  }
};


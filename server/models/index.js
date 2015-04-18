var db = require('../db');
db.connect();

module.exports = {
  messages: {
    get: function (callback) {
      db.query("SELECT * FROM messages", function(err, results){
        callback(results);
      });
    }, // a function which produces all the messages
    post: function (data,callback) {
      var username = data.username;
      var message = data.message;
      var roomname = data.roomname;
      db.query("INSERT INTO messages (username, roomname, text) values (?,?,?) ", [username,roomname,message], function(err, results){
        callback(results);
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    get: function (callback) {
      db.query("SELECT * FROM users", function(err, results){
        callback(results);
      });
    },
    post: function (data, callback) {
      var username = data.username;
      db.query("INSERT INTO users (username) values (?)", username, function(err, results){
        callback(results);
      });
    }
  }
};


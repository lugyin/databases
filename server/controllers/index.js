var models = require('../models');
var bluebird = require('bluebird');
var utils = require('./utils');



module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(data){
        utils.sendResponse(res, data);
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(req.body,function(data){
        utils.sendResponse(res, data, 201);
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(function(data){
        utils.sendResponse(res, data);
      });
    },
    post: function (req, res) {
      models.users.post(req.body,function(data){
        utils.sendResponse(res, data, 201);
      });
    }
  }
};




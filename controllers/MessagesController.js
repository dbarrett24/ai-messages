var app = require('../server.js');

module.exports = {

    //goes to server
    //gets all messages with given userid
    getAllMessages: function(req, res, next){
        var db = app.get('db');
        db.get_user_messages([req.params.id], function(err, messages){
            if(err){
                res.status(500).send(err);
                return;
            }
            res.send(messages);
        });
    },

    postMessage: function(req, res, next){
        var db = app.get('db');
        db.create_message([req.body.userid, req.body.message], function(err, success){
            if(err){
                res.status(500).send(err);
                return;
            }
            res.send(success);
        });
    }

};

var Musical = require('../models/musical');

exports.musical_list = function(req, res){
    res.send('NOT IMPLEMENTED: Musical list');
};

exports.musical_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Musical detail: ' + req.params.id);
};

exports.musical_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Musical create POST');
};

exports.musical_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: Musical delete DELETE ' + req.params.id);
};

exports.musical_update_put = function(req, res) {
    res.send('NOT IMPLEMENTED: Musical update PUT' + req.params.id);
};

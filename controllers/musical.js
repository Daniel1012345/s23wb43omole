var Musical = require('../models/musical');

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

// List of all Musicals
exports.musical_list = async function(req, res) {
    try{
        themusical = await Musical.find();
        res.send(themusical);
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// VIEWS
// Handle a show all view
exports.musical_view_all_Page = async function(req, res) {
    try{
        themusical = await Musical.find();
        res.render('musical', { title: 'Musical Search Results', results: themusical });
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

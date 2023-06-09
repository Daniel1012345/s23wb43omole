var Musical = require('../models/musical');

exports.musical_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
        const result = await Musical.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

exports.musical_create_post = async function(req, res) {
    let document = new Musical();
// We are looking for a body, since POST does not have query parameters.
// Even though bodies can be in many different formats, we will be picky
// and require that it be a json object
// {"costume_type":"goat", "cost":12, "size":"large"}
    document.instrument_type = req.body.instrument_type;
    document.brand = req.body.brand;
    document.cost = req.body.cost;
    try{
        let result = await document.save();
        res.send(result);
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};



exports.musical_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await Musical.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};

exports.musical_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await musical_update_put.findById( req.params.id)
        // Do updates of properties
        if(req.body.instrument_type)
            toUpdate.instrument_type = req.body.instrument_type;
        if(req.body.cost) toUpdate.cost = req.body.cost;
        if(req.body.brand) toUpdate.brand = req.body.brand;
        if(req.body.checkboxsale) toUpdate.sale = true;
        else toUpdate.same = false;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
};

// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.musical_create_Page = function(req, res) {
    console.log("create view")
    try{
        res.render('musicalcreate', { title: 'Musical Create'});
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
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
        res.render('musical', {title: 'Musical Search Results', results: themusical });
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};


// Handle a show one view with id specified by query
exports.musical_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
        result = await Musical.findById( req.query.id)
        res.render('musicaldetail', { title: 'Musical Detail', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};


// Handle building the view for updating a costume.
// query provides the id
exports.musical_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
        let result = await Musical.findById(req.query.id)
        res.render('musicalupdate', { title: 'Musical Update', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

exports.musical_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
        result = await Musical.findById(req.query.id)
        res.render('musicaldelete', { title: 'Musical Delete', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
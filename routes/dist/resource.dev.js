"use strict";

var express = require('express');

var router = express.Router(); // Require controller modules.

var api_controller = require('../controllers/api');

var musical_controller = require('../controllers/musical'); /// API ROUTE ///
// GET resources base., resourceRouter


router.get('/', api_controller.api); /// musical ROUTES ///
// POST request for creating a musical.

router.post('/musical', musical_controller.musical_create_post); // DELETE request to delete musical.

router["delete"]('/musical/:id', musical_controller.musical_delete); // PUT request to update musical.

router.put('/musical/:id', musical_controller.musical_update_put); // GET request for one musical.

router.get('/musical/:id', musical_controller.musical_detail); // GET request for list of all musical items.

router.get('/musical', musical_controller.musical_list);
module.exports = router;
//# sourceMappingURL=resource.dev.js.map

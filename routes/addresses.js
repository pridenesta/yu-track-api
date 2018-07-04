var express = require('express');
var router 	= express.Router();

const markers = {
  markers: [
    { _id: 1, name: 'yu-track Oficina', coords: [ -33.4007809, -70.5623082 ]},
    { _id: 2, name: 'Mi Casa', coords: [-33.4231425, -70.7279494 ]}
  ]
};

/* GET */
router.get('/', function(request, response) {
	return response.json(markers);
});

module.exports = router;
var express = require('express');
var router = express.Router();

router.get('/page/:id', function(req, res) {
    var name = req.params.id;

    res.send('<h1>'+name+' page </h1>');
});

exports.router = router;
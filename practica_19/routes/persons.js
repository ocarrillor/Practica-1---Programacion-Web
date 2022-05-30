const express = require('express');
const router = express.Router();
const mongoose = require('../node_modules/mongoose');
let Person = require('../models/person');

router.get('/persons', function(req, res, next) {
    Person.find(function (err, persons) {
        if (err) return next(err);
        res.json(persons);
    });
});

module.exports=router;
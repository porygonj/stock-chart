'use strict';

var express = require('express');
var path = process.cwd();

module.exports = function(app){
    
    app.route('/')
        .get(function(req, res){
            res.sendFile(path + '/client/index.html');
        });
    
};

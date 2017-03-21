'use strict';

var exec = require('child_process').exec;

exec('yarn licenses generate-disclaimer', { maxBuffer: 2000000 * 1024 }, function(e1, stdout, e2) {
    console.log('buffer size', stdout.length);
    console.log(e1, e2);
});

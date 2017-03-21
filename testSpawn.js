'use strict';

var spawn = require('child_process').spawn;

// It's not a spawn vs exec issue (same results either way)
var child = spawn('yarn', [
    'licenses',
    'generate-disclaimer'
], {
    // It's not a maxBuffer size issue
    maxBuffer: 2000000 * 1024
});

var count = 0;

child.stdout.on('data', function(chunk) {
    var chunkCount = chunk.toString('utf8').length;
    count += chunkCount;
    console.log('chunk count', chunkCount);
});

// Never called
child.stdout.on('exit', function(e) {
    console.log('count at exit', count);
    console.log('exit', e);
});

child.stdout.on('close', function(exitCode) {
    console.log('count at close', count);

    // Exit code of boolean false, oddly
    console.log('close', exitCode);
});

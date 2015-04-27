/**
 * @author Peter Banka [@psbanka](https://github.com/psbanka)
 * @copyright 2015 Cyan Inc. All rights reserved.
 */

'use strict';

var childProcess = require('child_process');

var ns = {};

var strip = function (data) {
    return data.toString().replace(/(\r\n|\n|\r)/gm, '');
};

/**
 * We have received a request to process a new file
 * spawn a shell process to do all the operations and
 * watch the output of that process. Then bundle up a json
 * response for the requester.
 * @param {String} filename - the name of the tar file that was uploaded
 * @param {String} entryPoint - the URL to start testing
 * @param {Response} res - the express response object
 */
ns.newFile = function (filename, entryPoint, res) {
    console.log('------------------- newFile');
    var info = [];
    var seconds = Math.floor(new Date().getTime() / 1000);
    var child = childProcess.spawn('bash', ['./src/exec.sh', filename, entryPoint, seconds]);

    child.stdout.on('data', function (data) {
        console.log('stdout: ' + strip(data));
        info.push(data);
    });
    child.stderr.on('data', function (data) {
        console.log('sterr: ' + strip(data));
        info.push(data);
    });
    child.on('exit', function (code) {
        console.log('closing code: ' + code);
        var output = {
            exitCode: code,
            info: info.join(''),
            output: 'screenshots/' + seconds + '.tar',
        };
        res.send(JSON.stringify(output));
        res.end();
        // TODO: setTimeout to delete the screenshots file in 30s
    });
};

module.exports = ns;
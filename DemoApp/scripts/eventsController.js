var fs = require('fs');
console.log('Test');
module.exports.get = function(req, res) {
    console.log('module.exports.get...' + ': ' + req);
    if (req.params.id == 'highest')
    {
        console.log('module.exports.get highest' + ': ' + req.params.id);

        /* ToDo: find the highest *.json file name */
        var event = fs.readFileSync('app/data/event/' + req.params.id + '.json', 'utf8');
        res.setHeader('Content-Type', 'application/json');
        res.send(event);
        console.log('sent' + event);
        console.log('sent' + res);
    }

    else
    {
        console.log('Entered else block in eventsController.js');
        var event = fs.readFileSync('app/data/event/' + req.params.id + '.json', 'utf8');
        res.setHeader('Content-Type', 'application/json');
        res.send(event);
    }
};

module.exports.save = function(req, res) {
    console.log('Entered Save Event');
    var event = req.body;
    fs.writeFileSync('app/data/event/' + req.params.id + '.json', JSON.stringify(event));
    res.send(event);
    console.log('Saved');
};

module.exports.getAll = function(req, res) {
    var path = 'app/data/event/';

    var files = [];
    try {
        files = fs.readdirSync(path);
    }
    catch (e) {
        console.log(e);
        res.send('[]');
        res.end();
    }
    var results = "[";
    for (var idx = 0; idx < files.length; idx++) {
        if (files[idx].indexOf(".json") == files[idx].length - 5) {
            results += fs.readFileSync(path + "/" + files[idx]) + ",";
        }
    }
    results = results.substr(0, results.length - 1);
    results += "]";

    res.setHeader('Content-Type', 'application/json');
    res.send(results);
    res.end();
};

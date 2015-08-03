module.exports = function() {
    var client = './src/client/';
    var clientApp = client + 'app/';
    var temp = './.tmp/';
    var config = {
        bower: {
            json: require('./bower.json'),
            directory: './bower_components',
            ignorePath: '../..'
        },
        client: client,
        css: temp + 'style.css',
        index: client + 'index.html',
        js: [
          clientApp + '**/*.module.js',
          clientApp + '**/*.js'
        ],
        less: client + 'styles/style.less',
        temp: temp
    };
    config.getWiredepOptions = function() {
        var options = {
            bowerJson: config.bower.json,
            directory: config.bower.directory,
            ignorePath: config.bower.ignorePath
        };
    };
    return config;
};
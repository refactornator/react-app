'use strict';

var fs = require('fs'),
    request = require('request'),
    sharp = require('sharp'),
    path = require('path');

var download = function(uri, filename, callback){
  request.head(uri, function(err, res, body){
    console.log(uri);
    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};

var movies = JSON.parse(fs.readFileSync('./data/imdb-1000-poster-and-plot.json', 'utf8'));

movies.forEach(function(movie) {
    var downloadPath = './img/posters/' + movie.id + '-300x446.jpg';

    fs.stat(downloadPath, function(err, stat) {
        if(err == null) {
            console.log('file exists');
            return;
        }

        download(movie.poster, downloadPath, function(){
            var resizePath = './img/posters/' + movie.id + '-150x223.jpg'; 

            sharp(downloadPath)
              .resize(150, 223)
              .toFile(resizePath, function(err) {
                // output.jpg is a 300 pixels wide and 200 pixels high image
                // containing a scaled and cropped version of input.jpg
              });
        });
    });
});

'use strict';

var ghpages = require('gh-pages');
ghpages.publish('./dist', console.error.bind(console));

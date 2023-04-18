const ghpages = require('gh-pages');

ghpages.publish('dist', {
    branch: 'gh-pages',
    repo: 'https://github.com/kumaresank/sevalaya.git'
  }, function(err) {
    console.log(err);
  });
///////////////////
// Heroku Settings
///////////////////

// Install Heroku CLI
// https://devcenter.heroku.com/articles/heroku-cli

// Login on heroku using heroku cli
// heroku login

// always set start script to: "start": "node ./bin/www" and not "start": "nodemon ./bin/www"

// set node and npm engines in package.json
// https://devcenter.heroku.com/articles/nodejs-support
/* "engines": {
  "node": "8.9.0",
  "npm": "5.5.1"
}, */

// set heroku as a remote on your git
// heroku git:remote -a ih-first-deploy

// show remotes available
// git remote -v

// after commited changed to master, push changes o heroku
//git push heroku master

// display heroku logs
// heroku logs

// deploy mongodb
// heroku addons:create mongolab:sandbox

// open our MongoLab instance
// heroku addons:open mongolab

## Mongoose connection script

```javascript
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/deploy-exercise", {
  keepAlive: true,
  reconnectTries: Number.MAX_VALUE,
  useMongoClient: true
});
```

# Node.js: Setting Environment Variables

## Install dotenv
`$ npm install --save dotenv`

## Require dotenv in first line in app.js
`require("dotenv").config();`

## Create a .env file
`$ touch .env` in your project folder

## Add new Environment Variable
`MONGODB_URI=mongodb://localhost/deploy-exercise``

## Add the .env file to your .gitignore file (important!!!)

## Update the mongoose connection code URI
From `"mongodb://localhost/deploy-exercise"` to `process.env.MONGODB_URI`

## On heroku.com you can under settings tab set your custom mongodb mLab URI

# Heroku Settings

## [Install Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)

## Login on heroku using heroku cli
`$ heroku login`

## Update scripts in package.json
always set start script to: `"start": "node ./bin/www"` and **NOT NODEMON** `"start": "nodemon ./bin/www"`. Otherwise heroku will not be able to run the script and start **NODE**.

## Set node and [npm & node engines](https://devcenter.heroku.com/articles/nodejs-support) in package.json
```json
"engines": {
  "node": "8.9.0",
  "npm": "5.5.1"
},
```

## Set heroku as a remote on your git
ih-first-deploy is the name of the app name you created in heroku.com.
`$ heroku git:remote -a ih-first-deploy`

## Show remotes available
`$ git remote -v`

## After commited changed to master, push changes o heroku
`$ git push heroku master`

## Show heroku logs (ex. errors.)
`$ heroku logs`

## Deploy mongodb
`$ heroku addons:create mongolab:sandbox`

## Open our MongoLab instance
`$ heroku addons:open mongolab`
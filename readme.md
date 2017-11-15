## Mongoose connection script

```javascript
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, {
  keepAlive: true,
  reconnectTries: Number.MAX_VALUE,
  useMongoClient: true
});
```

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

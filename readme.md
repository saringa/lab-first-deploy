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

## 1. Install dotenv
`$ npm install --save dotenv`

## 2. Require dotenv in first line in app.js
`require("dotenv").config();`

## 3. Create a .env file
`$ touch .env` in your project folder

## 4. Add new Environment Variable
`MONGODB_URI=mongodb://localhost/deploy-exercise`

## 5. Add the .env file to your .gitignore file (important!!!)

## 6. Update the mongoose connection code URI
FROM `"mongodb://localhost/deploy-exercise"` TO `process.env.MONGODB_URI`

## 7. On heroku.com you can under settings tab set your custom mongodb mLab URI
(If you want to setup a new external mongodb at mLabs you can run `$ heroku addons:create mongolab:sandbox` and the env variable are automatic configured)

# Heroku Settings

## 1. Signup on Heroku.com

## 2. [Install Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)

## 3. Login on heroku using heroku cli
`$ heroku login`

## 4. Update scripts in package.json
always set start script to: `"start": "node ./bin/www"` and **NOT NODEMON** `"start": "nodemon ./bin/www"`. Otherwise heroku will not be able to run the script and start **NODE**.

## 5. Set node and [npm & node engines](https://devcenter.heroku.com/articles/nodejs-support) in package.json
```json
"engines": {
  "node": "8.9.0",
  "npm": "5.5.1"
},
```

## 6. Set heroku as a remote on your git
ih-first-deploy is the name of the app name you created in heroku.com.
`$ heroku git:remote -a ih-first-deploy`

## 7. Show remotes available
`$ git remote -v`

## 8. After commited changed to master. If you want to deploy your app to Heroku, execute below code
`$ git push heroku master`

## 9. Show heroku logs (ex. errors.)
`$ heroku logs`

## 10. Deploy mongodb
`$ heroku addons:create mongolab:sandbox`

## 11. Open our MongoLab instance
`$ heroku addons:open mongolab`
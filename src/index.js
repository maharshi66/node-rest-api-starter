// init project
import express from 'express';
import connectdb from './connectDb.js';
import dotenv from 'dotenv'

var app = express();
dotenv.config()
connectdb()

import totalActivitiesRaw from './totalActivitiesRaw.js'
import totalActivitiesBatched from './totalActivitiesBatched.js'
import totalActivitiesCached from './totalActivitiesCached.js'

app.get("/", function (req, res) {
  res.send('Request Batching & Caching');
  console.log("Received GET");
});

app.get("/analytics/activity/:type", async function (req, res) {
  console.log('Recieved Analytics Request')
  const activities = await totalActivitiesCached(req.params.type);
  if (!activities) res.send(200).send('No activities found for this type');
  res.status(200).send(activities)
});

// Listen on port 8080
var listener = app.listen(8080, function () {
  console.log("Listening on port " + listener.address().port);
});

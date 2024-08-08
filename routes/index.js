var express = require('express');
var router = express.Router();
const db = require("../model/helper");


/* GET home page. */
// http://localhost:4000/api

//WORKS
router.get('/', function(req, res, next) {
  res.send("Welcome to your MVP");
});

//WORKS
router.get("/events", async (req, res) => {
  try {
    const results = await db("SELECT * FROM items ORDER BY date DESC;");
    
    res.send(results.data);

  } catch (err) {
    res.send(err);
  }
});

//WORKS
router.get("/events/:id", async (req, res) => {
  // go into the request, go into the parameters and look for id
  let id = req.params.id;

  try {
    const results = await db(`SELECT * FROM items WHERE id = ${id};`);
    res.send(results.data);
    
  } catch (err) {
    res.send(err);
  }
});

router.get("/geteventsbydate", async (req, res) => {

  try {

    const results = await db("SELECT * FROM items ORDER BY date DESC;");

  // Create an empty object to hold the transformed data
const transformed = {};

// Iterate over the events array
results.data.forEach(event => {
  // Extract date, name, and location
  const { date, title, location, time, duration } = event;
  
  // Format the date to YYYY-MM-DD
  const formattedDate = date.toISOString().split('T')[0];
  
  // Create a string with the event name and location
  const eventString = `${title}, ${location}, ${time}, ${duration}`;
  
  // Initialize the date key in the transformed object if not already present
  if (!transformed[formattedDate]) {
    transformed[formattedDate] = [];
  }
  
  // Add the event string to the appropriate date key
  transformed[formattedDate].push(eventString);
});
    // console.log(results)
    res.send(transformed);

  
  } catch(err) {
    res.send(err)
  };
});

// WORKS!!
router.post("/events", async (req, res) => {

  // mysql already does autoincrement for your id number
  let {title, url, description, location, date, time, duration, price, age} = req.body;

  try {
    // 1. insert all the data w/ req.body to put in all the new data you want to insert
    // 2. fetch the data
    // 3. respond with all the data updated
    // we send all the data back so that the front end can have the complete set of data
   
    
    await db(`INSERT INTO items (title, url, description, location, date, time, duration, price, age) VALUES ('${title}', '${url}', '${description}', '${location}', '${date}', '${time}', '${duration}', ${price}, ${age});`);

    const results = await db("SELECT * FROM items ORDER BY date DESC;");
    console.log(`result`)
    res.send(results.data);

  } catch (err) {
    console.log(`error`, err)
    res.send(err)
  }
});



// WORKS!!!
router.put("/events/:id", async (req, res) => {

  let {title, url, description, location, date, time, duration, price, age} = req.body;

  let id = req.params.id;

  try {
    //THIS SYNTAX DID NOT WORK.
    // await db(`UPDATE items SET (title, url, description, location, start_date, end_date, start_time, end_time, price, age) VALUES ('${title}', '${url}', '${description}', '${location}', '${start_date}', '${end_date}', '${start_time}', '${end_time}', ${price}, ${age}) WHERE id = ${id};`);

    //THIS SYNTAX WORKS
    await db(`UPDATE items SET title="${title}", url="${url}", description="${description}", location="${location}", date="${date}", time="${time}", duration="${duration}", price=${price}, age=${age} WHERE id=${id};`)

    const results = await db("SELECT * FROM items ORDER BY id ASC;");
    res.send(results.data);

  } catch (err) {
    res.send(err);
  }
});

// WORKS!!!
router.delete("/events/:id", async (req, res) => {

  let id = req.params.id;

  try { // delete by id

    await db(`DELETE FROM items WHERE id = ${id};`)

    const results = await db("SELECT * FROM items ORDER BY id ASC;");
    res.send(results.data);

  } catch (err) {
    res.send(err)
  }
});


module.exports = router;
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
    const results = await db("SELECT * FROM items ORDER BY start_date DESC;");
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
    res.send(results.data)
  
  } catch (err) {
    res.send(err);
  }
});

// WORKS!!
router.post("/events", async (req, res) => {

  // mysql already does autoincrement for your id number
  let {title, url, description, location, start_date, end_date, start_time, end_time, price, age} = req.body;

  try {
    // 1. insert all the data w/ req.body to put in all the new data you want to insert
    // 2. fetch the data
    // 3. respond with all the data updated
    // we send all the data back so that the front end can have the complete set of data
   
    
    await db(`INSERT INTO items (title, url, description, location, start_date, end_date, start_time, end_time, price, age) VALUES ('${title}', '${url}', '${description}', '${location}', '${start_date}', '${end_date}', '${start_time}', '${end_time}', ${price}, ${age});`);

    const results = await db("SELECT * FROM items ORDER BY start_date DESC;");
    console.log(`result`)
    res.send(results.data);

  } catch (err) {
    console.log(`error`, err)
    res.send(err)
  }
});

// WORKS!!!
router.put("/events/:id", async (req, res) => {

  let {title, url, description, location, start_date, end_date, start_time, end_time, price, age} = req.body;

  let id = req.params.id;

  try {
    //THIS SYNTAX DID NOT WORK.
    // await db(`UPDATE items SET (title, url, description, location, start_date, end_date, start_time, end_time, price, age) VALUES ('${title}', '${url}', '${description}', '${location}', '${start_date}', '${end_date}', '${start_time}', '${end_time}', ${price}, ${age}) WHERE id = ${id};`);

    //THIS SYNTAX WORKS
    await db(`UPDATE items SET title="${title}", url="${url}", description="${description}", location="${location}", start_date="${start_date}", end_date="${end_date}", start_time="${start_time}", end_time="${end_time}", price=${price}, age=${age} WHERE id=${id};`)

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
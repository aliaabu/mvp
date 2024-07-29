var express = require('express');
var router = express.Router();
const db = require("../model/helper");


/* GET home page. */
// http://localhost:4000/

router.get('/', function(req, res, next) {
  res.send("Welcome to your MVP");
});

router.get("/events", async (req, res) => {
  try {
    const results = await db("SELECT * FROM items ORDER BY id ASC;");
    res.send(results.data);

  } catch (err) {
    res.send(err);
  }
});

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

router.post("/events", async (req, res) => {

  // mysql already does autoincrement for your id number
  
  try {
    // 1. insert all the data w/ req.body to put in all the new data you want to insert
    // 2. fetch the data
    // 3. respond with all the data updated
    // we send all the data back so that the front end can have the complete set of data

    let {title, url, description, location, start_date, end_date, start_time, end_time, price, age} = req.body;
   
    db(`INSERT INTO items (title, url, description, location, start_date, end_date, start_time, end_time, price, age) VALUES ('${title}', '${url}', '${description}', '${location}', ${start_date}, ${end_date}, ${start_time}, ${end_time}, ${price}, ${age});`);

    const results = await db("SELECT * FROM items ORDER BY id ASC;");
    res.send(results.data);

  } catch (err) {
    res.send(err)
  }
});

// to update information in a specific event
// *** CHECK IF THIS IS CORRECT ***
router.put("/events/:id", async (req, res) => {

  try {

    let {title, url, description, location, start_date, end_date, start_time, end_time, price, age} = req.body;

    db(`UPDATE items SET (title, url, description, location, start_date, end_date, start_time, end_time, price, age) VALUES ('${title}', '${url}', '${description}', '${location}', ${start_date}, ${end_date}, ${start_time}, ${end_time}, ${price}, ${age}) where id = ${id};`);

    const results = await db("SELECT * FROM items ORDER BY id ASC;");
    res.send(results.data);

  } catch (err) {
    res.send(err);
  }
});

router.delete("/events/:id", async (req, res) => {
  try { // delete by id

    db(`DELETE FROM items WHERE id = ${id};`)

    const results = await db("SELECT * FROM items ORDER BY id ASC;");
    res.send(results.data);

  } catch (err) {
    res.send(err)
  }
});


module.exports = router;
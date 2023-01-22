const express = require('express');
const router = express.Router();

const pool = require('../modules/pool.js');

//TODO
//will only need a get route and post
//route.

//('/') might need to change and SELECT * might
//need to be more specific

router.get('/', (req, res) => {
    let sqlQuery = `
        SELECT * FROM "feedback";
        `
    pool.query(sqlQuery)
    .then(response => {
    res.send(response.rows);
}).catch(error => {
    console.error('error getting feedback', error);
    res.sendStatus(500);
})
});

// router.post('/', (req, res) => {
//     let newFeedback = req.body;
//     console.log('adding feedback', newFeedback);

//     //TODO
//     let sqlQuery = `
//         INSERT INTO "feedback" ("things that need to be entered")
//         VALUES ($1, $2, etc);
//     `
//     pool.query(sqlQuery, [newFeedback.value1, newFeedback.value2])
// }).then(response => {
//     res.sendStatus(201);
// }).catch(error => {
//     console.error('error adding new feedback', error);
//     res.sendStatus(500);
// });

module.exports = router;
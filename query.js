const express = require("express");
const router = express.Router();
const pool = require("./config.js");

// MENAMPILKAN DATA LIST FILM
router.get("/film", (req, res) => {
    const getQuery = `
    SELECT 
    *
    FROM film;
    `;

    pool.query(getQuery, (err, result) => {
        if (err) throw err;
        res.status(200).json(result.rows);
    });
});

// MENAMPILKAN DATA LIST FILM BERDASARKAN ID
router.get("/film/:id", (req, res) => {
    const { id } = req.params;
    const getQuery = `
    SELECT
    * 
    FROM film 
        WHERE film_id = ${id}
    `;

    pool.query(getQuery, (err, result) => {
        if (err) throw err;
        res.status(200).json(result.rows[0]);
    });
});

// MENAMPILKAN DATA LIST CATEGORY
router.get("/category", (req, res) => {
    const getQuery = `
    SELECT
    *
    FROM category;
    `;

    pool.query(getQuery, (err, result) => {
        if (err) throw err;
        res.status(200).json(result.rows);
    });
});

// MENAMPILKAN DATA LIST FILM BERDASARKAN ID CATEGORY
router.get("/film/category/:id", (req, res) => {
    const { id } = req.params;
    const getQuery = `
        SELECT 
        *
        FROM film f
            INNER JOIN film_category fc ON f.film_id = fc.film_id
            INNER JOIN category c ON c.category_id = fc.category_id
            WHERE c.name = ${id}; 
    `;
    pool.query(getQuery, (err, result) => {
        if (err) throw err;
        res.status(200).json(result.rows);
    });
});

// router.get("/actor", (req, res) => {
//     const getQuery = `
//         SELECT
//         *
//         FROM actor;
//     `;

//     pool.query(getQuery, (err, result) => {
//         if (err) throw err;
//         res.status(200).json(result.rows);
//     });
// });

module.exports = router;

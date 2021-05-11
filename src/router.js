const express = require('express')
const routes = express.Router()

// Instructor
routes.get("/", function(req, res) {
    return res.redirect("/instructors")
})

module.exports = routes

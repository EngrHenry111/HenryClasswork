const candiController = require("../controller/candiController")
const express = require("express")

const candRoute = express.Router();

candRoute.post('/upload-student', candiController.createCandidate)
candRoute.get('/get-all-student', candiController.GetAllStudent)

module.exports = candRoute;
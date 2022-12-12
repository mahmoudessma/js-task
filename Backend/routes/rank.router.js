const express = require('express')
const router = express.Router();
const RankController = require('../controllers/RankController')

router.post('/:scoree' , RankController.getrank);



module.exports = router
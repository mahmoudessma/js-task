const express = require('express')
const router = express.Router();
const WordsController = require('../controllers/WordsController')

// router.post('/register' , usercontroller.register);
// router.post('/login' , usercontroller.login);

router.get('/',WordsController.getquestions)

module.exports = router
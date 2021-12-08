const express = require('express');
const router = express.Router();
const controller = require ('../controllers/mainController');

/* GET login page. */

router.get('/users/login',controller.login);

module.exports = router;

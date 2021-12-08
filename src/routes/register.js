const express = require('express');
const router = express.Router();
const controller = require ('../controllers/mainController');

/* GET register page. */

router.get('/users/register', controller.register);

module.exports = router;

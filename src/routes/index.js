const express = require('express');
const router = express.Router();
const controller = require ('../controllers/mainController');

/* GET home page. */

router.get('/', controller.index);
router.get('/index', controller.index);

module.exports = router;

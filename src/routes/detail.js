const express = require('express');
const router = express.Router();
const controller = require ('../controllers/mainController');

/* GET detail page. */

router.get('/detail', controller.detalleProducto);

module.exports = router;

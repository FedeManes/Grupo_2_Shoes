const express = require('express');
const router = express.Router();
const controller = require ('../controllers/mainController');

/* GET products page. */

router.get('/products', controller.listarProductos);

module.exports = router;

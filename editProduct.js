const express = require('express');
const router = express.Router();
const controller = require ('../controllers/productsController');
const path = require ('path');


/* GET create product page. */
router.get('/', controller.editProduct);

module.exports = router;
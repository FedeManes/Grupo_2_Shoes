const express = require('express');
const router = express.Router();
const controller = require ('../controllers/productsController');
const path = require ('path');


/* GET create product page. */
router.delete('/:id/eliminar', controller.deleteProduct);

module.exports = router;
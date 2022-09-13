const express = require('express');
const router = express.Router();
const genresController = require('../../controllers/api/genresControllerApi');

router.get('/', genresController.list);
router.get('/name/:name', genresController.byName);
router.get('/:id', genresController.detail);

module.exports = router;

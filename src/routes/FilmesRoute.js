const express = require('express');
const router = express.Router();

const filmesController = require('../controllers/FilmesController');

router.get('/find-filmes', filmesController.findFilmesController);
router.get('/find-filme/:id', filmesController.findFilmeByIdController);

router.post('/create', filmesController.createFilmeController);
router.put('/update/:id', filmesController.updateFilmeController);
router.delete('/delete/:id', filmesController.deleteFilmeController);

module.exports = router;
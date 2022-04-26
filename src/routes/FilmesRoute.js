const router = require('express').Router();

const filmesController = require('../controllers/FilmesController');

const { validId, validObjectBody } = require('../middlewares/filme.middlewares');

router.get('/find-filmes', filmesController.findAllFilmesController);
router.get('/find-filme/:id', filmesController.findFilmeByIdController);

router.post('/create', filmesController.createFilmeController);
router.put('/update/:id', filmesController.updateFilmeController);
router.delete('/delete/:id', filmesController.deleteFilmeController);

module.exports = router;

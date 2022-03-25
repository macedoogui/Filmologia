const routes = require('express').Router();
const FilmesController = require('../controllers/FilmesController');

routes.get('/', FilmesController.getAll );


module.export = routes;
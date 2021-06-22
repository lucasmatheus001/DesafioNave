const router = require('express').Router();
const ControllersNavers = require('./controllers/NaversController');
const ControllersProjects = require('./controllers/ProjectsController');


router.get('/navers', ControllersNavers.get);
router.get('/navers/:id', ControllersNavers.getId);
router.post('/naversPost', ControllersNavers.post);

router.get('/projects', ControllersProjects.get);
router.get('/projectss/:id', ControllersProjects.getId);
router.post('/ProjectsPost', ControllersProjects.post);

module.exports = router;
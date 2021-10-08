const router = require('express').Router();

const userController = require('../controllers/user.controller');
const userMiddleware = require('../middlewares/user.middleware');

const authUserController = require('../controllers/auth.user.controller');
const authUserMiddleware = require('../middlewares/auth.user.middleware');

router.get('/', userController.getUsers);
router.post('/', userController.createUser);
router.post('/',userMiddleware.createUserMiddleware);
router.post('/login', authUserController.authUsers);
router.post('/', authUserMiddleware.userAuth);

router.get('/:user_id', userController.getUserById);
router.delete('/:user_id', userController.deleteUser);

module.exports = router;

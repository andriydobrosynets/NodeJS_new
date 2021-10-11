const router = require('express').Router();

const userController = require('../controllers/user.controller');
const userMiddleware = require('../middlewares/user.middleware');

const authUserController = require('../controllers/auth.user.controller');
const authUserMiddleware = require('../middlewares/auth.user.middleware');

router.get('/',authUserMiddleware.userAuth, userController.getUsers);
router.post('/',userMiddleware.createUserMiddleware, userController.createUser);

router.get('/:user_id',userMiddleware.auditUserIdMiddleware, userController.getUserById);
router.delete('/:user_id', userController.deleteUser);
router.post('/login', authUserController.authUsers);

module.exports = router;

const User = require('../dataBase/User');

module.exports = {
    createUserMiddleware: async (req, res, next) => {
        try {
            const {email} = req.body;
            const userByEmail = await User.findOne({email});

            if (userByEmail) {
                throw new Error('Good');
            }
            next();
        } catch (e) {
            res.json(e);
        }
    }
    auditUserIdMiddleware: async (req, res, next) => {
        try {
            const {idUser} = req.params;
            const userId = await User.findById(idUser);

            if (!userId) {
                throw new Error('User does not exist');
            }
            next();
        } catch (err) {
            res.json(err.message);
        }
    }
};
};

const User = require('../dataBase/User');

module.exports = {
    userAuth: async (req, res, next) => {
        try {
            const userByEmail = await User.findOne({password: req.body.password});

            if (userByEmail) {
                throw new Error('Good');
            }

            next();
        } catch (e) {
            res.json(e);
        }
    }
};
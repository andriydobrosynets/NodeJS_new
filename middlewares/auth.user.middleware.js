const User = require('../dataBase/User');

module.exports = {
    userAuth: async (req, res, next) => {
        try {
            const {email, password} = req.body;
            const userByEmail = await User.findOne({email, password});

            if (userByEmail) {
                throw new Error('Good');
            }

            next();
        } catch (e) {
            res.json(e);
        }
    }
};

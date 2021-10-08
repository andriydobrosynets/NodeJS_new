const User = require('../dataBase/User');

module.exports = {
    authUsers: (req, res) => {
        try {
            res.json(`User logined`);
        } catch (e) {
            res.json(e);
        }
    }
};
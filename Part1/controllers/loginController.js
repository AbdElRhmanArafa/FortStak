const User = require('../models/register');

module.exports.login = function(req, res) {
    return res.render('login', {
        title: "Login"
    });
};

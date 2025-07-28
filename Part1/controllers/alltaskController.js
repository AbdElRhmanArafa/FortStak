const db = require('../config/mongoose');
const Dashboard = require('../models/dashboard');
const User = require('../models/register');

module.exports.alltask = async function(req, res) {
    try {
        const tasks = await Dashboard.find({});
        return res.render('alltask', {
            title: "All Tasks",
            dashboard: tasks
        });
    } catch (err) {
        console.log('Error in alltask:', err);
        return res.status(500).send('Error fetching tasks');
    }
}
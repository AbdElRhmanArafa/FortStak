const db = require('../config/mongoose');
const Dashboard = require('../models/dashboard');
const User = require('../models/register');

module.exports.completedtask = async function(req, res) {
    try {
        const tasks = await Dashboard.find({ completed: true }).sort('-createdAt');
        return res.render('completedtask', {
            title: "Completed Tasks",
            dashboard: tasks
        });
    } catch (err) {
        console.log('Error in completed tasks:', err);
        return res.status(500).send('Error fetching completed tasks');
    }
}
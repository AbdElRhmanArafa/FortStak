const db = require('../config/mongoose');
const Dashboard = require('../models/dashboard');
const User = require('../models/register');

module.exports.dashboard = async function(req, res) {
    try {
        const tasks = await Dashboard.find({}).sort('-createdAt');
        return res.render('dashboard', {
            title: "Dashboard",
            dashboard: tasks
        });
    } catch (err) {
        console.log('Error in dashboard:', err);
        return res.status(500).send('Error fetching dashboard data');
    }
}
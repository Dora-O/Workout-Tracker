const router = require('express').Router();
const workoutRoutes = require('./workouts');

router.use('/', workoutRoutes);

module.exports = router;
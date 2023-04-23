const router = require('express').Router();

const userRoutes = require('./userRoutes');

router.use('/api', userRoutes);

module.exports = router;
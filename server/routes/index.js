const router = require('express').Router();

const apiRoutes = require('./api')

router.use('/api', apiRoutes);

router.get('/test', (req, res) => {
    res.send('test route')
})

module.exports = router;
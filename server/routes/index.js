const router = require('express').Router();

router.get('/test', (req, res) => {
    res.send('This is the test route!')
})



module.exports = router;
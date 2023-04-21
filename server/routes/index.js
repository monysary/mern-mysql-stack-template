const router = require('express').Router();

router.use((req, res) => {
    res.send('Testing router!')
});

module.exports = router;
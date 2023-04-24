const router = require('express').Router();
const { User } = require('../../models');
const { signToken } = require('../../utils/auth')

router.post('/signup', async (req, res) => {
    try {
        const newUser = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });

        const token = signToken(newUser);

        res.status(200).json({ token, newUser })
    } catch (err) {
        console.log(err);
        res.status(400).json(err)
    };

});

router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({
            where: {
                email: req.body.email,
            }
        })

        if (!user) {
            res.status(400).json('No user found with this email');
            return
        }

        const correctPw = await user.checkPassword(req.body.password)

        if (!correctPw) {
            res.status(400).json('Incorrect password');
            return;
        }

        const token = signToken(user);

        res.status(200).json({ token, user })
    } catch (err) {
        console.log(err);
        res.status(400).json(err)
    };

});

router.post('/logout', async (req, res) => {

});

router.get('/get-user', async (req, res) => {

});

module.exports = router;
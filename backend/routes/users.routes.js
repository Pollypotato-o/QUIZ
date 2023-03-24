const router = require('express').Router();
const { User, Point } = require('../db/models');

router.get('/', async(req, res) => {
    const users = await User.findAll({
        include: { model: Point, key: 'user_id'},
        raw: true,
    })
    res.json(users);
});

router.post('/add-scores', async (req, res) => {
    const addScore = await Point.create({
        user_id: req.session.id,
        score: req.body.score,
    });
    const users = await User.findAll({
        include: { model: Point, key: 'user_id'},
        raw: true,
    });
    res.json(users);
})

module.exports = router;
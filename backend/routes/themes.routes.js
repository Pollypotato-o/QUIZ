const router = require('express').Router();
const { Theme, Question } = require('../db/models');

//1
router.get('/', async (req, res) => {
    const themes = await Theme.findAll({
        include: [Question]});
    // themes.map(async (theme, i) => theme[i] = await Question.findAll({
    //     where: { theme_id: theme[i].id },
    //     raw: true,
    // }));
    res.json(themes);
})

module.exports = router;
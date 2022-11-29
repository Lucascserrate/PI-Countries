const { Router } = require('express');
//const { postActivity } = require('./controller');
const router = Router();
const { Activity } = require('../db')

router.get('/', async (req, res) => {
    try {
        let getAll = await Activity.findAll()
        res.send(getAll)
    } catch (error) {
        res.status(404).send(error)
    }
})

router.post('/', async (req, res) => {
    const { name, difficulty, duration, season, country, /* flags */ } = req.body;
    try {
        await Activity.create({ name, difficulty, duration, season, country, /* flags */ })
        res.send('Activity created successfully')
    } catch (error) {
        res.status(404).send(error)
    }
})


module.exports = router;
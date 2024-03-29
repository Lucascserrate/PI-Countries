const { Router } = require('express');
const { getByName, getById, getAllCountries } = require('./controller');
const router = Router();

router.get('/', async (req, res) => {
    const { name } = req.query
    try {
        if (name) {
            const getName = await getByName(name)
            res.send(getName)
        } else {
            const api = await getAllCountries()
            res.send(api)
        }

    } catch (error) {
        res.status(404).send(error)
    }
})

router.get('/:id', async (req, res) => {
    const { id } = req.params
    try {
        let getId = await getById(id)
        res.send(getId)
    } catch (error) {
        res.status(404).send(error)
    }
})

module.exports = router;
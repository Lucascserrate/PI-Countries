const axios = require('axios');
const { Country, Activity } = require('../db')
const countries = require('../../api');
const { Op } = require('sequelize');


const getAllCountries = async () => {
    try {
        let api = await countries
        api = api?.map(e => {
            return {
                id: e.cca3,
                name: e.name.common,
                flag: e.flags[0],
                continent: e.continents[0],
                capital: e.capital,
                subregion: e.subregion,
                area: `${e.area}km2`,
                population: e.population,
                images: e.images
            }
        })
        api = api.filter(e => e.name !== 'Moldova')

        let bdd = await Country.findAll()
        if (!bdd.length) {
            await Country.bulkCreate(api)
        }
        let db = await Country.findAll({
            include: {
                model: Activity,
                attributes: ["name"],
                through: {
                    attributes: []
                }
            }
        })

        db = db.map(e => {
            return {
                id: e.id,
                name: e.name,
                flag: e.flag,
                continent: e.continent,
                capital: e.capital,
                subregion: e.subregion,
                area: e.area,
                population: e.population,
                activity: e.activities?.map(el => el.name),
                images: e.images
            }
        })
        return db

    } catch (error) {
        console.log(error.message);
    }

}

const getByName = async (name) => {
    let api = await Country.findAll({
        where: {
            name: {
                [Op.iLike]: `%${name}%`
            }
        }
    })
    return api
}

const getById = async (id) => {
    let api = await Country.findByPk(id);
    return api
}


module.exports = {
    getAllCountries,
    getByName,
    getById
}
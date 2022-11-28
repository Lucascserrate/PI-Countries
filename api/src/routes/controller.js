const axios = require('axios');
const { Country } = require('../db')


const getHome = async () => {
    try {
        /*         let arr = [{
                    "id": "ASD",
                    "name": "asd",
                    "flag": "asdasd",
                    "continent": "4",
                    "capital": "90",
                    "subregion": "Summer",
                    "area": 12312,
                    "population": 12,
                }, {
                    "id": "ASS",
                    "name": "aasdd",
                    "flag": "asdasd",
                    "continent": "4",
                    "capital": "90",
                    "subregion": "Summer",
                    "area": 12312,
                    "population": 12,
                }] */
        let api = await axios.get('https://restcountries.com/v3/all')
        api = api.data?.map(e => {
            return {
                id: e.cca3,
                name: e.name.common,
                flag: e.flags[0],
                continent: e.continents[0],
                capital: e.capital,
                subregion: e.subregion,
                area: `${e.area}km2`,
                population: e.population,
            }
        })
        //api = api.filter(e => e.name !== 'Åland Islands' && e.name !== 'São Tomé and Príncipe' && e.name !== 'Réunion' && e.name !== 'Saint Barthélemy' && e.name !== 'Curaçao')
        let db = await Country.findAll()
        //console.log(db);
        if (!db.length) {
            await Country.bulkCreate(api)
        }
        return api

    } catch (error) {
        console.log(error);
    }

}

const getByName = async (name) => {
    let api = await axios.get(`https://restcountries.com/v3/name/${name}`)
    api = api.data[0]
    api = {
        id: api.cca3,
        name: api.name.common,
        flag: api.flags[1],
        continent: api.continents[0],
        capital: api.capital,
        subregion: api.subregion,
        area: `${api.area}km²`,
        population: api.population,
    }
    return api
}

const getById = async (id) => {
    let api = await axios.get(`https://restcountries.com/v3/alpha/${id}`);
    api = api.data[0]
    api = {
        id: api.cca3,
        name: api.name.common,
        flag: api.flags[1],
        continent: api.continents[0],
        capital: api.capital,
        subregion: api.subregion,
        area: `${api.area}km²`,
        population: api.population,
    }
    return api
}

/* const postActivity = (id, name, difficulty, duration, season) => {
    return {
        id,
        name,
        difficulty,
        duration,
        season
    }
} */

module.exports = {
    getHome,
    getByName,
    getById,
    /*  postActivity */
}
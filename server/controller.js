let plantData = require('../db.json')

module.exports = {
    getPlantsBack: (req, res) => {
        console.log('get plants back')
        res.status(201).send(plantData)
    }
}
let plantData = require('../db.json')

let newPlantId = 21

module.exports = {
    getPlantsBack: (req, res) => {
        console.log('get plants back')
        res.status(201).send(plantData)
    }, 
    addPlantBack: (req, res) => {
        console.log('add plant back')
        console.log(req.body)

        const {name, family} = req.body

        let newPlant = {
            "id": newPlantId,
            "common_name": name, 
            "family": family, 
            "sci_name": "Mimblenum Mimbletonia"
        }

        plantData.push(newPlant)

        res.status(200).send(plantData)
    }
}
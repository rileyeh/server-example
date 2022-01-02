// const { default: axios } = require("axios")

const getBtn = document.querySelector('#get-btn')
const plantContainer = document.querySelector('#plant-container')
const addPlantForm = document.querySelector('form')
const nameInput = document.querySelector('#name-input')
const familyInput = document.querySelector('#family-input')

function displayPlants(plantsArr) {
    plantContainer.innerHTML = ``

    plantsArr.forEach(function(plant) {
        const plantCard = document.createElement('div')
        const plantName = document.createElement('h2')

        plantName.textContent = plant['common_name']
        plantCard.appendChild(plantName)

        plantContainer.appendChild(plantCard)
    })
}

function getPlantsFront() {
    axios.get('http://localhost:4000/api/plants')
        .then(res => displayPlants(res.data))
}

const addPlantFront = (e) => {
    e.preventDefault()
    let body = {
        name: nameInput.value, 
        family: familyInput.value
    }
    
    axios.post('http://localhost:4000/api/plants', body)
        .then(res => {
            nameInput.value = ``
            familyInput.value = ``
            displayPlants(res.data)
        })
}

getBtn.addEventListener('click', getPlantsFront)
addPlantForm.addEventListener('submit', addPlantFront)



















































// async function asyncGetPlantsFront() {
//     let res = await axios.get('http://localhost:4000/api/plants')

//     console.log(res.data)
// }
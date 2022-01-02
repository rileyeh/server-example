const getBtn = document.querySelector('#get-btn')
const plantContainer = document.querySelector('#plant-container')

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

getBtn.addEventListener('click', getPlantsFront)



















































// async function asyncGetPlantsFront() {
//     let res = await axios.get('http://localhost:4000/api/plants')

//     console.log(res.data)
// }
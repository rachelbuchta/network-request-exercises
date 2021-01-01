  const idInput = document.querySelector('.id-input')
  const nameInput = document.querySelector('.name-input')
  const dietInput = document.querySelector('.diet-input')
  const factInput = document.querySelector('.fact-input')
  const animalName = document.querySelector('.animal-name')
  const diet = document.querySelector('.diet')
  const fact = document.querySelector('.fact')
  const submitButton = document.querySelector('#submit-button')
  const deleteButton = document.querySelector('#delete-button')
  const animalsSection = document.querySelector('.animals')
  const deleteId = document.querySelector('.id-input-delete')
  
submitButton.addEventListener('click', postAnimal)
deleteButton.addEventListener('click', deleteAnimal)
window.addEventListener('load', getAnimalData)


function deleteAnimal() {
const deleteAnimal = deleteId.value
    fetch(`http://localhost:3001/api/v1/animals/${deleteAnimal}`, {
  method: "DELETE"
    })
    location.reload()
 }

function postAnimal() {
  fetch("http://localhost:3001/api/v1/animals", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
},
  body: JSON.stringify({
    id: parseInt(idInput.value),
    name: nameInput.value,
    diet: dietInput.value,
    fun_fact: factInput.value
    })
})
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(err => console.log(err))

  getAnimalData()
}

function getAnimalData() {
  fetch("http://localhost:3001/api/v1/animals")
  .then(response => response.json())
  .then(animals => showAnimals(animals))
}

  function showAnimals(animals) {
  animals.map(animal => {
  const animalElement = document.createElement("article")
   animalElement.innerText = `
   ID: ${animal.id},
   Animal Name: ${animal.name},
        Diet: ${animal.diet},
        Fun Fact: ${animal.fun_fact}`
     animalsSection.appendChild(animalElement)
  })
}

// let newData = {
//       id: 5,
//       name: 'zebras',
//       diet: 'grass, bugs',
//       fun_fact: 'GAWGEOUS'
//     }

fetch("http://localhost:3001/api/v1/animals", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
},
  body: JSON.stringify({
        id: 5,
        name: 'zebras',
        diet: 'grass, bugs',
        fun_fact: 'GAWGEOUS'
      })
})
  .then(response => response.json())
  .then(json => showAnimals(animals))
  // .catch(err => console.log(err))

showAnimals = animals => {

  const animalsSection = document.querySelector(".animals")

  animals.map(animal => {
    const animalElement = document.createElement("p")

   animalElement.innerText = `Animal Name: ${animal.name},
        Diet: ${animal.diet},
        Fun Fact: ${animal.fun_fact}`

     animalsSection.append(animalElement)
  })
}

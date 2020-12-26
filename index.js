fetch("http://localhost:3001/api/v1/animals")
  .then(response => response.json())
  .then(animals => showAnimals(animals))

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

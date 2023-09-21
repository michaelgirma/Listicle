const renderDetails = async () =>{
    const requestedID = parseInt(window.location.href.split('/').pop())
    const response = await fetch('/character')
    const data = await response.json()

    const charaContent = document.getElementById('characterContent')

    let character
    character = data.find(character => character.id === requestedID)
    if (character) {
        document.getElementById('image').src = character.image
        document.getElementById('name').textContent = character.name
        document.getElementById('location').textContent = "Hometown: " + character.location
        document.getElementById('ranking').textContent = "Ranking: " + character.ranking
        document.getElementById('description').textContent = "About: " + character.description
        document.title = `NarutoVerse - ${character.name}`
    }
    else {
        const message = document.createElement('h2')
        message.textContent = 'No Details Available 😞'
        charaContent.appendChild(message)  
    }

}

renderDetails()
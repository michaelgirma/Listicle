const renderCharacters = async () => {
    const response = await fetch('/character')
    const data = await response.json()
    console.log("Fetched data:", data);
    
    const mainContent = document.getElementById('mainContent')
    console.log("mainContent element:", mainContent);

    if(data){
        data.map(characters =>{
            const card = document.createElement('div')
            card.classList.add('card')

            const topContainer = document.createElement('div')
            topContainer.classList.add('top-container')

            const bottomContainer = document.createElement('div')
            bottomContainer.classList.add('bottom-container')

            topContainer.style.backgroundImage = `url(${characters.image})`

            const charaName = document.createElement('h3')
            charaName.textContent = characters.name
            bottomContainer.appendChild(charaName)

            const charaLocation = document.createElement('p')
            charaLocation.textContent = characters.location
            bottomContainer.appendChild(charaLocation)

            const charaRanking = document.createElement('p')
            charaRanking.textContent = characters.ranking
            bottomContainer.appendChild(charaRanking)

            const readMore = document.createElement('a')
            readMore.textContent = 'Read More...'
            readMore.setAttribute('role', 'button')
            readMore.href = `/character/${characters.id}`
            bottomContainer.appendChild(readMore)

            card.appendChild(topContainer)
            card.appendChild(bottomContainer)
            mainContent.appendChild(card)
        }) 
    }
    else{
        const error = document.createElement('h2')
        error.textContent = 'No characters available😞'
        mainContent.appendChild(error)
    }
}

const requestedUrl = window.location.href.split('/').pop()
if (requestedUrl) {
    window.location.href = '../404.html'
}
else {
    renderCharacters()
}


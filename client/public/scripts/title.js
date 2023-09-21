const title = document.querySelector('header')

const titleContainer = document.createElement('div')
titleContainer.className = 'header-container'

const titleRight = document.createElement('div')
titleRight.className = 'header-left'

const titleLogo = document.createElement('img')
titleLogo.src = '/logo.png'

const titleHeader = document.createElement('h1')
titleHeader.textContent ='NarutoVerse'
titleHeader.classList.add('titleHeader')

titleRight.appendChild(titleLogo)
titleRight.appendChild(titleHeader)

const titleLeft = document.createElement('div')
titleLeft.className = 'header-right'

const titleButton = document.createElement('button')
titleButton.textContent = 'Home'
titleButton.addEventListener('click', function handleClick(event){
    window.location = '/'
})

titleLeft.appendChild(titleButton)

titleContainer.appendChild(titleRight)
titleContainer.appendChild(titleLeft)
title.appendChild(titleContainer)
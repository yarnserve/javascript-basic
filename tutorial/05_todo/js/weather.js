const weather = document.querySelector('.weather')
const API_KEY = 'a5819ac017fa9d0149bef8ca63834cef'

function getWeather(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
     .then(res => res.json())
     .then(data => {
        const temp = data.main.temp
        const city = data.name
        weather.innerHTML = `${temp}°C ${city}`
     })
}

function saveCoords(coords) {
    localStorage.setItem('coords', JSON.stringify(coords))
}

function geoSucces(position) {
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude
    const coords = {
        latitude,
        longitude
    }    
    saveCoords(coords)
    getWeather(latitude, longitude)
}

function geoError() {
    console.log('실패')
}

function askCoords() {
    navigator.geolocation.getCurrentPosition(geoSucces, geoError) 
}

function loadCoords() {
    const loadedCoords = localStorage.getItem('coords')
    if(loadedCoords === null) {
        askCoords()
    } else {
        const parseCoords = JSON.parse(loadedCoords)
        getWeather(parseCoords.latitude, parseCoords.longitude)
    }
}

function init() {
    loadCoords()
}

init()
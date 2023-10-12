let doggyButton = document.querySelector('#dogButton')
doggyButton.addEventListener('click', () =>{
    fetch('https://dog.ceo/api/breeds/image/random')
        .then((data) => data.json())
        .then((response) => {
            document.querySelector('.cutieIMG').src=response.message
        })
})
let weatherButton = document.querySelector('#weatherBtn')
weatherButton.addEventListener('click', () =>{
    let userInput = document.querySelector('#city').value
    fetch(`https://api.tomorrow.io/v4/weather/forecast?location=${userInput}&apikey=aM6eL9KFdBxzxQMoXkKPa79bhz6i8JLD`)
        .then((data) => data.json())
        .then((response) => {
            document.querySelector('#temp').innerText=response.timelines.minutely[0].values.temperature
            document.querySelector('#wind').innerText=response.timelines.minutely[0].values.windSpeed
            document.querySelector('#description').innerText=response.timelines.minutely[0].values.rainIntensity > 0
            console.log(response)
        })
})
//empire garden


// let loca = 'clarksville'
// let APIkey = 'aM6eL9KFdBxzxQMoXkKPa79bhz6i8JLD'
// let temp;
// let isRaining = false

// let weatherURL = `https://api.tomorrow.io/v4/weather/forecast?location=${loca}&apikey=${APIkey}`

// fetch(weatherURL)
// .then(res => res.json())
// .then(data => {
//     let weatherNow = data.timelines.minutely[0].values
//     temp = weatherNow.temperature
//     isRaining = weatherNow.rainIntensity > 0
// })
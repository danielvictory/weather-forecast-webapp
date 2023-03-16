//const userInput = document.querySelector('#user-input').value
let geoData, $lat, $lon;
let weatherData, $temp;

const key = `fdda287d0dc6b9e0244120c0549c5ade`
// const weatherCall = `https://api.openweathermap.org/data/3.0/onecall?lat=${$lat}&lon=${$lon}&exclude=&appid=${key}`
// const geoCall = `http://api.openweathermap.org/geo/1.0/direct?q=${userInput}&limit=1&appid=${key}`


$('form').on('submit', handleGetData);

function handleGetData(evt) {
    evt.preventDefault()
    let userInput = document.querySelector('#user-input').value
    //console.log(`http://api.openweathermap.org/geo/1.0/direct?q=${userInput}&limit=1&appid=${key}`)
    $.ajax({
        url: `http://api.openweathermap.org/geo/1.0/direct?q=${userInput}&limit=1&appid=${key}`
    }).then(
        (data) => {
            geoData = data;
            renderGeo();
            handleWeatherData();
        },
        (error) => {
            console.log('bad request', error);
        }
    );}

function handleWeatherData(){
    //console.log(`https://api.openweathermap.org/data/3.0/onecall?lat=${$lat}&lon=${$lon}&exclude=&appid=${key}`)
    $.ajax({
        url: `https://api.openweathermap.org/data/3.0/onecall?lat=${$lat}&lon=${$lon}&exclude=&appid=${key}`
    }).then(
        (data) => {
            weatherData = data
            renderWeather();
        },
        (error) => {
            console.log('bad request', error);
        }
    );
}

function renderGeo() {
    $lat = geoData[0].lat;
    $lon = geoData[0].lon;
    console.log(typeof $lat)
    console.log(typeof $lon)
}

function renderWeather() {
    $temp = weatherData.current.temp;
    console.log($temp)
}
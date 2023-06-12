const API_KEY='2a33030e4d8ab748e0d71be535debd18';
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search");
const weatherIcon = document.querySelector(".weather img");

async function checkWeather(CityName){
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${CityName}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name + ', ' +data.sys.country;
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + '°C';
    document.querySelector(".humidity").innerHTML = data.main.humidity;
    document.querySelector(".wind").innerHTML = data.wind.speed;

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "./Images/clouds.gif";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "./Images/clear.gif";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "./Images/drizzle.gif";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "./Images/mist.gif";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "./Images/rain.gif";
    }
    else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "./Images/snow.gif";
    }
}

searchBtn.addEventListener("click" , ()=>{
    checkWeather(searchBox.value);
})

// checkWeather();
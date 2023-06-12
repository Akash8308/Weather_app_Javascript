const API_KEY='2a33030e4d8ab748e0d71be535debd18';
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search");

async function checkWeather(CityName){
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${CityName}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name + ', ' +data.sys.country;
    document.querySelector(".temp").innerHTML = data.main.temp + '°C';
    document.querySelector(".humidity").innerHTML = data.main.humidity;
    document.querySelector(".wind").innerHTML = data.wind.speed;
}

searchBtn.addEventListener("click" , ()=>{
    checkWeather(searchBox.value);
})

// checkWeather();
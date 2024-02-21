cities = []

const getWeather = async(city) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6e8cefafd60a1904d6ccfaec3d71db1e&units=metric`);
    weatherData = await response.json();

    if (weatherData['cod'] == 404) {
        alert('The city was not found or you made a mistake in the name. Try again!')
    } else {
        cities.push(city)
        console.log(cities);
        displayWeatherData(weatherData);
    }
}

const displayWeatherData = (weatherData) => {
    document.getElementById("main").innerHTML = `Main: ${weatherData['weather'][0]['main']}` 
    document.getElementById("description").innerHTML = `Description: ${weatherData['weather'][0]['description']}` 
    document.getElementById("temp").innerHTML = `Temperature (°C): ${weatherData['main']['temp']}` 
    document.getElementById("windSpeed").innerHTML = `Wind speed (m/s): ${weatherData['wind']['speed']}` 
    document.getElementById("humidity").innerHTML = `Humidity (%): ${weatherData['main']['humidity']}` 
    document.getElementById("pressure").innerHTML = `Pressure (hPa): ${weatherData['main']['pressure']}` 
}

document.getElementById("btn").addEventListener("click", () => { getWeather(document.getElementById("city").value) })

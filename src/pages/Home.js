import { useState } from "react"
import WeatherForecast from "../components/WeatherForecast"
import OpenWeatherMapService from "../services/OpenWeatherMapService"

function Home () {
    const [city, setCity] = useState("")
    const [temp, setTemp] = useState(0)
    const [weather, setWeather] = useState("")
    const [cityForView, setCityForView] = useState("")
    const [country, setCountry] = useState("");
    const [feelsLikeTemp, setFeelsLikeTemp] = useState(0)
    const [maxTemp, setMaxTemp] = useState(0)
    const [minTemp, setMinTemp] = useState(0)

    function getForecast() {
        if(city === "") {
            alert("Molimo vas unesite naziv grada!")
            return;
        }
        OpenWeatherMapService.getForecast(city)
        .then(response => {
            setWeather(response.weather[0].main)
            setTemp(response.main.temp)
            setFeelsLikeTemp(response.main.feels_like)
            setMaxTemp(response.main.temp_max)
            setMinTemp(response.main.temp_min)
            setCityForView(response.name)
            setCountry(response.sys.country)
            console.log(response)
        })
        .catch(error => {
           alert("Neispravni podaci!")
        })
    }
    return (
        <div className="home">
           <div className="search-bar">
               <input type="text" placeholder="Search..." onChange={(e)=> setCity(e.target.value)}/>
               <img src="assets/img/search.png" alt="Search" onClick={getForecast}/>
           </div>
           <WeatherForecast city={cityForView}
                            temp={temp}
                            feelsLikeTemp={feelsLikeTemp}
                            maxTemp={maxTemp}
                            minTemp={minTemp}
                            weather={weather}
                            country={country}/>
        </div>  
    )
}

export default Home
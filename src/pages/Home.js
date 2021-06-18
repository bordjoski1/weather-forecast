import { useEffect, useState } from "react"
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
    const [history, setHistory] = useState([])
    const [localHistory, setLocalHistory] = useState([])

    useEffect(() => {
       if(localStorage.getItem("History")!== null)
       setLocalHistory(JSON.parse(localStorage.getItem("History")))
    },[history])

    function getForecast(cityForSearch, index) {
        if(cityForSearch === "") {
            alert("Molimo vas unesite naziv grada!")
            return
        }

        OpenWeatherMapService.getForecast(cityForSearch)
            .then(response => {
                searchHistory(cityForSearch, index)

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
                alert(error.message)
            })
    }

    function keyPress(event, cityForSearch) {
        if(event.key === "Enter")
        {
            getForecast(cityForSearch)
        }
    }

    function searchHistory(cityForSearch, index) {
        let tmpHistory = [...localHistory]

        if(tmpHistory[index] !== cityForSearch || tmpHistory.length-1 < index)
        {
            tmpHistory.push(cityForSearch)
        }

        if (tmpHistory.length > 10) {
            tmpHistory.shift()
        }

        setHistory(tmpHistory)
        localStorage.setItem("History",JSON.stringify(tmpHistory))
    }

    function toggleClass() {
        document.getElementById("search").classList.toggle("border-top-radius")
        document.getElementById("history").classList.toggle("hide")
    }

    function deleteFromHistory(index) {
        let tmpArray = JSON.parse(localStorage.getItem("History"))
        tmpArray.splice(index,1)
        localStorage.setItem("History", JSON.stringify(tmpArray))
        setHistory(tmpArray)
    }

    return (
        <div className="home">
           <div id="search" className="search-bar border-radius">
               <img className="hamburger" src="assets/img/hamburgerBtn.png"alt="Hamburger"   onClick={toggleClass}/>
               <input type="text" placeholder="Search..." onChange={(e)=> setCity(e.target.value)} onKeyPress={(e)=> keyPress(e, city)}/>
               <img src="assets/img/search.png" alt="Search" onClick={() => getForecast(city)}/>
           </div>
           <div id="history" className="searchHistory hide">
               {localHistory.length!==0?
                localHistory.map((el,index) => {
                    return <ul key={index}>
                                <li>
                                    <a onClick={() => getForecast(el, index)}>{el}</a> <span style={{color:"gray"}} onClick={() => deleteFromHistory(index)}>Ukloni</span>
                                </li>
                            </ul>
                    
                }): <p style={{color:"gray"}}>Istorija je prazna</p>
            }
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
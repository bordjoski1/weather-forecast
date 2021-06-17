import DateUtility from "../Utility/DateUtility"
import WeatherUtility from "../Utility/WeatherUtility"

function WeatherForecast(props) {

    function renderContext() {
        if(props.city !== "" && props.temp!==0 && props.weather!=="")
        {
            return (
                <div className="forecast">
                    <div className="date">
                        {WeatherUtility.getWeatherIcon(props.weather)}
                        <p>{props.weather}</p>
                        <div>
                            <h2>Today</h2>
                            <p>{DateUtility.getDate()}</p>
                        </div>
                    </div>
                    <div className="temperature">
                        <h1>{Math.round(props.temp) + " \u2103"}</h1>
                        <p>{props.city}, {props.country}</p>

                        <p className="tempInfos">Feels like {Math.round(props.feelsLikeTemp)} &#183; Min {Math.round(props.minTemp)} &#183; Max {Math.round(props.maxTemp)}</p>
                    </div>
                </div>
            )
        }
    }

    return (
        <div>
             {renderContext()}
        </div>

    )
}

export default WeatherForecast
import {WiDaySunny, WiRain, WiCloudy, WiSnow, WiFog} from 'weather-icons-react';

export const WeatherUtility = {
    
    getWeatherIcon: function(weather) {
        switch(weather){
            case 'Sunny': 
                return <WiDaySunny size={50}/>
            case 'Rain':
                return <WiRain size={50}/>
            case 'Clouds':
                return <WiCloudy size={50} />
            case 'Snow':
                return <WiSnow size={50} />
            case 'Fog':
                return <WiFog size={50} />
            default:
                return <WiDaySunny size={50}/>
        }
    }
}

export default WeatherUtility
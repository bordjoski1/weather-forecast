export const OpenWeatherMapService = {

    getForecast: async function getLocationWeather(location) {
        const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=612edaf285e13ec13fbd3eff2a0ba581&units=metric`);
        return result.json();
      }
}

export default OpenWeatherMapService
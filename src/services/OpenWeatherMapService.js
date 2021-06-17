import ApiRoutes from "../config/ApiRoutes";

export const OpenWeatherMapService = {
    getForecast: function(location) {
      return new Promise(async (resolve, reject) => {
        const result = await fetch(ApiRoutes.GET_FORECAST + location)
        if (!result.ok) {
          reject(await result.json())
          return
        }

        resolve(await result.json())
      })
    }
}

export default OpenWeatherMapService
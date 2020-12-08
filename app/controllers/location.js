import { currentTimeByLocationName, weatherByLocationName } from "../services"

const getWeatherByLocationName = async (location = place) => {
    try {
        const weather = await weatherByLocationName(location)
        console.log(weather, "weather")
    } catch (error) {
        console.log(error)
    }

}


const getCurrentTimeByLocationName = async (location = place) => {
    try {
        const currentTime = await currentTimeByLocationName(location)
    } catch (error) {
        console.log(error)
    }
}


export {
    getWeatherByLocationName, getCurrentTimeByLocationName
}
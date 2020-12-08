// import { currentTimeByLocationName, weatherByLocationName } from "../services"

const getWeatherByNameOfLocation = async location => {
    try {
        const weather = await weatherByLocationName(location)

    } catch (error) {

    }

}


const getCurrentTimeByNameOfLocation = async location => {
    try {
        const currentTime = await currentTimeByLocationName(location)
    } catch (error) {

    }
}


export {
    getWeatherByNameOfLocation
}
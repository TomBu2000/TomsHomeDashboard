import { Request } from "../common/Request"
import { Weather } from "../models"

export async function getCurrentWeather() {
  const response = await Request<Weather>(
    "https://api.openweathermap.org/data/2.5/weather?lat=53.550341&lon=10.000654&units=metric&appid="
  )

  return response
}

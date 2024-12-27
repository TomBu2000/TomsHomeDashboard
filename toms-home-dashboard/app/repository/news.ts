import { TagesschauNews } from "../models"
import { Request } from "../common/Request"

export async function getCurrentNews() {
  const response = await Request<TagesschauNews>(
    "https://www.tagesschau.de/api2u/homepage"
  )

  return response
}

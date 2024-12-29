import { Config } from "../models"
import { Request } from "./Request"

export async function getConfig() {
  const response = await Request<Config>(
    "http://192.168.178.60:3030/api/config/getConfig",
    true
  )

  return response
}

import fs from "fs"
import { Config } from "../models"

export function getConfig(): Config {
  const jsonString = fs.readFileSync("../config.json", "utf-8")
  const data: Config = JSON.parse(jsonString)

  return data
}

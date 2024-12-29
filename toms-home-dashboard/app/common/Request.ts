export async function Request<T>(
  url: string,
  crossOrigin?: boolean
): Promise<T> {
  let mode: RequestMode | undefined = undefined
  let headers = {}

  if (crossOrigin === true) {
    mode = "cors"
    headers = { "Access-Control-Allow-Origin": "http://192.168.178.60:3030" }
  }

  const result = await fetch(url, {
    mode,
    headers
  })
  const response = await result.json()
  const data: T = response

  return data
}

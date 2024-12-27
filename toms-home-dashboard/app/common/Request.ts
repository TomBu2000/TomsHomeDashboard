export async function Request<T>(url: string): Promise<T> {
  const response = await (await fetch(url)).json()
  const data: T = response

  return data
}

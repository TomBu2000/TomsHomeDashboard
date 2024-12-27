export type Coord = {
  lon: number
  lat: number
}

export type MainWeather = {
  id: number
  main: string
  description: string
  icon: string
}

export type Main = {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  humidity: number
  sea_level?: number
  grnd_level?: number
}

export type Wind = {
  speed: number
  deg: number
  gust?: number
}

export type Clouds = {
  all: number
}

export type Sys = {
  type: number
  id: number
  country: string
  sunrise: number
  sunset: number
}

export type Weather = {
  coord: Coord
  weather: MainWeather[]
  base: string
  main?: Main
  visibility: number
  wind: Wind
  clouds: Clouds
  dt: number
  sys: Sys
  timezone: number
  id: number
  name: string
  cod: number
}

export type ImageVariants = {
  "1x1-432": string
  "16x9-512": string
}

export type TeaserImage = {
  alttext: string
  imageVariants: ImageVariants
  type: string
}

export type News = {
  sophoraId: string
  externalId: string
  title: string
  teaserImage: TeaserImage
  tracking: []
  tags: []
  regionId: string
  updateCheckUrl: string
  images: []
  streams: unknown
  copyright: string
  details: string
  detailsweb: string
  shareURL: string
  topline: string
  firstSentence: string
  geotags: string
  crop: unknown
  ressort: string
  type: string
  breakingNews: boolean
  firstFrame: unknown
}

export type TagesschauNews = {
  news: News[]
}

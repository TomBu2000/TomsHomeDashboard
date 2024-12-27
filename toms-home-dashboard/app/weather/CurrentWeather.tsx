import { Box, CircularProgress, Typography } from "@mui/material"
import { useQuery } from "react-query"
import { getCurrentWeather } from "../repository/weather"
import { useMemo } from "react"

export function CurrentWeather() {
  const { data, isLoading } = useQuery(
    "currentWeather",
    async () => {
      return await getCurrentWeather()
    },
    { refetchInterval: 1000 * 60 }
  )

  const renderCurrentWeatherInfo = useMemo(() => {
    if (!data) {
      return null
    }

    return (
      <>
        <Typography>Aktuelles Wetter</Typography>
        <Box>Aktuelle Temperatur: {data.main?.temp} °C</Box>
        <Box></Box>
        <Box></Box>
      </>
    )
  }, [data])

  return (
    <Box>
      {isLoading && <CircularProgress />}
      {!isLoading && renderCurrentWeatherInfo}
    </Box>
  )
}

import { Box, Button, Grid2 } from "@mui/material"
import { CurrentWeather } from "../weather/CurrentWeather"
import { CurrentNews } from "../news/CurrentNews"

export function Dashboard() {
  return (
    <Box
      textAlign={"center"}
      marginLeft={2}
      marginRight={2}
      marginTop={2}
      sx={{ width: "90%", height: "100%" }}
    >
      <Grid2 container spacing={2}>
        <Grid2 size={4}>
          <CurrentNews></CurrentNews>
        </Grid2>
        <Grid2 size={4}>
          <CurrentWeather></CurrentWeather>
        </Grid2>
        <Grid2 size={4}>
          <Button>Test</Button>
        </Grid2>
      </Grid2>
    </Box>
  )
}

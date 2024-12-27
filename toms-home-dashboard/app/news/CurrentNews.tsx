import { CircularProgress, Typography } from "@mui/material"
import { useQuery } from "react-query"
import { getCurrentNews } from "../repository/news"
import { useMemo } from "react"
import { SingleNews } from "./SingleNews"

export function CurrentNews() {
  const { data, isLoading } = useQuery(
    "currentNews",
    async () => {
      return await getCurrentNews()
    },
    { refetchInterval: 1000 * 120 }
  )

  const renderCurrentWeatherInfo = useMemo(() => {
    if (!data) {
      return null
    }

    return (
      <>
        <Typography>Aktuelle Nachrichten</Typography>
        {data.news.map((news, index) => {
          return (
            <SingleNews
              key={"SingleNews-" + index}
              title={news.title}
              imageUrl={news.teaserImage.imageVariants["16x9-512"]}
            ></SingleNews>
          )
        })}
      </>
    )
  }, [data])

  return (
    <>
      {isLoading && <CircularProgress />}
      {!isLoading && renderCurrentWeatherInfo}
    </>
  )
}

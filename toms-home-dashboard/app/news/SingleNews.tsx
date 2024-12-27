import { Card, CardContent, CardMedia, Typography } from "@mui/material"

type Props = {
  title: string
  imageUrl: string
}

export function SingleNews(props: Props) {
  const { title, imageUrl } = props

  return (
    <Card sx={{ maxWidth: 345, margin: 1, backgroundColor: "gainsboro" }}>
      <CardMedia component="img" height="50" image={imageUrl} />
      <CardContent>
        <Typography gutterBottom variant="body1" component="div">
          {title}
        </Typography>
      </CardContent>
    </Card>
  )
}

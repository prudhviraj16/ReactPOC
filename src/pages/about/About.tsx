import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { IMAGE_URL } from "./constants";

const About = () => {
  // sample web page 

  
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh"
      }}
    >
      <Card sx={{ maxWidth: 1200 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="400"
            image={IMAGE_URL}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              About
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
              accusamus assumenda quidem amet placeat magni quisquam eius
              voluptas, vitae ullam repellat nisi ut! Veniam omnis, laudantium
              ratione quidem sint doloribus!. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Provident in quaerat reprehenderit
              saepe praesentium voluptatem nulla autem ea est aliquid,
              voluptates maiores illum obcaecati sint ratione ipsa consequuntur?
              Quae, laudantium.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default About;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import LazyLoad from 'react-lazyload';


const useStyles = makeStyles({
  root: {
    maxWidth: 750
  },
  media: {
    height: 300
  }
});

export default function MediaCard(props) {
  const classes = useStyles();

  const myStyle = {
    backgroundColor: "#dfe3ee", 
    margin: "auto", 
    marginTop: "20px", 
    padding: "0px 5px"
  }

  return (
    <div id = {(props.cardID || "")}>
    <LazyLoad height={200} offset={100}>
    <Card className={classes.root} style={myStyle}>
        <CardContent>
          <Typography gutterBottom variant="h4" component="h4">
            { (props.cardTitle || "The title could not be loaded")}
          </Typography>
          <Typography variant="p" component="p">
          { (props.cardDescription || "The description could not be loaded")}
          </Typography>
        </CardContent>
        <CardMedia
          className={classes.media}
          image= {(props.imageSource || "https://i.imgur.com/YcengQl.jpg" )}
        />
        <CardContent>
          
          <Typography gutterBottom variant="p" component="p" className = "quote">
            { (props.cardQuote || "I like cats")}
          </Typography>

          {props.children}
        </CardContent>
    </Card>
    </LazyLoad>
    </div>
  );
}

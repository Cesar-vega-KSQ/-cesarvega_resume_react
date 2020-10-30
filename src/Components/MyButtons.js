import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";


function MyButton(props){


    
    const BaseButton = withStyles(() => ({
        root: {
          color: (props.mainColor || "#f2f2f2"),
          backgroundColor: (props.backgroundColor || "#3b5998"),
          "&:hover": {
            backgroundColor: (props.hoverColor || "#8b9dc3"),
          },
        },
      }))(Button);
      
      const useStyles = makeStyles((theme) => ({
        margin: {
          margin: theme.spacing(1),
        },
      }));

      const classes = useStyles();

    return(
        <>
            <BaseButton
            
            className={classes.margin}
            >{props.children}</BaseButton>
        </>
    )
    
}

export default MyButton;
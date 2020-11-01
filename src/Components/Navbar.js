import React from "react";
import {
	AppBar,
	Toolbar,
    Box
} from "@material-ui/core";

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Menu } from '@material-ui/icons';

import { BrowserRouter as Router, Switch, Link } from "react-router-dom";
import MediaCard from "./MediaCard";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});



const Navbar = (props) => {
    const classes = useStyles();
    const [state, setState] = React.useState({
      top: false,
      left: false,
      bottom: false,
      right: false,
    });
  
    const toggleDrawer = (anchor, open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
  
      setState({ ...state, [anchor]: open });
    };
  
    const list = (anchor) => (
      <div
        className={clsx(classes.list, {
          [classes.fullList]: anchor === 'top' || anchor === 'bottom',
        })}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <Router>
        <List>
                <ListItem button key="My Life" onClick={handleListClick}>
                  <a href ="#MyLife">
                    <ListItemText primary="My Life"/>
                  </a>
                </ListItem>

                <ListItem button key="Education" onClick={handleListClick}>
                <a href="#MyEducation"> 
                  <ListItemText primary="Education"/>
                </a>
                </ListItem>

                <ListItem button key="Experience" onClick={handleListClick}>
                <a href="#MyExperience"> 
                  <ListItemText primary="Experience"/>
                </a>
                </ListItem>

                <ListItem button key="Hobbies">

                <a href="#MyHobbies">
                  
                  <ListItemText primary="Hobbies"/>

                </a>
                  
                </ListItem>

                <ListItem button key="Linkedin">

                <a href="https://www.linkedin.com/in/cesar-leonardo-vega-galvan/" target="_blank">
                  
                  <ListItemText primary="Linkedin"/>

                </a>
                  
                </ListItem>                
            
        </List>
        </Router>
      </div>
    );


    function handleListClick(){
        console.log("A");
    }

	return(
        <>
		<Box component="nav" position="static" style = {{maxWidth: 750, margin: "auto"}}>
			<AppBar position="static"
                style={{ background: '#2E3B55' }
                }
            >
			  <Toolbar style ={{margin: "auto"}}>
              <div>
                {['left'].map((anchor) => (
                    <React.Fragment key="left">
                    <Button onClick={toggleDrawer(anchor, true)}><h2 style ={{color: "#dfe3ee"}}>Open menu</h2><Menu style={{ color: "#dfe3ee", marginTop:"-10px", marginLeft: "5px"}} fontSize="large"/></Button>
                    <Drawer anchor="left" open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                        {list(anchor)}
                    </Drawer>
                    </React.Fragment>
                ))}
                </div>
			  </Toolbar>
			</AppBar>
		</Box>
        </>
		);
}
export default Navbar;
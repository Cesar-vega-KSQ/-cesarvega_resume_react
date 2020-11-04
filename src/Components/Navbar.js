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

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MyWork from "../views/MyWork";

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
        
          <List>
                <a href ="/-cesarvega_resume_react/#MyLife">
                <ListItem button key="My Life" onClick={handleListClick}>
                  
                    <ListItemText primary="My Life"/>
                  
                </ListItem>
                </a>

                <a href ="#mywork">
                <ListItem button key="My Work">
                    <ListItemText primary="My Work"/>                  
                </ListItem>
                </a>
                


                <a href="/-cesarvega_resume_react/#MyEducation"> 
                <ListItem button key="Education" onClick={handleListClick}>
                  <ListItemText primary="Education"/>
                </ListItem>
                </a>
                
                <a href="/-cesarvega_resume_react/#MyExperience"> 
                <ListItem button key="Experience" onClick={handleListClick}>
                  <ListItemText primary="Experience"/>
                </ListItem>
                </a>

                <a href="/-cesarvega_resume_react/#AreasOfExpertice"> 
                <ListItem button key="Areas Of Expertice" onClick={handleListClick}>
                  <ListItemText primary="Areas Of Expertice"/>
                </ListItem>
                </a>

                <a href="/-cesarvega_resume_react/#MyHobbies">
                <ListItem button key="Hobbies" onClick={handleListClick}>
                  <ListItemText primary="Hobbies"/>
                </ListItem>
                </a>
                
                <a href="https://www.linkedin.com/in/cesar-leonardo-vega-galvan/" target="_blank">
                <ListItem button key="Linkedin">
                  <ListItemText primary="Linkedin"/>
                </ListItem>                
                </a>

                <a href="mailto:mailforksqgithubpagescontact@mailinator.com">
                <ListItem button key="Contact me!">
                  <ListItemText primary="Contact me!"/>
                </ListItem>                
                </a>
            
          </List>
      </div>
    );


    function handleListClick(){
        props.scrollUpPage();
    }

    function handleMyWorkClick(){
      setTimeout(refreshSiteFunction,100);
    }
    
    function refreshSiteFunction(){
      window.location.reload();
    }

    //Note: position = "static" to keep on top of page.
    // position = "fixed" to let menu follow site
	return(
        <>
		<Box component="nav" position="static" style = {{maxWidth: 750, margin: "auto"}}>
			<AppBar position="fixed"
                style={{ background: '#2E3B55'
              }}
            >
			  <Toolbar style ={{margin: "auto"}}>
              <div>
                {['left'].map((anchor) => (
                    <React.Fragment key="left">
                    <Button onClick={toggleDrawer(anchor, true)}><h2 style ={{color: "#dfe3ee"}}>Cesar Vega</h2><Menu style={{ color: "#dfe3ee", marginTop:"-10px", marginLeft: "5px"}} fontSize="large"/></Button>
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
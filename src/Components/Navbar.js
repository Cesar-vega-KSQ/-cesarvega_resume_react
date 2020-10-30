import React from "react";
import {
	AppBar,
	Toolbar,
    Box,
} from "@material-ui/core";
import MyButton from "./MyButtons"

const Navbar = () => {
	return(
        <>
		<Box component="nav" position="static">
			<AppBar position="static"
                style={{ background: '#2E3B55' }
                }
            >
			  <Toolbar>
                
                <MyButton>Work</MyButton>
                <MyButton>Experience</MyButton>
                <MyButton>Education</MyButton>
                <MyButton>Certifications</MyButton>
			  </Toolbar>
			</AppBar>
		</Box>
        </>
		);
}
export default Navbar;
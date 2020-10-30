import React from "react";
import {
	AppBar,
	Toolbar,
	Box
} from "@material-ui/core";

const Navbar = () => {
	return(
		<Box component="nav" position="static">
			<AppBar position="static"
                style={{ background: '#2E3B55' }}
            >
			  <Toolbar>
			  </Toolbar>
			</AppBar>
		</Box>
		);
}
export default Navbar;
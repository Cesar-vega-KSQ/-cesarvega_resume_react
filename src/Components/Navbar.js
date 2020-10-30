import React from "react";
import {
	AppBar,
	Toolbar,
	IconButton,
	Avatar,
	Typography,
	Button,
	Box
} from "@material-ui/core";

const Navbar = () => {
	return(
		<Box component="nav" position="static">
			<AppBar position="static">
			  <Toolbar>
			    <Typography variant="h6" style={{ flex: 1 }}>
			      Logo
			    </Typography>
			    <Button color="inherit">Login</Button>
			  </Toolbar>
			</AppBar>
		</Box>
		);
}
export default Navbar;
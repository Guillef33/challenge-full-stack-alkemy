import { Button, Typography, Menu, MenuItem } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import "../Header/Nav.css";

import Logo from "../../Assets/logo_header.png";

function Nav() {

 const [anchorEl, setAnchorEl] = React.useState(null);
 const open = Boolean(anchorEl);
 const handleClick = (event) => {
   setAnchorEl(event.currentTarget);
 };
 const handleClose = () => {
   setAnchorEl(null);
 };

  return (
    <>
      {/* <ul className="flex-container">
        <Link component={Link}>
          <img src={Logo} alt="logos" style={{ height: "30px" }} />
        </Link>

        <Button>
          <Link to="/auth/login">Ingresar</Link>
        </Button>
        <Button>
          <Link to="/auth/register">Registrate</Link>
        </Button>
      </ul> */}
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </>
  );
}

export default Nav;

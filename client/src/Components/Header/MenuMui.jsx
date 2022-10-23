import React, { useState, useContext } from "react";
import {
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  Tooltip,
  MenuItem,
} from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import { Avatar } from "@mui/material";

import { Link } from "react-router-dom";

import Logo from "../../Assets/logo_header.png";
import "./Nav.css";

import { AuthContext } from "../../Context/AuthContext";

function MenuMui({ isLogged }) {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const pages = ["Como funciona", "Precios", "Noticias"];
  const settings = ["Profile", "Account", "Dashboard", "Logout"];

  const pagesLogged = ["Agregar Factura", "Mi Perfil"];
  const { login, user } = useContext(AuthContext);

  console.log(isLogged);

  return (
    <AppBar position="static" color="default">
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Box>
            <img src={Logo} alt="Logo de la App" style={{ height: "30px" }} />
          </Box>

          <Box>
            {isLogged ? (
              <>
                <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                  {pagesLogged.map((page) => (
                    <Button>{page}</Button>
                  ))}
                </Box>
              </>
            ) : (
              <>
                <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                  {pages.map((page) => (
                    <Button>{page}</Button>
                  ))}
                </Box>
              </>
            )}
          </Box>

          <Box>
            {isLogged ? (
              <>
                <Typography variant="book1">
                  Bienvenido, {user.username}
                </Typography>
                <Tooltip title="Open settings">
                  <Button>
                    <Link to="/">Salir</Link>
                  </Button>
                </Tooltip>
              </>
            ) : (
              <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
                <Tooltip title="Open settings">
                  <Button>
                    <Link to="/auth/login">Login</Link>
                  </Button>
                </Tooltip>
                <Tooltip title="Open settings">
                  <Button>
                    <Link to="/auth/register">Probar gratis</Link>
                  </Button>
                </Tooltip>
              </Box>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default MenuMui;

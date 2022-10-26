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

import Logo from "../../Assets/logo-accountancy.png";
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

  const pagesLogged = [
    { id: 1, texto: "Agregar Factura", url: "/agregar-factura" },
    { id: 2, texto: "Mi Perfil", url: "/mi-perfil" },
    { id: 3, texto: "Ver todas las facturas", url: "/ultimas-facturas" },
  ];

  const { login, user } = useContext(AuthContext);

  return (
    <AppBar position="static" color="default">
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Box>
            {isLogged ? (
              <Link to="/dashboard">
                <img
                  src={Logo}
                  alt="Logo de la App"
                  style={{ height: "70px" }}
                />
              </Link>
            ) : (
              <Link to="/">
                <img
                  src={Logo}
                  alt="Logo de la App"
                  style={{ height: "70px" }}
                />
              </Link>
            )}
          </Box>

          {/* <Box>
            {isLogged ? (
              <>
                <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                  {pagesLogged.map((page) => (
                    <Button>
                      <Link to={`/${page.url}`} key={page.id}>
                        {page.texto}
                      </Link>
                    </Button>
                  ))}
                </Box>
              </>
            ) : (
              <>
                <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                  {pages.map((page) => (
                    <Button>
                      <Link key={page.id} to={`/${page.url}`}>
                        {page.texto}
                      </Link>
                    </Button>
                  ))}
                </Box>
              </>
            )}
          </Box> */}

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

import { useState, useContext } from "react";

import Axios from "axios";

import { Link } from "react-router-dom";

import { Typography, Button, Box, FormControl, TextField } from "@mui/material";

import { AuthContext } from "../../Context/AuthContext";

export default function Form() {
  // States for registration
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [newUser, setNewUser] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const { loginValidations } = useContext(AuthContext);

  Axios.defaults.withCredentials = true;

  const register = () => {
    loginValidations(email, password);
    Axios.post("http://localhost:3050/register", {
      username: username,
      email: email,
      password: password,
    }).then((response) => {
      console.log(response);
      setSubmitted(true);
    });
  };

  return (
    <>
      <Box
        onSubmit={register}
        component="form"
        noValidate
        sx={{ mt: 1 }}
        className="loginContainer"
      >
        <FormControl fullWidth>
          <TextField
            type="text"
            placeholder="Ingrese su usuario"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            name="usuario"
            label="usuario"
          />
          <TextField
            type="email"
            placeholder="Ingrese su email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            name="email"
            label="email"
          />
          <TextField
            type="password"
            placeholder="Ingrese su password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            name="password"
            label="password"
          />
          <Button onClick={register} type="button">
            Enviar
          </Button>

          {submitted ? (
            <>
              <Button type="button" sx={{ backgroundColor: "red" }}>
                <Link to={"/auth/login"}>Login</Link>
              </Button>
            </>
          ) : null}
        </FormControl>
      </Box>
    </>
  );
}

import { useState } from "react";

import Axios from "axios";

import { Link } from "react-router-dom";

export default function Form() {
  // States for registration
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newUser, setNewUser] = useState({});
  const [submitted, setSubmitted] = useState(false)


  Axios.defaults.withCredentials = true;

  const register = () => {
    Axios.post("http://localhost:3050/register", {
      password: password,
      email: email,
    }).then((response) => {
      console.log(response);
    });
    setSubmitted(true);
  };


  return (
    <>
      <div className="loginContainer">
        <form>
          <label>Email</label>

          <input
            type="email"
            placeholder="Ingrese su email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

        <label>Password</label>
          <input
            type="password"
            placeholder="Ingrese su password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />


          <button onClick={register} type="button">
            Enviar
          </button>

          {submitted ? (
            <>
              <Link to={"/auth/login"} className="button-main">
                Login
              </Link>
            </>
          ) : (
            ""
          )}

        </form>
      </div>
    </>
  );
}

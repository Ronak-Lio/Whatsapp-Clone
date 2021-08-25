import React from "react";
import { useStateValue } from "./StateProvider";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import { actionTypes } from "./reducer";

function Login() {
  const [{}, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login_container">
        <img
          src="https://th.bing.com/th/id/R35ffa6e353468280a59e5b4672b8aba0?rik=e5Y6Je9zOSfWrg&riu=http%3a%2f%2flofrev.net%2fwp-content%2fphotos%2f2016%2f06%2fwhatsApp-logo-1.png&ehk=2kmD9AQIuBNDDrrdprGXc3ua6fK6W8wJ%2fiV0VbQhDsI%3d&risl=&pid=ImgRaw"
          alt=""
        />
        <div className="login_text">
          <h1>Sign in to Whatsapp</h1>
        </div>
        <Button onClick={signIn}>Sign in with Google</Button>
      </div>
    </div>
  );
}

export default Login;

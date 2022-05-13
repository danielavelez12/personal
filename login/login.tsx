import { NavBar } from "../app/components/Navbar";

import React, { useState } from "react";
import ReactDOM from "react-dom";
import GoogleLogin, { useGoogleLogin } from "react-google-login";

function Login() {
  const { signIn, loaded } = useGoogleLogin({
    clientId:
      "1051054786767-08mqbkdet55u2i6jemaifsns2452aog0.apps.googleusercontent.com",
    isSignedIn: true,
    onSuccess: onSuccess,
    onFailure: onFailure,
  });

  const [user, setUser] = useState(null);

  function onSuccess(res) {
    setUser(res.data.user);
    console.log(user);
  }

  function onFailure(res) {
    console.log(res);
  }

  return (
    <>
      <NavBar></NavBar>

      <div className="container mx-auto px-12 py-5 h-screen bg-white text-med">
        <button onClick={signIn}>Login</button>
      </div>
    </>
  );
}

export default Login;

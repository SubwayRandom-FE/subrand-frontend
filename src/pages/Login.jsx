import { useState } from "react";
//import { useDispatch } from "react-redux";

import classes from "./Login.module.css";

function LoginPage() {
  //const dispatch = useDispatch();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  function onEmailHandler(event) {
    setEmail(event.target.value);
  }

  function onPasswordHandler(event) {
    setPassword(event.target.value);
  }

  function onSubmitHandler(event) {
    event.preventDefault();

    console.log("Email :", Email);
    console.log("Password :", Password);

    let body = {
      email: Email,
      password: Password,
    };

    //dispatch(loginUser(body));
  }

  return (
    <div className={classes.style1}>
      <form className={classes.style2} onSubmit={onSubmitHandler}>
        <label>Email</label>
        <input
          type="email"
          placeholder="Email"
          value={Email}
          onChange={onEmailHandler}
        />
        <br />
        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          value={Password}
          onChange={onPasswordHandler}
        />
        <br />
        <button formAction="" className={classes.login}>Login</button>
      </form>
    </div>
  );
}

export default LoginPage;

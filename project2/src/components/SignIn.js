
import React, { useState } from "react";

import UserDetails from "./UserDetails";


function SignIn() {
  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");

  const [flag, setFlag] = useState(false);
  const [home, setHome] = useState(true);

  function handleLogin(e) {
    e.preventDefault();
    let pass = localStorage.getItem("Password").replace(/"/g, "");
    let mail = localStorage.getItem("Email").replace(/"/g, "");
    

    if (!emaillog || !passwordlog) {
      setFlag(true);
      console.log("empty");
    } else if (passwordlog !== pass || emaillog !== mail) {
      setFlag(true);
    } else {
      setHome(!home);
      setFlag(false);
    }
  }
  
  const Headingstyle={
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };
  
  
  return (
    <div>
      {home ? (
        <form onSubmit={handleLogin} className="form">
          <h3 style={Headingstyle}>SignIn</h3>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(event) => setEmaillog(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(event) => setPasswordlog(event.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-dark btn-lg btn-block" style={{color: "blue",backgroundColor:"lightblue"}}>
            SignIn
          </button>

          {flag && (
            <div color="primary" variant="warning" style={{color: "red", padding:10}}>
              Fill correct Details.
            </div>
          )}
        </form>
      ) : (
        <UserDetails />
      )}
    </div>
  );
}

export default SignIn;
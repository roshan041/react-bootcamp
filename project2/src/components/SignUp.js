/*
import React, { useState } from "react";

import SignIn from "./SignIn";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);

  const [Bflag, setBFlag] = useState(true);


  function handleFormSubmit(e) {
    e.preventDefault();

    if (!email || !password ) {
      setFlag(true);
    } else {
      setFlag(false);
      if(ValidateEmail(email)){
        console.log('valid mail');

        localStorage.setItem("Email", JSON.stringify(email));
        localStorage.setItem("Password",JSON.stringify(password));
        console.log("Saved in Local Storage");
        setLogin(!login);
      }
     
    }
  }
  function ValidateEmail(email) 
  {
    var ml=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (ml.test(email))
    {
      return (true)
    }
      alert("You have entered an invalid email address!")
      return (false)
  }
  

  function handleClick() {
    setLogin(!login);
  }

  function btnSubmit(email,password) {
      if (email != '' && password!='') {
        setBFlag(false);
        console.log("ok2");
      }
      else {
        setBFlag(true);
        console.log("ok");
      }
    //var bt = document.getElementById('btSubmit');  
}
  const Headingstyle={
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };
  
  return (
    <>
        <div>
          {" "}
          {login ? (
            <form onSubmit={handleFormSubmit} className="form">
              <h3 style={Headingstyle}>SignUp</h3>
              
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"

                  onChange={(event) => setEmail(event.target.value), btnSubmit(email,password)}
                 // onChange={btnSubmit(email,password)}
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"

                  onChange={(event) => setPassword(event.target.value), btnSubmit(email,password)}
                  //onChange={btnSubmit(email,password)}
                />
              </div>


              <button type="submit" className="btn btn-dark btn-lg btn-block" id="btSubmit" disabled={Bflag}  style={{color: "blue",backgroundColor:"lightblue"}}>
                SignUp
              </button>
              <p onClick={handleClick} className="forgot-password text-centre btn btn-dark btn-lg btn-block">
                Already registered{" "}SignIn instead  
              </p>
              {flag && (
                <div color="primary" variant="danger" style={{color: "red", padding:10}}>
                  enter pass and email
                </div>
              )}
            </form>
          ) : (
            <SignIn />
          )}
        </div>
    
    </>
  );
}

export default SignUp;
*/


import React, { useState } from "react";

import SignIn from "./SignIn";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);
  


  function handleFormSubmit(e) {
    e.preventDefault();

    if (!email || !password ) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("Email", JSON.stringify(email));
      localStorage.setItem("Password",JSON.stringify(password)
      );
      console.log("Saved in Local Storage");

      setLogin(!login);
    }
  }

  function handleClick() {
    setLogin(!login);
  }
/*
  const Headingstyle={
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };
  style={Headingstyle}
  */
  return (
    <>
 
        <div>
          {" "}
          {login ? (
            <form onSubmit={handleFormSubmit} className="form">
              <h3 >SignUp</h3>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>


              <button type="submit" className="btn btn-dark btn-lg btn-block" style={{color: "blue",backgroundColor:"lightblue"}}>
                SignUp
              </button>
              <p onClick={handleClick} className="forgot-password text-right btn btn-dark btn-lg btn-block">
                Already registered{" "}SignIn instead  
              </p>
              {flag && (
                <div color="primary" variant="danger" style={{color: "red", padding:10}}>
                  enter pass and email
                </div>
              )}
            </form>
          ) : (
            <SignIn />
          )}
        </div>
    
    </>
  );
}

export default SignUp;
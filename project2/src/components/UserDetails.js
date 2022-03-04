import React,{Component,useState} from "react";

import Welcome from "./Welcome";


function UserDetails(){
    const [fname, setFName] = useState("");
    const [lname, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const [flag, setFlag] = useState(false);
    const [login, setLogin] = useState(true);



    function handleFormSubmit(e) {
        e.preventDefault();
    
        if (!lname ||!fname|| !email || !phone ) {
          setFlag(true);
        } else {
          setFlag(false);
          localStorage.setItem("Email", JSON.stringify(email));
          localStorage.setItem("Phone", JSON.stringify(phone));
          localStorage.setItem("FirstName", JSON.stringify(fname));
          localStorage.setItem("LastName", JSON.stringify(lname));

          console.log("Saved in Local Storage");
    
          setLogin(!login);
        }
      }
      const Headingstyle={
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
      };

        return(
            <div>
                 {" "}
                {login ? (
                    <form onSubmit={handleFormSubmit}>
                    <h3 style={Headingstyle}>User Details</h3>

                    <div className="form-group">
                        <label>First Name</label>
                        <input
                        type="text"
                        className="form-control"
                        placeholder="Enter First Name"
                        name="first name"
                        onChange={(event) => setFName(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Last Name"
                        name="last name"
                        onChange={(event) => setLName(event.target.value)}
                        />
                    </div>
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
                        <label>Phone No.</label>
                        <input
                        type="Phone"
                        className="form-control"
                        placeholder="Enter contact no"
                        onChange={(event) => setPhone(event.target.value)}
                        />
                    </div>

                    <button type="submit" className="btn btn-dark btn-lg btn-block" style={{color: "blue",backgroundColor:"lightblue"}}>
                        Save details
                    </button>
                    
                    {flag && (
                        <div color="primary" variant="danger" style={{color: "red", padding:10}}>
                        enter all fields 
                        </div>
                    )}
        
                    </form>
                ) : (
                    <Welcome />
                )}
            </div>
        )
}

export default UserDetails;
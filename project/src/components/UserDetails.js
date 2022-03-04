import React,{Component,useState} from "react";

import Welcome from "./Welcome";


function UserDetails(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const [flag, setFlag] = useState(false);
    const [login, setLogin] = useState(true);

    function handleFormSubmit(e) {
        e.preventDefault();
    
        if (!name || !email || !phone ) {
          setFlag(true);
        } else {
          setFlag(false);
          localStorage.setItem("Email", JSON.stringify(email));
          localStorage.setItem("Phone", JSON.stringify(phone));
          localStorage.setItem("Name", JSON.stringify(name));

          console.log("Saved in Local Storage");
    
          setLogin(!login);
        }
      }

        return(
            <div>
                 {" "}
                {login ? (
                    <form onSubmit={handleFormSubmit}>
                    <h3>User Details</h3>

                    <div className="form-group">
                        <label>Name</label>
                        <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Full Name"
                        name="name"
                        onChange={(event) => setName(event.target.value)}
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
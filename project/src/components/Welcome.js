import React,{Component} from "react";
import { Link } from "react-router-dom";

function Welcome(){

        let name = localStorage.getItem("Name").replace(/"/g, "");
        let mail = localStorage.getItem("Email").replace(/"/g, "");
        let phone = localStorage.getItem("Phone").replace(/"/g, "");   

        return(
            <div >
                <h2>Welcome</h2> 
                <div>
                    <table>
                        <tr>
                            <th>Name:</th>
                            <td>{name}</td>
                        </tr>
                        <tr>
                            <th>phone:</th>
                            <td>{phone}</td>
                        </tr>
                        <tr>
                            <th>email:</th>
                            <td>{mail}</td>
                        </tr>
                    </table>
                </div>
                <button > <Link to='/thankyou'>ok </Link> </button>
            </div>
        )
}

export default Welcome;
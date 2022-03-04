import React,{Component} from "react";

import "./App.css";
class Users extends Component{
    state={user:{},users:[]}
    fetchUsers=()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json() ) // equivalent to response=>{return response.json() }
        .then(json=>this.setState({users:json}))
        .catch(error =>alert(error.message));
    }


    render(){
        const {id,name,username,email}=this.state.user;
        return(
            <div>
                <h3>users</h3>
                <button onClick={this.fetchUsers}>show users</button>
                {
                    this.state.users.map(user=>{
                        const{id,name,username,email}=user;
                        return(
                            <div>
                                <table>
                                    <tr>
                                        <td>
                                            <h5>{id}</h5>
                                        </td>
                                        <td>
                                            <h5>{name}</h5>
                                        </td>
                                        <td>
                                            <h4>{username}</h4>
                                        </td>
                                        <td>
                                            <p>{email}</p>
                                        </td>
                                    </tr>
                                </table>
                            </div>    
                        );
                    })
                }
            </div>
           
        )
    }
}
export default Users;
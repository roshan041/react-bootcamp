
import React,{Component} from "react";

import {firebaseApp, auth} from '../firebase';

import {Link} from 'react-router-dom';

class SignIn extends Component{

    constructor(props){
        super(props);
        this.state={
            email:'',
            password:'',
            error:{
                message:''
            }
        }
    }

    SignIn(){
        const{email,password}=this.state;
        console.log('signin  this.state:',this.state);
        auth.signInWithEmailAndPassword(email,password)
        .catch(error=>{
            console.log(error);
            this.setState({error})
        })
    }

    render(){
        return(
            <div className="form-inline" style={{margin:'5%' }}>
                <h2>Sign In</h2>
                <div className="form-group">
                    <input className="form-control" style={{margin:'10px'}}
                            type="text"
                            placeholder="email"
                            onChange={event=>this.setState({email:event.target.value})}
                    />
                    <input className="form-control" style={{margin:'10px'}}
                            type="password"
                            placeholder="password"
                            onChange={event=>this.setState({password:event.target.value})}
                    />
                    <button 
                        className="btn btn-primary"
                        type="button"
                        onClick={()=>this.SignIn()}>
                            SignIn
                        </button>
                </div>
                <div>{this.state.error.message}</div>
                <div><Link to={'/signup'}>sign up instead</Link></div>
            </div>
        )
    }
}

export default SignIn;
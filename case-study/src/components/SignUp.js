import React,{Component} from "react";

import {firebaseApp, auth} from '../firebase';

import {Link} from 'react-router-dom';

class SignUp extends Component{

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

    SignUp(){
        const{email,password}=this.state;
        console.log('signup  this.state:',this.state);
        auth.createUserWithEmailAndPassword(email,password)
        .catch(error=>{
            console.log(error);
            this.setState({error})
        })
    }

    render(){
        return(
            <div className="form-inline" style={{margin:'5%' }}>
                <h2>Sign Up</h2>
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
                        onClick={()=>this.SignUp()}>
                            SignUp
                        </button>
                </div>
                <div>{this.state.error.message}</div>
                <div><Link to={'/signin'}>already have account? sign in!</Link></div>
            </div>
        )
    }
}

export default SignUp;
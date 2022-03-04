import React,{ Component } from 'react';

import Projects from './Projects';

import SocialProfiles from './SocialProfiles';

import profile from '../assets/profile.png';

import Title from './Title';

import Jokes from './Jokes';

/* 1

class App extends Component{
  render(){
    return(
      <div>
        <p>hi, i'm roshan </p>
        <p>i'm analyst at deloitte</p>
      </div>
    )
  }
}
*/
class App extends Component{
  state={displayBio:false}
  /* 3
  constructor(){
    super();
    this.state={displayBio:false};
    console.log('constructor this:',this);
    this.toggleDisplayBio=this.toggleDisplayBio.bind(this);
    //this.readMore = this.readMore.bind(this);
  }
  */
  /* 2
  readMore(){
   // this.state.displayBio=true; //never do this- dont modify state directle 
   this.setState({displayBio:true});
   console.log('readMore this:',this);
  }
  */
 /* 3
  toggleDisplayBio(){
    this.setState({displayBio:!this.state.displayBio});
  }
  */
 toggleDisplayBio= () =>{
  this.setState({displayBio:!this.state.displayBio});
  }

  render(){
    return(
      <div>
        <img src={profile} alt='my profile pic' className='profile'></img>
        <h1>Hello!</h1>
        <p>My name is Roshan</p>
        
        {this.state.displayBio?<Title/>:null}
        <p>I'm React front End Developer and I like to work on meaningfull Projects</p>
      
        {
          this.state.displayBio?(
            <div>
                <p>I live in washim, Mharashtra</p>
                <p>My favourate language is JavaScript</p>
                <p>My hobbies are reading book,watching web series</p>
                <button onClick={this.toggleDisplayBio}>Show less</button>
              </div>
          ):(
            <div>
              <button onClick={this.toggleDisplayBio}>readMore</button>
            </div>

          )
        }
      <hr/>
      <Projects />
      <hr/>
      <SocialProfiles/>
      <hr/>
      <Jokes/>
      </div>
      
    )
  }
}
export default App;

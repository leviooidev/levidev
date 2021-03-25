import React from 'react';
import '../scss/home.scss';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import group5 from '../assets/png/Group5.png';

import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';

import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";


export default class Home extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      // Home = 1, About = 2, Skill = 3, My Work = 4, Contact = 5
      hoveredMenu:1, 
      selectedMenu: 1,
      iconStyle:"Wave"
    }

    //this.state = { penguinController: new PenguinController() };

 };

 

  render(){
    
    const ColorButton = withStyles(theme => ({
      root: {
        color: "#FFF",
        backgroundColor:"#2F4858",
        '&:hover': {
          backgroundColor: "#3C6A7A",
        },

      },
    }))(Button);
  
   
    
    return(
      
      <div className="home">
          <div className="home-sub-left">
            <div className = "home-intro">
              {/* Hi, */}
              <span className="home-intro-title">
                <span className = "home-intro-title-object" id="o1">H</span>
                <span className = "home-intro-title-object" id="o2">i</span>
                <span className = "home-intro-title-object" id="o3">,</span>
              </span>

              {/* I'm GL. */}
              <span className="home-intro-title">
                <span className = "home-intro-title-object">I</span>
                <span className = "home-intro-title-object">'</span>
                <span className = "home-intro-title-object">m</span>
                <span> </span>
                <span className = "home-intro-title-object">L</span>
                <span className = "home-intro-title-object">e</span>
                <span className = "home-intro-title-object">v</span>
                <span className = "home-intro-title-object">i</span>
                <span className = "home-intro-title-object">.</span>
              </span>

              {/* Mobile App Developer */}
              <span className="home-intro-title">
                <span className = "home-intro-title-object">F</span>
                <span className = "home-intro-title-object">u</span>
                <span className = "home-intro-title-object">l</span>
                <span className = "home-intro-title-object">l</span>
                <span> </span>
                <span className = "home-intro-title-object">S</span>
                <span className = "home-intro-title-object">t</span>
                <span className = "home-intro-title-object">a</span>
                <span className = "home-intro-title-object">c</span>
                <span className = "home-intro-title-object">k</span>
                <span> </span>
                <span className = "home-intro-title-object">D</span>
                <span className = "home-intro-title-object">e</span>
                <span className = "home-intro-title-object">v</span>
                <span className = "home-intro-title-object">e</span>
                <span className = "home-intro-title-object">l</span>
                <span className = "home-intro-title-object">o</span>
                <span className = "home-intro-title-object">p</span>
                <span className = "home-intro-title-object">e</span>
                <span className = "home-intro-title-object">r</span>
              </span>

              <span className="home-intro-description">App Developer / Web Developer / AI</span>

              <ColorButton variant="contained" color="primary" style={{marginTop:24}} component={Link} to={'/about'}>
              ABOUT ME
              </ColorButton>
            </div>
          </div>
          <div className="home-sub-right">
            <img src={group5} alt="Logo" id="home-img"/>
           
          </div>
      </div>
    );

  }
}



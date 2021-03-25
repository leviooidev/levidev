import React, { useState } from 'react';
import './scss/mysass.scss';
import './scss/transition.scss';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
  useRouteMatch,
  useParams,
  withRouter,
} from "react-router-dom";



import Home from './screen/Home';
import About from './screen/About';
import Skill from './screen/Skill';
import Mywork from './screen/Mywork';
import Contact from './screen/Contact';

import { ReactComponent as HomeIcon } from './assets/svg/home.svg';
import { ReactComponent as UserIcon } from './assets/svg/user.svg';
import { ReactComponent as SettingIcon } from './assets/svg/settings.svg';
import { ReactComponent as FavoriteIcon } from './assets/svg/favorites.svg';
import { ReactComponent as EnvelopeIcon } from './assets/svg/envelope.svg';
import { ReactComponent as MenuIcon } from './assets/svg/menu.svg';
import { ReactComponent as FacebookIcon } from './assets/svg/facebook.svg';
import { ReactComponent as InstagramIcon } from './assets/svg/instagram.svg';
import { ReactComponent as LinkedInIcon } from './assets/svg/linkedin.svg';

import { CSSTransition } from 'react-transition-group';

import signature from './assets/png/leviwhite.png';



export default class App extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      selectedPage:1,
      showMobileMenu:false
    }
   
 };

 changeMobileMenuState(){
  this.setState({ mobileMenu: !this.state.mobileMenu})
}



  render(){
    //let btn_menu_toggle = this.state.mobileMenu ? "navbar-mobile-menu-open" : "navbar-mobile-menu-close";
    
    return(

      <Router>
        <div className = "App">
            <header>
              <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
              <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            </header>
            <div className = "appbody">
                <div className = "navbar-desktop">

                  {/* Home Logo */}
                  <Link id = "homelogo"  to="/levidev">

                    <img src={signature} alt="signature" id="img-signature"/>
                  </Link>

                  {/* Primary Menu */}
                  <div className = "homeMainMenu">
                  
                    <div className = "menuItem">
                      <Link to="/levidev"  className="link-text" onClick={() => {this.setState({selectedPage:1})}} >
                        <div id="menuHomeContainer">
                            <HomeIcon id = "menuHomeIcon" className="menuIcon"/>
                            <span id = "menuHomeDesc">Home</span>
                          </div>
                      </Link>
                    </div>

                    <div className = "menuItem">
                      <Link to="/about"  className="link-text"  onClick={() => {this.setState({selectedPage:2})}}>
                        <div id="menuAboutContainer">
                            <UserIcon id = "menuAboutIcon" className="menuIcon"/>
                            <span id = "menuAboutDesc">About</span>
                          </div>
                      </Link>
                    </div>

                    <div className = "menuItem">
                      <Link to="/skill"  className="link-text"  onClick={() => {this.setState({selectedPage:3})}}>
                        <div id="menuSkillContainer">
                            <SettingIcon id = "menuSkillIcon" className="menuIcon"/>
                            <span id = "menuSkillDesc">Skill</span>
                          </div>
                      </Link>
                    </div>

                    <div className = "menuItem">
                      <Link to="/mywork" className="link-text"  onClick={() => {this.setState({selectedPage:4})}}>
                        <div id="menuWorkContainer">
                            <FavoriteIcon id = "menuWorkIcon" className="menuIcon"/>
                            <span id = "menuWorkDesc">Work</span>
                          </div>
                      </Link> 
                    </div>

                    <div className = "menuItem">
                      <Link to="/contact" className="link-text"  onClick={() => {this.setState({selectedPage:5})}}>
                        <div id="menuContactContainer">
                            <EnvelopeIcon id = "menuContactIcon" className="menuIcon"/>
                            <span id = "menuContactDesc">Contact</span>
                          </div>
                      </Link>
                    </div>

                  </div>

                  {/* Secondary Menu */}
                  <div className = "homeSecondaryMenu">
                        
                      <a href="https://www.facebook.com/guanlee.ooi" target="_blank">
                        <FacebookIcon id = "menuContactIcon" className="menuIcon"/>
                      </a>

                      <a href="https://www.instagram.com/gl_ooi94/" target="_blank">
                        <InstagramIcon id = "menuContactIcon" className="menuIcon"/>
                      </a>

                      <a href="https://www.linkedin.com/in/guanlee-ooi" target="_blank">
                        <LinkedInIcon id = "menuContactIcon" className="menuIcon"/>
                      </a>
                  </div>

                  
                </div>
                
                <div className="navbar-mobile">

                    <div className="navbar-mobile-bar">
                      {/* Home Logo */}
                      <Link id = "homelogo"  to="/levidev">
                        <img src={signature} alt="signature" id="img-signature-mobile"/>
                      </Link>
                      
                      <MenuIcon id = "menuHomeIcon" className="menuIcon" onClick={()=>this.setState({showMobileMenu:!this.state.showMobileMenu})}/>
                    </div>


                    <CSSTransition
                          in={this.state.showMobileMenu}
                          timeout={300}
                          classNames="alert"
                          unmountOnExit
                          onExited={() => {this.setState({showMobileMenu:false})}}>

                        <div className="navbar-mobile-menu">

                          <Link to="/levidev"  className="link-text" onClick={() => {this.setState({selectedPage:1,showMobileMenu:false})}} >
                            <HomeIcon id = "menuHomeIcon" className="menuIcon"/>
                          </Link>

                          <Link to="/about"  className="link-text"  onClick={() => {this.setState({selectedPage:2,showMobileMenu:false})}}>
                            <UserIcon id = "menuAboutIcon" className="menuIcon"/>
                          </Link>

                          <Link to="/skill"  className="link-text"  onClick={() => {this.setState({selectedPage:3,showMobileMenu:false})}}>   
                            <SettingIcon id = "menuSkillIcon" className="menuIcon"/>
                          </Link>

                          <Link to="/mywork" className="link-text"  onClick={() => {this.setState({selectedPage:4,showMobileMenu:false})}}>
                            <FavoriteIcon id = "menuWorkIcon" className="menuIcon"/>
                          </Link> 

                          <Link to="/contact" className="link-text"  onClick={() => {this.setState({selectedPage:5,showMobileMenu:false})}}>
                            <EnvelopeIcon id = "menuContactIcon" className="menuIcon"/>
                          </Link>

                        </div>

                    </CSSTransition>

                </div>
                
                <Switch >
                  <Route exact path="/levidev">
                    <Home/> 
                  </Route>
                  <Route path="/about">
                    <About/>
                  </Route>
                  <Route path="/skill">
                    <Skill/>
                  </Route>
                  <Route path="/mywork">
                    <Mywork/>
                  </Route>
                  <Route path="/contact">
                    <Contact/>
                  </Route>
                </Switch>

            </div>
            
        </div>
        

      </Router>
    );

  }
}







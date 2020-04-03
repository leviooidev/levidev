import React from 'react';
import '../scss/about.scss';
import { ReactComponent as CircleIcon } from '../assets/svg/circle.svg';
import { Timeline } from 'rsuite';

export default class About extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      // Home = 1, About = 2, Skill = 3, My Work = 4, Contact = 5
      hoveredMenu:1, 
      selectedMenu: 1,
       
    }

    //this.state = { penguinController: new PenguinController() };

 };
  render(){
    
    return(
      <div className="about">
          <div className="about-sub-left">
            <div className = "about-intro">
              <span className = "about-intro-title">
                <span className="about-intro-title-object">A</span>
                <span className="about-intro-title-object">b</span>
                <span className="about-intro-title-object">o</span>
                <span className="about-intro-title-object">u</span>
                <span className="about-intro-title-object">t</span>
                <span> </span>
                <span className="about-intro-title-object">M</span>
                <span className="about-intro-title-object">e</span>
              </span>
              <br/>
              <span className = "about-intro-description">
                My name is GuanLee, and you can call me … Levi. <br/>
                Skilled Artificial Intelligence graduate with 
                2 years of software development experience.
                Provide high quality development service
                have good analytical skill and problem solving 
                abilities with great attention to details and overall
                product quality. <br/>
                Fan of NBA, basketball lover, Monster Hunter.<br/>
                Always aim for work life balance environment. 
              
              </span>
            </div>
          </div>

          
          <div className="about-sub-right">

            <div className = "timeline-card c1">

              <div className = "timeline">
                <CircleIcon className="circle-icon" style={{fill:"#5EB3B6"}}/>
                <div className = "vertical-line"/>
                
              </div>

              <div className = "timeline-detail">
                <span className = "timeline-detail-lbl" >
                  March 2018 - Current
                </span>

                <span className = "timeline-detail-desc">
                  As Mobile App Developer in XendNow Sdn Bhd
                </span>
              </div>
            </div>

            <div className = "timeline-card c2">

            <div className = "timeline">
              <CircleIcon className="circle-icon" style={{fill:"#2F4858"}}/>
              <div className = "vertical-line"/>
              
            </div>

            <div className = "timeline-detail ">
              <span className = "timeline-detail-lbl"  >
                November 2018
              </span>

              <span className = "timeline-detail-desc">
                Graduated from University Teknikal Malaysia Melaka <br/>
                Bachelor of Computer Science (Artificial Intelligence)
              </span>
            </div>
            </div>

            <div className = "timeline-card c3">

            <div className = "timeline">
              <CircleIcon className="circle-icon" style={{fill:"#2F4858"}}/>  
            </div>

            <div className = "timeline-detail">
              <span className = "timeline-detail-lbl">
                September 2017 - February 2018
              </span>

              <span className = "timeline-detail-desc" >
                Internship in MCSB System, Penang.<br/>
                As system support.
              </span>
            </div>
        </div>



          </div>
      </div>
    );

  }
}




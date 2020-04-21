import React from 'react';
import '../scss/skill.scss';
import CountUp from 'react-countup';

export default class Skill extends React.Component {
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
      <div className="skill">
          <div className="skill-sub-left">
            <div className = "skill-intro">
              <span className="skill-intro-title">
                <span className="skill-intro-title-object">S</span>
                <span className="skill-intro-title-object">k</span>
                <span className="skill-intro-title-object">i</span>
                <span className="skill-intro-title-object">l</span>
                <span className="skill-intro-title-object">l</span>
                <span> </span>
                <span className="skill-intro-title-object">&#38;</span>
                 <br/>
                <span className="skill-intro-title-object">E</span>
                <span className="skill-intro-title-object">x</span>
                <span className="skill-intro-title-object">p</span>
                <span className="skill-intro-title-object">e</span>
                <span className="skill-intro-title-object">r</span>
                <span className="skill-intro-title-object">i</span>
                <span className="skill-intro-title-object">e</span>
                <span className="skill-intro-title-object">n</span>
                <span className="skill-intro-title-object">c</span>
                <span className="skill-intro-title-object">e</span>
              </span>
              <br/>
              <span className="skill-intro-description">
                The main area i expertise is mobile app development (Android &#38; iOS) <br/>
                Experienced in React Web App (PWA), React Router and Redux, for building small and medium web app.<br/>
                I also have full stack developer experience with AWS, WordPress, PHP, Firebase, MongoDB, Tensorflow.
              </span>
              
            </div>
          </div>
          <div className="skill-sub-right">

            <div className = "skill-bar">   
              <div className = "skill-bar-title">
                <span className = "skill-bar-title-text">Android</span>
              </div>
              <div className="skill-bar-positive sbp1"> </div>
              {/* This include the percentage text inside */}
              <div className = "skill-bar-negative sbn1" >
                <span className = "skill-bar-negative-text"><CountUp end={80} />%</span>
              </div>
            </div>

            <div className = "skill-bar">   
              <div className = "skill-bar-title">
                <span className = "skill-bar-title-text">Flutter</span>
              </div>
              <div className="skill-bar-positive sbp2" />
              {/* This include the percentage text inside */}
              <div className = "skill-bar-negative sbn2" >
                <span className = "skill-bar-negative-text"><CountUp end={50} />%</span>
              </div>
            </div>

            <div className = "skill-bar">   
              <div className = "skill-bar-title">
                <span className = "skill-bar-title-text">React Native</span>
              </div>
              <div className="skill-bar-positive sbp3"/>
              {/* This include the percentage text inside */}
              <div className = "skill-bar-negative sbn3">
                <span className = "skill-bar-negative-text"><CountUp end={60} />%</span>
              </div>
            </div>

            <div className = "skill-bar">   
              <div className = "skill-bar-title">
                <span className = "skill-bar-title-text">ReactJS</span>
              </div>
              <div className="skill-bar-positive sbp4"/>
              {/* This include the percentage text inside */}
              <div className = "skill-bar-negative sbn4">
                <span className = "skill-bar-negative-text"><CountUp end={70} />%</span>
              </div>
            </div>

            <div className = "skill-bar">   
              <div className = "skill-bar-title">
                <span className = "skill-bar-title-text">Javascript</span>
              </div>
              <div className="skill-bar-positive sbp5" />
              {/* This include the percentage text inside */}
              <div className = "skill-bar-negative sbn5">
                <span className = "skill-bar-negative-text"><CountUp end={70} />%</span>
              </div>
            </div>

            <div className = "skill-bar">   
              <div className = "skill-bar-title">
                <span className = "skill-bar-title-text">PHP</span>
              </div>
              <div className="skill-bar-positive sbp6" />
              {/* This include the percentage text inside */}
              <div className = "skill-bar-negative sbn6">
                <span className = "skill-bar-negative-text"><CountUp end={60} />%</span>
              </div>
            </div>

            <div className = "skill-bar">   
              <div className = "skill-bar-title">
                <span className = "skill-bar-title-text">Python</span>
              </div>
              <div className="skill-bar-positive sbp7" />
              {/* This include the percentage text inside */}
              <div className = "skill-bar-negative sbn7" >
                <span className = "skill-bar-negative-text"><CountUp end={50} />%</span>
              </div>
            </div>

            <div className = "skill-bar">   
              <div className = "skill-bar-title">
                <span className = "skill-bar-title-text">MySQL</span>
              </div>
              <div className="skill-bar-positive sbp8" />
              {/* This include the percentage text inside */}
              <div className = "skill-bar-negative sbn8" >
                <span className = "skill-bar-negative-text"><CountUp end={70} />%</span>
              </div>
            </div>

            <div className = "skill-bar">   
              <div className = "skill-bar-title">
                <span className = "skill-bar-title-text">Node.js</span>
              </div>
              <div className="skill-bar-positive sbp9" />
              {/* This include the percentage text inside */}
              <div className = "skill-bar-negative sbn9" >
                <span className = "skill-bar-negative-text"><CountUp end={60} />%</span>
              </div>
            </div>

            
            
          </div>
      </div>
    );

  }
}




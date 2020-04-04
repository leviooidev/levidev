import React from 'react';
import '../scss/mywork.scss';
import logoLook4U from '../assets/png/mywork/look4u-logo.png';
import Paper from '@material-ui/core/Paper';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';


const users = [
  {
      id: 1,
      name: 'Look4U Beauty',
      description: 'Responsive Landing Page, build by WordPress.',
      long_desciption:"A website ",
      logo: require('../assets/png/mywork/look4u-logo.png'),
      link:'https://look4ubeauty.com/',
      image: require('../assets/png/mywork/look4u-sc.png')
  },
  {
    id: 2,
    name: 'Android Object Detection',
    description: 'Machine Learning by Tensorflow and Android Studio',
    long_desciption:"A website ",
    logo: require('../assets/png/mywork/tsf-logo.png'),
    link:'',
    image: require('../assets/png/mywork/tsf-sc.png')
},





];





export default class Mywork extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      backdropOpen:false,
      name:"",
      description:"",
      long_description:"",
      logo:"",
      link:"",
      image:""
    }
   
 };

  openBackdrop = (vName,vDescription,vLongDescription,vLogo,vLink,vImage) => {
    this.setState({
      backdropOpen:true,
      name:vName,
      description: vDescription,
      long_description: vLongDescription,
      logo: vLogo,
      link: vLink,
      image:vImage
    })
  }
  closeBackdrop = () => {
    this.setState({backdropOpen:false})
  }

  
  WordList = () => (
    
    <ul style={{listStyleType:"none"}} className = "mywork-container-row">
        {users.map(user => (
            <li key={user.id} className = "mywork-item">
              
                <Paper className = "mywork-card" onClick = {()=>{
                  this.openBackdrop(user.name,user.description,user.long_description,user.logo,user.link,user.image)
                  }} >
                  
                  <img src={user.logo} alt="logo" className ="img-logo"/>
                  
                </Paper>
              
              
              <span className="cv-title">{user.name}</span>
              <span className="cv-desc">{user.description}</span>
            </li>
            
        ))}

        
    </ul>
    
  
  );
  
  render(){

    
    return(


        <div className = "mywork">

            <this.WordList/>

            <Backdrop style={{zIndex : 1,padding:"16px"}} open={this.state.backdropOpen} onClick={this.closeBackdrop}>
              <div className ="bd-container">

                  <img src={this.state.image} alt="logo" className="img-bd"/>
        
              </div>
            </Backdrop>
            
        </div>
        

    );

  }
}






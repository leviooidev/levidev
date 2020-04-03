import React from 'react';
import '../scss/contact.scss';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import emailjs from 'emailjs-com';


export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      // Home = 1, About = 2, Skill = 3, My Work = 4, Contact = 5
      hoveredMenu:1, 
      selectedMenu: 1,
      vEmailReplyTo:"",
      vEmailFromName:"",
      vEmailToName:"Levi",
      vEmailToTitle:"",
      vEmailToMessage:"",
      dialogState:false,
      successSnackbarState:false,
      errorSnackbarState:false,
      vErrorMessage:""
       
    }

    //this.state = { penguinController: new PenguinController() };

 };

 submitRequest = () =>{
  

    if(this.state.vEmailFromName.length === 0){
      this.setState({
        vErrorMessage:"Please insert name",
        errorSnackbarState:true
      })
    }
    else if (this.state.vEmailReplyTo.length === 0){
      this.setState({
        vErrorMessage:"Please insert email",
        errorSnackbarState:true
      })
    }
    else if (this.state.vEmailToTitle.length === 0){
      this.setState({
        vErrorMessage:"Please insert title",
        errorSnackbarState:true
      })
    }
    else if (this.state.vEmailToMessage.length === 0){
      this.setState({
        vErrorMessage:"Please insert message",
        errorSnackbarState:true
      })
      }
    else{
      this.setState({
        dialogState:true
      })
      
    }
   
 }

 sendEmailRequest = () => {

  var service_id = "default_service";
  var template_id ="template_r7umufzX";

  var template_params = {
    "reply_to": "reply_to_value",
    "from_name": "from_name_value",
    "to_name": "to_name_value",
    "message_html": "message_html_value"
  };

  template_params["reply_to"] = this.state.vEmailReplyTo;
  template_params["from_name"] = this.state.vEmailFromName;
  template_params["to_name"] = this.state.vEmailToName;
  template_params["message_html"] = this.state.vEmailToTitle + " " +this.state.vEmailToMessage ;

  emailjs.send(service_id, template_id, template_params,'user_HdNNZxHvJJHkPCp4UE01N');

   this.setState({
    dialogState:false,
    successSnackbarState:true,
    vEmailReplyTo:"",
    vEmailFromName:"",
    vEmailToName:"Levi",
    vEmailToTitle:"",
    vEmailToMessage:"",
   })

 }

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
      <div className="contact">
          <div className="contact-sub-left">
            <div className = "contact-intro">
              <span className = "contact-intro-title">
                <span className = "contact-intro-title-object">C</span>
                <span className = "contact-intro-title-object">o</span>
                <span className = "contact-intro-title-object">n</span>
                <span className = "contact-intro-title-object">t</span>
                <span className = "contact-intro-title-object">a</span>
                <span className = "contact-intro-title-object">c</span>
                <span className = "contact-intro-title-object">t</span>
                <span> </span>
                <span className = "contact-intro-title-object">M</span>
                <span className = "contact-intro-title-object">e</span>
              </span>
              <br/>
              <span className="contact-intro-description">I'm available
              for freelance hire opportunity, especially for ambitious project.
              Don't hesitate to contact me using below form below.

              </span>
              
              <div className = "form-contact">
                <div className = "form-row">

                  <div className = "tfinput-container" style={{marginRight:"16px"}}>
                    <TextField 
                      id="input-name" 
                      label="Name" 
                      variant="outlined" 
                      className="tfinput"  
                      style={{width:"100%"}}
                      value={this.state.vEmailFromName}
                      onChange={event => {
                        const { value } = event.target;
                          this.setState({vEmailFromName: value });
                      }}
                      />
                  </div>

                  <div className = "tfinput-container" >

                    <TextField 
                      id="input-email" 
                      label="Email" 
                      variant="outlined" 
                      className="tfinput"  
                      style={{width:"100%"}}
                      value={this.state.vEmailReplyTo}
                      onChange={event => {
                        const { value } = event.target;
                          this.setState({vEmailReplyTo: value });
                      }}
                      />

                  </div>

                </div>

                <div className = "form-row">
                <div className = "tfinput-container" >
                  <TextField 
                    id="input-title" 
                    label="TItle" 
                    variant="outlined" 
                    className="tfinput" 
                    style={{width:"100%"}}
                    value={this.state.vEmailToTitle}
                    onChange={event => {
                      const { value } = event.target;
                        this.setState({vEmailToTitle: value });
                    }}
                  />
                  </div>
                </div>
                <div className = "form-row">
                    <TextField
                    id="outlined-textarea"
                    label="Message"
                    placeholder="Message"
                    multiline
                    variant="outlined"
                    style={{width:"100%"}}
                    value={this.state.vEmailToMessage}
                    onChange={event => {
                      const { value } = event.target;
                        this.setState({vEmailToMessage: value });
                    }}
                  />
                </div>
                <div className = "form-row">
                    <ColorButton variant="contained" color="primary" style={{alignSelf:"flex-end"}} onClick={()=>this.submitRequest()} >
                    SEND
                  </ColorButton>
              </div>
              </div>
            </div>
          </div>
          <div className="contact-sub-right">
          <iframe width="100%" height="100%" id="gmap_canvas" 
            src="https://maps.google.com/maps?q=taman%20pasir%20emas%20jaya&t=&z=17&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">

          </iframe>
          </div>
          <Dialog open={this.state.dialogState} >
                    <DialogTitle>Are you sure?</DialogTitle>
                    <DialogContent>Send the email and i'll get in touch.</DialogContent>
                    <DialogActions>
                    <Button onClick={()=>this.setState({dialogState:false})} color="primary">
                    Erm...
                    </Button>
                    <Button onClick={()=>this.sendEmailRequest()} color="primary" autoFocus>
                    Yes
                   </Button>
              </DialogActions>
              </Dialog>
          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            open={this.state.successSnackbarState}
            onClose={() => this.setState({successSnackbarState: false})}
            autoHideDuration={3000}
            message={<span>Email Sent Successfully!</span>}
          >
          </Snackbar>
          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            open={this.state.errorSnackbarState}
            onClose={() => this.setState({errorSnackbarState: false})}
            autoHideDuration={3000}
          message={<span>{this.state.vErrorMessage}</span>}
          >
          </Snackbar>
          
      </div>
    );

  }
}




import React from 'react';
import {Dialog, DialogContent, DialogContentText, DialogTitle, TextField, Grid, Button} from '@material-ui/core'
import styled from 'styled-components';
import { connect } from "react-redux";
import { registerUser } from "../actions/authActions";
import { loginUser } from "../actions/authActions";
import classnames from "classnames";


class LoginModal extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            open: false,
            login: true,
            purpose: "Login",
            otherPurpose: "Register",
            description: "Please login to your account or go to 'Register' to create an account.",
            name: "",
            email: "",
            password: "",
            password2: "",
            errors: {}
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
          this.setState({
            errors: nextProps.errors
          });
        }
      }

    componentDidUpdate(prevProps) {
        if (this.props.modalOpen !== prevProps.modalOpen) {
            if (this.props.modalOpen) {
                this.handleOpen()
            }
         }
    }

    handleOpen = () => {
        this.setState({open: true})
    }
    
    handleClose = () => {
        this.setState({open: false})
        this.props.toggleBack()
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value })
    }

    switchPurpose = () => {
        if (this.state.purpose === "Login") {
            this.setState({
                login: false,
                purpose: "Register", 
                otherPurpose: "Login",
                description: "Choose an email and password to create an account.",
                errors: {}
            })
        } else {
            this.setState({
                login: true,
                purpose: "Login", 
                otherPurpose: "Register", 
                description: "Please login to your account or go to 'Register' to create an account.",
                errors: {}
            })
        }

    }

    onSubmit = () => {
        if (!this.state.login) {
            const newUser = {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
                password2: this.state.password2
              };
            this.props.registerUser(newUser, this.handleClose); 
        } else {
            const newUser = {
                email: this.state.email,
                password: this.state.password,
              };
              this.props.loginUser(newUser, this.handleClose);
        }
        
    }

    render() {
        const { errors } = this.state;
        return (
            <div>
                {/* <Button variant="outlined" color="primary" onClick={this.handleOpen}>
                Open Modal
                </Button> */}
                <Dialog
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={this.state.open}
                onClose={this.handleClose}>
                    <DialogTitle id="form-dialog-title">{this.state.purpose}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            <span>{this.state.description}</span>
                        </DialogContentText>

                        {(!this.state.login) && 
                        <div>
                        <StyledTextField 
                            id="name" 
                            type="text" 
                            label="Name" 
                            value={this.state.name} 
                            onChange={this.onChange} 
                            error={errors.name}
                            className={classnames("", {invalid: errors.name})}/>
                        <span className="red-text">{errors.name}</span>
                        </div>}
                        <StyledTextField 
                            id="email" 
                            label="E-mail" 
                            type="email" 
                            value={this.state.email} 
                            onChange={this.onChange} 
                            error={errors.email} 
                            color="primary"/>
                        <StyledTextField 
                            id="password" 
                            label="Password" 
                            type="password" 
                            value={this.state.password} 
                            onChange={this.onChange} 
                            error={errors.password}/>
                        {(!this.state.login) && 
                        <StyledTextField 
                            id="password2" 
                            label="Confirm password" 
                            type="password" 
                            value={this.state.password2} 
                            onChange={this.onChange} 
                            error={errors.password2}/>}


                    </DialogContent>
                    <Grid container justify="space-between" >
                        <Grid item><Button style={{margin: '25px'}} color="primary" onClick={this.switchPurpose}>{this.state.otherPurpose}</Button></Grid>
                        <Grid item><Button style={{margin: '25px'}} variant="contained" color="primary" onClick={this.onSubmit}>{this.state.purpose}</Button></Grid>
                    </Grid>
                </Dialog>
            </div>
        )

    }

}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });

export default connect(
    mapStateToProps,
    { registerUser, loginUser }
)(LoginModal);

const StyledTextField = styled(TextField)`
    width: 100%;
    padding: 15px 15px 15px 0px;
    margin-top: 25px;

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:active,
    input:-webkit-autofill:focus {
        -webkit-box-shadow: 0 0 0 1000px white inset !important;
        -webkit-text-fill-color: #555555 !important;
    }
`



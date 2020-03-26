import React from 'react';
import styled from 'styled-components';
import {CardContent, Avatar, Grid, TextField, Button, Paper, Snackbar} from '@material-ui/core/';
import MuiAlert from "@material-ui/lab/Alert";
import { newPost } from '../api/posts';
import {connect} from 'react-redux'
import {NEW_POST} from '../actions/types'
import isEmpty from 'is-empty';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

class NewPost extends React.Component {

    constructor(props) {
        super(props)

        const {user} = props.auth

        this.state = {
            value: '',
            open: false,
            name: (isEmpty(user)) ? "" : user.name,
            user_id: (isEmpty(user)) ? "" : user.id
        }
        
        this.handleChange = this.handleChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.setOpen = this.setOpen.bind(this)
        this.handleClose = this.handleClose.bind(this)
    }

    setOpen(boolean) {
        this.setState({open: boolean})
    }
    
    handleClose(event, reason) {
        this.setOpen(false);
      };

    handleChange(event) {
        this.setState({value: event.target.value})
    }

     onSubmit() {
        const { user } = this.props.auth;
        if (isEmpty(user)) {
            this.setOpen(true)
        } else {
            console.log(this.state.name)
            newPost(this.state.value, this.state.name, this.state.user_id)
            .then(newPost => {
                this.props.dispatch({type: NEW_POST, newPost})
                this.setState({
                    value: ''
                })
                }   
            )
        }  
    }

    render() {

        return (
            <PostCard>
                <CardContent>
                    <Poster container spacing={5}>
                        <Grid item>
                            <StyledAvatar color={"orange"}>{this.state.name[0]}</StyledAvatar>
                        </Grid>
                        <Grid item style={{width: '80%'}}>
                            <TextField
                                style={{ margin: 8, paddingTop: 20}}
                                placeholder="What's on your mind?"
                                fullWidth
                                margin="normal"
                                onChange={this.handleChange}
                                value={this.state.value}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                />
                        </Grid>
                        <Grid item>
                            <Button variant="contained" color="primary" onClick={this.onSubmit}>Post</Button>
                        </Grid>
                    </Poster>
                    </CardContent>

                    <Snackbar 
                        anchorOrigin={{ vertical: "top", horizontal: "center" }}
                        key={`top, center`}
                        open={this.state.open} 
                        autoHideDuration={4000} 
                        onClose={this.handleClose}
                        >
                        <Alert onClose={this.handleClose} severity="error">
                        You must log in to post to the messageboard.
                        </Alert>
                    </Snackbar>
            </PostCard>
        );
    }

}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps)(NewPost);

const PostCard = styled(Paper)`
    min-width: 275px;
    max-width: 1312px;
    min-height: 125px;
    margin: 20px;
`
const StyledAvatar = styled(Avatar)`
    background-color: ${props => props.color}
`
const Poster = styled(Grid)`
    padding-bottom: 10px;
`


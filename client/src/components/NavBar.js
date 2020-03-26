import React, {useState} from 'react';
import {connect} from 'react-redux'
import {AppBar, Typography, Toolbar, Button, IconButton, Avatar, Menu, MenuItem} from '@material-ui/core/';
import LoginModal from './LoginModal'
import {logoutUser} from '../actions/authActions'
import isEmpty from 'is-empty'

function NavBar(props) {

    const [toggleModal, setToggleModal] = useState(false)
    // const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleMenu = event => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const onLogoutClick = () => {
      props.logoutUser();
    }

    const exitModal = () => {
      setToggleModal(false);
      handleClose();
    }

    const { user } = props.auth;
    console.log("USER", user)
  
    return (
      <div styles={{flexGrow: 1}}>
        {console.log("ANCHOR", anchorEl)}
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" style={{flexGrow: 1}}>
              MessageBoard
            </Typography>
                
            {(isEmpty(user)) ? 
            (<Button color="inherit" onClick={() => setToggleModal(true)}>Login</Button>) :
            (<div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <Avatar style={{backgroundColor: 'orange'}}>{user.name[0]}</Avatar>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem>Profile</MenuItem>
                <MenuItem onClick={onLogoutClick}>Log Out</MenuItem>
              </Menu>
            </div>)
          }
          <LoginModal modalOpen={toggleModal} toggleBack={exitModal}/>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
  
  const mapStateToProps = state => ({
    auth: state.auth
  });
  export default connect(
    mapStateToProps,
    { logoutUser }
  )(NavBar);
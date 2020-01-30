import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { createStyles, withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { Redirect } from 'react-router-dom';

const styles = (theme => createStyles({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const ONLY_VALID_USERNAME = "admin";

class LogIn extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      usernameValue: '',
      isAuthenticated: false,
    }
  }

  authenticate(){
    if(this.state.usernameValue == ONLY_VALID_USERNAME){
      this.setState({isAuthenticated: true});
    }else{
      this.setState({isAuthenticated: false});
    }
  }

  render(){
    const { classes } = this.props;

    if(this.state.isAuthenticated){
      return <Redirect to="/home"/>
    }
    
    return (
      <Grid container direction="row" alignItems="center" justify="center" style={{minHeight: '90vh'}} maxWidth="sm">
        <Grid item className={classes.paper} xs={10}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h5">
            Log In
          </Typography>
          <form noValidate>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(event) => this.setState({usernameValue: event.target.value })}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="admin"
            />
        
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={()=> this.authenticate()}
              className={classes.submit}
            >
              Log In
            </Button>
          </form>
        </Grid>
      </Grid>  
    );
  }
}

export default withStyles(styles)(LogIn);
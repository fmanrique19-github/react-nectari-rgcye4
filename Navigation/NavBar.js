import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { createStyles, withStyles } from '@material-ui/core/styles';

const styles = (theme => createStyles({
  appBar: {
      zIndex: theme.zIndex.drawer + 1,
      backgroundColor: theme.palette.secondary.main,
  },
  grow: {
    flexGrow: 1,
  }
}));

class NavBar extends React.Component{
  render(){
    const {classes} = this.props;

    return(
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography className={classes.grow} variant="h6">Magic Photos</Typography>
          <Typography noWrap variant="h6">User: Admin</Typography>
        </Toolbar>
      </AppBar>
    )
  }
}

export default withStyles(styles)(NavBar);
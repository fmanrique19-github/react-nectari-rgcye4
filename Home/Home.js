import React from "react";
import Grid from '@material-ui/core/Grid';
import { createStyles, withStyles } from '@material-ui/core/styles';
import Albums from './Albums';
import Pictures from './Pictures';
import NavBar from '../Navigation/NavBar';

const styles = (theme => createStyles({
  root: {
    flexGrow: 1,
  },
  toolbar: theme.mixins.toolbar,
  container:{
    horizontalPadding: theme.spacing(1),
  }
}));

class Home extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      currentAlbum: null,
    }
  }

  selectAlbum(album){
    this.setState({
      currentAlbum: album,
    })
  }

  render(){
    const {classes} = this.props;
    const {currentAlbum} = this.state;

    return(
      <div className={classes.root}>
        <NavBar/>
        <div className={classes.toolbar} />
        <Grid container className={classes.container} spacing={3}>
          <Albums selectAlbum={(album) => this.selectAlbum(album)}/>
          {!!currentAlbum &&
            <Pictures currentAlbum={currentAlbum}/>
          }
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(Home);
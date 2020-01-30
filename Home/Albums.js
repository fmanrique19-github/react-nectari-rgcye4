import React from "react";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import { createStyles, withStyles } from '@material-ui/core/styles';
import SpinningLoader from './SpinningLoader';

const ALBUMS_URL = 'https://jsonplaceholder.typicode.com/albums';

const styles = (theme => createStyles({
  subContainer: {
    padding: theme.spacing(5),
  },
  loading: {
    padding: theme.spacing(5),
  },
  paperItem: {
    borderRadius: 0,
  },
}));

class Albums extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      isLoading: true,
      error: false,
      albums: [],
    }
  }

  componentDidMount(){
    fetch(ALBUMS_URL)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          isLoading: false,
          albums: data,
        })
      })
      .catch((error) => {
          this.setState({
          isLoading: false,
          error: true,
        })
      });
  }

  selectAlbum(album){
    this.props.selectAlbum(album);
  }

  render(){
    const {classes} = this.props;
    const {isLoading, error, albums} = this.state;

    return(
      <Grid className={classes.subContainer} item xs={6}>
        <Paper className={classes.paperItem}>
          <Typography style={{padding: 10}} align="center" variant="h6">Albums</Typography>
        </Paper> 
        <SpinningLoader isLoading={isLoading}/>
      <List>
        {!isLoading && !error && albums.map(album => (
            <Paper key={album.id} className={classes.paperItem}>
              <ListItem 
                key={`${album.id}`} 
                button
                onClick={() => this.selectAlbum(album)}
              >
                <ListItemText noWrap primary={`${album.title}`}/>
              </ListItem>
            </Paper>
          ))}
        </List>
      </Grid>
    )
  }
}

Albums.propTypes = {
  selectAlbum: PropTypes.func.isRequired,
}

export default withStyles(styles)(Albums);
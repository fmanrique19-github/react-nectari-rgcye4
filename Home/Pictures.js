import React from "react";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import { createStyles, withStyles } from '@material-ui/core/styles';
import Album from './Album';
import SpinningLoader from './SpinningLoader';
import PictureItem from './PictureItem';

const PICTURES_URL = 'https://jsonplaceholder.typicode.com/photos';

const styles = (theme => createStyles({
  subContainer: {
    padding: theme.spacing(5),
  },
}));

class Pictures extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      isLoading: false,
      error: false,
      pictures: [],
    }
  }

   componentDidMount(){
    this.fetchPictures(this.props.currentAlbum);
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentAlbum.id !== prevProps.currentAlbum.id) {
      this.fetchPictures(this.props.currentAlbum);
    }
  }

   fetchPictures(currentAlbum){
    this.setState({
      isLoading: true,
      error: false
    });
    
    const queryParam = `?albumId=${currentAlbum.id}`;
    fetch(PICTURES_URL + queryParam)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          isLoading: false,
          pictures: data,
        })
      })
      .catch((error) => {
          this.setState({
          isLoading: false,
          error: true,
        })
      });
  }

  render(){
    const {classes, currentAlbum} = this.props;
    const {isLoading, error, pictures} = this.state;

    return(
      <Grid className={classes.subContainer} item xs={6}>
        <Paper className={classes.paperItem}>
          <Typography style={{padding: 10}} noWrap align="center" variant="h6">{`Album Photos ${currentAlbum.title}`}</Typography>
        </Paper> 
        <SpinningLoader isLoading={isLoading}/>

        <List>
        {!isLoading && !error && pictures.map(picture => (
          <PictureItem key={picture.id} picture={picture}/>
        ))}
        </List>
      </Grid>
    )
  }
}

Pictures.propTypes = {
  currentAlbum: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
  }).isRequired, 
}

export default withStyles(styles)(Pictures);
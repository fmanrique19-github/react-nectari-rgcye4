import React from "react";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
import PropTypes from 'prop-types';
import { createStyles, withStyles } from '@material-ui/core/styles';

const styles = (theme => createStyles({
  paperItem: {
    borderRadius: 0,
  },
  buttonImage: {
    width: 120, 
    height: 120,
    [theme.breakpoints.down('xs')]: {
      width: 50, 
      height: 50,
    },
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  paperPhotoContent: {
    padding: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center'
    },
  },
  title: {
    display: 'flex',
    justify: 'center',
    padding: theme.spacing(2)
  }
}));

class PictureItem extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      isLoading: true,
      error: false,
      pictures: [],
    }
  }
  render(){
    const {classes, picture} = this.props;

    return(
      <Paper className={classes.paperItem}>
        <Grid container className={classes.paperPhotoContent}>
          <Grid item spacing={6}>
            <ButtonBase className={classes.buttonImage}>
              <img className={classes.img} src={picture.thumbnailUrl} />
            </ButtonBase>
          </Grid>
          <Grid item container md={8}>
            <Typography className={classes.title} variant="subtitle1">
              {picture.title}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    )
  }
}

PictureItem.propTypes = {
  picture: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    url: PropTypes.string,
    thumbnailUrl: PropTypes.string,
  }).isRequired, 
}

export default withStyles(styles)(PictureItem);
import React from "react";
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import { createStyles, withStyles } from '@material-ui/core/styles';

const styles = (theme => createStyles({
    loading: {
    padding: theme.spacing(5),
  },
}));

class SpinningLoader extends React.Component{
  render(){
    const {classes, isLoading} = this.props;

      if(isLoading) 
        return (
          <Grid container className={classes.loading} justify="center"    alignItems="center" direction="row">
            <CircularProgress />
          </Grid>)

        return <div/>;
  }
}

SpinningLoader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
}

export default withStyles(styles)(SpinningLoader);
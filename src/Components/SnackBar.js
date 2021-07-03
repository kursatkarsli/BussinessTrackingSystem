import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import { deactivateSnackBar } from '../Redux/actions';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
} ) );

function SnackBar ( { snackbar, deactivateSnackBar } )
{
    const classes = useStyles();
    const {isOpen, isError, message} = snackbar

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        deactivateSnackBar();
    };

  return (
   <div className={classes.root}>
      <Snackbar open={isOpen} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={isError ? "error" : "success"}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}
const mapStateToProps = state => ( {
   snackbar: state.snackbar
})
const mapDispatchToProps = dispatch => ( {
    deactivateSnackBar: () => dispatch(deactivateSnackBar())
})
export default connect(mapStateToProps, mapDispatchToProps)(SnackBar);
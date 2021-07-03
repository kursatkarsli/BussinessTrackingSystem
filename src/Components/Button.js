import React from "react"
import { Button } from "@material-ui/core"
import {deleteTask, rejectTask, completeTask} from "../Data/Fetch"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux";
import { activateSnackBar } from "../Redux/actions";

function StyledButton ({location, history, id, type, disabled, activateSnackBar})
{
    async function handleClick()
    {
        let result;
        result = type === "Delete" ? await deleteTask( id ) : ( type === "Reject" ? await rejectTask( id ) : await completeTask( id ) )
        let message = type==="Delete" ? "Task deleted!" : (type==="Reject" ? "Task Rejected!" : "Task Completed!")
        
        if ( result ) {
            let snackbar = {isError:false, message}
            activateSnackBar( snackbar)
            if ( location.pathname.includes("/details") ) {
                history.push("/")
            }
        }
    
    
    }
    return (
        <Button size="small" color="primary" variant="outlined" onClick={ handleClick } disabled={disabled}>
            {type}
        </Button>
    )
    
}
const mapDispatchToProps = dispatch => ( {
    activateSnackBar: ({...snackbar}) => dispatch(activateSnackBar({...snackbar}))
})

export default connect(null, mapDispatchToProps)(withRouter(StyledButton))
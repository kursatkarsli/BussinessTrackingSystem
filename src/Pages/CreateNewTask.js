import { Grid, Box } from "@material-ui/core"
import NewTask from "../Components/CreateTask";

function CreateNewTask() {
    return (
        <Box m={5}>
            <Grid container>
                <Grid item xs={12}>
                    <NewTask/>
                </Grid>
            </Grid >
        </Box>

    );
}

export default CreateNewTask;
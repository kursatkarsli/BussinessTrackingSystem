import TaskCard from "../Components/TaskCard";
import { Grid, Box } from "@material-ui/core"
import React,{ useEffect, useState } from "react";
import { getAllTasks } from "../Data/Fetch";

    
function AllTasks ()
{
    const [ tasks, setTasks ] = useState( [] );
    
    useEffect( () => {
        async function fetchData() {
            const result = await getAllTasks()
            if (result) {
                setTasks([...result.data])
            }
        }
        fetchData();
    });
    return (
        <Box m={1}>
            <Grid container>
                <Grid item xs={ 12 }>
                    <Grid container fluid="true" justify="flex-start">
                        { tasks.map( ( task ) => (
                            <Box m={1} key={task.id}>
                            
                            <Grid  item >
                                <TaskCard task={task}/>
                            </Grid>
                            </Box>
                        ))}
                    </Grid>
                </Grid>
            </Grid >
        </Box>

    );
}

export default AllTasks;
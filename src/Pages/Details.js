import { Grid, Box } from "@material-ui/core"
import React, { useEffect, useState } from "react";
import { getTaskDetail} from "../Data/Fetch"
import { withRouter } from "react-router-dom"
import CardDetail from "../Components/CardDetail"

function Details({location})
{
    let id = location.pathname.split( "/" )[ 2 ]
    const [task, setTask] = useState({title:"", user: {}, description: "", logs:[]})
    useEffect(
        () =>
        {
            async function fetchData ()
            {
                const result = await getTaskDetail( id );
                setTask(result.data)
            }
            fetchData()
        },[id]
    )

        
        return (
            <Box m={ 5 }>
                <Grid container>
                    <Grid item xs={ 12 }>
                       <CardDetail task={ task } /> 
                    </Grid>
                </Grid >
            </Box>

        );
        };
export default withRouter(Details)
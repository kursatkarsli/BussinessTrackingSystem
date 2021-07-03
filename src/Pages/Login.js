import { FormControl, InputLabel, Input, FormHelperText , Grid, Card, Box, Button, Typography} from '@material-ui/core';
import React, { useState } from "react"
import {AssignmentTurnedIn} from "@material-ui/icons"
import {loginFetch} from "../Data/Fetch"
import { withRouter } from 'react-router-dom';

function Login({ history}) {
    const [email, setEmail] = useState("")
    
    async function handleSignIn(){
      const result =  await loginFetch(email)
        if ( result ) {
            setEmail("")
            history.push( "/" )
        }

    };
    function handleChange ( e )
    {
        setEmail(e.target.value)
    }

    return (
        <Box mt={15}>
            <Grid container justify="center" alignContent="center" > 
                <Card style={{width: "300px", height: "300px", backgroundColor: "rgba(255, 255, 255, 0.3)"}} >
                    <Box my={5} ml={6} > 
                        <Typography variant="h5" noWrap style={{ color:"#2c387e"}}>
                            <AssignmentTurnedIn  style={{ color:"#2c387e"}}/> Task Manager
                        </Typography>
                        <br />
                        <br/>
                    <FormControl>
                        <InputLabel htmlFor="my-input" style={{ color:"#2c387e"}}>Email address</InputLabel>
                        <Input id="my-input" aria-describedby="my-helper-text" value={email} style={{ color:"#2c387e"}} onChange={(e)=> handleChange(e)} />
                            <FormHelperText id="my-helper-text" style={{ color:"#2c387e"}}>We'll never share your email.</FormHelperText>
                            <br/>
                        <Button type='submit' style={{marginTop: "30px", color:"2c387e"}} variant="outlined" onClick={handleSignIn}>Login</Button>
                    </FormControl>
                </Box>
                </Card>
            </Grid> 
        </Box>
    );
}



export default withRouter(Login);
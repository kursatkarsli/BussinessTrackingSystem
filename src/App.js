import './App.css';
import React from "react"
import { Redirect, Route, Switch } from 'react-router';
import { connect } from "react-redux"

import ResponsiveDrawer from './Components/Drawer';
import AllTasks from './Pages/AllTask';
import CreateNewTask from "./Pages/CreateNewTask"
import Login from "./Pages/Login"
import Details from "./Pages/Details"
import PendingTasks from './Pages/PendingTask';
import TaskMe from './Pages/TasksMe';
import SnackBar from "./Components/SnackBar"

function App({userToken}) {
    return (
        <div style={{backgroundColor: "#f0f2f5", minHeight:"100vh", minWidth:"100vw", position: "absolute", color: "indigo"}}>
                <SnackBar/>
            
            <Switch>
                <Route path="/login" exact>
                    <Login />
                </Route>
                {
                    userToken ?
                    (<ResponsiveDrawer>
                        <Route path="/" exact>
                            <AllTasks />
                        </Route>
                        {/* <Route path="/mytasks" exact>
                            <TaskMe />
                        </Route> */}
                        {/* <Route path="/pendingtasks" exact>
                            <PendingTasks />
                        </Route> */}
                        <Route path="/newtask" exact>
                            <CreateNewTask />
                        </Route>
                        <Route path="/details/:id" exact>
                            <Details />
                        </Route>
                    </ResponsiveDrawer> ) :
                    (<Redirect to="/login"/> )  
                }
            </Switch>
        </div>

    );
}

const mapStateToProps = state => ( {
    userToken: state.userInfo.userToken
})
export default connect(mapStateToProps)(App);
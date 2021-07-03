import types from './types';

export const setUserToken = (userInfo) =>( {
        type: types.SET_USER_TOKEN,
        payload: userInfo   
})

export const setAllTasks = (task) => ({
        type: types.SET_ALL_TASKS,
        payload:task
})
export const activateSnackBar = (details) => ({
        type: types.ACTIVATE_SNACK_BAR,
        payload:details
})
export const deactivateSnackBar = () => ({
        type: types.DEACTIVATE_SNACK_BAR,

})

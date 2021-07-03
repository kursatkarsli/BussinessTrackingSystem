import axios from 'axios';
import { store } from '../Redux/store';
import { setUserToken } from '../Redux/actions';
import { activateSnackBar } from '../Redux/actions';

export const loginFetch = async (email) => {
    
    try {
   
        const response = await axios.post("http://localhost:5000/api/auth/login", { email })
        
        if (!response.message) {
            const payload = response.data.payload;

            await store.dispatch(setUserToken({ token: payload.jwtToken, id: payload.id, department: payload.department, name: payload.name }))
            
            axios.defaults.headers.common['Authorization'] =
                'Bearer ' + response.data.payload.jwtToken;

            await store.dispatch(activateSnackBar({ isError: false, message: 'Login is Succesful' }))

            return true;

        } else {

            await store.dispatch(activateSnackBar({ isError: true, message: `${response.code} ${response.message}` }));

            return null;        
        }
    }
    catch (error) {
        await store.dispatch(activateSnackBar({isError:true,message:`Invalid Email Please Check Your Email...!`}))
    }
}
export const getAllTasks = async () => {
    
    try {
        const response = await axios.get('http://localhost:5000/api/task')
        if (!response.message) {
            return {data:[...response.data.payload]}
        }
        else {
            await store.dispatch(activateSnackBar({ isError: true, message: `${response.code} ${response.message}` }))
            return null;

        }
    }
    catch (error) {
        await store.dispatch(activateSnackBar({isError:true,message:"We would not react tasks at the moment..."}))
    }
}
export const getMyTasks = async () => {
    try {
        const response = await axios.get("http://localhost:5000/api/task/my-tasks")
        if (!response.message) {
            return {data:[...response.data.payload]}
        }
        else {
            await store.dispatch(activateSnackBar({ isError: true, message: `${response.code} ${response.message}` }));
            return null;

        }
     }
    catch (error){
        await store.dispatch(activateSnackBar({isError:true,message:"We would not reach your tasks at the moment...!"}))
     }
}

export const getPendingTasks = async () => {
    try {
        const response = await axios.get("http://localhost:5000/api/task/pendings");
        if (!response.message) {
            return {data:[...response.data.payload]}
        }
        else {
            await store.dispatch(activateSnackBar({isError:true,message:`${response.code} ${response.message}`})) 
            return null;
        }
        
    } catch (error) {
        await store.dispatch(activateSnackBar({isError:true,message:'We would not reach pending tasks at the moment...!'}))
        
    }
}

export const getTaskDetail = async (id) => {
    try {
        const response = await axios.get(`http://localhost:5000/api/task/${id}`)
        if (!response.message) {
            return {data:[response.data.payload]}
        }
        else {
            await store.dispatch(activateSnackBar({ isError: true, message: `${response.code} ${response.message}` }));
            return null;

        }
    } catch (error) {
            await store.dispatch(activateSnackBar({isError:true,message:'We would not reach task details right now...!'}))
        
    }
}

export const createTask = async (title, description, department) => {
    try {
        const response = await axios.post("http://localhost:5000/api/task", { title, description, department });
        if (!response.message) {
            return true
        }
        else {
            await store.dispatch(activateSnackBar({ isError: true, message: `${response.code} ${response.message}` }))
            return null;
        }
    } catch (error) {
        await store.dispatch(activateSnackBar({isError:true,message:'We would not reach the server right now...!'}))
    }
}

export const updateTask = async (id, { task: { title, description } }) => {
    
    try {
        const response = await axios.put(`http://localhost:5000/api/task/${id}`, { title, description });
        if (!response.message) {
            return true
        }
        else {
            await store.dispatch(activateSnackBar({ isError: true, message: `${response.code} ${response.message}` }));
            return null;
        }
    } catch (error) {
        await store.dispatch(activateSnackBar({ isError: true, message: 'The server is not response right now' }));

    }
}

export const deleteTask = async (id) => {
    try {
        const response = await axios.delete(`http://localhost:5000/api/task/${id}`);
        if (!response.message) {
            return true;
        }
        else {
            await store.dispatch(activateSnackBar({ isError: true, message: `${response.code} ${response.message}` }));
            return null;
        }
    } catch (error) {
        await store.dispatch(activateSnackBar({ isError: true, message: 'We would not get response from the server' }));
    }
}

export const completeTask = async (id) => {
    
    try {
        const response = await axios.get(`http://localhost:5000/api/task/complate/${id}`);
        if (!response.message) {
            return true;
        }
        else {
            await store.dispatch(activateSnackBar({ isError: true, message: `${response.code} ${response.message}` }));
            return null;
        }
    } catch (error) {
        await store.dispatch(activateSnackBar({ isError: true, message: "We would not reach the server right now...!" }));

    }
}

export const rejectTask = async (id) => {
    try {
        const response = await axios.get(`http://localhost:5000/api/task/reject/${id}`)
        if (!response.message) {
            return true
        }
        else {
            await store.dispatch(activateSnackBar({ isError: true, message: `${response.code} ${response.message}` }));
            return null;

        }
    } catch (error) {
        await store.dispatch(activateSnackBar({
            isError:true,
            message: "We would not reach the server at the moment...!"
        }))
    }
}

export const resetData = async () => {
    try {
        const response = await axios.get('http://localhost:5000/api/task/reset-data');
        if (!response.message) {
            return true
        }
        else {
            await store.dispatch(activateSnackBar({ isError: true, message: `${response.code} ${response.message}` }));
            return null;
        }
    } catch (error) {
        await store.dispatch(activateSnackBar({ isError: true, message: "Sorry we could not react server at the moment...!" }));

    }
}
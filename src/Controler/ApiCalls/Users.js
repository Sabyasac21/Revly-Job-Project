const {axiosInstance} = require('../../View/Index');
export const RegisterUser = async(payload)=>{
    try {
        
        const response = await axiosInstance.post('/register', payload);
        
        return response
        
    } catch (error) {
        return error
        
    }

}
export const LoginUser = async(payload)=>{
    try {
        const response = await axiosInstance.post('/login', payload);
        
        return response
        
    } catch (error) {
        return error
        
    }

}

export const createDoubt = async(payload)=>{
    try {
        const response = await axiosInstance.post('/doubt', payload);
        return response
    } catch (error) {
        return error
    }
}

export const userDoubt = async(id)=>{
    try {
    //    console.log(id+'from api call');
       const response = await axiosInstance.get(`/studentDashBoard/${id}`);
       return response 
    } catch (error) {
        return error
    }
}

export const getBatchDoubts = async(id)=>{
    try {
        // console.log(id);
        const response = await axiosInstance.get(`/teacherDashBoard/${id}`);
        return response
    } catch (error) {
        return error
    }
}

export const getAllDoubts = async()=>{
    try {
        const response = await axiosInstance.get('/doubts');
        return response
    } catch (error) {
        return error
    }
}

export const getAllSolvedDoubts = async()=>{
    try {
        const response = await axiosInstance.get('/history');
        return response
    } catch (error) {
        return error
    }
}

export const getAllPendingDoubts = async()=>{
    try {
        const response = await axiosInstance.get('/live');
        return response
    } catch (error) {
        return error
    }
}

export const getMyBatchDoubts = async()=>{
    try {
        const response = await axiosInstance.get('/teacher/doubts');
        return response
    } catch (error) {
        return error
    }
}
export const getMyBatchSolvedDoubts = async()=>{
    try {
        const response = await axiosInstance.get('/teacher/history');
        return response
    } catch (error) {
        return error
    }
}

export const getMyBatchPendingDoubts = async()=>{
    try {
        const response = await axiosInstance.get('/teacher/live');
        return response
    } catch (error) {
        return error
    }
}


<<<<<<< HEAD
export const getDoubtDetails = async(payload)=>{
    try {

        const response = await axiosInstance.get(`/solution/${payload}`);
        return response
    } catch (error) {
        return error
    }
}

export const updateDoubt = async(payload)=>{
    try {
        
        const response = await axiosInstance.patch(`/solution/${payload}`);
        
        return response
    } catch (error) {
        return error
    }
}



=======
>>>>>>> 32cb9f1fa4c0282b882f5e52f7433fccee9117a7




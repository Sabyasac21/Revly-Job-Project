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

export const userDoubt = async(payload)=>{
    try {
       const response = await axiosInstance.get('/:studentId', payload);
       return response 
    } catch (error) {
        return error
    }
}
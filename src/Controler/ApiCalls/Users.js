const {axiosInstance} = require('../../View/Index');
export const RegisterUser = async(payload)=>{
    try {
        const response = await axiosInstance.post('/register', payload);
        return response.data
    } catch (error) {
        return error
        
    }

}
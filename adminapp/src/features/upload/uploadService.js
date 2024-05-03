import axios from "axios";
import { base_url } from "../../utils/baseUrl";
import { config } from "../../utils/axiosConfig";

const uploadImg = async(data)=>{
    const response = await axios.post(`${base_url}products/allproducts`,data,config)
    return response.data;
};

const uploadService={
    uploadImg,
}

export default uploadService;






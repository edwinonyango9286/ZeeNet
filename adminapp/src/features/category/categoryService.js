import axios  from "axios";
import { base_url } from "../../utils/baseUrl";
import { config } from "../../utils/axiosConfig";

const getCategories = async()=>{
    const response = await axios.get(`${base_url}productcategory/getallproductcategories`)
    return response.data;
};
const createCategory = async(category)=>{
    const response = await axios.post(`${base_url}productcategory/createproductcategory`,category, config)
    return response.data;
};

const categoryService ={ 
    getCategories,
    createCategory
}

export default  categoryService;
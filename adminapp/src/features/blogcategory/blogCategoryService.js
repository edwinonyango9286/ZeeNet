import axios from "axios";
import { base_url } from "../../utils/baseUrl";
import { config } from "../../utils/axiosConfig";


  const getBlogCategory = async()=>{
    const response = await axios.get(`${base_url}blogcategory/getall`)
    return response.data;
}

const createBlogCategory = async (blogCat) => {
  const response = await axios.post(
    `${base_url}blogcategory/create`,
    blogCat,
    config
  );
  return response.data;
};

const bCategoryService ={
    getBlogCategory,
    createBlogCategory
};


export default bCategoryService;
import axios from "axios";
import { base_url } from "../../utils/baseUrl";

const getBlogs = async ()=>{
    const response = await axios.get(`${base_url}blog/getall`)
    return response.data;
};
const blogsService={
    getBlogs,
}

export default blogsService;
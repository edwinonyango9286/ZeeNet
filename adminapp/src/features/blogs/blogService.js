import axios from "axios";
import { base_url } from "../../utils/baseUrl";
import { config } from "../../utils/axiosConfig";

const getBlogs = async () => {
  const response = await axios.get(`${base_url}blog/getall`);
  return response.data;
};

const createBlog = async (blog) => {
  const response = await axios.post(`${base_url}blog/create`, blog, config);
  return response.data;
};

const blogsService = {
  getBlogs,
  createBlog,
};

export default blogsService;

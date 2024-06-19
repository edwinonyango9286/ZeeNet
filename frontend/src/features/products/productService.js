import axios from "axios";
import { base_url } from "../../utils/baseUrl";
import { config } from "../../utils/axiosConfig";

const getProducts = async () => {
  const response = await axios.get(`${base_url}products/allproducts`);
  return response.data;
};

const getASingleProduct = async (id) => {
  const response = await axios.get(`${base_url}products/getaproduct/${id}`);
  return response.data;
};

const addToWishlist = async (prodId) => {
  const response = await axios.put(
    `${base_url}products/addtowishlist`,
    {
      prodId,
    },
    config
  );
  if (response.data) {
    return response.data;
  }
};

const productService = {
  getProducts,
  addToWishlist,
  getASingleProduct,
};

export default productService;

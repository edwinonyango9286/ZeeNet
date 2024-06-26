import axios from "axios";
import { base_url } from "../../utils/baseUrl";
import { config } from "../../utils/axiosConfig";

const getBrands = async () => {
  const response = await axios.get(`${base_url}productbrand/getallbrands`);
  return response.data;
};

const createBrand = async (brand) => {
  const response = await axios.post(
    `${base_url}productbrand/create`,
    brand,
    config
  );
  return response.data;
};
const updateBrand = async (brand) => {
  const response = await axios.put(
    `${base_url}productbrand/update/${brand.id}`,
    { title: brand.brandData.title },
    config
  );
  return response.data;
};

const getBrand = async (id) => {
  const response = await axios.get(
    `${base_url}productbrand/getabrand/${id}`,
    config
  );
  return response.data;
};

const deleteBrand = async (id) => {
  const response = await axios.delete(
    `${base_url}productbrand/delete/${id}`,
    config
  );
  return response.data;
};

const brandService = {
  getBrands,
  createBrand,
  getBrand,
  updateBrand,
  deleteBrand,
};

export default brandService;

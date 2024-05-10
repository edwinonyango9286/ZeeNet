import axios from "axios";
import { base_url } from "../../utils/baseUrl";
import { config } from "../../utils/axiosConfig";

const getCoupons = async () => {
  const response = await axios.get(`${base_url}coupon/getall`,config);
  return response.data;
};

const createCoupon = async (coupon) => {
  const response = await axios.post(`${base_url}coupon/create`, coupon, config);
  return response.data;
};

const couponService = {
  getCoupons,
  createCoupon,
};

export default couponService;

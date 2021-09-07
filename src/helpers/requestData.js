import axios from "axios";

const dataInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL });

export const getProductsData = async () => {
  try {
    const response = await dataInstance.request({ url: "/products" });
    return response;
  } catch (error) {
    return error.response;
  }
};

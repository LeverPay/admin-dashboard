import { toast } from "react-toastify";
import axios from "axios";

const httpClient = axios.create({
  baseURL: process.env.REACT_APP_LEVERPAY_API_URL,
  timeout: 10000,
  headers: { Authorization: "Bearer " + localStorage.getItem("_jwt") },
});
console.log(process.env.REACT_APP_LEVERPAY_API_URL);

export const getMerchantForRemittance = async (merchants, setMerchants) => {
  httpClient
    .get("v1/admin/get-merchants-for-remittance")
    .then((response) => {
      setMerchants(response.data.data);
      localStorage.setItem("Merchant", JSON.stringify(response.data.data));
      console.log("Merchant found successfully", response);
    })
    .catch((err) => {
      console.log(`${err}`);
    });
};

export const getMerchantRemittanceDetails = async (merchantId, setMerchant) => {
  httpClient
    .get(`v1/admin/get-merchant-details/${merchantId}`)
    .then((response) => {
      console.log("Merchant found successfully", response);
      setMerchant(response.data.data);
      localStorage.setItem("Merchant", JSON.stringify(response.data.data));
    })
    .catch((err) => {
      console.log(`${err}`);
    });
};

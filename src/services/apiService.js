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
      localStorage.setItem("Merchants", JSON.stringify(response.data.data));
      console.log("Merchant found successfully", response);
    })
    .catch((err) => {
      console.log(`${err}`);
    });
};

export const getMerchantRemittanceDetails = async (
  merchantId,
  setMerchant,
  setWalletBal
) => {
  httpClient
    .get(`v1/admin/get-merchant-details/${merchantId}`)
    .then((response) => {
      console.log("Merchant Details Gotten successfully", response);
      setMerchant(response.data.data);
      setWalletBal(response.data.data.wallet.withdrawable_amount);
      localStorage.setItem("Merchant", JSON.stringify(response.data.data));
    })
    .catch((err) => {
      console.log(`${err}`);
    });
};

export const add = async (setPaymentScheduleList, codeno) => {
  httpClient
    .get(`/v1/admin/get-payment-schedule-list/${codeno}`)
    .then((response) => {
      console.log("Remittance Completed successfully", response);
      setPaymentScheduleList(response);
    })
    .catch((err) => {
      console.log(`${err}`);
    });
};

export const getActiveVoucher = async (setActiveVouchers) => {
  httpClient
    .get(`/v1/admin/get-active-voucher`)
    .then((response) => {
      console.log("Active vouchers gotten successfully", response);
      setActiveVouchers(response.data.data);
    })
    .catch((err) => {
      console.log(`${err}`);
    });
};

export const completeRemittanceConfirmation = async (setConfirm, reqBody) => {
  httpClient
    .post(`/v1/admin/schedule-merchant-for-payment`, reqBody)
    .then((response) => {
      console.log("Remittance Completed successfully", response);
      setConfirm(true);
    })
    .catch((err) => {
      console.log(`${err}`);
    });
};

export const getPaymentScheduleList = async (
  setPaymentScheduleList,
  codeno
) => {
  httpClient
    .get(`/v1/admin/get-payment-schedule-list/${codeno}`)
    .then((response) => {
      console.log("Remittance Completed successfully", response.data.data);
      setPaymentScheduleList(response.data.data);
    })
    .catch((err) => {
      console.log(`${err}`);
    });
};

export const completeRemittance = async (reqBody, setConfirm) => {
  httpClient
    .post(`/v1/admin/complete-remittance`, reqBody)
    .then((response) => {
      console.log("Complete Remittance Sucessful", response.data.data);
      setConfirm(true);
    })
    .catch((err) => {
      console.log(`${err}`);
    });
};

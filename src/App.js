import "../src/css/app.css";
import React, { useEffect } from "react";
import DashboardPage from "./Pages/DashboardPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TransactionPage from "./Pages/TransactionPage";
import LoginPage from "./Pages/LoginPage";
import BasicInformationPage from "./Pages/Basic_Information_Page";
import SettingsPage from "./Pages/SettingsPage";
import ContactPage from "./Pages/ContactPage";
import MessagesPage from "./Pages/MessagesPage";
import CardPage from "./Pages/CardPage";
import UsersPage from "./Pages/UsersPage";
import AddUserPage from "./Pages/AddUserPage";
import EditCard from "./Pages/EditCard";
import DebitCard from "./Pages/DebitCard";
import CardUpgradePage from "./Pages/CardUpgradePage";
import FundRequest from "./Pages/Funding/FundRequest";
import AppproveRequestPage from "./Pages/ApproveRequesPage";
import ApproveConfirmationPage from "./Pages/ApproveConfirmationPage";
import CancelFormPage from "./Pages/CancelFormPage";
import CancelConfirmationPage from "./Pages/CancelConfirmationPage";
import MerchantPage from "./Pages/MerchantPage";
import AddMerchantPage from "./Pages/AddMerchantPage";
import UserToUser from "./Pages/UserToUser";
import MerchantSubscription from "./Pages/MerchantSubscription";
import ForgotPassword from "./Pages/forgotPassword";
import EmailVerification from "./Pages/forgotPassword/EmailVerification";
import ChangePassword from "./Pages/forgotPassword/ChangePassword";
import UserViewMore from "./Pages/UserViewMore";
import MerchantViewMore from "./Pages/MerchantViewMore";
import MerchantSubscriptionDetails from "./Pages/MerchantSubscriptionDetails";
import UserToUserDetails from "./Components/UserToUserDetails";
import Investors from "./Pages/Investors";
import { Toaster } from "react-hot-toast";
import LeverpayInvestor from "./Pages/LeverpayInvestor";
import ProtectedRoute from "./auth/ProtectedRoute";
import SetRates from "./Pages/SetRates";
import SetCardLimit from "./Pages/SetCardLimit";
import NotFoundPage from "./Pages/NotFoundPage";
import BankDetails from "./Pages/BankDetails";
import RemittanceMgt from "./Components/RemittanceMgt";
import TopupRequestMore from "./Pages/Funding/TopupRequestMore";
import MerchantScheduleList from "./Components/MerchantScheduleList";
import RemittanceMerchantDetails from "./Components/RemittanceMerchantDetails";

export default function App() {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />

          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/email-verification" element={<EmailVerification />} />
          <Route path="/change-password" element={<ChangePassword />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/transaction" element={<TransactionPage />} />
            <Route
              path="/basic_information"
              element={<BasicInformationPage />}
            />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/remittance-mgt" element={<RemittanceMgt />} />
            <Route
              path="/remittance-merchant-details"
              element={<RemittanceMerchantDetails />}
            />

            <Route
              path="/remittance-merchant-details/:merchantId"
              element={<RemittanceMerchantDetails />}
            />

            <Route
              path="/merchant-schedule-list"
              element={<MerchantScheduleList />}
            />

            <Route path="/messages" element={<MessagesPage />} />
            <Route path="/card-center" element={<CardPage />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/merchant" element={<MerchantPage />} />

            <Route path="/add_user" element={<AddUserPage />} />
            <Route path="/add_merchant" element={<AddMerchantPage />} />

            <Route path="/edit-card" element={<EditCard />} />
            <Route path="/user-view-more" element={<UserViewMore />} />
            <Route
              path="/merchant-view-more/:userId"
              element={<MerchantViewMore />}
            />
            <Route path="/set-rates" element={<SetRates />} />
            <Route path="/set-card-limit" element={<SetCardLimit />} />

            <Route path="/debit-card" element={<DebitCard />} />
            <Route path="/card-upgraade" element={<CardUpgradePage />} />
            <Route path="/fund_request" element={<FundRequest />} />
            <Route path="/fund_request_more" element={<TopupRequestMore />} />
            <Route path="/user-to-user-request" element={<UserToUser />} />
            <Route
              path="/merchant-subscription"
              element={<MerchantSubscription />}
            />
            <Route path="/bank-details" element={<BankDetails />} />
            <Route path="/investors" element={<Investors />} />
            <Route path="/leverpay-investors" element={<LeverpayInvestor />} />

            <Route
              path="/approve_request/:id"
              element={<AppproveRequestPage />}
            />
            <Route
              path="/merchant_subscription_details/:id"
              element={<MerchantSubscriptionDetails />}
            />
            <Route
              path="/user_to_user_details/:id"
              element={<UserToUserDetails />}
            />
            <Route
              path="/approve_confirmation/:id"
              element={<ApproveConfirmationPage />}
            />
            <Route path="/cancel_form/:id" element={<CancelFormPage />} />
            <Route
              path="/cancel_confirmation/:id"
              element={<CancelConfirmationPage />}
            />
          </Route>
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </div>
  );
}

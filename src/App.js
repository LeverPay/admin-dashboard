import '../src/css/app.css';
import React from 'react';
import DashboardPage from './Pages/DashboardPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TransactionPage from './Pages/TransactionPage';
import LoginPage from './Pages/LoginPage';
import BasicInformationPage from './Pages/Basic_Information_Page';
import SettingsPage from './Pages/SettingsPage';
import ContactPage from './Pages/ContactPage';
import MessagesPage from './Pages/MessagesPage';
import CardPage from './Pages/CardPage';
import UsersPage from './Pages/UsersPage';
import AddUserPage from './Pages/AddUserPage';
import EditCard from './Pages/EditCard';
import DebitCard from './Pages/DebitCard';
import CardUpgradePage from './Pages/CardUpgradePage';
import FundRequest from './Pages/FundRequest';
import AppproveRequestPage from './Pages/ApproveRequesPage';
import ApproveConfirmationPage from './Pages/ApproveConfirmationPage';
import CancelFormPage from './Pages/CancelFormPage';
import CancelConfirmationPage from './Pages/CancelConfirmationPage';
import MerchantPage from './Pages/MerchantPage';
import AddMerchantPage from './Pages/AddMerchantPage';
import UserToUser from './Pages/UserToUser';
import MerchantSubscription from './Pages/MerchantSubscription';

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/transaction" element={<TransactionPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/basic_information" element={<BasicInformationPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/messages" element={<MessagesPage />} />
          <Route path="/card-center" element={<CardPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/merchant" element={<MerchantPage />} />

          <Route path="/add_user" element={<AddUserPage />} />
          <Route path="/add_merchant" element={<AddMerchantPage />} />

          <Route path="/edit-card" element={<EditCard />} />
          <Route path="/debit-card" element={<DebitCard />} />
          <Route path="/card-upgraade" element={<CardUpgradePage />} />
          <Route path="/fund_request" element={<FundRequest />} />
          <Route path="/user-to-user-request" element={<UserToUser />} />
          <Route
            path="/merchant-subscription"
            element={<MerchantSubscription />}
          />

          <Route
            path="/approve_request/:id"
            element={<AppproveRequestPage />}
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
        </Routes>
      </Router>
    </div>
  );
}

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
import DebitCard from './Pages/DebitCard'
import CardUpgradePage from './Pages/CardUpgradePage'

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
          <Route path="/add_user" element={<AddUserPage />} />
          <Route path="/edit-card" element={<EditCard />} />
          <Route path="/debit-card" element={<DebitCard />} />
          <Route path="/card-upgraade" element={<CardUpgradePage />} />
        </Routes>
      </Router>
    </div>
  );
}

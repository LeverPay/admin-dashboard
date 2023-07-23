import React from 'react';
import '../css/ContactStyles.css';
import SidebarLayout from '../Layouts/SidebarLayout';
import Contact from '../Components/Contact';

const ContactPage = () => {
  return (
    <SidebarLayout>
      <Contact />
    </SidebarLayout>
  );
};

export default ContactPage;

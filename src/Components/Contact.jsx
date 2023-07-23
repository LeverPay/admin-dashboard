import React, { useState } from 'react';
import { DashboardNavView, DashboardView } from '../css/DashboardPageStyles';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFax, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../css/ContactStyles.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [focused, setFocused] = useState(false);

  const handleFocus = () => setFocused(true);
  const handleBlur = (e) => {
    if (!e.target.value) setFocused(false);
  };

  return (
    <DashboardView>
      <DashboardNavView>
        <Link to="/basic_information" className="profile-img flex-end">
          <img
            src="https://images.unsplash.com/photo-1587045525473-4861b1f9b5b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            alt="profile-img"
          />
        </Link>
      </DashboardNavView>

      <div className="settingsContainer">
        <form action="" className="contact-page-container">
          <h1>Get In Touch</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <div className="form-container">
            <div className={`floating-input ${focused ? 'focused' : ''}`}>
              <input
                type="name"
                name={name}
                onFocus={handleFocus}
                onBlur={handleBlur}
                autoComplete="off"
              />
              <label>Name</label>
            </div>

            <div className={`floating-input ${focused ? 'focused' : ''}`}>
              <input
                type="email"
                //   name={name}
                onFocus={handleFocus}
                onBlur={handleBlur}
                autoComplete="off"
              />
              <label>Email</label>
            </div>

            <div className={`floating-input ${focused ? 'focused' : ''}`}>
              <input
                type="phone"
                //   name={name}
                onFocus={handleFocus}
                onBlur={handleBlur}
                autoComplete="off"
              />
              <label>Phone number</label>
            </div>

            <select name="" id="" className="floating-input">
              <option value="How did you find us?">How did you find us?</option>
            </select>

            <button type="submit">Send</button>
          </div>
        </form>

        <div className='fax-container'>
          <div className="contact-item">
            <FontAwesomeIcon icon={faFax} />
            <div>
              <h2>FAX</h2>
              <p>03 5432 1234</p>
            </div>
          </div>

          <div className="contact-item">
            <FontAwesomeIcon icon={faEnvelope} />
            <div>
              <h2>Email</h2>
              <p>info@marcc.com.au</p>
            </div>
          </div>
        </div>
      </div>
    </DashboardView>
  );
};

export default Contact;

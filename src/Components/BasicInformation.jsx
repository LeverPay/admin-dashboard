import React, { useState } from 'react';
import { DashboardView } from '../css/DashboardPageStyles';
import { TransactionTable } from '../css/TransactionStyles';
import '../css/TransactionStyles.css';
import '../css/BasicInformationCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faPen,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { InputContainer } from '../css/BasicInformationSyles';
const BasicInformation = () => {
  const [focused, setFocused] = useState(false);

  const handleFocus = () => setFocused(true);
  const handleBlur = (e) => {
    if (!e.target.value) setFocused(false);
  };
  return (
    <DashboardView>
      <TransactionTable>
        <div className="transaction__table">
          <div className="TransactionTitle">
            <p>Basic Information</p>
            <div className="search_input">
              <div className="left__input">
                <input type="text" name="" id="" placeholder="Search" />
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </div>
            </div>
          </div>
        </div>

        <div className="basicInformationCard">
          <div className="basicInformationHeader">
            <img
              src="https://images.unsplash.com/photo-1587045525473-4861b1f9b5b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              alt="profile-img"
            />{' '}
            <div>
              <Link to="#" className="change-link">
                Change
                <FontAwesomeIcon icon={faPen} />
              </Link>
            </div>
            <div>
              <Link to="#" className="remove-link">
                Remove
                <FontAwesomeIcon icon={faTrash} />
              </Link>
            </div>
          </div>
          <form action="">
            <InputContainer>
              <label htmlFor="">Full Name</label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Patricia Douglas"
                className="input"
              />
            </InputContainer>

            <InputContainer>
              <label htmlFor="">Business Name</label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Center Focus Service Limited"
                className="input"
              />
            </InputContainer>

            <InputContainer>
              <label htmlFor="">Country</label>
              <select name="" id="" className="input">
                <option value="Nigeria">Nigeria</option>
              </select>
            </InputContainer>

            <InputContainer>
              <label htmlFor="phone">Phone Number</label>
              <div className="input-phone">
                <div className="code-input">+234</div>
                <input type="number" name="" id="" className="input" />
              </div>
            </InputContainer>

            <InputContainer>
              <label htmlFor="email"> Email Address</label>
              <input
                type="email"
                name=""
                id=""
                placeholder="Patricia Douglas@gmail.com"
                className="input"
              />
            </InputContainer>
          </form>
        </div>
      </TransactionTable>
    </DashboardView>
  );
};

export default BasicInformation;

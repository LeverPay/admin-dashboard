import React, { useState } from 'react';
import SidebarLayout from '../Layouts/SidebarLayout';
import { DashboardView } from '../css/DashboardPageStyles';
import CardFinanceOptions from '../Components/CardFinanceOptions';
import minilogo from '../assets/mini-logo.svg';
import { baseUrl } from '../utils/constants';

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Toggle from '../Components/Toggle';
import AppModal from '../Components/Modal';
import Cookies from 'js-cookie';
import toast from 'react-hot-toast';

const SetRates = () => {
  const [isActive, setIsActive] = React.useState(true);
  const [show, setShow] = React.useState(false);
  const [confirm, setConfirm] = React.useState(false);
  const [token, setToken] = React.useState('');
  const [exchangeLoading, setExchangeLoading] = React.useState(false);
  const [exchangeRate, setExchangeRate] = useState('');
  const [localTransRate, setLocalTransRate] = useState('');
  const [intTransRate, setIntTransRate] = useState('');
  const [convsnRate, setConvsnRate] = useState('');
  const [fundingRate, setFundingRate] = useState('');

  const handleRateChange = (value, setter) => {
    setter(value);
  };

  const handleIsActive = () => {
    setIsActive((prevIsisActive) => !prevIsisActive);
  };

  const handleIsConfirm = () => {
    setShow(false);
    handleRateClick();
  };

  React.useEffect(() => {
    document.title = 'Set Rates  | LeverPay Admin';
    const authToken = Cookies.get('authToken');
    setToken(authToken);
  }, []);

  // EXCHANGE Rate Endpoint

  const handleRateClick = async () => {
    try {
      setExchangeLoading(true);
      const response = await fetch(`${baseUrl}/v1/admin/add-exchange-rate`, {
        method: 'POST',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
          'X-CSRF-TOKEN': 'Uw2Ch5MqHI3r4YbF5AdbYDpgCC5Ht7WriIYqAcQ3',
        },
        body: JSON.stringify({ rate: exchangeRate }),
      });

      if (response.ok) {
        // Handle success, e.g., show a success message or update the UI
        setConfirm(true);
      } else {
        toast.error('Request failed');
      }
    } catch (error) {
      toast.error('An error occurred', error);
    }
  };

  return (
    <SidebarLayout>
      <DashboardView>
        <div className="w-full p-2 flex items-end justify-end">
          <img
            src="https://images.unsplash.com/photo-1587045525473-4861b1f9b5b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            alt="profile-img"
            className="w-10 h-10 rounded-full "
          />{' '}
        </div>
        <div className="p-3">
          <h2 className="text-indigo-950 text-2xl font-bold font-['Inter'] leading-normal">
            Set Rates
          </h2>
          <div className="flex items-center gap-1 justify-between">
            <CardFinanceOptions
              title="Exchange Rate"
              bgColor="#2962F2"
              setShow={setShow}
              rate={exchangeRate}
              handleRateChange={(value) =>
                handleRateChange(value, setExchangeRate)
              }
            />
            <CardFinanceOptions
              title="Local Trans Rate"
              bgColor="#257708"
              setShow={setShow}
              rate={localTransRate}
              handleRateChange={(value) =>
                handleRateChange(value, setLocalTransRate)
              }
            />
            <CardFinanceOptions
              title="Int. Trans Rate"
              bgColor="#9A8B0A"
              setShow={setShow}
              rate={intTransRate}
              handleRateChange={(value) =>
                handleRateChange(value, setIntTransRate)
              }
            />
            <CardFinanceOptions
              title="Convsn Rate"
              bgColor="#CF7205"
              setShow={setShow}
              rate={convsnRate}
              handleRateChange={(value) =>
                handleRateChange(value, setConvsnRate)
              }
            />
            <CardFinanceOptions
              title="Funding Rate"
              bgColor="#A312FB"
              setShow={setShow}
              rate={fundingRate}
              handleRateChange={(value) =>
                handleRateChange(value, setFundingRate)
              }
            />
          </div>

          <div className="row">
            <div className="col-12 mt-5">
              <Tabs defaultActiveKey="first">
                <Tab eventKey="first" title={'Exchange'}>
                  <div className="users__tab__padding">
                    <table className="table table-borderless">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">
                            <h2 className="text-slate-900 text-sm font-bold font-['Agrandir'] leading-3 tracking-tight">
                              Date/Time{' '}
                            </h2>
                          </th>
                          <th scope="col">
                            <h2 className="text-lime-800 text-sm font-bold font-['Inter'] leading-3 tracking-tight">
                              Current
                            </h2>
                          </th>
                          <th scope="col">
                            <h2 className="text-yellow-400 text-sm font-bold font-['Inter'] leading-3 tracking-tight">
                              Previous
                            </h2>
                          </th>
                          <th scope="col">
                            <h2 className="text-indigo-950 text-sm font-bold font-['Agrandir'] leading-3 tracking-tight">
                              {' '}
                              Status
                            </h2>
                          </th>
                          <th scope="col">
                            <h2 className="text-black text-sm font-bold font-['Inter'] leading-3 tracking-tight">
                              Activate / Deactivate
                            </h2>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>
                            <span className="text-slate-900 text-xs font-bold font-['Agrandir'] leading-3 tracking-tight">
                              12/23 /2:00am{' '}
                            </span>
                          </td>
                          <td>
                            <span className="text-lime-900 text-sm font-bold font-['Inter'] leading-3 tracking-tight">
                              987
                            </span>
                          </td>
                          <td>
                            <span className="text-yellow-400 text-sm font-bold font-['Inter'] leading-3 tracking-tight">
                              200
                            </span>
                          </td>
                          <td className="font__amount">
                            <span className="text-red-700 text-xs font-bold font-['Inter'] leading-3 tracking-tight">
                              Deactivated
                            </span>
                          </td>
                          <td className="font__approved">
                            {' '}
                            <Toggle
                              isOn={isActive}
                              handleToggle={handleIsActive}
                            />
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>
                            <span className="text-slate-900 text-xs font-bold font-['Agrandir'] leading-3 tracking-tight">
                              12/23 /2:00am{' '}
                            </span>
                          </td>
                          <td>
                            <span className="text-lime-900 text-sm font-bold font-['Inter'] leading-3 tracking-tight">
                              987
                            </span>
                          </td>
                          <td>
                            <span className="text-yellow-400 text-sm font-bold font-['Inter'] leading-3 tracking-tight">
                              200
                            </span>
                          </td>
                          <td className="font__amount">
                            <span className="text-red-700 text-xs font-bold font-['Inter'] leading-3 tracking-tight">
                              Deactivated
                            </span>
                          </td>
                          <td className="font__approved">
                            {' '}
                            <Toggle
                              isOn={isActive}
                              handleToggle={handleIsActive}
                            />
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td>
                            <span className="text-slate-900 text-xs font-bold font-['Agrandir'] leading-3 tracking-tight">
                              12/23 /2:00am{' '}
                            </span>
                          </td>
                          <td>
                            <span className="text-lime-900 text-sm font-bold font-['Inter'] leading-3 tracking-tight">
                              987
                            </span>
                          </td>
                          <td>
                            <span className="text-yellow-400 text-sm font-bold font-['Inter'] leading-3 tracking-tight">
                              200
                            </span>
                          </td>
                          <td className="font__amount">
                            <span className="text-red-700 text-xs font-bold font-['Inter'] leading-3 tracking-tight">
                              Deactivated
                            </span>
                          </td>
                          <td className="font__approved">
                            {' '}
                            <Toggle
                              isOn={isActive}
                              handleToggle={handleIsActive}
                            />
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">4</th>
                          <td>
                            <span className="text-slate-900 text-xs font-bold font-['Agrandir'] leading-3 tracking-tight">
                              12/23 /2:00am{' '}
                            </span>
                          </td>
                          <td>
                            <span className="text-lime-900 text-sm font-bold font-['Inter'] leading-3 tracking-tight">
                              987
                            </span>
                          </td>
                          <td>
                            <span className="text-yellow-400 text-sm font-bold font-['Inter'] leading-3 tracking-tight">
                              200
                            </span>
                          </td>
                          <td className="font__amount">
                            <span className="text-red-700 text-xs font-bold font-['Inter'] leading-3 tracking-tight">
                              Deactivated
                            </span>
                          </td>
                          <td className="font__approved">
                            {' '}
                            <Toggle
                              isOn={isActive}
                              handleToggle={handleIsActive}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Tab>
                <Tab eventKey="second" title={'Local Transaction'}>
                  <div className="users__tab__padding">
                    <table className="table table-borderless">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">
                            <h2 className="text-slate-900 text-sm font-bold font-['Agrandir'] leading-3 tracking-tight">
                              Date/Time{' '}
                            </h2>
                          </th>
                          <th scope="col">
                            <h2 className="text-lime-800 text-sm font-bold font-['Inter'] leading-3 tracking-tight">
                              Current
                            </h2>
                          </th>
                          <th scope="col">
                            <h2 className="text-yellow-400 text-sm font-bold font-['Inter'] leading-3 tracking-tight">
                              Previous
                            </h2>
                          </th>
                          <th scope="col">
                            <h2 className="text-indigo-950 text-sm font-bold font-['Agrandir'] leading-3 tracking-tight">
                              {' '}
                              Status
                            </h2>
                          </th>
                          <th scope="col">
                            <h2 className="text-black text-sm font-bold font-['Inter'] leading-3 tracking-tight">
                              Activate / Deactivate
                            </h2>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>
                            <span className="text-slate-900 text-xs font-bold font-['Agrandir'] leading-3 tracking-tight">
                              12/23 /2:00am{' '}
                            </span>
                          </td>
                          <td>
                            <span className="text-lime-900 text-sm font-bold font-['Inter'] leading-3 tracking-tight">
                              987
                            </span>
                          </td>
                          <td>
                            <span className="text-yellow-400 text-sm font-bold font-['Inter'] leading-3 tracking-tight">
                              200
                            </span>
                          </td>
                          <td>
                            <span className="text-indigo-600 text-sm font-bold font-['Inter'] leading-3 tracking-tight">
                              Active
                            </span>
                          </td>
                          <td className="font__approved">
                            {' '}
                            <Toggle
                              isOn={isActive}
                              handleToggle={handleIsActive}
                            />
                          </td>{' '}
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>
                            <span className="text-slate-900 text-xs font-bold font-['Agrandir'] leading-3 tracking-tight">
                              12/23 /2:00am{' '}
                            </span>
                          </td>
                          <td>
                            <span className="text-lime-900 text-sm font-bold font-['Inter'] leading-3 tracking-tight">
                              987
                            </span>
                          </td>
                          <td>
                            <span className="text-yellow-400 text-sm font-bold font-['Inter'] leading-3 tracking-tight">
                              200
                            </span>
                          </td>
                          <td>
                            <span className="text-red-700 text-xs font-bold font-['Inter'] leading-3 tracking-tight">
                              Deactivated
                            </span>
                          </td>
                          <td className="font__approved">
                            {' '}
                            <Toggle
                              isOn={isActive}
                              handleToggle={handleIsActive}
                            />
                          </td>{' '}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Tab>
                <Tab eventKey="third" title="International Trans">
                  <div className="users__tab__padding">
                    <table className="table table-borderless">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">
                            <h2 className="text-slate-900 text-sm font-bold font-['Agrandir'] leading-3 tracking-tight">
                              Date/Time{' '}
                            </h2>
                          </th>
                          <th scope="col">
                            <h2 className="text-lime-800 text-sm font-bold font-['Inter'] leading-3 tracking-tight">
                              Current
                            </h2>
                          </th>
                          <th scope="col">
                            <h2 className="text-yellow-400 text-sm font-bold font-['Inter'] leading-3 tracking-tight">
                              Previous
                            </h2>
                          </th>
                          <th scope="col">
                            <h2 className="text-indigo-950 text-sm font-bold font-['Agrandir'] leading-3 tracking-tight">
                              {' '}
                              Status
                            </h2>
                          </th>
                          <th scope="col">
                            <h2 className="text-black text-sm font-bold font-['Inter'] leading-3 tracking-tight">
                              Activate / Deactivate
                            </h2>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>
                            <div className="text-slate-900 text-xs font-bold font-['Agrandir'] leading-3 tracking-tight">
                              12/23 /2:00am{' '}
                            </div>
                          </td>
                          <td>
                            <span className="text-lime-900 text-sm font-bold font-['Inter'] leading-3 tracking-tight">
                              987
                            </span>
                          </td>
                          <td>
                            <span className="text-yellow-400 text-sm font-bold font-['Inter'] leading-3 tracking-tight">
                              200
                            </span>
                          </td>
                          <td>
                            <span className="text-red-700 text-xs font-bold font-['Inter'] leading-3 tracking-tight">
                              Deactivated
                            </span>
                          </td>
                          <td className="font__approved">
                            {' '}
                            <Toggle
                              isOn={isActive}
                              handleToggle={handleIsActive}
                            />
                          </td>{' '}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Tab>
                <Tab eventKey="fourth" title="Conversion">
                  <div className="users__tab__padding">
                    <table className="table table-borderless">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">
                            <h2 className="text-slate-900 text-sm font-bold font-['Agrandir'] leading-3 tracking-tight">
                              Date/Time{' '}
                            </h2>
                          </th>
                          <th scope="col">
                            <h2 className="text-lime-800 text-sm font-bold font-['Inter'] leading-3 tracking-tight">
                              Current
                            </h2>
                          </th>
                          <th scope="col">
                            <h2 className="text-yellow-400 text-sm font-bold font-['Inter'] leading-3 tracking-tight">
                              Previous
                            </h2>
                          </th>
                          <th scope="col">
                            <h2 className="text-indigo-950 text-sm font-bold font-['Agrandir'] leading-3 tracking-tight">
                              {' '}
                              Status
                            </h2>
                          </th>
                          <th scope="col">
                            <h2 className="text-black text-sm font-bold font-['Inter'] leading-3 tracking-tight">
                              Activate / Deactivate
                            </h2>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>
                            <div className="text-slate-900 text-xs font-bold font-['Agrandir'] leading-3 tracking-tight">
                              12/23 /2:00am{' '}
                            </div>
                          </td>
                          <td>
                            <span className="text-lime-900 text-sm font-bold font-['Inter'] leading-3 tracking-tight">
                              987
                            </span>
                          </td>
                          <td>
                            <span className="text-yellow-400 text-sm font-bold font-['Inter'] leading-3 tracking-tight">
                              200
                            </span>
                          </td>
                          <td>
                            <span className="text-red-700 text-xs font-bold font-['Inter'] leading-3 tracking-tight">
                              Deactivated
                            </span>
                          </td>
                          <td className="font__approved">
                            {' '}
                            <Toggle
                              isOn={isActive}
                              handleToggle={handleIsActive}
                            />
                          </td>{' '}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Tab>
                <Tab eventKey="fifth" title="Funding">
                  <div className="users__tab__padding">
                    <table className="table table-borderless">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">
                            <h2 className="text-slate-900 text-sm font-bold font-['Agrandir'] leading-3 tracking-tight">
                              Date/Time{' '}
                            </h2>
                          </th>
                          <th scope="col">
                            <h2 className="text-lime-800 text-sm font-bold font-['Inter'] leading-3 tracking-tight">
                              Current
                            </h2>
                          </th>
                          <th scope="col">
                            <h2 className="text-yellow-400 text-sm font-bold font-['Inter'] leading-3 tracking-tight">
                              Previous
                            </h2>
                          </th>
                          <th scope="col">
                            <h2 className="text-indigo-950 text-sm font-bold font-['Agrandir'] leading-3 tracking-tight">
                              {' '}
                              Status
                            </h2>
                          </th>
                          <th scope="col">
                            <h2 className="text-black text-sm font-bold font-['Inter'] leading-3 tracking-tight">
                              Activate / Deactivate
                            </h2>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>
                            <span className="text-slate-900 text-xs font-bold font-['Agrandir'] leading-3 tracking-tight">
                              12/23 /2:00am{' '}
                            </span>
                          </td>
                          <td>
                            <span className="text-lime-900 text-sm font-bold font-['Inter'] leading-3 tracking-tight">
                              987
                            </span>
                          </td>
                          <td>
                            <span className="text-yellow-400 text-sm font-bold font-['Inter'] leading-3 tracking-tight">
                              200
                            </span>
                          </td>
                          <td>
                            <span className="text-red-700 text-xs font-bold font-['Inter'] leading-3 tracking-tight">
                              Deactivated
                            </span>
                          </td>
                          <td className="font__approved">
                            {' '}
                            <Toggle
                              isOn={isActive}
                              handleToggle={handleIsActive}
                            />
                          </td>{' '}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
        <AppModal
          visible={show}
          closable={true}
          handleCancel={() => setShow(false)}
        >
          <div className="py-5">
            <h2 className="text-center text-black text-base font-bold font-['Montserrat'] leading-normal">
              Are you sure you want to <br />
              save the New Exchange Rate?
            </h2>
            <div className="flex items-center justify-center gap-4 my-2">
              <div
                className="w-[134px] flex items-center justify-center h-[51px] bg-blue-600 rounded-[10px] cursor-pointer"
                onClick={handleIsConfirm}
              >
                <span className="w-[47px]  text-neutral-50 text-2xl font-bold font-['Montserrat']">
                  Yes
                </span>
              </div>
              <div
                className="w-[134px] h-[51px] flex items-center justify-center bg-[#FC0019] rounded-[10px] cursor-pointer"
                onClick={() => setShow(false)}
              >
                <span className="w-[47px]  text-neutral-50 text-2xl font-bold font-['Montserrat']">
                  No
                </span>
              </div>
            </div>
          </div>
        </AppModal>

        {/* CONFIRMATION */}
        <AppModal
          visible={confirm}
          closable={true}
          handleCancel={() => setConfirm(false)}
        >
          <div className="py-3">
            <div className="flex items-end justify-end">
              <img src={minilogo} alt="" className="w-10 h-10" />
            </div>
            <div className="flex items-center justify-center flex-col">
              <svg
                width="240"
                height="170"
                viewBox="0 0 240 170"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_7534_4609)">
                  <mask
                    id="mask0_7534_4609"
                    maskType="luminance"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="240"
                    height="170"
                  >
                    <path
                      d="M240 0.298828H0.909088V169.921H240V0.298828Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask0_7534_4609)">
                    <g opacity="0.1">
                      <path
                        d="M120.455 18.5273C178.074 18.5273 224.857 48.2496 224.857 84.8569C224.857 121.464 178.074 151.186 120.455 151.186C62.8346 151.186 16.0517 121.464 16.0517 84.8569C16.0517 48.2496 62.8346 18.5273 120.455 18.5273Z"
                        fill="#5FCE2F"
                      />
                    </g>
                    <g opacity="0.2">
                      <path
                        d="M120.455 26.6289C171.037 26.6289 212.106 52.7211 212.106 84.8574C212.106 116.994 171.037 143.086 120.455 143.086C69.872 143.086 28.8029 116.994 28.8029 84.8574C28.8029 52.7211 69.872 26.6289 120.455 26.6289Z"
                        fill="#5FCE2F"
                      />
                    </g>
                    <path
                      d="M120.455 37.7676C161.36 37.7676 194.572 58.868 194.572 84.8563C194.572 110.845 161.36 131.945 120.455 131.945C79.549 131.945 46.3368 110.845 46.3368 84.8563C46.3368 58.868 79.549 37.7676 120.455 37.7676Z"
                      fill="#5FCE2F"
                    />
                    <path
                      d="M82.917 92.4279C90.8267 96.8806 106.647 105.785 106.647 105.785C106.647 105.785 140.948 80.1376 158.098 67.314"
                      stroke="white"
                      stroke-width="24.1073"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_7534_4609">
                    <rect
                      width="239.091"
                      height="169.622"
                      fill="white"
                      transform="translate(0.909088 0.298828)"
                    />
                  </clipPath>
                </defs>
              </svg>

              <h2 className="w-[354px] h-[38px] text-center text-lime-500 text-base font-extrabold font-['Montserrat']">
                The new exchange rate has been updated successfully
              </h2>

              <div
                className="w-[216px] flex items-center justify-center my-2  h-[57px] bg-blue-950 rounded-[5px] cursor-pointer"
                onClick={() => setConfirm(false)}
              >
                <span className="text-center text-white text-2xl font-extrabold font-['Montserrat']">
                  Close
                </span>
              </div>
            </div>
          </div>
        </AppModal>
      </DashboardView>
    </SidebarLayout>
  );
};

export default SetRates;

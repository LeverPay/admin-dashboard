import React, { useState } from 'react';
import { DashboardNavView, DashboardView } from '../css/DashboardPageStyles';
import { TransactionTable } from '../css/TransactionStyles';
import { Link } from 'react-router-dom';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { BsArrowDownShort } from 'react-icons/bs';
import medium from '../assets/Medium_User.svg';
import add from '../assets/zondicons_add-solid.svg';
import brown from '../assets/brown_Medium_User.svg';
import yellow from '../assets/yellow_Medium_User.svg';
import addVector from '../assets/add-Vector.svg';
import { MdOutlineClose } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

import ATMCard from './ATMCard';
import DebitCard from '../Pages/DebitCard';
import CardTable from './CardTable';

const CardUsers = () => {
  const navigate = useNavigate();

  const navigateToDebitCard = () => {
    navigate('/edit-card');
  };

  const navigateToUpgradeCard = () => {
    navigate('/card-upgraade');
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
      <TransactionTable>
        <div className="flex items-center gap-10">
          <div className="flex flex-col  items-start rounded bg-white w-[70%] p-4 relative">
            <div className="flex items-center justify-between w-full">
              <h2 className="text-slate-500 text-xl font-bold ">
                Debit Card Account
              </h2>{' '}
              <BiDotsHorizontalRounded size={10} color="#000000" />
            </div>
            <div className="flex gap-2 no-scrollbar overflow-scroll flex-wrap h-[250px] ">
              <ATMCard />
              <ATMCard />
              <ATMCard />
              <ATMCard />
              <div className="absolute bottom-10 right-10">
                <div className="bg-neutral-200 p-2 rounded-full cursor-pointer">
                  <BsArrowDownShort size={20} />
                </div>
              </div>
            </div>
          </div>

          <div className="w-[30%] flex items-center justify-center gap-2 flex-col relative">
            <div className="absolute top-[-150px] left-0">
              <img
                src={medium}
                alt=""
                className="transform rotate-45 w-[100px] h-auto"
              />
              <img src={medium} alt="" className="absolute top-0 left-0" />
              <img
                src={add}
                alt=""
                className="absolute top-10 left-10 w-4 h-auto cursor-pointer"
                onClick={navigateToDebitCard}
              />
            </div>

            <div className="absolute top-[0px] left-0">
              <img
                src={brown}
                alt=""
                className="transform rotate-45 w-[100px] h-auto"
              />
              <img
                src={yellow}
                alt=""
                className="absolute top-0 left-0 w-[120px] h-auto"
              />
              <img
                src={addVector}
                alt=""
                className="absolute top-10 left-10 w-4 h-auto cursor-pointer"
                onClick={navigateToUpgradeCard}
              />
            </div>
          </div>
        </div>
        <div className="my-5 bg-white rounded">
          <CardTable />
        </div>
      </TransactionTable>
    </DashboardView>
  );
};

export default CardUsers;

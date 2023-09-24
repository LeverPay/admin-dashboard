import React from 'react';
import logoGold from '../assets/LeverPayGold.png';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>Error 404</h1>
      <div className="shadow p-5">
        <div>
          <img src={logoGold} alt="logo" className="w-[100px] h-auto" />
        </div>
        <h2 className="my-2">
          Whoops... <br /> this page isnt available{' '}
        </h2>
        <small>
          <Link to="/">Turn back</Link>
        </small>
      </div>
    </div>
  );
};

export default NotFoundPage;

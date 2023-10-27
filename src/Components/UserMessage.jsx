import React from 'react';
import man from '../assets/young man in casual clothes sitting on the floor with phone.png';
import axios from 'axios';
import { useState } from 'react';
import Cookies from 'js-cookie';


const UserMessage = ({userData}) => {
  const authToken = Cookies.get('authToken');
  const [send, setSend] = useState('Send')
  const [mgsent, setMsgsent] = useState('')
  const [formData, setFormData] = useState({
    email: userData.email,
    subject: '',
    message: ''
  })
  function handlechange(e){
    setFormData({
      ...formData,
      [e.target.name] : e.target.value
    })
  }
  function sendMail(){
    setSend('Sending..')
    axios.post('https://leverpay-api.azurewebsites.net/api/v1/contact-us',
    formData,
    {
      headers: {
        Authorization: `Bearer ${authToken}`,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    }
    )
    .then(res=>{
      console.log(res)
      setMsgsent('Message Sent Successfully')
    })
    .catch(err=>{
      console.log(err)
      setSend('Send')
      setMsgsent('Message not sent')
    })
  }
  return (
    <div className="p-5 flex items-start justify-between">
      <div>
        <h2 className="w-[272.30px] text-blue-600 text-xl font-bold leading-normal">
          SEND MESSAGE TO USER
        </h2>
        <div>
         <h3>Email: {userData.email}</h3> 
        </div>
        <div className="w-[568px] h-[341px] relative">
          <div className="w-[568px] h-[88px] left-0 top-0 absolute flex-col justify-start items-start gap-3 inline-flex">
            <label className="text-gray-800 text-base font-normal leading-tight">
              TITLE: 
              <input 
              type='text'
              name='subject'
              onChange={handlechange}
              className="w-[568px] h-14 pl-2.5 rounded-[10px] border border-gray-800 border-opacity-50 mt-3" 
               />
            </label>
          </div>
          <div className="w-[568px] h-[227px] left-0 top-[114px] absolute flex-col justify-start items-start gap-3 inline-flex">
          <label className="text-gray-800 text-base font-normal leading-tight">
              MESSAGE: 
              <input 
              type='text'
              name='message'
              onChange={handlechange}
              className="w-[568px] h-[195px] pl-2.5 rounded-[10px] border border-gray-800 border-opacity-50 mt-5" 
              style={{wordWrap: 'break-word'}}
               />
            </label>
          </div>
        </div>

        <div className="my-5 flex items-center w-[568px] justify-between">
          <div className="w-[164px] h-[51px] text-center bg-blue-600 rounded-[10px] flex items-center justify-center ">
            <span className=" text-neutral-50 text-xl font-bold" onClick={sendMail}>{send}</span>
          </div>
          <h3 style={{fontSize: '18px', color: 'green'}}>
            {mgsent}
          </h3>
        </div>
      </div>
      <div>
        <img src={man} alt="" />
      </div>
    </div>
  );
};

export default UserMessage;

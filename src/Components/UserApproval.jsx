import axios from 'axios';
import React, { useState } from 'react';
import { baseUrl } from '../utils/constants';
import Cookies from 'js-cookie';


const UserApprove = ({uuid}) => {
  const authToken = Cookies.get('authToken');
  const [isact, setIsact] = useState(false)
  const [isdact, setIsdact] = useState(false)
  const [act, setact] = useState(false)
  const [dact, setdact] = useState(false)

    function approve(){
        setact(true)
        setdact(false)
        axios.post(`${baseUrl}/v1/admin/activate-account`,
        {uuid},
        {
            headers:{
                Authorization: `Bearer ${authToken}`
            }
        }
        )
        .then(res=>{
            console.log(res)
            setIsact(true)
        })
        .catch(res=>{
            console.log(res)
            setIsact(false)
        })
    }

    function disapprove(){
        setdact(true)
        setact(false)
        axios.post(`${baseUrl}/v1/admin/deactivate-account`,
        {uuid},
        {
            headers:{
                Authorization: `Bearer ${authToken}`
            }
        }
        )
        .then(res=>{
            console.log(res)
            setIsdact(true)
        })
        .catch(res=>{
            console.log(res)
            setIsdact(false)
        })
    }
  return (
    <div className="p-5 bg-white">
      <div className="w-[456px] flex items-center justify-center text-center mb-3 h-12 bg-blue-600 rounded-[10px]">
        <span className="text-white text-xl font-bold leading-normal">
          Approve User Details 
        </span>
      </div>
        <div style={{
            display: 'flex',
            gap: '2rem',
            padding:'2rem',
            fontSize:'22px'
        }}>
            <button style={{
                border: '1px solid',
                padding: '10px 30px',
                borderRadius: '5px',
                color: 'white',
                fontWeight:'600',
                backgroundColor: 'green'
            }}
            onClick={approve}
            >Suspend</button>
            <button style={{
                border: '1px solid',
                padding: '10px 30px',
                borderRadius: '5px',
                color: 'white',
                fontWeight:'600',
                backgroundColor: 'red'
            }}
            onClick={disapprove}
            >Unsuspend</button>
        </div>
        <div style={{
            textAlign: 'center',
            fontSize: '25px',
            fontWeight: '800'
        }}>
            {
                isdact && <>
                    {isdact ? 'Merchant account Activated': 'Activating...' }
                </>
            }
            {
                isact && <>
                {isact ? 'Merchant account Deactivated': 'Deactivating...' }
                </>
            }
            
        </div>
    </div>
  );
};

export default UserApprove;

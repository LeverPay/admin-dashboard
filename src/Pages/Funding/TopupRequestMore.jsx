import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import './fundrequest.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { baseUrl } from '../../utils/constants';
import Cookies from 'js-cookie';

const TopupRequestMore = () => {
    const authToken = Cookies.get('authToken');
    const [approving, setApproving] = useState(false)
    const [isApproved, setIsApproved] = useState(false)
    const [declining, setDeclining] = useState(false)
    const [isDeclined, setIsDeclined] = useState(false)
    const location = useLocation()
    const {state} = location
    const fund_data = state
    console.log(fund_data)

    const dateformat = () =>{
        const date = new Date(fund_data.created_at)
        return date.toLocaleString()
    }
    const amountformat = (request_amt) =>{
        const amt = parseFloat(request_amt).toFixed(2)
        return amt
    }
    
    
  function approve_top_up() {
    setApproving(true)
    axios.post(`${baseUrl}v1/admin/approve-topup-request`,
      {uuid: fund_data.uuid},
      {
        headers: {
          accept: '*/*',
          Authorization: `Bearer ${authToken}`,
          'Content-Type': 'application/json',
          'X-CSRF-TOKEN': 'VAjFe3gR4N6VeLZWsLPozlm4ttYquPC13KfprAim',
        }
      }
    )
      .then(res => {
        console.log(res)
        setIsApproved(true)
      })
      .catch(err => {
        console.log(err)
        setApproving(false)
      })
  }
  function decline_top_up() {
    setDeclining(true)
    axios.post(`${baseUrl}v1/admin/cancel-topup-request`,
      {uuid: fund_data.uuid},
      {
        headers: {
          accept: '*/*',
          Authorization: `Bearer ${authToken}`,
          'Content-Type': 'application/json',
          'X-CSRF-TOKEN': 'VAjFe3gR4N6VeLZWsLPozlm4ttYquPC13KfprAim',
        }
      }
    )
      .then(res => {
        console.log(res)
        setIsDeclined(true)
      })
      .catch(err => {
        console.log(err)
        setIsDeclined(false)
      })
  }


  return (
    <div className='view_more'>
        <Link to='/fund_request'>
        <img src="/images/back1.png" alt="back" className='view-more-back'/>
        </Link>
        <h2>
            Transaction Details 
        </h2>
        <div>
            <ul>
                <li><b>Fullname :</b> {fund_data.user.first_name} {fund_data.user.last_name} </li>
                <li><b>Email :</b> {fund_data.user.email} </li>
                <li><b>UUID :</b> {fund_data.uuid}</li>
                <li><b>Amount :</b> {amountformat(fund_data.amount)} </li>
                <li><b>Date of payment :</b> {dateformat()} </li>
                <li><b>Reference :</b> {fund_data.reference} </li>
                <li><b>Receipt :</b> <img src={fund_data.image_url} alt="receipt" /></li>
            </ul>
            {
                fund_data.status === 0 && <>
                       <span>
            <button onClick={approve_top_up}>
                {
                    isApproved ? 'Approved' : approving ? 'Approving...' : 'Approve Topup' 
                }
            </button>
            <button onClick={decline_top_up}>
                {
                    isDeclined ? 'Declined' : declining ? 'Declining...' : 'Decline Topup' 
                }
            </button>
        </span>
                </>
            }
            {
                fund_data.status === 1 && <>
                    <span>
                        <button style={{width: '100%'}}>
                            Transaction Approved
                        </button>
                    </span>
                </>
            }
            {
                fund_data.status === 2 && <>
                    <span>
                        <button style={{width: '100%', background: 'red'}}>
                            Transaction Declined
                        </button>
                    </span>
                </>
            }
        </div>
    </div>
  )
}

export default TopupRequestMore
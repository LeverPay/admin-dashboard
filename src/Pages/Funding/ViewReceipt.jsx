import React from 'react'
import { useLocation } from 'react-router-dom'
import './fundrequest.css'
import { Link } from 'react-router-dom'


const ViewReceipt = () => {
    const location = useLocation()
    const {state} = location
    const fund_data = state
    console.log(fund_data)
  return (
    <div className='view_receipt'>
        <h2>
            Transaction Receipt 
        </h2>
        <input type="file" value={fund_data.document? fund_data.document : ''} disabled={true} />

        <span>
            <Link to='/fund_request'>
                Go Back
            </Link>
        </span>
    </div>
  )
}

export default ViewReceipt
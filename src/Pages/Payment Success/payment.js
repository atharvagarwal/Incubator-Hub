import React,{useState,useEffect,useContext}from 'react'
import payContext from '../../PaymentContext'
const Payment = () => {
const {subscribed, changeSubscribed}=useContext(payContext)


  return (
    <div>
        <h3 className="heading-payment" style={{"color":"green","fontSize":"5rem","display":"flex","justifyContent":"center","marginTop":"5rem"}}>Successful Payment!</h3>
        {localStorage.setItem("subscribed", "true")}
        
    </div>
  )
}

export default Payment
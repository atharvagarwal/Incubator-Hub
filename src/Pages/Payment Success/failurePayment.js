import React,{useState,useEffect,useContext}from 'react'
import payContext from '../../PaymentContext'
const FailurePayment = () => {
const {subscribed, changeSubscribed}=useContext(payContext)


  return (
    <div>
        <h3 className="heading-payment" style={{"color":"red","fontSize":"5rem","display":"flex","justifyContent":"center","marginTop":"5rem"}}>UnSuccessful Payment!</h3>
        {localStorage.setItem("subscribed", "false")}
        <form action="http://localhost:80/create-checkout-session" method="POST">
    

      <input type="hidden" name="priceId" value="price_G0FvDp6vZvdwRZ" />
      <button type="submit" onClick={()=>{localStorage.setItem("subscribed","maybeTrue")}}>Retry Payment</button>
    </form>
        
    </div>
  )
}

export default FailurePayment
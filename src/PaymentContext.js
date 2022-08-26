import { createContext, useState } from "react";
import React  from 'react';
const payContext = createContext({});

export const PaymentContext = ({ children }) => {
    const [subscribed, setSubscribed] = useState(false);
    const changeSubscribed=(value)=>{
        setSubscribed(value)
        console.log(subscribed)
    }
    return (
        <payContext.Provider value={{ subscribed, changeSubscribed }}>
            {children}
        </payContext.Provider>
    )
}

export default payContext;
import React, {useEffect,useState,useContext} from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Chat from "./Pages/Chat/Chat";
import Register from "./Pages/Login/Register"
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import BlogHome from "./Pages/BlogHome/BlogHome";
import Blog from "./Pages/Blog/Blog";
import Video from "./Pages/Video/Video"
import VideoHome from "./Pages/VideoHome/VideoHome"
import FreeVideoHome from "./Pages/VideoHome/FreeVideoHome"

import payContext from "./PaymentContext";
import Payment from "./Pages/Payment Success/payment"
import FailurePayment from "./Pages/Payment Success/failurePayment";
// import Bloghome from "./Pages/Blog_Home/index"
// import Auth from "./Pages/Auth/Auth";

function App() {

  
  return (
    <div className="App">
    <BrowserRouter>
        <Routes>
          <Route path="/register" element={localStorage.getItem("user")===null?<Register/>:<BlogHome/>} />
          <Route path="/login" element={localStorage.getItem("user")===null?<Login/>:<BlogHome/>} />
          <Route path="/" element={localStorage.getItem("user")===null?<Home/>:<BlogHome/>} />
          <Route path="/blog" element={localStorage.getItem("user")!==null?<BlogHome/>:<Home/>}/>
          <Route path="/video" element={JSON.parse(localStorage.getItem("user"))===null?<Home/>:JSON.parse(localStorage.getItem("user")).role==="startup" && localStorage.getItem("subscribed")==="true"?<VideoHome/>:<BlogHome/>}/>
          <Route path="/freevideo" element={JSON.parse(localStorage.getItem("user"))===null?<Home/>:JSON.parse(localStorage.getItem("user")).role==="startup"?<FreeVideoHome/>:<BlogHome/>}></Route>
          <Route path="/blog/:id" element={<Blog/>}/>
          <Route path="/video/:id" element={<Video/>}/>
          <Route path="/success" element={localStorage.getItem("subscribed")==="true" || localStorage.getItem("subscribed")==="maybeTrue"?<Payment/>:<Home/>}/>
          <Route path="/failure" element={localStorage.getItem("subscribed")==="maybeTrue"?<FailurePayment/>:<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

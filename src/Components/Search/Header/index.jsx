import React from 'react';
import './styles.css';
import axios from 'axios';



const Header = () => (
  
  
  <header className='home-header'>

<nav>
          <div class="logo">
            {/* <h1></h1> */}
            <a
              href="/"
              style={{
                fontSize: "2.4rem",
                fontFamily: "'Poppins', sans-serif",
                color: "black",
                style: "italic",
                fontWeight: "700",
              }}
            >
              {" "}
              The Incubator{" "}
            </a>{" "}
            <span
              style={{
                color: "black",
                fontSize: "2.4rem",
                fontFamily: "'Poppins', sans-serif",
                style: "italic",
                fontWeight: "700",
              }}
            >
              {" "}
              hub
            </span>
            
          </div>

        
          <div className="navbar-outside">
            <ul>
              <li  >
                {" "}
               {JSON.parse(localStorage.getItem("user")).role==="startup"?<a  className='nav-a' href= "/video"  >Paid Lectures</a>:<></>}{" "}
              </li>
              <li  >
                {" "}
               {JSON.parse(localStorage.getItem("user")).role==="startup"?<a  className='nav-a' href= "/freevideo"  >Free Lectures</a>:<></>}{" "}
              </li>
              <li  >
                {" "}
                {JSON.parse(localStorage.getItem("user")).role==="startup"?<form action="http://localhost:80/create-checkout-session" method="POST">
    

      <input type="hidden" name="priceId" value="price_G0FvDp6vZvdwRZ" />
      <button type="submit" onClick={()=>{localStorage.setItem("subscribed","maybeTrue")}} style={{"outline": "none","border": "none",
    "padding": "0.2rem 1rem","borderRadius": "5px",
    "fontSize":"15px",
    "background-color": "#0f52ba",
    "color": "#fff",
    "width": "10rem",
    height: "3rem",}}>Checkout</button>
    </form>:<></>}
              </li>
              <li>
                {" "}
                <a  className='nav-a' href = "/" onClick={()=>{localStorage.removeItem("user");localStorage.removeItem("subscribed")}}>Log out</a>{" "}
              </li>
              
              


              {/* <li>  <a href="contact-us">Contact Us</a>
</li> */}
            </ul>
          </div>
          {/* <a href="#" className="toggle-button">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar" ></span>
            </a> */}

          {/* <box-icon name='menu' color="whitesmoke" size="lg" id="menu"></box-icon> */}
        </nav>
    <h2>We Present you</h2>
    <h1>
      <span>“</span> Blogs <span>”</span>
    </h1>
    <p>
      awesome place to make oneself <br /> productive and entertained through
      daily updates.
    </p>
  </header>
 
);

export default Header;

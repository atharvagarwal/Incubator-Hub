// import image from "../images/logo.png";
// import leftPink from "../images/pinkGroup.png";
// import rightEllipse from "../images/EllipseVC.png";
// import './Gsg'

import whiteMenu from "../../img/whiteMenu.png";
// import blackMenu from "../images/blackMenu.png";
import Svg from "./Gsg";
import './Home.css';

// import TGH from "../images/tghnewone.png";
// import CINE from "../images/CineLOGO.png";
// import SOCIAL from "../images/social.png";
// import GLOME from "../images/GlomeNew.png";
// import FINISH from "../images/finishfactoryNew.png";

// import Get from "../images/Get.png";
// import set from "../images/set.png";
// import go from "../images/go.png";
// import vector1 from "../images/firstVector.png";
// import vector2 from "../images/2vector.png";
// import vector3 from "../images/3vector.png";
// import laptop from "../images/onLaptop.png";
import { useNavigate } from 'react-router-dom';
// import work1 from "../images/puzzle.png";
// import work2 from "../images/hands.png";
// import work3 from "../images/money.png";
// import work4 from "../images/play.png";
// import workedWith1 from "../images/finalCine.png";

// import "../../App.css";
import { useEffect, useState } from "react";

// import go from "../images/go.png";

function App() {
  const navigate  = useNavigate();

  // document.getElementById('video-player').controls = false;
  const MoveTo = (e) => {
    e.preventDefault();
     navigate("/register")

  }
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };
  // const styleSvg = {
  //   // maxWidth: "45%",
  //   display: "block",
  //   marginTop: "7rem",
  //   width : "63rem",

  //   marginLeft: "73rem"
  // }

  return (
    <div className="App">
      <div className="head">

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
                color: "white",
                fontSize: "2.4rem",
                fontFamily: "'Poppins', sans-serif",
                style: "italic",
                fontWeight: "700",
              }}
            >
              {" "}
              hub
            </span>
            <button onClick={toggleNav}>
              <img src={whiteMenu} alt="" />
            </button>
          </div>

          {toggleMenu && (
            <div className="navbar-menus">
              <ul>
                {/* <li>
                  {" "}
                  <a href="/">Home</a>{" "}
                </li> */}
                {/* <li>
                  {" "}
                  <a href="/dashboard">Dashboard</a>{" "}
                </li> */}
                {/* <li>
                  {" "}
                  <a href="/blog">Blog</a>{" "}
                </li> */}
                {/* <li>  <a href="contact-us">Contact Us</a> */}
                {/* </li> */}
              </ul>
            </div>
          )}

          <div className="navbar-outside">
            <ul>
              {/* <li>
                {" "}
                <a href="/">Home</a>{" "}
              </li> */}
              <li>
                {" "}
                <a href="/login" 
               
                >LOGIN</a>{" "}
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

        <div className="header-title">
          {/* <div className="image-home">

          <img className="image" src={homeImage} alt="" />
          </div> */}

          <div className="style-svg">
            <Svg />
          </div>
          <div className="head-content">
            <h2>We help startups find their</h2>
            <h2>
              {" "}
              path to <span>success</span>.
            </h2>
            <div className="button">
              <button  onClick={(e) => MoveTo(e)} >Register Now</button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;

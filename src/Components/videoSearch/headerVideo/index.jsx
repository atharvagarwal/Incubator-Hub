import React from "react";
import "./styles.css";

const HeaderVideo = () => (
  <header className="home-header">
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
          <li>
            {" "}
            <a className="nav-a" href="/blog">
              Blog
            </a>{" "}
          </li>
          <li>
            {" "}
            <a className="nav-a" href="/">
              Log out
            </a>{" "}
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
      <span>“</span> Lectures <span>”</span>
    </h1>
    <p>
      awesome place to make oneself <br /> productive and entertained through
      most exceptional lectures.
    </p>
  </header>
);

export default HeaderVideo;

import React from "react";
// import {history} from 'react'
import { useNavigate } from "react-router-dom";
// import Axios from "axios";
import { useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
// import LoadingSpinner from '../components/LoadingSpinner';
import { IconButton, Snackbar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MuiAlert from "@mui/material/Alert";
import "../../Styles/style.css";

// import Logo from './assets/icon-VCTech.png';
// import Image from './assets/VC tech 1.png';
// import Tabs from '../Tabs/tabs';
import { useState } from "react";
import AuthContext from "../../Context/AuthProvider";
// import {Data} from "../Tabs"
// import AuthContext from "../../Context/AuthProvider";
// import Spinner from '../Tabs/Spinner';
const LOGIN_URL = "/auth";

export default function Start() {
  const [role, setRole] = useState('');
  const token = localStorage.getItem("token");
  const { auth, setAuth } = useContext(AuthContext);
  const mySection = {
    position: "relative",
    height: "100vh",
    width: "100%",
    display: "flex",
  };
  //using useState for Showing loading Animation when needed!
  //   const [isLoading, setIsLoading] = useState(false);
  //using useState for Showing Alerts when needed!

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
  };
  //   const initialValues = { username: '', password: ''  , name: '' , role: ''};
  const [Formvalues, setFormvalues] = useState({
    username: "",
    password: "",
    name: "",
    role : "startup"
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);
  const [toastError, setToastError] = useState("Soemthing went wrong");
  const myLog = {
    textAlign: "right",
  };

  const myInput = {
    padding: "1rem 10rem",
    borderRadius: "24.5197px",
    border: "1px solid #8285dc",
    backgroundColor: "white",
    paddingLeft: "1rem",
    fontSize: "1.4rem",
    paddingBottom: "0.6rem",
  };
  const myImage = {
    position: "absolute",
    top: "0",
    left: "0",
    objectFit: "cover",
    width: "85%",
    height: "82%",
    marginTop: "2rem",
    marginLeft: "12rem",
  };
  const myClass = {
    position: "relative",
    height: "72%",
    width: "50%",
    // position: relative;
    // height: 72%;
    marginTop: "8rem",
    marginLeft: "3rem",
    // width: 50%;
  };
  const myForm = {
    marginTop: "10rem",
    marginLeft: "12rem",
  };
  const myhead = {
    marginBottom: "1rem",
    fontSize: "2.4rem",
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "800",
    // fontFamily: 'Baloo Bhai 2, cursive",
  };
  const myusername = {
    marginBottom: "1rem",
  };
  const myHr = {
    marginRight: "49rem",
    marginLeft: "1%",
    borderBottomLeftRadius: "1rem",
    borderBottomRightRadius: "1rem",
    padding: "0.2rem 2rem",
    marginTop: "-1%",
    marginBottom: "4%",
    /* color: rgb(133 199 57); */
    border: "1px solid #8285dc",
    backgroundColor: "#8285dc",
  };
  const myCntnt = {
    width: "47%",
    backgroundColor: "#fffdfd",
  };
  const myPass = {
    marginBottom: "1.3rem",
  };
  const mylabel = {
    fontSize: "2.3rem",
  };
  const myBtn = {
    padding: "0rem 9rem",
    fontSize: "2.2rem",
    backgroundColor: "#8285dc",
    color: "white",
    borderRadius: "24.5197px",
    border: "2px solid #8285dc",
    marginLeft: "-1.4rem",
  };
  //   const myLogo = {
  //     position: 'absolute',
  //     marginLeft: '1.4rem',
  //     marginTop: '1.4rem',
  //   };
  const myTech = {
    position: "absolute",
    marginLeft: "7rem",
    marginTop: "2.4rem",
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "800",
  };
  //Store the values whenever got change!
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormvalues({ ...Formvalues, [name]: value });
    console.log(Formvalues);
  };

  const roleChange = (e)=>{
    setRole( e.target.value)
  }
  //using useNavigate for navigating from login page to home page
  const navigate = useNavigate();
  const myValidation = {
    color: "red",
  };
  const ClassBtn = {
    width: "17rem",
    marginLeft: "-1rem",
  };

  //Login form validation
  const Validate = (value) => {
    const errors = {};
    //regex for vailidating username
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!value.username) {
      errors.username = "username is required!";
    } else if (!regex.test(value.username)) {
      errors.username = "Please Enter a Valid username!";
    }
    if (!value.password) {
      errors.password = "Password is required!";
    } else if (value.password.length < 5) {
      errors.password = "Password must be at least 5 characters";
    }
    return errors;
  };
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(Formvalues);
    }
  }, [formErrors]);
  // Function is called when user click on submit button -> Stores the data -> check the credentials are valid or not -> navigate to home page
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = Validate(Formvalues);
    setFormErrors(errors);

    if (Object.keys(errors).length !== 0) {
      return;
    }

    // setIsLoading(true);
    axios
      .post("http://localhost:80/auth/register", {
        username: Formvalues.username,
        password: Formvalues.password,
        name: Formvalues.name,
        role : role ||  Formvalues.role,
        // sent_from: 'web',
      })
      .then((res) => {
        // console.log("Navigation")
        // setIsLoading(false);
        console.log("This is res.data", res.data.user);
        // TODO: Show error toast
        if (res.data.user) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user", JSON.stringify(res.data.user));
          // console.log();
          console.log(res.data.user);
          //   setAuth(res.data.user);
          navigate("/login"); // On colsole log this navigate is undefined
          setIsSubmit(true);
        }
        // localStorage.setItem("refreshToken", res.data.refreshToken);
        else {
          showAlert(res.data.message, "danger");
        }

        //  navigate("/Project")
      })
      .catch((err) => {
        // setIsLoading(false);
        setToastOpen(true);
        setToastError(err.response.data.message);
      });
  };

  const handleToastClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setToastOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleToastClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  return (
    <>
      {/* creating the login page */}
      <section style={mySection}>
        {/* Toast Begin */}
     
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={toastOpen}
          autoHideDuration={3000}
          onClose={handleToastClose}
          action={action}
          key="topcenter"
        >
          <Alert
            onClose={handleToastClose}
            severity="warning"
            sx={{ fontSize: "1.1rem" }}
          >
            {toastError}
          </Alert>
        </Snackbar>
        {/* Toast End */}
        <div>
          {/* <img src={Logo} alt='Logo' style={myLogo} /> */}
          <h2 style={myTech}>The Incubator hub</h2>
        </div>
        {/* <div className='Img-Box' style={myClass}>
          <img src={Image} alt='image' style={myImage} />
        </div> */}
        <div className="Cntnt-Box" style={myCntnt}>
          <div className="form-box" style={myForm}>
            <h2 style={myhead}>Register</h2>
            <hr style={myHr} />
            <form onSubmit={handleSubmit}>
              <div className="input-box " style={myPass}>
                <label htmlFor="name" style={mylabel}>
                  Name
                </label>
                <div className="input">
                  <input
                    type="name"
                    id="name"
                    name="name"
                    value={Formvalues.name}
                    onChange={handleChange}
                    placeholder="Enter your Name"
                    style={myInput}
                    required
                  />
                </div>
                {/* <p style={myValidation}>{formErrors.password}</p> */}
              </div>
              <div className="input-box" style={myusername}>
                <label htmlFor="username" style={mylabel}>
                  Email
                </label>
                <div className="input">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    value={Formvalues.username}
                    onChange={handleChange}
                    placeholder="Enter your username"
                    style={myInput}
                    required
                  />
                </div>
                <p style={myValidation}>{formErrors.username}</p>
              </div>
              <div className="input-box " style={myPass}>
                <label htmlFor="password" style={mylabel}>
                  Password
                </label>
                <div className="input">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={Formvalues.password}
                    onChange={handleChange}
                    placeholder="Enter your Password"
                    style={myInput}
                    required
                  />
                </div>
                <p style={myValidation}>{formErrors.password}</p>
              </div>
              <div className="input-box " style={myPass}>
                <label htmlFor="role" style={mylabel}>
                  User Type:
                </label>
                <div>
                  {/* <button class="dropbtn">Dropdown</button> */}
                  {/* <div class="dropdown-content"> */}
                  <select
                    style={{
                      padding: "1% 5%",
                      margin: "1% -0.1%",
                      fontSize: "1.4rem",
                    }}
                    value={role}
                    onChange={roleChange}
                  >
                    <option value="startup">Startup</option>
                    <option value="mentor">Mentor</option>
                  </select>
                  {/* <a href="#">Link 3</a> */}
                  {/* </div> */}
                </div>
                {/* <p style={myValidation}>{formErrors.password}</p> */}
              </div>
              <div className="btn" style={ClassBtn}>
                {/* {isLoading ? <LoadingSpinner/> : null} */}
                {/* {!value.password ? alert("fill") :  <a href='/tabs' style={myBtn} onClick={handleSubmit} >Log in</a> } */}
                <button style={myBtn} onClick={(e) => handleSubmit(e)}>
                  Register
                </button>
                {/* {isLoading ? <LoadingSpinner /> : null} */}
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

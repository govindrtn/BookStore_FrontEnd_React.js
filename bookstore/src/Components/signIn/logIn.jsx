import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";
import { logIn } from "../../services/userServices";
import Box from "@mui/material/Box";
const emailRegex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex =
  /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

const useStyle = makeStyles({
  container: {
    width: "25vw",
    height: "45vh",
  },
  subContainer: {
    height: "60%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  secSubContainer: {
    height: "30%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  secSubContainer_child: {
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  secSubContainer_h2: {
    fontFamily: "sans-serif",
    fontWeight: "100",
  },
  TextFeild: {
    // border:'2px solid  red',
    display: "flex",
    flexDirection: "column",
    fontSize: "0.7rem",
    fontFamily: "sans-serif",
  },
  spanTag: {
    // border:'2px solid  red',
    marginLeft: "10rem",
    color: "gray",
  },
});

function LogIn(props) {
  const classes = useStyle();

  const [signinObj, setSigninObj] = useState({
    email: "",
    password: "",
  });

  const [regexObj, setRegexObj] = useState({
    emailBorder: false,
    emailHelper: "",
    passwordBorder: false,
    passwordHelper: "",
  });

  const handleChangeEmail = (event) => {
    setSigninObj((prevState) => ({
      ...prevState,
      email: event.target.value,
    }));
    console.log(event.target.value);
  };

  const handleChangePassword = (event) => {
    setSigninObj((prevState) => ({
      ...prevState,
      password: event.target.value,
    }));
    console.log(event.target.value);
  };

  const onClickButton = () => {
    props.onLogin()
    let emailTest = emailRegex.test(signinObj.email);
    let passwordTest = passwordRegex.test(signinObj.password);

    if (emailTest === false) {
      setRegexObj((prevState) => ({
        ...prevState,
        emailBorder: true,
        emailHelper: "Enter valid email",
      }));
    } else if (emailTest === true) {
      setRegexObj((prevState) => ({
        ...prevState,
        emailBorder: false,
        emailHelper: "",
      }));
    }

    if (passwordTest === false) {
      setRegexObj((prevState) => ({
        ...prevState,
        passwordBorder: true,
        passwordHelper: "Enter valid password",
      }));
    } else if (passwordTest === true) {
      setRegexObj((prevState) => ({
        ...prevState,
        passwordBorder: false,
        passwordHelper: "",
      }));
    }
    console.log(signinObj);
    // console.log(regexObj);

    if (emailTest === true && passwordTest === true) {
      logIn(signinObj)
        .then((res) => {
          localStorage.setItem('token',res.data.result.accessToken)
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
      console.log("Login Success....");
      // alert("Login Success....");
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.subContainer}>
        <Box className={classes.TextFeild}>
          {" "}
          EmailId
          <TextField
            onChange={handleChangeEmail}
            error={regexObj.emailBorder}
            helperText={regexObj.emailHelper}
            variant="outlined"
            size="small"
            // fullWidth
            sx={{ "& > :not(style)": { width: "36ch", fontSize: "0.8rem" }}}
          />
        </Box>

        <Box className={classes.TextFeild}>
          {" "}
          Password
          <TextField
            onChange={handleChangePassword}
            error={regexObj.passwordBorder}
            helperText={regexObj.passwordHelper}
            className=""
            variant="outlined"
            size="small"
            sx={{ "& > :not(style)": { width: "36ch", fontSize: "0.8rem" } }}
          />
          <span className={classes.spanTag}>Forgot password ?</span>
        </Box>
        <Button
          onClick={onClickButton}
          sx={{ width: "33ch", backgroundColor: "#A03037" , }}
          variant="contained" 
        >
          Log in
        </Button>
      </div>
      <div className={classes.secSubContainer}>
        <h2 className={classes.secSubContainer_h2}>or</h2>
        <div className={classes.secSubContainer_child}>
          <Button
            sx={{ width: "14ch", backgroundColor: "#4266B2" }}
            variant="contained"
          >
            FaceBook
          </Button>
          <Button
            sx={{ width: "14ch", backgroundColor: "#F5F5F5", color: "black" }}
            variant="contained"
          >
            Google
          </Button>
        </div>
      </div>
    </div>
  );
}

export default LogIn;

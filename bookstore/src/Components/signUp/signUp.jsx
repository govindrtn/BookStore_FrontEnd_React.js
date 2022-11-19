import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { UserSignUp } from "../../services/userServices";
import Box from "@mui/material/Box";
// const fullnameRegex = /^[A-Z]{1}[a-z]{4,}$/;
const fullnameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
const emailRegex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex =
  /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
const mobileRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

const useStyle = makeStyles({
  container: {
    // border: "2px solid red",
    width: "25vw",
    height: "45vh",
  },
  subContainer: {
    height: "97%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
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

function SignUp() {
  const classes = useStyle();

  const [signUpObj, setSignUpObj] = useState({
    fullName: "",
    // service: "advance",
    email: "",
    password: "",
    mobile: "",
  });

  const [regexObj, setRegexObj] = useState({
    fullnameBorder: false,
    fullnameHelper: "",
    emailBorder: false,
    emailHelper: "",
    passwordBorder: false,
    passwordHelper: "",
    mobileBorder: false,
    mobileHelper: "",
  });

  const handleChangeFullname = (event) => {
    setSignUpObj((prevState) => ({
      ...prevState,
      fullName: event.target.value,
    }));
    console.log(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setSignUpObj((prevState) => ({
      ...prevState,
      email: event.target.value,
    }));
    console.log(event.target.value);
  };

  let handleChangePassword = (event) => {
    setSignUpObj((prevState) => ({
      ...prevState,
      password: event.target.value,
    }));
    console.log(event.target.value);
  };
  let handleChangeMobile = (event) => {
    setSignUpObj((prevState) => ({
      ...prevState,
      mobile: event.target.value,
    }));
    console.log(event.target.value);
  };

  // regex part  ---------------

  const onClickButton = () => {
    let fullnameTest = fullnameRegex.test(signUpObj.firstName);
    let emailTest = emailRegex.test(signUpObj.email);
    let passwordTest = passwordRegex.test(signUpObj.password);
    let mobileTest = mobileRegex.test(signUpObj.mobile);

    if (fullnameTest === false) {
      setRegexObj((prevState) => ({
        ...prevState,
        fullnameBorder: true,
        fullnameHelper: "Enter valid Name",
      }));
    } else if (fullnameTest === true) {
      setRegexObj((prevState) => ({
        ...prevState,
        fullnameBorder: false,
        fullnameHelper: "",
      }));
    }

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
    if (mobileTest === false) {
      setRegexObj((prevState) => ({
        ...prevState,
        mobileBorder: true,
        mobileHelper: "Enter number password",
      }));
    } else if (mobileTest === true) {
      setRegexObj((prevState) => ({
        ...prevState,
        mobileBorder: false,
        mobileHelper: "",
      }));
    }

    console.log(signUpObj);

    if (
      fullnameTest === true &&
      emailTest === true &&
      passwordTest === true &&
      mobileTest === true
    ) {
      UserSignUp(signUpObj)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
      console.log("SignUp Success....");
      // alert("Login Success....");
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.subContainer}>
        <Box className={classes.TextFeild}>
          {" "}
          FullName
          <TextField
            onChange={handleChangeFullname}
            error={regexObj.fullnameBorder}
            helperText={regexObj.fullnameHelper}
            variant="outlined"
            size="small"
            // fullWidth
            sx={{ "& > :not(style)": { width: "36ch", fontSize: "0.8rem" } }}
          />
        </Box>
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
            sx={{ "& > :not(style)": { width: "36ch", fontSize: "0.8rem" } }}
          />
        </Box>
        <Box className={classes.TextFeild}>
          {" "}
          Password
          <TextField
            onChange={handleChangePassword}
            error={regexObj.passwordBorder}
            helperText={regexObj.passwordHelper}
            variant="outlined"
            size="small"
            // fullWidth
            sx={{ "& > :not(style)": { width: "36ch", fontSize: "0.8rem" } }}
          />
        </Box>


        <Box className={classes.TextFeild}>
          {" "}
          Mobile
          <TextField
            onChange={handleChangeMobile}
            error={regexObj.mobileBorder}
            helperText={regexObj.mobileHelper}
            variant="outlined"
            size="small"
            // fullWidth
            sx={{ "& > :not(style)": { width: "36ch", fontSize: "0.8rem" } }}
          />
        </Box>

        <Button
          onClick={onClickButton}
          sx={{ width: "33ch", backgroundColor: "#A03037" }}
          variant="contained"
          disableElevation
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
}

export default SignUp;

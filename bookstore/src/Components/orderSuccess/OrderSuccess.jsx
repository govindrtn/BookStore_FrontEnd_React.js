import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { height } from "@mui/system";
import MuiHeader from "../header/header";
import { useNavigate } from 'react-router-dom';

const useStyle = makeStyles({
  OrderSuccessContainer:{
    overflow:'hidden'
  },
  container: {
    // border: "2px solid red",
    height: "80vh",
    width: "100%",
    // overflow:'hidden'
  },
  containerFirst: {
    // border: "2px solid red",
    height: "55%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginBottom:'3rem'
  },
  containerSecond: {
    // border: "2px solid red",
    height: "40%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection:'column',
    alignItems:'center'
  },
  containerFirstChild: {
    // border: "2px solid blue",
    height: "100%",
    width: "30%",
    display:'flex',
    flexDirection:'column',
    alignItems:'center'
  },
  containerSecondChild: {
    // border: "1px solid black",
    height: "45%",
    width: "60%",
    // display:'flex'
    marginBottom:'1.5rem'
  },
  heading: {
    border: "1px solid gray",
    backgroundColor: "#DCDCDC",
    height: "25%",
    // width: "100%",
    display: "flex",
    justifyContent: "space-around",
    paddingRight: "2rem",
    alignItems:'center',
    fontFamily:'sans-serif'
  },
  content: {
    display: "flex",
    height: "100%",
  },
  firstChildSecond: {
    border: "1px solid gray",
    height: "75%",
    width: "33.33%",
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    fontFamily:'sans-serif'
  },
  firstChildSecond2: {
    border: "1px solid gray",
    height: "75%",
    width: "33.33%",
    justifyContent:'center',
    alignItems:'center',
    fontFamily:'sans-serif',
    fontSize:'0.8rem',
    paddingLeft:'0.4rem'
  },
  imgBoxAndHeading: {
    width: "100%",
    height: "95%",
    // border: "2px solid red",
    objectFit:'cover',
    alignContent:'center',
    marginTop:'2rem'
  },
  orderHeading:{
    width: "100]%",
    height: "25%",
    // border: "2px solid red",
  },
  orderHeadingText:{
    textAlign:'center',
    fontFamily:'sans-serif',
    fontSize:"1.3rem"
  }
  
});

function OrderSuccess() {
  const cls = useStyle();
  const navigate = useNavigate()

  const onContinueButtonClick = () =>{
    console.log("Clicked Continue Button");
    navigate('/dashboard')
  }

  return (
    <div className={cls.OrderSuccessContainer}>
        <MuiHeader/>
    <Box className={cls.container}>
      <Box className={cls.containerFirst}>
        <Box className={cls.containerFirstChild}>
          <Box className={cls.imgBoxAndHeading}>
          <img
          style={{height:'100%', width:'100%' }}
          src={require("./images/orderplaced.jpeg")}
        />
          </Box>
          <Box className={cls.orderHeading}>
            <p className={cls.orderHeadingText}>
            hurray!!! your order is confirmed the order id is #123456 save the order id for further communication..
            </p>

          </Box>
        </Box>
      </Box>
      <Box className={cls.containerSecond}>
        <Box className={cls.containerSecondChild}>
          <Box className={cls.heading}>
            <p>Email Us</p>
            <p>Contact Us</p>
            <p>Address</p>
          </Box>
          <Box className={cls.content}>
            <Box className={cls.firstChildSecond}>
                <p>admin@bookstore.com</p>
            </Box>
            <Box className={cls.firstChildSecond}>
                <p>+91 8163475881</p>
            </Box>
            <Box className={cls.firstChildSecond2}>
                <p>42, 14th Main, 15th Cross, Sector 4 ,opp to BDA complex, near Kumarakom restaurant, HSR Layout, Bangalore 560034</p>
            </Box>
          </Box>
        </Box>
        <Button
        onClick={onContinueButtonClick}
              sx={{
                
                width: "25ch",
                backgroundColor: "#3371B5",
                borderRadius: "none",
                height: "4.5ch",
              }}
              variant="contained"
            >
              Continue shopping
            </Button>
      </Box>
    </Box>
    </div>
  );
}

export default OrderSuccess;

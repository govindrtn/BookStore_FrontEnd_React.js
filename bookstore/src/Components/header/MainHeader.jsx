import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { color, width } from "@mui/system";
import { InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const useStyle = makeStyles({
  containerMain: {
    height: "9vh",
    width: "100%",
    // border: "2px solid red",
    display: "flex",
    backgroundColor: "#A03037",
    boxSizing: "border-box",
  },
  firstChild: {
    height: "100%",
    width: "70%",
    // border: "2px solid blue",
    display: "flex",
    justifyContent: "center",
  },
  SecondChild: {
    height: "100%",
    width: "30%",
    border: "2px solid blue",
  },
  logoandsearchFeild: {
    height: "100%",
    width: "80%",
    // border: "2px solid red",
    display:'flex',
    // justifyContent:"space-evenly"
  },
  logoandheading: {
    // border:'2px solid green',
    height: "100%",
    width: "40%",
    display: "flex",
    alignItems: "center",
    justifyContent:'center'
  },
  bookStoreHeading: {
    fontFamily: "sans-serif",
    color: "white",
    fontWeight: "100",
  },

  searchFeild:{
    // border:'2px solid white',
    height:'100%',
    width:'75%',
    display:'flex',
    alignItems:'center',

  },
  searchBar:{
    // border:'2px solid white',
    backgroundColor:'white',
    borderRadius:'4px',

    height:'60%',
    width:'100%',
    display:'flex',
    alignItems:'center',
    paddingLeft:'1rem',
    paddingRight:'1rem'
  },
  iconContainer:{
    width:"50%",
    height:'100%',
    border:'2px solid green'

  }
  

});

function MainHeader() {
  const cls = useStyle();

  return (
    <Box className={cls.containerMain}>
      <Box className={cls.firstChild}>
        <Box className={cls.logoandsearchFeild}>
          <Box className={cls.logoandheading}>
            <img
              style={{ marginRight: "0.6rem", height: "45%", width: "15%" }}
              src={require("./images/education.png")}
            />
            <h2 className={cls.bookStoreHeading}>BookStore</h2>
          </Box>
          <Box className={cls.searchFeild}>
          <Box className={cls.searchBar}>
            <SearchIcon/>
            <InputBase placeholder="Search.." sx={{width:'70%' , marginLeft:'0.5rem'}}/>
          </Box>
          </Box>
        </Box>
      </Box>
      <Box className={cls.SecondChild}>
        <Box className={cls.iconContainer}>

        </Box>
      </Box>
    </Box>
  );
}

export default MainHeader;

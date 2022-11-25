import React from "react";
import Paper from "@mui/material/Paper";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import HoverRating from "./rating";
import { width } from "@mui/system";
import StarRateIcon from '@mui/icons-material/StarRate';



const useStyle = makeStyles({
  container_main: {
    width: "18vw",
    height: "41vh",
    // border: "2px solid red",
    boxSizing: "border-box",
    borderRadius:'1px',
    margin:'0.75rem'
  },
  ImageBox: { 
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "60%",
    // border:'2px solid green',
    backgroundColor: "#F5F5F5",
  },
  Image:{
    // border:'2px solid green',
    width:'45%',
    height:'80%',
    objectFit:'cover',
  },
  textBox: {
    width: "100%",
    height: "40%",
    // border: "2px solid yellow",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  textBox_dec: {
    width: "85%",
    height: "100%",
    // border: "2px solid blue",
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
  },
  textBox_dec_h2: {
    width: "95%",
    // border: "2px solid red",
    fontFamily:'sans-serif',
    fontSize:'0.9rem',
    color:'#0A0102'
  },
  textBox_dec_p:{
    marginTop:'-0.8rem',
    fontFamily:'sans-serif',
    fontSize:'0.8rem',
    color:'gray',
  },
  textBox_Rating:{
    backgroundColor:'#388E3C',
    borderRadius:'2px',
    // border:'2px solid red',
    width:"14%",
    height:'15%',
    marginTop:'-0.5rem',
    // position:'relative'
    color:'white',
    fontSize:'0.65rem',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  textBox_price:{
    // border:'2px solid red',
    // marginTop:'-0.6rem',
    fontFamily:'sans-serif',
    fontSize:'0.7rem',
    color:'gray',
    textDecoration:'line-through'
  },
  textBox_price_1:{
    fontFamily:'sans-serif',
    fontSize:'0.8rem',
    color:'black',
    fontWeight:'bold'
  },
  textBox_pricebox:{
    display:'flex',
    // border:'2px solid red',
    alignItems:'center',
    width:'45%',
    height:'20%',
    justifyContent:'space-between',
    // alignItems:'center'
  },
});

function Book(props) {
  const cls = useStyle();
  return (
    <Paper className={cls.container_main}>
      <Box className={cls.ImageBox}>
        <Box className={cls.Image}>
        <img
          style={{ marginRight: "0.6rem", objectFit:'cover' }}
          src={require("./images/img1.png")}
        />
        </Box>
      </Box>
      <Box className={cls.textBox}>
        <Box className={cls.textBox_dec}>
          <p className={cls.textBox_dec_h2}>{props.book.bookName}</p>
          <p className={cls.textBox_dec_p}>{props.book.author}</p>
          <Box className={cls.textBox_Rating}>
            4.5 <StarRateIcon fontSize='x-small'/>
          </Box>
        <Box className={cls.textBox_pricebox}>
          <p className={cls.textBox_price_1}>Rs.{props.book.price}</p>
          <p className={cls.textBox_price}>Rs.{props.book.discountPrice}</p>
        </Box>
        </Box>
      </Box>
    </Paper>
  );
}

export default Book;

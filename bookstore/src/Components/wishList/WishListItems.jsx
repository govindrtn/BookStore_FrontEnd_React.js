import React, { useState , useEffect } from "react";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { DeleteWishListItem } from "../../services/bookServices";

const useStyle = makeStyles({
    container:{
        // border:'1px solid gray',
        height:"30%",
        width:'100%',
        display:'flex'
     },
     imageBox:{
        // border:'2px solid blue',
        height:"100%",
        width:'15%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
     },
     textBox:{
        // border:'2px solid blue',
        height:"85%",
        width:'75%'
     },
     buttonBox:{
        // border:'2px solid blue',
        height:"21.5vh",
        width:'10%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'

     },
     textBox_pricebox:{
        display:'flex',
        // border:'2px solid red',
        alignItems:'center',
        width:'15%',
        height:'20%',
        justifyContent:'space-between',
        // alignItems:'center'
    
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
})

function WishListItems(props) {
    console.log("This is from Wish List ",  props.wishListBook.product_id._id);
    const cls = useStyle();

    const onDelete = ()=>{
        DeleteWishListItem(props.wishListBook.product_id._id).then((res)=>{
            console.log(res);
        }).then((err)=>{
            console.log(err);
        })
        console.log("WishList Item deleted...........");
    }

    
  return (
    <Box className={cls.container}>
        <Box className={cls.imageBox}> 
        <img
          style={{ marginRight: "0.6rem" }}
          src={require("./images/img.png")}
        />
        </Box>
        <Box className={cls.textBox}>
            <p style={ {fontFamily:'sans-serif',fontSize:'1.5rem',color:'#0A0102'}} >{props.wishListBook.product_id.bookName}</p>
            <p style={{fontFamily:'sans-serif', fontSize:'1rem', color:'gray'}}>{props.wishListBook.product_id.author}</p>
            <Box className={cls.textBox_pricebox}>
          <p className={cls.textBox_price_1}>Rs.{props.wishListBook.product_id.price}</p>
          <p className={cls.textBox_price}>Rs.{props.wishListBook.product_id.discountPrice}</p>
        </Box>
        </Box>
        <Box className={cls.buttonBox}>
            <DeleteForeverIcon onClick={onDelete} sx={{color:'#9D9D9D'}} />
        </Box>
        
    </Box>
  )
}

export default WishListItems
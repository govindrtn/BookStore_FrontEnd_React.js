import React from 'react'
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";

const useStyle = makeStyles({
    footerContainer:{
        marginTop:'4rem',  ///---------------------------->
        width:'100vw',
        height:'7vh',
        // border:'2px solid red',
        backgroundColor:'#2E1D1E',
        display:'flex',
        justifyContent:'center'
    },
    footertext:{
        width:'81%',
        height:'100%',
        // border:'2px solid red',
        // alignContent:'center',
        // textAlign:'center'
    },
    text:{
        color:'white',
        fontFamily:'sans-serif',
        fontSize:'0.7rem',
        letterSpacing:'0.2ch',
        alignItems:'center',
        padding:'0.3rem',
        fontWeight:'bold'
    }

})



function Footer() {
    const cls = useStyle();
  return (
    <Box className={cls.footerContainer}>
        <Box className={cls.footertext}>
            <p className={cls.text}>Copyright © 2020, Bookstore Private Limited. All Rights Reserved..</p>
        </Box>

    </Box>
    
  )
}

export default Footer
import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import { display, height } from "@mui/system";
import WishListItems from "./WishListItems";
import { GetWishList } from "../../services/bookServices";
import MuiHeader from "../header/header";
import Paper from '@mui/material/Paper';

const useStyle = makeStyles({
  wishlistContainer:{
    overflow:'hidden'
  },
  container: {
    // border:'2px solid red',
    // height: "100vh",
    height:'auto',
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop:'2.5rem'
  },
  container2: {
    // border:'2px solid red',
    // border: "1px solid gray",
    // height: "80%",
    height:'auto',
    width: "70%",
    display:'flex',
    flexDirection:'column'
  },
  container_heading: {
    width: "100%",
    height: "10%",
    // border: "1px solid gray",
    borderRadius: "2px",
    // backgroundColor: "#E4E4E4",
    display: "flex",
    alignItems: "center",
    // fontWeight:"10"
  },
});

function WishList() {
  const cls = useStyle();
  const [wishList, setWishList] = useState([]);
  console.log("WIshList Books ____________>------>", wishList);

  useEffect(() => {
    GetWishList()
      .then((res) => {
        console.log(res);
        setWishList(res.data.result);
        console.log("wishList Item--------->", res.data.result);
      })
      .catch((err) => {
        console.log(err);
        console.log(" unable to get wishList Item--------->");
      });
  }, [wishList]);

  return (
    <div className={cls.wishlistContainer}>
      <MuiHeader />
      <Box className={cls.container}>
        <Paper variant="outlined" square  className={cls.container2}>
          <Box className={cls.container_heading}>
            <h2
              style={{
                paddingLeft: "2rem",
                fontWeight:'150',
                fontFamily: "sans-serif",
                color: "#0A0102",
                opacity: "0.7",
              }}
            >
              My WishList ({wishList.length})
            </h2>
          </Box>
          {/* <WishListItems/> */}
          {wishList.map((wishListBook) => (
            <WishListItems wishListBook={wishListBook} />
          ))}
        </Paper>
      </Box>
    </div>
  );
}
export default WishList;

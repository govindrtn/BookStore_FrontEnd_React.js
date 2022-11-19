import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import Button from "@mui/material/Button";
import { GetCartItems } from "../../services/bookServices";
import { logDOM } from "@testing-library/react";
import CartBook from "./cartBook";
import CustomerDetails from "../BookDetaills/customerDetails/CustomerDetails";
import OrderSummery from "../orderSummery/OrderSummery";
import MuiHeader from "../header/header";

const useStyle = makeStyles({
  container: {
    // border: "2px solid red",
    // height: "140vh",
    height:'auto',
    width: "100%",
    display: "flex",
    flexDirection:'column',
    justifyContent: "center",
    alignItems:'center',
    // alignItems:'center'
    marginTop:"-1.5rem",
  },
  container2: {
    border: "1px solid #707070",
    // border:'2px solid blue',
    height: "33%",
    width: "70%",
    marginTop: "5rem",
  },
  container3: {
    // border:'2px solid blue',
    // border: "1px solid #707070",
    height: "20%",
    width: "100%",
    display: "flex",

    // marginBo:'5rem'
  },
  headingBox1: {
    // border:'2px solid green',
    height: "100%",
    width: "60%",
    display: "flex",
    alignItems: "center",
    fontFamily: "sans-serif",
  },
  headingBox2: {
    height: "100%",
    width: "43%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop:'0.6rem'
  },
  headingBoxchild: {
    border: "1px solid #DCDCDC",
    // borderRadius:'5px',
    height: "60%",
    width: "90%",
    display: "flex",
    alignItems: "center",
    // justifyContent:'space-around
  },
  headingButton: {
    // border: "2px solid red",
    height: "60%",
    width: "90%",
  },
});

function MyCart() {
  const cls = useStyle();

  const [cartItems, setCartItems] = useState([]);
  const [customerToggle, setCustomerToggle] = useState(false);
  // const [cartQuantity, setCartQuantity] = useState([])
    // const [orderList, setOrderList] = useState([])
  console.log(" Cart Items------->", cartItems);

  useEffect(() => {
    getCartItems();
  }, []);

  const getCartItems = () => {
    GetCartItems()
      .then((res) => {
        console.log(res);
        setCartItems(res.data.result); 
        // setCartQuantity(res.data.result)
        // setOrderList(res.data.result)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <MuiHeader/>
    <Box className={cls.container}>
      <Box className={cls.container2}>
        <Box className={cls.container3}>
          <Box className={cls.headingBox1}>
            <h2 style={{ paddingLeft: "1.6rem", fontWeight: "200" }}>
              My Cart({cartItems.length})
            </h2>
          </Box>
          <Box className={cls.headingBox2}>
            <Box className={cls.headingBoxchild}>
              <FmdGoodIcon
                sx={{
                  color: "#A03037",
                  paddingLeft: "0.7rem",
                  paddingRight: "0.7rem",
                }}
                fontSize="small"
              />
              <p style={{ fontFamily: "sans-serif", fontSize: "0.8rem" }}>
                BridgeLabz Solution LLP, no
              </p>
            </Box>
          </Box>
        </Box>
        {cartItems.map((cartBook) => (
          <CartBook cartBook={cartBook} />
        ))}
        <Box className={cls.cartBookButton}>
         
        </Box>
      </Box>
      {customerToggle ? (
            <CustomerDetails />
          ) : (
            <Button 
            className={cls.placeOrderButton}
            onClick={()=>setCustomerToggle(true)}
              sx={{
                
                width: "18ch",
                backgroundColor: "#3371B5",
                borderRadius: "none",
                height: "4.5ch",
                position: "absolute",
                marginLeft: "50%",
                // marginTop: "-15%",
              }}
              variant="contained"
            >
              PLACE ORDER
            </Button>
          )}
    </Box>
    </div>
  );
}

export default MyCart;

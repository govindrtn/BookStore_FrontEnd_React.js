import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { AddOrder, GetCartItems } from "../../services/bookServices";
import { useNavigate } from "react-router-dom";
import Paper from '@mui/material/Paper';

const useStyle = makeStyles({
  container:{
    border:'2px solid white',
    marginTop: "-2rem",
    marginBottom: "4rem",
    //  height: "auto",
  },

  containerMain: {
    // border: "1px solid gray",
    // height: "50vh",
    // height: "auto",
    width: "100%",
    marginTop: "2rem",
    // marginBottom: "4rem",
  },
  containerMainHeading: {
    // border: "2px solid blue",
    height: "17%",
    width: "100%",
    fontFamily: "sans-serif",
    // display:'flex'
  },
  containerMainHeading_p: {
    fontFamily: "sans-serif",
    fontSize: "1.2rem",
    fontWeight: "100",
    // padding: "2rem",
    // display: "flex",
    // justifyContent:'center'
    alignItems: "center",
    marginLeft: "2rem",
    // fontWeight:'bold',
  },
  OrderBookAndButton: {
    // border:'3px solid yellow',
    width: "100%",
    height: "auto",
    // height: "65vh",
    display: "flex",
    flexDirection: "column",
  },
  OrderBook: {
    // border: "1px solid blue",
    width: "700px",
    height: "150px",
    display: "flex",

    // flexDirection:'column',
    alignItems: "center",
    // marginBottom:'0.6rem'
  },

  OrderButton: {
    // border: "1px solid blue",
    width: "30%",
    // height: "80%",
    display: "flex",
    alignItems: "flex-end",
    marginLeft: "78%",
    marginTop: "-1%",
  },
  OrderBookimgBox: {
    // border: "1px solid blue",
    width: "30%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  textBox: {
    // border:'2px solid blue',
    height: "80%",
    width: "75%",
  },
  buttonBox: {
    // border:'2px solid blue',
    height: "75%",
    width: "10%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  textBox_pricebox: {
    display: "flex",
    // border:'2px solid red',
    alignItems: "center",
    width: "25%",
    height: "20%",
    justifyContent: "space-between",
    // alignItems:'center'
  },
  textBox_price: {
    // border:'2px solid red',
    // marginTop:'-0.6rem',
    fontFamily: "sans-serif",
    fontSize: "0.7rem",
    color: "gray",
    textDecoration: "line-through",
  },
  textBox_price_1: {
    fontFamily: "sans-serif",
    fontSize: "0.8rem",
    color: "black",
    fontWeight: "bold",
  },
});

function OrderSummery() {
  const cls = useStyle();
  const navigate = useNavigate();

  const [toggle, setToggle] = useState(false);

  const [cartItems, setCartItems] = useState([]);
  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    getCartItems();
  }, []);

  const getCartItems = () => {
    GetCartItems()
      .then((res) => {
        console.log(res);
        setCartItems(res.data.result);
        setOrderList(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onOrderPlace = () => {
    // console.log( "list of order book------------>",cartItems);
    let orderList = [];

    for (let i = 0; i < cartItems.length; i++) {
      let inOrderObj = {
        product_id: cartItems[i].product_id._id,
        product_name: cartItems[i].product_id.bookName,
        product_quantity: cartItems[i].quantityToBuy,
        product_price: cartItems[i].product_id.discountPrice,
      };
      orderList.push(inOrderObj);
    }
    console.log( "order data--------->",orderList);
    let orderObj = { orders: orderList };
    AddOrder(orderObj).then((res)=>{
      console.log(res)
      navigate('/ordersuccess')
    }).catch((err)=>{
      console.log(err);
    })
    console.log("order placed......");
  };
  return (
    <Box className={cls.container}>
    <Paper variant="outlined" square className={cls.containerMain}>
      <Box className={cls.containerMainHeading}>
        <p className={cls.containerMainHeading_p}>Order Summery</p>
      </Box>
      <Box className={cls.OrderBookAndButton}>
        {orderList.map((orderBook) => (
          <Box className={cls.OrderBook}>
            <Box className={cls.OrderBookimgBox}>
              <img
                style={{ marginRight: "0.6rem", height: "80%" }}
                src={require("./images/img.png")}
              />
            </Box>
            <Box className={cls.textBox}>
              <p
                style={{
                  fontFamily: "sans-serif",
                  fontSize: "1.2rem",
                  color: "#0A0102",
                }}
              >
                {orderBook.product_id.bookName}
              </p>
              <p
                style={{
                  fontFamily: "sans-serif",
                  fontSize: "1rem",
                  color: "gray",
                }}
              >
                {orderBook.product_id.author}
              </p>
              <Box className={cls.textBox_pricebox}>
                <p className={cls.textBox_price_1}>
                  Rs.{orderBook.product_id.price}
                </p>
                <p className={cls.textBox_price}>
                  Rs.{orderBook.product_id.discountPrice}
                </p>
              </Box>
            </Box>
          </Box>
        ))}

        <Box className={cls.OrderButton}>
          <Button
            onClick={onOrderPlace}
            sx={{
              width: "18ch",
              backgroundColor: "#3371B5",
              borderRadius: "none",
              height: "4.5ch",
              // marginTop:'5%',
              marginBottom:'0.5rem'
              // position: "absolute",
            }}
            variant="contained"
          >
            Checkout
          </Button>
        </Box>
      </Box>
    </Paper>
    </Box>
  );
}

export default OrderSummery;

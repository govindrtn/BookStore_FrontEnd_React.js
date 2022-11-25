import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import Button from "@mui/material/Button";
import {
  cartItemQuantity,
  DeleteCartItem,
  GetCartItems,
} from "../../services/bookServices";
import { logDOM } from "@testing-library/react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { fontFamily } from "@mui/system";

const useStyle = makeStyles({
  cartBook_1: {
    // border: "1px solid gray",
    height: '170px',
    width: "100%",
    display: "flex",
  },
  cartBookDetails: {
    // border: "2px solid blue",
    height: "100%",
    width: "70%",
    display: "flex",
  },
  cartBookButton: {
    // border: "2px solid green",
    height: "50%",
    width: "30%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5.3rem",
  },
  cartBookImgbox: {
    // border: "2px solid green",
    height: "90%",
    width: "23%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "0.5rem",
    marginTop: "0.5rem",
    marginBottom: "1rem",
  },
  cartBookData: {
    // border: "2px solid green",
    height: "100%",
    width: "77%",
  },
  textBox_pricebox: {
    display: "flex",
    // border:'2px solid red',
    alignItems: "center",
    width: "20%",
    height: "20%",
    justifyContent: "space-between",
    marginTop: "-0.5rem",
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
  couterButton: {
    // border:'2px solid red',
    height: "30px",
    marginTop: "0.5rem",
    display: "flex",
  },
  removeButton: {
    marginLeft: "1.5rem",
    cursor: "pointer",
    fontSize: "0.8rem",
    fontFamily: "sans-serif",
  },
});

function CartBook(props) {
  const cls = useStyle();
  const [count, setCount] = useState(1);

  const onDecrement = (id, quantity) => {
    console.log("cartitem id decreasing quantity ------->", id);
    if (count > 1) {
      setCount((count) => Math.max(count - 1, 1));
      // let countObj = { cartItem_id: id, quantityToBuy: quantity - count };
      let countObj = { cartItem_id: id, quantityToBuy: quantity - 1 };
      console.log("quantity value of cart", countObj);
      cartItemQuantity(countObj)
        .then((res) => {
          console.log("decrement cart item value ", res);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setCount(1);
    }
  };

  const onIncrement = (id, quantity) => {
    console.log("cartitem id increassing quantity ------->", id);
    setCount((count) => count + 1);
    // let countObj = { cartItem_id: id, quantityToBuy: quantity + count };
    let countObj = { cartItem_id: id, quantityToBuy: quantity + 1 };
    cartItemQuantity(countObj)
      .then((res) => {
        console.log("increment cart item value ", res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onDeleteClick = () => {
    console.log("cart item delete id ----------->" , props.cartBook._id);
    DeleteCartItem(props.cartBook._id)
      .then((res) => {
        console.log(res);
        console.log("Cart Item deleted......");
      })
      .catch((err) => {
        console.log(err);
        console.log("Cart Item not deleted......");
      });
    // console.log("Cart Item deleted......");
  };

  return (
    <Box className={cls.cartBook_1}>
      <Box className={cls.cartBookDetails}>
        <Box className={cls.cartBookImgbox}>
          <img
            style={{ marginRight: "0.6rem", height: "80%" }}
            src={require("./images/img.png")}
          />
        </Box>
        <Box className={cls.cartBookData}>
          <h2 style={{ fontFamily: "sans-serif", fontSize: "1rem" }}>
            {props.cartBook.product_id.bookName}
          </h2>
          <p style={{ fontFamily: "sans-serif", fontSize: "0.9rem" }}>
            {" "}
            {props.cartBook.product_id.author}
          </p>
          <Box className={cls.textBox_pricebox}>
            <p className={cls.textBox_price_1}>
              Rs.{props.cartBook.product_id.price}
            </p>
            <p className={cls.textBox_price}>
              Rs.{props.cartBook.product_id.discountPrice}
            </p>
          </Box>
          <Box className={cls.couterButton}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "0.8rem",
                width: "6rem",
                backgroundColor: "white",
              }}
            >
              <button
                style={{
                  borderRadius: "50%",
                  padding: "0.05rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "white",
                  border: "1px solid gray",
                }}
                // onClick={() => setCount((count) => Math.max(count - 2, 1))}
                // onClick={onDecrement}
                onClick={() =>
                  onDecrement(
                    props.cartBook.product_id._id,
                    props.cartBook.product_id.quantityToBuy
                  )
                }
              >
                <RemoveIcon fontSize="small" />{" "}
              </button>
              <h3
                style={{
                  height: "20px",
                  width: "45px",
                  border: "1px solid gray",
                  borderRadius: "10%",
                  marginLeft: "0.5rem",
                  marginRight: "0.5rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontFamily: "sans-serif",
                  fontWeight: "100",
                }}
              >
                {count}
              </h3>
              <button
                style={{
                  borderRadius: "50%",
                  padding: "0.05rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "white",
                  border: "1px solid gray",
                }}
                // onClick={() => setCount((count) => count + 1)}
                onClick={() =>
                  onIncrement(
                    props.cartBook.product_id._id,
                    props.cartBook.product_id.quantityToBuy
                  )
                }
              >
                {" "}
                <AddIcon fontSize="small" />{" "}
              </button>
            </div>
            <Box onClick={onDeleteClick} className={cls.removeButton}>
              Remove
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default CartBook;

import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import StarRateIcon from "@mui/icons-material/StarRate";
import Button from "@mui/material/Button";
// import AddTocartButton from "./AddTocartButton";
import AddCounter from "./AddCounter";
import StarIcon from "@mui/icons-material/Star";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import { display } from "@mui/system";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { AddToCart, AddToWishList, GetCartItems } from "../../services/bookServices";
import { useNavigate } from "react-router-dom";

const useStyle = makeStyles({
  BookContainer: {
    width: "100%",
    height: "120vh",
    // border: "2px solid red",
    display: "flex",
    justifyContent: "center",
  },
  bookcontainerChild: {
    width: "85%",
    height: "100%",
    // border: "2px solid red",
    display: "flex",
    flexDirection: "row",
  },
  imageContainer: {
    width: "50%",
    height: "100%",
    // border: "2px solid blue",
    display: "flex",
    justifyContent: "flex-end",
  },
  textContainer: {
    width: "50%",
    height: "100%",
    // border: "2px solid blue",
  },
  imagebox: {
    width: "100%",
    height: "65%",
    // border: "2px solid green",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  imageboxFirstChild: {
    width: "85%",
    height: "85%",
    border: "1px solid gray",
    objectFit: "cover",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  bookDescription: {
    width: "100%",
    height: "20%",
    // border: "2px solid yellow",
    borderBottom: "1px solid gray",
  },
  bookDescription_title: {
    width: "100%",
    height: "30%",
    // border: "1px solid yellow",
    display: "flex",
    alignItems: "center",
    fontFamily: "sans-serif",
    fontSize: "1.9rem",
  },
  bookDescription_author: {
    width: "100%",
    height: "18%",
    // border: "1px solid yellow",
    display: "flex",
    alignItems: "flex-end",
    fontFamily: "sans-serif",
    color: "gray",
  },
  textBox_Rating: {
    backgroundColor: "#388E3C",
    borderRadius: "2px",
    // border: "2px solid red",
    width: "8%",
    height: "13%",
    marginTop: "-0.3rem",
    // position:'relative'
    color: "white",
    fontSize: "0.85rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  textBox_price: {
    // border:'2px solid red',
    // marginTop:'-0.6rem',
    fontFamily: "sans-serif",
    fontSize: "0.9rem",
    color: "gray",
    textDecoration: "line-through",
  },
  textBox_price_1: {
    fontFamily: "sans-serif",
    fontSize: "1.5rem",
    color: "black",
    fontWeight: "200",
  },
  textBox_pricebox: {
    display: "flex",
    // border:'2px solid red',
    marginTop: "0.6rem",
    alignItems: "center",
    width: "28%",
    height: "20%",
    justifyContent: "space-between",
    // alignItems:'flex-end'
  },
  bookDetails: {
    width: "100%",
    height: "14%",
    // border: "2px solid red",
    borderBottom: "1px solid gray",
    display: "flex",
    alignItems: "center",
  },
  bookDetailsChild: {
    width: "100%",
    height: "80%",
    // border: "2px solid red",
    alignItems: "center",
  },
  bookDetails_title: {
    width: "100%",
    height: "15%",
    fontSize: "0.9rem",
    // border: "2px solid blue",
    fontFamily: "sans-serif",
    color: "gray",
  },
  bookDetails_desc: {
    width: "90%",
    marginTop: "-0.6rem",
    // height: "80%",
    fontSize: "0.75rem",
    // border: "2px solid blue",
    fontFamily: "sans-serif",
    color: "gray",
  },
  imageboxButtons: {
    width: "85%",
    height: "10%",
    // border: "2px solid blue",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  costumerFeedback: {
    width: "100%",
    height: "60%",
    // border: "1px solid black",
    fontFamily: "sans-serif",
    fontWeight: "100",
  },
  costumerFeedbackBox: {
    width: "96.5%",
    height: "35%",
    // border: "2px solid blue",
    paddingLeft: "0.6rem",
    paddingRight: "0.6rem",
    backgroundColor: "#F5F5F5",
    borderRadius: "5px",
  },
  StarIconsBox: {
    width: "100%",
    height: "18%",
    // border: "2px solid blue",
  },
  StarBox: {
    width: "60%",
    height: "auto",
    // border: "2px solid blue"
  },
  commentTextArea: {
    width: "100%",
    height: "200%",
    // border: "2px solid blue",
    display: "flex",
    justifyContent: "center",
  },
  costumerfeedBacktext: {
    width: "100%",
    height: "25%",
    // border: "2px solid blue",
    paddingLeft: "0.6rem",
  },
  costumerfeedBackStars: {
    width: "60%",
    // border: "2px solid red",
    height: "25%",
    marginTop: "-0.6rem",
  },
  costumerfeedBackpera: {
    width: "80%",
    // border: "2px solid red",
    height: "45%",
    marginTop: "-1rem",
  },
});
function BookDetails(props) {
  const navigate = useNavigate();
  const cls = useStyle();
  const [toggle, setToggle] = useState(false);
  const [wishListToggle, setWishListToggle] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  console.log("cartList", cartItems._id);


  // -------->
  useEffect(() => {
    getCartItems();
  }, []);

  const getCartItems = () => {
    GetCartItems()
      .then((res) => {
        console.log(res);
        setCartItems(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // const onAddToCart = () => {
  //   // let cartItemExist = cartItems.map( item => item._id == props.bookDetail._id );
  //   let cartItemExist = cartItems.map( item => item._id )
  //   console.log("cart item exist", cartItemExist);
  //   if (cartItemExist) {
  //     for(let i = 0; i<= cartItemExist.length;i++){
  //       console.log(cartItemExist[i]);
  //       if(cartItemExist[i] === props.bookDetail._id){
  //         setToggle(true);
  //       }
  //     }
  //   } 
  //   else {
  //     AddToCart(props.bookDetail._id)
  //       .then((res) => {
  //         console.log(res);
  //         console.log("Book Added in cart .....");
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //         console.log("Book not Added in Cart .....");
  //       });
  //   }
  // };

  // ------------->

  const onAddToCart = () => {
    setToggle(true);
    // console.log(" --------------->>>>>>>>>>>----->", props.bookDetail._id);
    AddToCart(props.bookDetail._id)
      .then((res) => {
        console.log(res);
        console.log("Book Added in cart .....");
      })
      .catch((err) => {
        console.log(err);
        console.log("Book not Added in Cart .....");
      });
  };

  const addToWishList = () => {
    AddToWishList(props.bookDetail._id)
      .then((res) => {
        console.log(res);
        console.log("Book Added in WishList .....");
      })
      .catch((err) => {
        console.log(err);
        console.log("Book not Added in WishList....");
      });
    setWishListToggle(true);
  };

  const addToOpenWishList = () => {
    navigate("/wishlist");
  };

  return (
    <Box className={cls.BookContainer}>
      <Box className={cls.bookcontainerChild}>
        <Box className={cls.imageContainer}>
          <Box className={cls.imagebox}>
            <Box className={cls.imageboxFirstChild}>
              <img
                className={cls.imageboxFirstChild}
                style={{ marginRight: "0.6rem" }}
                src={require("./images/book.jpg")}
              />
            </Box>
            <Box className={cls.imageboxButtons}>
              {toggle ? (
                <AddCounter />
              ) : (
                // <AddTocartButton  onClick={onAddToCart} setToggle={setToggle} />
                <Button
                  square
                  onClick={onAddToCart}
                  sx={{ width: "22ch", backgroundColor: "#A03037" }}
                  variant="contained"
                >
                  Add To Bag
                </Button>
              )}

              {wishListToggle ? (
                <Button
                  onClick={addToOpenWishList}
                  sx={{
                    width: "22ch",
                    backgroundColor: "#333333",
                    borderRadius: "none",
                    height: "5ch",
                  }}
                  variant="contained"
                >
                  <FavoriteIcon
                    sx={{ fontSize: "medium", marginRight: "0.7rem" }}
                  />
                </Button>
              ) : (
                <Button
                  onClick={addToWishList}
                  sx={{
                    width: "22ch",
                    backgroundColor: "#333333",
                    borderRadius: "none",
                  }}
                  variant="contained"
                >
                  <FavoriteIcon
                    sx={{ fontSize: "small", marginRight: "0.7rem" }}
                  />{" "}
                  WishList
                </Button>
              )}
            </Box>
          </Box>
        </Box>
        <Box className={cls.textContainer}>
          <Box className={cls.bookDescription}>
            <Box className={cls.bookDescription_title}>
              <p>{props.bookDetail.bookName}</p>
            </Box>
            <Box className={cls.bookDescription_author}>
              <p>{props.bookDetail.author} </p>
            </Box>
            <Box className={cls.textBox_Rating}>
              4.5 <StarRateIcon fontSize="x-small" />
            </Box>
            <Box className={cls.textBox_pricebox}>
              <p className={cls.textBox_price_1}>Rs.{props.bookDetail.price}</p>
              <p className={cls.textBox_price}>
                Rs.{props.bookDetail.discountPrice}
              </p>
            </Box>
          </Box>
          <Box className={cls.bookDetails}>
            <Box className={cls.bookDetailsChild}>
              <p className={cls.bookDetails_title}>Book Detail</p>
              <p className={cls.bookDetails_desc}>
                {" "}
                {props.bookDetail.description}{" "}
              </p>
            </Box>
          </Box>
          <Box className={cls.costumerFeedback}>
            <h2 style={{ fontWeight: "100", fontSize: "1.2rem" }}>
              Costumer FeedBack
            </h2>
            <Box className={cls.costumerFeedbackBox}>
              <Box className={cls.StarIconsBox}>
                <p style={{ fontSize: "0.8rem", paddingTop: "0.6rem" }}>
                  Overall rating
                </p>
                <Box className={cls.StarBox}>
                  <StarBorderOutlinedIcon sx={{ marginRight: "0.4rem" }} />
                  <StarBorderOutlinedIcon sx={{ marginRight: "0.4rem" }} />
                  <StarBorderOutlinedIcon sx={{ marginRight: "0.4rem" }} />
                  <StarBorderOutlinedIcon sx={{ marginRight: "0.4rem" }} />
                  <StarBorderOutlinedIcon sx={{ marginRight: "0.4rem" }} />
                </Box>
                <Box className={cls.commentTextArea}>
                  <input
                    style={{
                      width: "98%",
                      height: "100%",
                      border: "none",
                      borderRadius: "5px",
                    }}
                    placeholder="Write your creview"
                  ></input>
                </Box>
              </Box>
            </Box>
            <Box className={cls.costumerfeedBacktext}>
              <h3 style={{ fontWeight: "100", fontSize: "0.8rem" }}>
                Govind maithil
              </h3>
              <Box className={cls.costumerfeedBackStars}>
                <StarIcon sx={{ color: "#FFCE00" }} />
                <StarIcon sx={{ color: "#FFCE00" }} />
                <StarIcon sx={{ color: "#FFCE00" }} />
                <StarBorderOutlinedIcon />
                <StarBorderOutlinedIcon />
              </Box>
              <Box className={cls.costumerfeedBackpera}>
                <p style={{ fontSize: "0.75rem", color: "#707070" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  incidunt suscipit molestiae autem, ea assumenda rem facere
                  nisi atque dicta?
                </p>
              </Box>
            </Box>
            <Box className={cls.costumerfeedBacktext}>
              <h3 style={{ fontWeight: "100", fontSize: "0.8rem" }}>
                Aman maithil
              </h3>
              <Box className={cls.costumerfeedBackStars}>
                <StarIcon sx={{ color: "#FFCE00" }} />
                <StarIcon sx={{ color: "#FFCE00" }} />
                <StarIcon sx={{ color: "#FFCE00" }} />
                <StarIcon sx={{ color: "#FFCE00" }} />
                <StarBorderOutlinedIcon />
              </Box>
              <Box className={cls.costumerfeedBackpera}>
                <p style={{ fontSize: "0.75rem", color: "#707070" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  incidunt suscipit molestiae autem, ea assumenda rem facere
                  nisi atque dicta?
                </p>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default BookDetails;

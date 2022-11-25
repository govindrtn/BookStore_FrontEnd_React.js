import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import { Margin, VoiceOverOff } from "@mui/icons-material";
import StarRateIcon from "@mui/icons-material/StarRate";
import { display, fontFamily, width } from "@mui/system";

const Item = styled(Paper)(({ theme }) => ({
  //   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  //   ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: "center",
  height: "16rem",
  color: theme.palette.text.secondary,
  // backgroundColor: "yellow",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const useStyle = makeStyles({
  container_main: {
    // width: "100%",
    // height: "100%",
    // // border: "2px solid red",
    // boxSizing: "border-box",
    // borderRadius: "1px",
    // margin: "0.75rem",
  },

  containerMain: {
    // width: "100%",
    // height: "auto",
    // border: "2px solid red",
    // overflow: "hidden",
    // display: "flex",
    // justifyContent: "center",
  },
  container: {
    // width: "85%",
    // height: "auto",
    // border: "2px solid red",
  },
  bookContainer: {
    // border: "2px solid blue",
    display: "flex",
    flexDirection: "column",
    width:"15.3rem",
    margin:'0.7rem'
  },
  imageContainer: {
    // border: "2px solid green",
    height: "60%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
  },
  textContainer: {
    // border: "2px solid green",
    height: "40%",
    width: "98%",
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  imageBox: {
    width: "45%",
    height: "90%",
    // border: "2px solid green",
  },
  textBox: {
    width: "90%",
    height: "95%",
    // border: "2px solid red",
  },
  bookName: {
    // border: "2px solid red",
    display: "flex",
    justifyContent: "flex-start",
    fontFamily: "sans-serif",
    color: "black",
    marginTop: "0.2rem",
    marginBottom: "0.1rem",
  },
  bookAuthor: {
    // border: "2px solid red",
    display: "flex",
    justifyContent: "flex-start",
    fontFamily: "sans-serif",
    color: "gray",
    fontSize: "0.8rem",
    marginBottom: "0.2rem",
  },
  textBox_Rating: {
    backgroundColor: "#388E3C",
    marginTop: "0.3rem",
    borderRadius: "2px",
    // border:'2px solid red',
    width: "14%",
    height: "15%",
    // marginTop:'-0.5rem',
    // position:'relative'
    color: "white",
    fontSize: "0.65rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  textBox_pricebox: {
    display: "flex",
    // border:'2px solid red',
    alignItems: "center",
    width: "45%",
    height: "20%",
    justifyContent: "space-between",
    // alignItems:'center'
    marginTop: "0.35rem",
  },
  textBox_price_1: {
    fontFamily: "sans-serif",
    fontSize: "0.8rem",
    color: "black",
    fontWeight: "bold",
  },
  textBox_price: {
    // border:'2px solid red',
    // marginTop:'-0.6rem',
    fontFamily: "sans-serif",
    fontSize: "0.7rem",
    color: "gray",
    textDecoration: "line-through",
  },
});

export default function Books(props) {
  const cls = useStyle();
  return (
    <Box className={cls.containerMain}>
      <Box className={cls.container}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <Item className={cls.bookContainer}>
                <Box className={cls.imageContainer}>
                  <Box className={cls.imageBox}>
                    <img
                      style={{ marginRight: "0.6rem", objectFit: "cover" }}
                      src={require("./images/img1.png")}
                    />
                  </Box>
                </Box>
                <Box className={cls.textContainer}>
                  <Box className={cls.textBox}>
                    <Box className={cls.bookName}>{props.book.bookName}</Box>
                    <Box className={cls.bookAuthor}>{props.book.author}</Box>
                    <Box className={cls.textBox_Rating}>
                      4.5 <StarRateIcon fontSize="x-small" />
                    </Box>
                    <Box className={cls.textBox_pricebox}>
                      <p className={cls.textBox_price_1}>Rs. {props.book.price}</p>
                      <p className={cls.textBox_price}>Rs. {props.book.discountPrice}</p>
                    </Box>
                  </Box>
                </Box>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

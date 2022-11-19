import React, { useState, useEffect } from "react";
import MuiHeader from "../Components/header/header";
import { makeStyles } from "@mui/styles";
import Book from "../Components/TakeBook1/Book";
import { getBookList } from "../services/bookServices";
import Footer from "../Components/footer/footer";
import BookDetails from "../Components/BookDetaills/BookDetails";
import Box from "@mui/material/Box";
import MyCart from "../Components/myCart/myCart";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const useStyle = makeStyles({
  body: {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
  container: {
    width: "100vw",
    height: "auto",
    boxSizing: "borderbox",
    // border: "2px solid red",
  },
  bookContainer: {
    width: "100%",
    height: "auto",
    // border: "2px solid blue",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  bookcon: {
    width: "80%",
    height: "80%",
    display: "flex",
    flexWrap: "wrap",
    // border: "2px solid green",
  },
  countContainer: {
    width: "100%",
    height: "10vh",
    display: "flex",
    justifyContent: "center",
    // border:'2px solid red'
  },
  countContainer_1: {
    width: "78%",
    height: "10vh",
    // border:'2px solid red',
    display: "flex",
    alignItems: "center",
    fontFamily: "sans-serif",
  },
  count_h2: {
    fontSize: "1.1rem",
    marginRight: "0.2rem",
    fontWeight: "100",
    color: "black",
  },
  count_p: {
    fontSize: "0.75rem",
    color: "gray",
  },
});

// const useStyles = makeStyles((theme) => ({
//   selected: {
//       color:'blue',
//   },
// }));


function DashBoard() {
  const cls = useStyle();
  // const classes = useStyles();
  const [bookList, setBookList] = useState([]);
  const [toggleBook, setToggleBook] = useState(false);
  const [bookDetail, setBookDetail] = useState({});
  const [pagination, setPagination] = useState(false);
  // const [cartToggle, setCartToggle] = useState(false)
  const [page, setPage] = useState(1);

  // console.log(bookdDetails);
  const openBookDetails = (books) => {
    setToggleBook(true);
    setBookDetail(books);
    setPagination(true);
  };

  useEffect(() => {
    getBookList()
      .then((res) => {
        console.log("books response--------->", res);
        setBookList(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log("------bookList", bookList);

  return (
    <div className={cls.container}>
      <MuiHeader />
      <div className={cls.countContainer}>
        <div className={cls.countContainer_1}>
          <h2 className={cls.count_h2}>Books</h2>
          <p className={cls.count_p}>({bookList.length} items)</p>
        </div>
      </div>
      <div className={cls.bookContainer}>
        <div div className={cls.bookcon}>
          {toggleBook ? (
            <BookDetails bookDetail={bookDetail} />
          ) : page === 1 ? (
            bookList.slice(0, 12).map((book) => (
              <Box onClick={() => openBookDetails(book)}><Book book={book} /></Box>
            ))
          ) : page === 2 ? (
            bookList.slice(12, 24).map((book) => (
              <Box onClick={() => openBookDetails(book)}><Book book={book} /></Box>
            ))
          ) : page === 3 ? (
            bookList.slice(24, 30).map((book) => (
              <Box onClick={() => openBookDetails(book)}><Book book={book} /></Box>
            ))
          ) : null}
        </div>
      </div>
      {pagination ? null : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            color: "#878787",
            position: "relative",
            top: "20px",
          }}
        >
          <Stack spacing={4}>
            <Pagination
            // className={classes.root}
              shape="rounded"
              size="medium"
              component="div"
              count={3}
              siblingCount={0}
              onChange={(i, value) => setPage(value)}
             color="secondary"
              sx={{width:"25ch"}}
            />
          </Stack>
        </Box>
      )}
      <Footer />
    </div>
  );
}
export default DashBoard;

import React, { useState, useEffect } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
// import AccountCircle from "@mui/icons-material/AccountCircle";
// import MailIcon from "@mui/icons-material/Mail";
// import NotificationsIcon from "@mui/icons-material/Notifications";
// import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useNavigate } from "react-router-dom";

// import {connect} from 'react-redux'

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  // border:'2px solid red',
//   marginLeft: "200px",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft:0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "500px",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

function MuiHeader(props) {
  const navigate = useNavigate()
  
  const onSearchFeild = (e) => {
    props.onSearch(e)

  }
  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  // const isMenuOpen = Boolean(anchorEl);
  // const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const onCartOpen = ()=>{
    navigate('/mycart')
  }

  // const handleProfileMenuOpen = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleMobileMenuClose = () => {
  //   setMobileMoreAnchorEl(null);
  // };

  // const handleMenuClose = () => {
  //   setAnchorEl(null);
  //   handleMobileMenuClose();
  // };

  // const handleMobileMenuOpen = (event) => {
  //   setMobileMoreAnchorEl(event.currentTarget);
  // };
// 
  //    -------------------
  // const openDrawer = () => {
  //   props.listernToHeader1();
  // };
  // console.log(props.lebel);

  // const menuId = "primary-search-account-menu";
  // const renderMenu = (
  //   <Menu
  //     anchorEl={anchorEl}
  //     anchorOrigin={{
  //       vertical: "top",
  //       horizontal: "right",
  //     }}
  //     id={menuId}
  //     keepMounted
  //     transformOrigin={{
  //       vertical: "top",
  //       horizontal: "right",
  //     }}
  //     open={isMenuOpen}
  //     onClose={handleMenuClose}
  //   >
  //     <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
  //     <MenuItem onClick={handleMenuClose}>My account</MenuItem>
  //   </Menu>
  // );

  // const mobileMenuId = "primary-search-account-menu-mobile";

  return (
    <Box style={{width:"100vw", margin:"0px" , padding:'0px', overflow:'hidden'}}>
    <Box sx={{ flexGrow: 1, height: "10vh", backgroundColor: "red"}}>
      <AppBar
        position="static"
        sx={{ height: "100%", backgroundColor: "#A03037" }}
      >
        <Toolbar sx={{ width: "100%" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2}}
          >
            {/* ----------------------------- */}
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              display: {
                xs: "none",
                sm: "block",
                marginLeft: "4rem",
                // border: "2px solid yellow",
              },
            }}
          >
            <div style={{ display: "flex", alignItems: "center" , marginLeft:'1rem'  }}>
              <img
                style={{ marginRight: "0.6rem" }}
                src={require("./images/education.png")}
              />
              <h2
                style={{
                  // border: "2px solid white",
                  color: "white",
                  fontWeight: "100",
                  fontSize: "1.3rem",
                  marginRight: "4rem",
                }}
              >
                BookStore
              </h2>
            </div>
          </Typography>
          <Search sx={{ color: "gray", backgroundColor: "rgb(243, 242, 242)" }}>
            <SearchIconWrapper>
              <SearchIcon sx={{ color: "black" }} />
            </SearchIconWrapper>
            <StyledInputBase
            onChange={onSearchFeild}
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              sx={{ color: "black" }}
            />
          </Search>
          <Box sx={{width:'12vw' }} />
          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
                display: "flex",
                width: "13%",
                // border: "2px solid blue",
                justifyContent: "space-around",
              },
            }}
          >
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge color="error">
                <div>
                <PermIdentityIcon />
                  <span style={{display:'flex',flexDirection:'column' ,fontSize:'0.5rem'}} >Account</span>
                </div>
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge color="error">
                <div>
                  <ShoppingCartOutlinedIcon  onClick={onCartOpen}/>
                  <span style={{display:'flex',flexDirection:'column',fontSize:'0.5rem'}} >Cart</span>
                </div>
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {/* {renderMobileMenu} */}
      {/* {renderMenu} */}
    </Box>
    </Box>
  );
}

export default MuiHeader;

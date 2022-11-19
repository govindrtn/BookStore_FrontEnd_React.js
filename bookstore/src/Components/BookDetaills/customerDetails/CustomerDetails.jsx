import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { display, width } from "@mui/system";
import TextField from "@mui/material/TextField";
import OrderSummery from "../../orderSummery/OrderSummery";
import { EditUser } from "../../../services/bookServices";

const useStyle = makeStyles({
  containerMain: {
    border: "1px solid gray",
    height: "80vh",
    width: "70%",
    marginTop: "1.5rem",
    // marginBottom: "1rem",
        // border: "2px solid red",
  },
  customerDetailsAndAddress: {
    // border:'1px solid gray',
    // border: "2px solid red",
    height: "10%",
    width: "100%",
    display: "flex",
  },
  customerdetails: {
    display: "flex",
    // border: "2px solid red",
    alignItems: "center",
    fontFamily: "sans-serif",
    fontSize: "1.5rem",
    fontWeight: "100",
    width: "70%",
    height: "100%",
    paddingLeft: "2rem",
  },
  customerAddres: {
    // border:'2px solid blue',
    width: "30%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  customerAddres1: {
    width: "70%",
    height: "75%",
    border: "1px solid #A03037",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "sans-serif",
    fontSize: "0.9rem",
    color: "#A03037",
    borderRadius: "3px",
  },
  customerFirstNameLastName: {
    width: "75%",
    height: "15%",
    // border: "1px solid #A03037",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  TextFeild: {
    // border:'2px solid  red',
    display: "flex",
    flexDirection: "column",
    fontSize: "0.7rem",
    fontFamily: "sans-serif",
    marginLeft: "0.7rem",
  },
  spanTag: {
    // border:'2px solid  red',
    marginLeft: "10rem",
    color: "gray",
  },
  workAddressCity: {
    width: "75%",
    height: "40%",
    // border: "1px solid #A03037",
  },
  workAddressHeading: {
    width: "100%",
    height: "17%",
    // border: "1px solid #A03037",
    display: "flex",
    alignItems: "center",
  },
  workAddressHeading_p: {
    fontFamily: "sans-serif",
    fontSize: "1.2rem",
    fontWeight: "100",
    padding: "2rem",
    display: "flex",
    // justifyContent:'center'
    alignItems: "center",
  },
  workAddressHeading_p2: {
    fontFamily: "sans-serif",
    color: "#A03037",
    fontSize: "0.8rem",
    fontWeight: "100",
    cursor: "pointer",
  },
  workAddress: {
    width: "100%",
    height: "35%",
    // border: "1px solid #A03037",
  },
  TextFeild2: {
    // border:'2px solid  red',
    display: "flex",
    flexDirection: "column",
    fontSize: "0.7rem",
    fontFamily: "sans-serif",
    marginLeft: "3.6rem",
  },
  workAddressCityTown: {
    // width: "100%",
    height: "75%",
    // border: "3px solid red",
    marginTop: "1rem",
    display: "flex",
    justifyContent: "center",
  },
  CustomerHomeAddres: {
    // border: "2px solid  red",
    // display: "flex",
    width: "70%",
    height: "25%",
  },
  HomeAddressHeading: {
    // border: "2px solid  blue",
    // display: "flex",
    width: "90%",
    height: "65%",
    marginLeft: "3.2rem",
  },
  HomeAddress_p1: {
    fontFamily: "sans-serif",
    fontSize: "0.8rem",
  },
  HomeAddress_p2: {
    fontFamily: "sans-serif",
    fontSize: "0.78rem",
    marginTop: "-0.5rem",
  },
  radiobuttons:{
    marginLeft:'3.3rem',
    marginTop:'2rem',
    fontFamily:'sans-serif',
    paddingLeft:'0.6rem'
  }
});

function CustomerDetails() {
  const [orderSummeryToggle, setOrderSummeryToggle] = useState(false);

  const [customer, setCustomer] = useState({
    addressType: "",
    fullAddress: "",
    city: "",
    state: "",
  });
  console.log("Customer obj ", customer);

  const handleChangeFullAddress = (event) => {
    setCustomer((prevState) => ({
      ...prevState,
      fullAddress: event.target.value,
    }));
    console.log(event.target.value);
  };

  const handleChangeCityTown = (event) => {
    setCustomer((prevState) => ({
      ...prevState,
      city: event.target.value,
    }));
    console.log(event.target.value);
  };

  const handleChangeState = (event) => {
    setCustomer((prevState) => ({
      ...prevState,
      state: event.target.value,
    }));
    console.log(event.target.value);
  };
  const onRadioButtonChange = (event) => {
    setCustomer((prevState) => ({
      ...prevState,
      addressType: event.target.value,
    }));
    console.log(event.target.value);
  };


  const onContinueCLick = () => {
    setOrderSummeryToggle(true);
    let customerObj = {
      addressType:customer.addressType,
      fullAddress: customer.fullAddress,
      city: customer.city,
      state: customer.state,
    };
    EditUser(customerObj)
      .then((res) => {
        console.log("customer Obj", res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const cls = useStyle();
  return (
    <Box className={cls.containerMain}>
      <Box className={cls.customerDetailsAndAddress}>
        <Box className={cls.customerdetails}>
          <p>Customer Details</p>
        </Box>
        <Box className={cls.customerAddres}>
          <Box className={cls.customerAddres1}>
            <p>Add new Address</p>
          </Box>
        </Box>
      </Box>
      <Box onChange={onRadioButtonChange} className={cls.radiobuttons}>
          <input type="radio" value="work" name="work" /> Work
          <input type="radio" value="home" name="home" /> Home
          <input type="radio" value="other" name="other" /> Other
        </Box>
      <Box className={cls.customerFirstNameLastName}>
        <Box className={cls.TextFeild}>
          {" "}
          FullName
          <TextField
            // onChange={handleChangeEmail}
            // error={regexObj.emailBorder}
            // helperText={regexObj.emailHelper}
            variant="outlined"
            size="small"
            // fullWidth
            sx={{
              "& > :not(style)": {
                width: "40ch",
                fontSize: "0.8rem",
                marginTop: "0.4rem",
              },
            }}
          />
        </Box>

        <Box className={cls.TextFeild}>
          {" "}
          Mobile No.
          <TextField
            // onChange={handleChangeEmail}
            // error={regexObj.emailBorder}
            // helperText={regexObj.emailHelper}
            variant="outlined"
            size="small"
            // fullWidth
            sx={{
              "& > :not(style)": {
                width: "40ch",
                fontSize: "0.8rem",
                marginTop: "0.4rem",
              },
            }}
          />
        </Box>
      </Box>
      <Box className={cls.workAddressCity}>
        <Box Box className={cls.workAddressHeading}>
          <p Box className={cls.workAddressHeading_p}>
            1.Work
          </p>
          <p Box className={cls.workAddressHeading_p2}>
            Edit
          </p>
        </Box>
        <Box className={cls.workAddress}>
          <Box className={cls.TextFeild2}>
            {" "}
            Address
            <TextField
              onChange={handleChangeFullAddress}
              // error={regexObj.emailBorder}
              // helperText={regexObj.emailHelper}
              variant="outlined"
              size="large"
              // fullWidth
              sx={{
                "& > :not(style)": {
                  width: "585px",
                  fontSize: "0.8rem",
                  marginTop: "0.5rem",
                },
              }}
            />
          </Box>
          <Box className={cls.workAddressCityTown}>
            <Box className={cls.TextFeild}>
              {" "}
              City/Town
              <TextField
                onChange={handleChangeCityTown}
                // error={regexObj.emailBorder}
                // helperText={regexObj.emailHelper}
                variant="outlined"
                size="small"
                // fullWidth
                sx={{
                  "& > :not(style)": {
                    width: "41ch",
                    fontSize: "0.8rem",
                    marginTop: "0.4rem",
                  },
                }}
              />
            </Box>
            <Box className={cls.TextFeild}>
              {" "}
              State
              <TextField
                onChange={handleChangeState}
                // error={regexObj.emailBorder}
                // helperText={regexObj.emailHelper}
                variant="outlined"
                size="small"
                // fullWidth
                sx={{
                  "& > :not(style)": {
                    width: "40ch",
                    fontSize: "0.8rem",
                    marginTop: "0.4rem",
                  },
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className={cls.CustomerHomeAddres}>
        <Box Box className={cls.workAddressHeading}>
          <Box>
            <p Box className={cls.workAddressHeading_p}>
              2.Home
            </p>
          </Box>
        </Box>
        <Box className={cls.HomeAddressHeading}>
          <p className={cls.HomeAddress_p1}>Address</p>
          <p className={cls.HomeAddress_p2}>
            BridgeLabz Solutions LLP, No. 42, 14th Main, 15th Cross, Sector 4,
            Opp to BDA complex, near Kumarakom restaurant, HSR Layout, Bangalore
          </p>
        </Box>
      </Box>
      <Box className={cls.CustomerButton}>
        {orderSummeryToggle ? (
          <OrderSummery />
        ) : (
          <Button
            // onClick={() => setOrderSummeryToggle(true)}
            onClick={onContinueCLick}
            sx={{
              width: "18ch",
              backgroundColor: "#3371B5",
              borderRadius: "none",
              height: "4.5ch",
              position: "absolute",
              marginLeft: "49.5%",
              marginTop:'-6%'
            }}
            variant="contained"
          >
            Continue
          </Button>
        )}
      </Box>
    </Box>
  );
}

export default CustomerDetails;

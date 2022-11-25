import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { display, width } from "@mui/system";
import TextField from "@mui/material/TextField";
import OrderSummery from "../../orderSummery/OrderSummery";
import { EditUser } from "../../../services/bookServices";
import Paper from "@mui/material/Paper";
import { InputBase } from "@mui/material";

const useStyle = makeStyles({
  containerMain: {
    // border: "1px solid red",
    height: "70vh",
    width: "70%",
    // marginTop: "1.5rem",
    marginBottom: "1rem",
    // border: "2px solid red",
  },
  containerMainChild: {
    // border: "1px solid red",
    height: "60vh",
    width: "100%",
    marginTop: "1.5rem",
    marginBottom: "1rem",
    // border: "2px solid red",
  },
  customerDetailsAndAddress: {
    // border:'1px solid gray',
    // border: "2px solid red",
    height: "13%",
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
    width: "68%",
    height: "19%",
    // border: "2px solid blue",
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
    width: "45%",
    // height:"20%"
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
    height: "20%",
    // border: "1px solid #A03037",
    display: "flex",
    alignItems: "center",
  },
  workAddressHeading_p: {
    fontFamily: "sans-serif",
    fontSize: "1.2rem",
    fontWeight: "100",
    marginLeft: "1.6rem",
    marginRight: "1rem",
    height: "50%",
    display: "flex",
    // justifyContent:'center'
    alignItems: "center",
    // border: "3px solid blue",
  },
  workAddressHeading_p2: {
    fontFamily: "sans-serif",
    color: "#A03037",
    fontSize: "0.8rem",
    fontWeight: "100",
    cursor: "pointer",
  },
  workAddress: {
    width: "90%",
    height: "75%",
    // border: "1px solid blue",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  TextFeild2: {
    // border:'2px solid  yellow',
    display: "flex",
    flexDirection: "column",
    fontSize: "0.7rem",
    fontFamily: "sans-serif",
    // marginLeft: "3.6rem",
    width: "90%",
  },
  workAddressCityTown: {
    width: "100%",
    height: "85%",
    // border: "3px solid blue",
    marginTop: "1rem",
    display: "flex",
    justifyContent: "center",
  },
  CustomerHomeAddres: {
    // border: "2px solid  red",
    // display: "flex",
    width: "68%",
    height: "15%",
    // display:'flex',
    // flexDirection:'column',
    // alignItems:'center'
  },

  HomeAddress_p2: {
    fontFamily: "sans-serif",
    fontSize: "0.78rem",
    marginTop: "-0.5rem",
  },
  radiobuttons: {
    //
    marginTop: "2rem",
    fontFamily: "sans-serif",
    paddingLeft: "0.6rem",
    marginTop: "-0.1rem",
    // alignContent:'center'
  },
  addresstype: {
    display: "flex",
    height: "10%",
    // border:'2px solid red',
    marginLeft: "2rem",
    marginTop: "2rem",
    alignItems: "center",
    fontFamily: "sans-serif",
  },
  warningBox: {
    // border: '1px solid #A03037',
    backgroundColor: "#F0F0F0",
    height: "5vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  warningBoxText: {
    color: "#A03037",
    fontFamily: "sans-serif",
    fontWeight: "bold",
  },
  customerAndOrderSummyBox: {
    // border:'2px solid red',
    height: "9vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    fontFamily: "sans-serif",
  },
  orderSummBox: {
    height: "90%",
    width: "100%",
    // border:'1px solid gray',
    display: "flex",
    alignItems: "center",
  },
  boxText: {
    color: "#333232",
    fontWeight: "100",
    fontSize: "1.3rem",
    marginLeft: "1.6rem",
  },
});

function CustomerDetails() {
  const cls = useStyle();

  const [orderSummeryToggle, setOrderSummeryToggle] = useState(false);
  const [orderSummeryBox, setOrderSummerBox] = useState(false);
  const [customer, setCustomer] = useState({
    addressType: "",
    fullAddress: "",
    city: "",
    state: "",
  });
  const [Warning, setWarning] = useState(false);

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
    let customerObj = {
      addressType: customer.addressType,
      fullAddress: customer.fullAddress,
      city: customer.city,
      state: customer.state,
    };
    console.log("Customer details Object --------->", customerObj);
    EditUser(customerObj)
      .then((res) => {
        setOrderSummeryToggle(true);
        setOrderSummerBox(true)
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        setWarning(true);
      });
  };

  return (
    <div className={cls.containerMain}>
      <Paper variant="outlined" square className={cls.containerMainChild}>
        {Warning ? (
          <Box className={cls.warningBox}>
            <p className={cls.warningBoxText}>
              Please fill address Details to Continue...
            </p>
          </Box>
        ) : null}
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
        <Box className={cls.customerFirstNameLastName}>
          <Box className={cls.TextFeild}>
            {" "}
            FullName
            <InputBase
              // onChange={handleChangeEmail}
              // error={regexObj.emailBorder}
              // helperText={regexObj.emailHelper}
              variant="outlined"
              size="small"
              // fullWidth
              sx={{
                "& > :not(style)": {
                  width: "95%",
                  fontSize: "0.8rem",
                  marginTop: "0.4rem",
                  border: "1px solid gray",
                  // borderRadius:'5px ',
                  paddingTop: "0.6rem",
                  paddingBottom: "0.6rem",
                },
              }}
            />
          </Box>

          <Box className={cls.TextFeild}>
            {" "}
            Mobile No.
            <InputBase
              // onChange={handleChangeEmail}
              // error={regexObj.emailBorder}
              // helperText={regexObj.emailHelper}
              variant="outlined"
              size="small"
              // fullWidth
              sx={{
                "& > :not(style)": {
                  width: "95%",
                  fontSize: "0.8rem",
                  marginTop: "0.4rem",
                  border: "1px solid gray",
                  // borderRadius:'5px ',
                  paddingTop: "0.6rem",
                  paddingBottom: "0.6rem",
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
              <InputBase
                onChange={handleChangeFullAddress}
                // error={regexObj.emailBorder}
                // helperText={regexObj.emailHelper}
                variant="outlined"
                size="large"
                // fullWidth
                sx={{
                  "& > :not(style)": {
                    width: "100%",
                    fontSize: "0.8rem",
                    // marginTop: "0.5rem",
                    border: "1px solid gray",
                    // borderRadius:'5px ',
                    paddingTop: "1rem",
                    paddingBottom: "1rem",
                    marginTop: "0.3rem",
                  },
                }}
              />
            </Box>
            <Box className={cls.workAddressCityTown}>
              <Box className={cls.TextFeild}>
                {" "}
                City/Town
                <InputBase
                  onChange={handleChangeCityTown}
                  // error={regexObj.emailBorder}
                  // helperText={regexObj.emailHelper}
                  variant="outlined"
                  size="small"
                  // fullWidth
                  sx={{
                    "& > :not(style)": {
                      width: "95%",
                      fontSize: "0.8rem",
                      // marginTop: "0.4rem",
                      border: "1px solid gray",
                      // borderRadius:'5px ',
                      paddingTop: "0.6rem",
                      paddingBottom: "0.6rem",
                      marginTop: "0.3rem",
                    },
                  }}
                />
              </Box>
              <Box className={cls.TextFeild}>
                {" "}
                State
                <InputBase
                  onChange={handleChangeState}
                  // error={regexObj.emailBorder}
                  // helperText={regexObj.emailHelper}
                  variant="outlined"
                  size="small"
                  // fullWidth
                  sx={{
                    "& > :not(style)": {
                      width: "95%",
                      fontSize: "0.8rem",
                      // marginTop: "0.4rem",
                      border: "1px solid gray",
                      // borderRadius:'5px ',
                      paddingTop: "0.6rem",
                      paddingBottom: "0.6rem",
                      marginTop: "0.3rem",
                    },
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className={cls.CustomerHomeAddres}>
          <Box Box className={cls.workAddressHeading}>
            <Box className={cls.addresstype}>
              <p style={{ fontSize: "1.2rem" }}>Addres type</p>
              <Box onChange={onRadioButtonChange} className={cls.radiobuttons}>
                <input type="radio" value="Work" name="Work" /> Work
                <input type="radio" value="Home" name="Home" /> Home
                <input type="radio" value="other" name="other" /> Other
              </Box>
            </Box>
          </Box>
          <Box className={cls.HomeAddressHeading}>
            {/* <p className={cls.HomeAddress_p1}>Address</p>
          <p className={cls.HomeAddress_p2}>
            BridgeLabz Solutions LLP, No. 42, 14th Main, 15th Cross, Sector 4,
            Opp to BDA complex, near Kumarakom restaurant, HSR Layout, Bangalore
          </p> */}
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
                // marginTop: "-6%",
              }}
              variant="contained"
            >
              Continue
            </Button>
          </Box>
        </Box>
        <Box className={cls.CustomerButton}></Box>
      </Paper>

      {
        orderSummeryToggle ? <OrderSummery /> : null
        // (<Box className={cls.customerAndOrderSummyBox}>
        //   <Paper variant="outlined" square className={cls.orderSummBox}>
        //     <h2 className={cls.boxText}>
        //       OrderSummery
        //     </h2>
        //   </Paper>
        // </Box>)
      }
      {orderSummeryBox ? null : (
        <Box className={cls.customerAndOrderSummyBox}>
          <Paper variant="outlined" square className={cls.orderSummBox}>
            <h2 className={cls.boxText}>OrderSummery</h2>
          </Paper>
        </Box>
      )}
    </div>
  );
}

export default CustomerDetails;

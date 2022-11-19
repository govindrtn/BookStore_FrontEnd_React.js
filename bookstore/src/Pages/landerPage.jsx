import React ,{useState}from "react";
import Button from "@mui/material/Button";

import { makeStyles } from "@mui/styles";
// import { border, fontWeight, height } from "@mui/system";
import LogIn from "../Components/signIn/logIn";
import SignUp from "../Components/signUp/signUp";
import { useNavigate } from 'react-router-dom';
// import Login from './LogIn'

const useStyle = makeStyles({
  main_container: {
    width: "98vw",
    height: "100vh",
    backgroundColor: "gray",
    // border:'2px solid red',
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  child_first: {
    height: '65%',
    width: "60%",
    // border: "2px solid red",
    display: "flex",
  },
  firstChild1: {
    top: "0.67rem",
    left: "0px",
    width: "80%",
    height: '95%',
    // border: "2px solid blue",
    borderRadius: "21px",
    background: "#F5F5F5 0% 0%  no-repeat padding-box",
    opacity: 1,
    position: "relative",
    zIndex:'1'
  },
  firstChild1_first: {
    width: "53%",
    height: "100%",
    // border: "2px solid red",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  firstChild1_text: {
    fontFamily: "sans-serif",
    fontWeight: "bold",
    marginTop: "2rem",
  },
  secChild1: {
    // top: "-20px",
    left: "620px",
    width: "30%",
    height: "65%",
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    border: "1px solid #E4E4E4",
    borderRadius: "6px",
    opacity: "1",
    position: "absolute",
    display:'flex',
    flexDirection:'column',
    alignItems :'center',
    zIndex:'2'
  },
  StoreImg: {
    height: "245px",
    width: "245px",
    borderRadius: "50%",
    top: "32px",
  },
  secChild_first: {
    width: "85%",
    height: "20%",
    // border: "2px solid red",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  button: {
    fontWeight: "bold",
    color: "black",
  },
  secChild_sec: {
    width: "100%",
    height: "80%",
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
    // border: "2px solid red",
  },
});

function LanderPage() {
  const navigate = useNavigate()
  const classes = useStyle();
  const [toggle, setToggle] = useState(false)

  const onLogin = () =>{
    navigate('./dashboard')
  }


  return (
    <div className={classes.main_container}>
      <div className={classes.child_first}>
        <div className={classes.firstChild1}>
          <div className={classes.firstChild1_first}>
            <img
               className={classes.StoreImg} 
              src={require("../Components/images/component.png")} 
               alt="" 
             /> 
            <div className={classes.firstChild1_text}>ONLINE BOOK SHOPING</div>
           </div> 
        </div>
        <div className={classes.secChild1}> 
           <div className={classes.secChild_first}>
            <Button onClick={()=>setToggle(false)} className={classes.button}  sx={{fontSize:'1.3rem',fontWeight:'bold' , color:'black'}} size="large"> 
              LOGIN
            </Button>
            <Button onClick={()=>setToggle(true)} className={classes.button} sx={{fontSize:'1.3rem' ,fontWeight:'bold' , color:'black'}} size="large">
               SIGNUP 
            </Button>
          </div>
          <div className={classes.secChild_sec}>
            {
              toggle ? <SignUp/> : <LogIn onLogin={onLogin}/>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default LanderPage;

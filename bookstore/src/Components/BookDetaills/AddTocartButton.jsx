import React from 'react'
import Button from "@mui/material/Button";

const AddTocartButton = (props) => {
    const handleOpenCartCounter = ()=>{
        props.setToggle(true)
    }
  return (
    <Button
     onClick={handleOpenCartCounter}
    sx={{ width: "22ch", backgroundColor: "#A03037" }}
    variant="contained"
  >
    Add To Bag
  </Button>
  )
}

export default AddTocartButton
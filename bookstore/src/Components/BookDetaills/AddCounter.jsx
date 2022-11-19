import React,{useState} from 'react'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const AddCounter = (props) => {
    const [count , setCount] = useState(1)

    const addtoCartClick = ()=>{
      props.onAddToCart()
    } 

  return (
    <div
     style={{display:'flex' ,alignItems:'center' ,justifyContent:'center',height:'2rem', width:'10rem' , backgroundColor:'white' }}>
        <button style={{borderRadius:'50%' , padding:'0.25rem' , display:'flex', alignItems:'center', justifyContent:'center', backgroundColor:'white'  ,border:'1px solid gray'}} onClick={()=>setCount(count => Math.max(count- 2,1))}><RemoveIcon fontSize="small"/>  </button>
        <h3 style={{height:"27px",width:"45px", border:'1px solid gray',borderRadius:'10%',marginLeft:"0.5rem" ,marginRight:"0.5rem", display:'flex', justifyContent:'center', alignItems:'center',fontFamily:'sans-serif', fontWeight:'100'}}>{count}</h3>
        <button style={{borderRadius:'50%' , padding:'0.25rem' , display:'flex', alignItems:'center', justifyContent:'center' , backgroundColor:'white' , border:'1px solid gray'}} onClick={()=>setCount(count=>count+1)}> <AddIcon fontSize="small"/> </button>
        {/* <button onClick={()=>addtoCartClick} style={{borderRadius:'50%' , padding:'0.25rem' , display:'flex', alignItems:'center', justifyContent:'center' , backgroundColor:'white' , border:'1px solid gray'}} onClick={()=>setCount(count=>count+1)}> <AddIcon fontSize="small"/> </button> */}
    </div>
  )
}

export default AddCounter
import React from 'react'
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import MyCart from '../../Components/myCart/myCart';
// import OrderSuccess from '../../Components/signUp/OrderSuccess';
import OrderSuccess from '../../Components/orderSuccess/OrderSuccess';
// import LogIn from '../../Components/signIn/logIn';
// import SignUp from '../../Components/signUp/signUp';
import WishList from '../../Components/wishList/WishList';
import DashBoard from '../DashBoard';

import LanderPage from '../landerPage';

function RouterFun() {
  return (
    <div>
   <Router>
    <Routes>
        <Route exact path='/' element={<LanderPage/>}/>
        <Route  path='/dashboard' element={<DashBoard/>}/>
        <Route  path='/mycart' element={<MyCart/>}/>
        <Route  path='/wishlist' element={<WishList/>}/>
        <Route  path='/ordersuccess' element={<OrderSuccess/>}/>
    </Routes>
   </Router>
   </div>
  )
}
export default RouterFun;

// import LogIn from './Components/logIn';
// import SignUp from './Components/signUp';
import AddCounter from './Components/BookDetaills/AddCounter';
import AddTocartButton from './Components/BookDetaills/AddTocartButton';
import BookDetails from './Components/BookDetaills/BookDetails';
import Footer from './Components/footer/footer';
import Header from './Components/header/header';
import MyCart from './Components/myCart/myCart';
// import OrderSuccess from './Components/signUp/OrderSuccess';
import OrderSummery from './Components/orderSummery/OrderSummery';
import LogIn from './Components/signIn/logIn';
import Book from './Components/TakeBook1/Book';
import WishList from './Components/wishList/WishList';
import DashBoard from './Pages/DashBoard';
import LanderPage from './Pages/landerPage';
// import { Provider } from 'react-redux';
import RouterFun from './Pages/router/router';

function App() {
  return (
    <div>
        <RouterFun/>
      {/* <BookDetails/> */}
      {/* <DashBoard/> */}
      {/* <LanderPage/> */}
      {/* <SignUp/> */}
      {/* <LogIn/> */}
      {/* <WishList/> */}
      {/* <MyCart/> */}
      {/* <OrderSuccess/> */}
      {/* <OrderSummery/> */}
    </div>
  );
}

export default App;

import {Route,Routes} from "react-router-dom"
import PageNotFound from "../pages/PageNotFound"
import Home from "../pages/Home"
import Profile from "../pages/Profile"
import About from "../pages/About"
import Login from "../components/Login"
import Products from "../pages/Products"
import Signup from "../components/Signup"
import ProductDetails from "../pages/ProductDetails"
import Wishlist from "../pages/Wishlist"
import Cart from "../pages/Cart"

const Mainroutes = () => {
  return (
    <Routes>
       <Route path="/" element={<Home/>}></Route>
       <Route path="/about" element={<About/>}></Route>
       <Route path="/profile" element={<Profile/>}></Route>
       <Route path="/signup" element={<Signup/>}></Route>
       <Route path="/login" element={<Login/>}></Route>
       <Route path="/products" element={<Products/>}></Route>
       <Route path="/wishlist" element={<Wishlist/>}></Route>
       <Route path="/cart" element={<Cart/>}></Route>
       <Route path="/product/details/:id" element={<ProductDetails/>}></Route>
       <Route path="*" element={<PageNotFound/>}></Route>
    </Routes>
  )
}

export default Mainroutes


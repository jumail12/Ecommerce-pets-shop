import "./index.css";
import Home from "./pages/Home";
import Navbar from "./comp/Navbar";
import Footer from "./comp/Footer";
import { Routes, Route, useLocation } from "react-router-dom";

import SignUp from "./Login/SignUp";
import Register from "./Login/Register";

import TopProducts from "./comp/TopProducts";

import Dogpage from "./pages/Dogpage";
import Catpage from "./pages/Catpage";

import Dogall from "./comp/Dog/Dogall";
import Dogbeds from "./comp/Dog/Dogbeds";
import Dogfood from "./comp/Dog/Dogfood";

import Catall from "./comp/Cat/Catall";
import Catfood from "./comp/Cat/Catfood";
import Cattreat from "./comp/Cat/Cattreat";

import Pdetails from "./comp/Details/Pdetails";

import Cart from "./pages/Cart";
import Error404 from "./comp/Error404";

import Payment from "./pages/Payment";
import OrderSummary from "./pages/OrderSummary";
import { AdminHome } from "./admin/adminPages/AdminHome";

function App() {
  const location=useLocation();
  const sholudHidden=location.pathname==="/login"||location.pathname==="/register" || location.pathname.startsWith("/admin")
  return (
    <div>
      {!sholudHidden&&<Navbar/>}
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

      {/* login,register */}
        <Route path="/login" element={<SignUp />} />
        <Route path="/register" element={<Register />} />
          
          {/* TopProducts */}
        <Route path="/store" element={<TopProducts />}></Route>

        {/* Dogpage */}
        <Route path="/dog" element={<Dogpage />}>
          <Route index element={<Dogall />} />
          <Route path="dogall" element={<Dogall />} />
          <Route exact path="beds" element={<Dogbeds />} />
          <Route exact path="food" element={<Dogfood />} />
        </Route>

          {/* Catpage */}
        <Route path="/cat" element={<Catpage />}>
          <Route index element={<Catall />} />
          <Route path="catall" element={<Catall />} />
          <Route path="food" element={<Catfood />} />
          <Route path="treat" element={<Cattreat />} />
        </Route>
          
          {/* product deatails */}
        <Route path="/:id" element={<Pdetails />} />

        {/* cart */}
        <Route path="/cart" element={<Cart />} />

        {/* 404 */}
        <Route path="*" element={<Error404 />} />

        {/* Payment */}
        <Route path="/payment" element={<Payment></Payment>} />

        {/* summary */}
        <Route path="/summary" element={<OrderSummary />} />

        {/* admin */}
        <Route path="/admin" element={<AdminHome></AdminHome>}>
        
        </Route>

  
      </Routes>
      {!sholudHidden&&<Footer/>}

      
              
      

      
    </div>
  );
}

export default App;
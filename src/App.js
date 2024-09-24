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

import  AdminHome  from "./admin/adminPages/AdminHome";
import UserDetails from "./admin/adminComp/UserDetails";
import Allproducts from "./admin/adminPages/Allproducts";
import Addproducts from "./admin/adminPages/Addproducts";
import UserList from "./admin/adminPages/UserList";
import AdCat from "./admin/catDog/AdCat";
import AdDog from "./admin/catDog/AdDog";
import UpdateP from "./admin/adminPages/UpdateP";
import Prodetails from "./admin/adminComp/Prodetails";
import Dashboard from "./admin/adminPages/Dashboard";
import PetAdoption from "./comp/PetAdoption";

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

        <Route path="/ad" element={<PetAdoption/>}/>
      
          
          {/* product deatails */}
        <Route path="/item/:id" element={<Pdetails />} />

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
        
        <Route path="alluser" element={<UserList/>}/>
         <Route path="userd/:u" element={<UserDetails />} /> 
         <Route index element={<Dashboard/>}/>
         <Route path="allpro" element={<Allproducts/>}/>
         <Route path="addpro" element={<Addproducts/>}/>
         <Route path="allpro/catall" element={<AdCat/>}/>
         <Route path="allpro/dogall" element={<AdDog/>}/>

         <Route path="edit/:eid" element={<UpdateP/>}/>
         <Route path="prod/:pid" element={<Prodetails/>}/>
         <Route path="dashboard" element={<Dashboard/>}/>
        
        </Route>
        
      </Routes>
      {!sholudHidden&&<Footer/>}
    </div>
  );
}

export default App;
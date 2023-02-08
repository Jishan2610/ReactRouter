
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './componenets/Home';
import About from './componenets/About';
import Navbar from './Navbar';
import Order_Summary from './componenets/Order_Summary';
import No_Match from './componenets/No_Match'
import Products from './componenets/Products';
import FeaturedProducts from './componenets/FeaturedProducts';
import NewProducts from './componenets/NewProducts';
import Users from './componenets/Users';
import { UserDetails } from './componenets/UserDetails';
import Admin from './componenets/Admin';
import React from 'react';

const LazyLoadComponent = React.lazy(()=>import("./componenets/LazyLoadComponent")) 


function App() {
  return (
    <>
      <Navbar/>
       <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='about' element={<About/>}/>
           <Route path='order_summary' element={<Order_Summary/>}/>

           <Route path='lazyloading' element={<React.Suspense fallback={<h3>The Content is Loading...</h3>}>
            <LazyLoadComponent/>
           </React.Suspense>}/>
           {/* <Route path='products' element={<Products/>}/> */}
           {/* for nested routes change the Route from slef closing to a closing tag */}
           <Route path='products' element={<Products/>}>
            {/* this index route basically renders the element which we want to render by default under Product page (So basically when we want to render a nested element to render at parent url we use index route)*/}
            <Route
             index element={<FeaturedProducts/>}/>
            {/* now specify the routes under product */}

            <Route path='featured' element={<FeaturedProducts/>}/>
            <Route path='new' element={<NewProducts/>}/>
           </Route>
           <Route path='users' element={<Users/>}/>
           {/* dynamic routes using url params*/}
           <Route path='users/:userID' element={<UserDetails/>}/>
           {/* though here user/:userID matches user/admin in this case the actual admin page will be rendered as react is smarth enough to first find the actual url and if that's not found then the dynamic routes and if that's not found then not found page */}
           {/* also dynamic routes can be nested  */}
           <Route path='users/admin' element={<Admin/>}/>
           <Route path='*' element={<No_Match/>}/>
       </Routes>
    </>
  );
}

export default App;

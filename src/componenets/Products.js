import React from "react";
import {Link,Outlet} from 'react-router-dom'
//nested routes
//even after configuring the routes for newProducts and FeaturedProducts the Product Page doesn't know where to show and how to show for that purpose react provides the Outlet component
function Products() {
  return (
    <>
      <div>
        <input type="search" placeholder="Search Products" className="search"/>
      </div>
      <nav className="secondary-nav">
        {/* don't include the forware slashes as these are relative paths */}
           <Link to='featured'>Featured</Link>
           <Link to='new'>New</Link>
      </nav>
      <Outlet/>
    </>
  );
}

export default Products;

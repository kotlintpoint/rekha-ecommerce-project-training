import React from 'react'
import { Link } from "react-router-dom";

function Header() {

  const specialItems = [
    { title : "Events", path : "events"},
    { title : "About Us", path : "about"},
    { title : "Best Deals", path : "bestdeals"},
    { title : "Services", path : "services"},
  ]

  return (
        <>
    <div className="agileits_header">
  <div className="w3l_offers">
    <a href="products.html">Today's special Offers !</a>
  </div>
  <div className="w3l_search">
    <form action="#" method="post">
      <input type="text" name="Product" defaultValue="Search a product..." 
      onFocus="this.value = '';"
       onBlur="if (this.value == '') {this.value = 'Search a product...';}" required />
      <input type="submit" defaultValue=" " />
    </form>
  </div>
  <div className="product_list_header">  
    <form action="#" method="post" className="last">
      <fieldset>
        <input type="hidden" name="cmd" value="_cart" />
        <input type="hidden" name="display" value={1} />
        <input type="submit" name="submit" 
        value="View your cart" 
        className="button" />{}
        <Link className="button" to="/" >Login</Link>
      </fieldset>
    </form>
  </div>
  {/* <div className="w3l_header_right">
    <ul>
      <li className="dropdown profile_details_drop">
        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
            <i className="fa fa-user" aria-hidden="true" /><span className="caret" /></a>
        <div className="mega-dropdown-menu">
          <div className="w3ls_vegetables">
            <ul className="dropdown-menu drp-mnu">
              <li><a href="login.html">Login</a></li> 
              <li><a href="login.html">Sign Up</a></li>
            </ul>
          </div>                  
        </div>	
      </li>
    </ul>
  </div> */}
  <div className="w3l_header_right1">
    <h2><a href="mail.html">Contact Us</a></h2>
  </div>
  <div className="clearfix"> </div>
</div>

<div className="logo_products">
  <div className="container">
    <div className="w3ls_logo_products_left">
      <h1><a href="index.html"><span>Grocery</span> Store</a></h1>
    </div>
    <div className="w3ls_logo_products_left1">
      <ul className="special_items">
        {
          specialItems.map((item,position) => <li key={position}>
            <Link to={item.path}>{item.title}</Link><i>/</i>
          </li>)
        }
      </ul>
    </div>
    <div className="w3ls_logo_products_left1">
      <ul className="phone_email">
        <li><i className="fa fa-phone" aria-hidden="true" />(+0123) 234 567</li>
        <li><i className="fa fa-envelope-o" aria-hidden="true" /><a href="mailto:store@grocery.com">store@grocery.com</a></li>
      </ul>
    </div>
    <div className="clearfix"> </div>
  </div>
</div>
</>    
  )
}

export default Header
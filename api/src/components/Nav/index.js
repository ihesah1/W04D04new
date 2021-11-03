import React from "react";
import {Link} from "react-router-dom";

const Nav = ()=>{
return(
    <div className="Nav">
      <ul>
           <li>
             <Link to="/">Home</Link>
           </li>
           <li>
             <Link to="/about">About</Link>
           </li>
           <li>
             <Link to="/contact">Contact</Link>
           </li>
           <li>
             <Link to="/cards">Cards</Link>
           </li>
         </ul>
    </div>
)}
export default Nav;
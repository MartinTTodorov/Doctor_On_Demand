import React from "react";
import {Link} from "react-router-dom";
import '../styles/NavBar.css'

function Navbar(){
    return (
      <div className="whole-navbar">

        <nav>
          <ul>
            <li>
              <Link to="/" className="nav-component">Home</Link>
            </li>
          </ul>
        </nav>
      </div>
      );
    };
    

export default Navbar;
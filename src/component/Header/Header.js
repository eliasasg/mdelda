import React from 'react'
import classes from "./Header.css";
import logo from "../../images/eldanlogo.png"
import ethio from "../../images/ethiopia.png"

// import { BiCart } from "react-icons/bi";
// import { BiSearch } from "react-icons/bi";
// import { HiOutlineLocationMarker } from "react-icons/hi";



function Header() {
  return (
    <>
        <section>
            <div className="header__container">
                {/* logo section*/}
                <div className={classes.logo}>
                    <a href="/"><h1><img src={logo} width={330} alt="" /></h1>
                    </a>
                
                

                </div>
                
                {/* delivery */}
                
                
                <div className="search">
                 <h1>MODEL AND STYLIST</h1>
                </div>
                {/* right side link */}
                
                <div className="order__container">
                    
                    <a href='' className="language">
                        <img src={ethio} alt="ETHIOPIA" />
                    
                    </a>
                    {/* three components */}
                    <a href="">
                    
                    </a>
                    {/* orders */}
                    <a href="">
                    
                    </a>

                </div>

            </div>
        </section>
        {/* <LowerHeader/> */}
    </>
  )
}

export default Header
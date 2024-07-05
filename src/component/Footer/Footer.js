import React from "react";

import logo from "../../images/eldanlogo.png";
import { AiFillFacebook } from "react-icons/ai";
import { TiSocialInstagram } from "react-icons/ti";
import { AiFillYoutube } from "react-icons/ai";

import "./Footer.css";

function FooterMain() {
return (
    <section className="footerWrap">

        <div className="footerlogo">
        <img src={logo} alt="" />
        </div>
        <div className="social">
            <div><AiFillFacebook size={48}/></div>
            <div><TiSocialInstagram  size={48}/></div>
            <div><AiFillYoutube size={48} /></div>

        </div>
        
    </section>
    
);
}

export default FooterMain;

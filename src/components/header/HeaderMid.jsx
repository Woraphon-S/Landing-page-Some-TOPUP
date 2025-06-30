import "./HeaderMid.css"
import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaLine } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";


const HeaderMid = () => {
  const [isToggle, setIsToggle] = useState("ham-icon");


  return (
    <div className='container-in HeaderMid'>
      <div className='search-bar-wrap'>
        <div className="hamurger-menu">
          <i onClick={() => setIsToggle("ham-icon")} className={`ham-icon ${isToggle === 'ham-icon' ? "show-toggle" : ""}`} ><GiHamburgerMenu /></i>
          <i onClick={() => setIsToggle("x-icon")} className={`x-icon ${isToggle === 'x-icon' ? "show-toggle" : ""}`}><RxCross1 /></i>
        </div>
        <div className="Login-btn">
          <button>ล็อกอิน</button>
        </div>
        <div className='logo'>
          <a className='Logo' href="#">SOME <br />TOP UP</a>
        </div>
        <div className="search_bar_area">
          <div className="search-bar">
            <input type="text" placeholder="ค้นหาชื่อเกม" />
            <span className='search-icon'><IoSearch /></span>
          </div>
        </div>
      </div>
      <div className='righ-bar'>
        <div className='auth-tag'>
          <a href="#">ล็อกอิน</a>
          <a href="#">สมัครสมาชิก</a>
        </div>
        <div className='social-icons'>
          <i className='icon'><FaFacebook /></i>
          <i className='icon'><FaLine /></i>
          <i className='icon'><FaTiktok /></i>
        </div>
      </div>
    </div>


  )
}

export default HeaderMid
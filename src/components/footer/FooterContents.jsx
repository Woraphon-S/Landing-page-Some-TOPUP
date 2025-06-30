import { useState } from 'react';
import './FooterContents.css'
import { FaFacebook } from "react-icons/fa";
import { FaLine } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { IoDiamond } from "react-icons/io5";
import { GiPresent } from "react-icons/gi";
import { TiHomeOutline } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";

const FooterContents = () => {
  const [isActive, setIsActive] = useState(null)

  return (
    <div className='FooterContents'>
      <div className="FooterContainer">
        <div className="ft-info-wrap">
          <div className='logo-div'>
            <a className='Logo' href="#">SOME <br />TOP UP</a>
          </div>
          <div className="text-wrap">
            <p>SOMETOPUP Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, incidunt.</p>
            <p>SOMETOPUP Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa.</p>
          </div>
        </div>
        <div className='Services-Wrapper'>

          <div className='Service-lists'>
            <a href="#">คู่มือการใช้งาน</a>
            <a className='eng-text' href="#">About us</a>
            <a href="#">ข้อตกลงการใช้งาน</a>
            <a href="#">นโยบายความเป็นส่วนตัว</a>
            <a href="#">ศูนย์บริการลูกค้า</a>
          </div>
          <div className="right-wrapper">
            <div className="Pay-method">
              <h5>วิธีการชำระเงิน</h5>
              <div className="ul-wrap">
                <ul className='pay-grid'>
                  <li><img src="https://placehold.co/24x24" alt="" /></li>
                  <li><img src="https://placehold.co/24x24" alt="" /></li>
                  <li><img src="https://placehold.co/24x24" alt="" /></li>
                  <li><img src="https://placehold.co/24x24" alt="" /></li>
                  <li><img src="https://placehold.co/24x24" alt="" /></li>

                </ul>
              </div>
            </div>
            <div className="follow_us">
              <h5 className='eng-text'>Media</h5>
              <div className='social-icons'>
                <a className='facebook-icon icon-bag' href="#"><FaFacebook /></a>
                <a className='line-icon icon-bag' href="#"><FaLine /></a>
                <a className='tiktok-icon icon-bag' href="#"><FaTiktok /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="coppyright">
        <p>Copyright © 2025</p>
      </div>
      <div className="footer-bar">
        <ul className='ul-wrap'>
          <li><div onClick={() => setIsActive("เติมเกม")}><i className={isActive === "เติมเกม" ? "active-footer" : ""}><IoDiamond /></i><a >เติมเกม</a></div></li>
          <li><div onClick={() => setIsActive("Gift Shop")}><i className={isActive === "Gift Shop" ? "active-footer" : ""}><GiPresent /></i><a>Gift Shop</a></div></li>
          <li><div onClick={() => setIsActive("หน้าแรก")}><i className={isActive === "หน้าแรก" ? "active-footer" : ""}><TiHomeOutline /></i><a>หน้าแรก</a></div></li>
          <li><div onClick={() => setIsActive("ฉัน")}><i className={isActive === "ฉัน" ? "active-footer" : ""}><CgProfile /></i><a>ฉัน</a></div></li>
        </ul>
      </div>
    </div>
  )
}

export default FooterContents
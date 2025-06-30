import { useState } from 'react';
import './HeaderTop.css'
import { RiArrowDropDownLine } from "react-icons/ri";

const HeaderTop = () => {
  const [isopen, setIsopen] = useState(false)

  const toggleDropdown = () => {
    setIsopen(prev => !prev)
  }

  const [activeLang, setActiveLang] = useState("Thai")

  return (
    <div className='HeaderTop container-in'>
      <a href="#">เพื่มไปยังหน้าหลัก</a>
      <a href="#">คู่มือการใช้งาน</a>
      <a href="#">กิจกรรม</a>
      <a href="#">ศูนย์บริการลูกค้า</a>
      <span id="lang-box" onClick={toggleDropdown}>ภาษา
        <i className='dropdown-icon'>
          <RiArrowDropDownLine />
        </i>
        {isopen && (<div className='list_lang'>
          <a onClick={() => setActiveLang("Thai")} className={activeLang === "Thai" ? "active" : ""} href="#">Thai</a>
          <a onClick={() => setActiveLang("Korean")} className={activeLang === "Korean" ? "active" : ""} href="#">Korean</a>
          <a onClick={() => setActiveLang("English")} className={activeLang === "English" ? "active" : ""} href="#">English</a>
        </div>
        )}
      </span>
    </div>
  )
}

export default HeaderTop
import './Services.css'
import { BsChatDots } from "react-icons/bs";
import { MdVerifiedUser } from "react-icons/md";
import { TbMoneybag } from "react-icons/tb";
import { BiSolidCoupon } from "react-icons/bi";

const Services = () => {
  return (
    <div className='Services'>
      <div className="Services-Container">
        <div className="ServicesBox">
          <div className="services-icon">
            <BsChatDots />
          </div>
          <p>กล่องข้อความ</p>
        </div>
        <div className="ServicesBox">
          <div className="services-icon">
            <MdVerifiedUser />
          </div>
          <p>ยืนยันตัวตน</p>
        </div>
        <div className="ServicesBox">
          <div className="services-icon">
            <TbMoneybag />
          </div>
          <p>โกลด์</p>
        </div>
        <div className="ServicesBox">
          <div className="services-icon">
            <BiSolidCoupon />
          </div>
          <p>คูปองส่วนลด</p>
        </div>
      </div>
    </div>
  )
}

export default Services
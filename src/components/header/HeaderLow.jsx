import './HeaderLow.css'

const HeaderLow = () => {
  return (
    <div className='HeaderLow'>
      <div className='HeaderLow-container'>
        <ul>
          <li><a className='sale-first' href="#">เติมเกม
            <span className='discount-sign-first'>SALE</span>
          </a></li>
          <li><a href="#">โปรไฟล์</a></li>
          <li><a href="#">เติมเงิน</a></li>
          <li><a className='sale-second' href="#">Gift Shop
            <span className='discount-sign-second'>SALE</span>
          </a></li>
          <li><a href="#">Random Market</a></li>
          <li><a href="#">E-sports</a></li>
          <li><a href="#">คู่มือการใช้งาน</a></li>
        </ul>
      </div>
    </div>
  )
}

export default HeaderLow
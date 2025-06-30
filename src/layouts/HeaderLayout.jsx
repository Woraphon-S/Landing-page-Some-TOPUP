import HeaderLow from '../components/header/HeaderLow'
import HeaderMid from '../components/header/HeaderMid'
import HeaderTop from '../components/header/HeaderTop'


const HeaderLayout = () => {
  return (
    <div className='Header'>
      <HeaderTop />
      <HeaderMid />
      <HeaderLow />
    </div>
  )
}

export default HeaderLayout
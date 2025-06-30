import HeaderLayout from './layouts/HeaderLayout'
import './App.css'
import Content from './layouts/Content'
import FooterLayout from './layouts/FooterLayout'
const App = () => {
  return (
    <div className="container">
      <HeaderLayout />
      <Content />
      <FooterLayout />
    </div>
  )
}

export default App
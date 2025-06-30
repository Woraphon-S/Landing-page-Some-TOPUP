import Banner from '../components/content/Banner'
import GameList from '../components/content/GameList'
import Services from '../components/content/Services'
import './Content.css'

const Content = () => {
  return (
    <div className='Content'>
      <Banner />
      <GameList />
      <Services />
    </div>
  )
}

export default Content
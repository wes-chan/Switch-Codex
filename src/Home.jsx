

import './Home.css'
import Hero from './component/Hero.jsx'
import Family from './component/SwitchFamily.jsx'
import SwitchList from './component/SwitchList.jsx'

function Home() {

  return (
    <>
     <Hero
     title="Switch Codex"
     subtitle="Exploring the history and evolution of Cherry MX & Alps switches" 
     />
     <Family/>
     <SwitchList/>
    </>


  )
}

export default Home


import './App.css'
import Contentsection from './components/Contentsection'
import Navbar from './components/Navbar'
import Image from './components/Image'
import Socialmedia from './components/Socialmedia'
import Herosection from './components/Herosection'
import HeroInstagramSection from './components/HeroInstagramSection'
import Superpower from './components/Superpower'
import Updatesection from './components/Updatesection'
import LinksSection from './components/LinksSection'
import Footersection from './components/Footersection'

function App() {


  return (
  <div>
    <Navbar/>
    <Contentsection/>
    <Image/>
    <Socialmedia/>
    <Herosection/>
    <HeroInstagramSection/>
    <Superpower/>
    <Updatesection/>
    <LinksSection/>
    <Footersection/>
  </div>
  )
}

export default App

import './App.css'
import BackgroundChanger from './components/BackgroundChanger'
import Coffee from './components/Coffee'
import ConditionalRendering from './components/ConditionalRendering'
import EventHandling from './components/EventHandling'
import Hooks from './components/Hooks'
import Images from './components/Images'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import Card from './components/Card'
import Sender from './components/Sender'
import Receiver from './components/Receiver'

function App() {

  return (
    <>
    <h1 className='heading'>This is my React JS learning</h1>
    <Coffee/>
    <Hooks/>
    <Images/>
    <EventHandling/>
    <ConditionalRendering/>
    <BackgroundChanger/>
    <BrowserRouter>
    <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </BrowserRouter>
      <Card title="The Coldest Sunset" desc="The coldest sunset blazes in icy hues—lavender, orange, crimson—frost glinting as the frozen world falls silent." hashtag1="#photography" hashtag2="#winter" hashtag3="#sunset"/>
      <Card title="The Hottest Sunset" desc="The hottest sunset burns with fiery reds and golds, the air shimmering as heat waves dance on the horizon." hashtag1="#summer" hashtag2="#sunset" hashtag3="#visitnow"/>
      
      <BrowserRouter>
        <Routes>
          <Route path="/sender" element={<Sender/>}/>
          <Route path="/receiver" element={<Receiver/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
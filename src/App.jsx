import './App.css'
import Coffee from './components/Coffee'
import ConditionalRendering from './components/ConditionalRendering'
import EventHandling from './components/EventHandling'
import Hooks from './components/Hooks'
import Images from './components/Images'

function App() {

  return (
    <>
    <h1 className='heading'>This is my React JS learning</h1>
    <Coffee/>
    <Hooks/>
    <Images/>
    <EventHandling/>
    <ConditionalRendering/>
    </>
  )
}

export default App
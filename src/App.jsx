import Topbar from './components/topbar/Topbar'
import Intro from './components/intro/Intro'
import Works from './components/works/Works'
import About from './components/about/About'

import Menu from './components/menu/Menu'

import './App.scss'
import { useState } from 'react'

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu fullMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro />
        <About />
        <Works />
      </div>
    </div>
  );
}

export default App;

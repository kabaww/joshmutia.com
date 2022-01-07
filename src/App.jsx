import Topbar from './components/topbar/Topbar'
import Intro from './components/intro/Intro'
import Works from './components/works/Works'
import About from './components/about/About'

function App() {
  return (
    <div className="app">
      <Topbar />
      <div className="sections">
        <Intro />
        <Works />
        <About />
      </div>
    </div>
  );
}

export default App;

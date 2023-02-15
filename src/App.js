import './App.css';
import Navigationbar from './components/Navigationbar';
import Intro from './components/intro';
import Trending from './components/trending'
import Anime from './components/anime';

import "./style/Landingpage.css"

function App() {
  return (
    <div>
      {/* intro section */}
      <div className='myBG'>
        <Navigationbar />
        <Intro />
      </div>
      {/* end of intro*/}

      {/* trending section */}
      <div className="trending">
        <Trending />
      </div>
      {/* end of trending section */}

      {/* anime section */}
      <div className='trending'>
      <Anime />
      </div>
      {/* anime section */}
    </div>
  );
}

export default App;

import './App.css';
import logo from './img/logo.png'

function App() {
  return (
    <div className="App">
        <div className="md:bg-blue-500 xl:bg-red-500 bg-yellow-300 mx-auto">
        <nav className="flex justify-between lg:justify-start items-center">
          <div className="logo p-2">
            <img src={logo} width="100%" alt="Imagen"></img>
          </div>
          <div className="links">
            <ul>
              <li><a href="#"></a>Home</li>
              <li><a href="#"></a>Play Together</li>
              <li><a href="#"></a>Explore</li>
              <li><a href="#"></a>Browser Fury</li>
              <li><a href="#"></a>Buy Now</li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default App;

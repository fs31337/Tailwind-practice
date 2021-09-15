import './App.css';
import logo from './img/logo.png'

function App() {
  return (
    <div className="App">
        <div className="mx-auto">
        <nav className="bg-gray-800 flex justify-between lg:justify-start items-center">
          <div className="logo p-2 w-1/6">
            <img src={logo} width="100" alt="Imagen"></img>
          </div>
          <div className="links lg:block hidden w-1/6 md:w-4/6">
            <ul className="menu flex items-center justify-center gap-5">
              <li className="link"><a href="#"></a>Home</li>
              <li className="link"><a href="#"></a>Play Together</li>
              <li className="link"><a href="#"></a>Explore</li>
              <li className="cursor-pointer border-4 border-yellow-400 text-white font-bold p-2 rounded-full hover:bg-white hover:text-black transition duration-500"><a href="#"></a>Browser Fury</li>
              <li className="cursor-pointer rounded-full bg-red-500 text-white font-bold px-4 py-3 hover:text-black hover:bg-white transition duration-500"><a href="#"></a>Buy Now</li>
            </ul>
          </div>

          <div className="block lg:hidden w-1/6 lg:w-4/6">
            <a href="#" className="link" id="mobile-menu" >Menu</a>
            <ul className="mobile-links hidden w-full absolute z-50 left-0 text-center bg-gray-800">
              <li className="link"><a href="#"></a>Home</li>
              <li className="link"><a href="#"></a>Play Together</li>
              <li className="link"><a href="#"></a>Explore</li>
              <li className="cursor-pointer border-4 border-yellow-400 text-white font-bold p-2 rounded-full hover:bg-white hover:text-black transition duration-500"><a href="#"></a>Browser Fury</li>
              <li className="cursor-pointer rounded-full bg-red-500 text-white font-bold px-4 py-3 hover:text-black hover:bg-white transition duration-500"><a href="#"></a>Buy Now</li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default App;

import {useState} from 'react';
import './App.css';
import logo from './img/logo.png';
import heroimg from './img/hero.png';

function App() {
  const [menu, setMenu] = useState(false);
  const toggleClass = () => {
    setMenu(!menu);
  };
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
              <li className="cursor-pointer border-4 border-yellow-400 text-white font-bold p-2 rounded-full hover:bg-white hover:text-black transition duration-500"><a href="#">Browser Fury</a></li>
              <li className="cursor-pointer rounded-full bg-red-500 text-white font-bold px-4 py-3 hover:text-black hover:bg-white transition duration-500"><a href="#">Buy Now</a></li>
            </ul>
          </div>

          <div className="block lg:hidden w-1/6 lg:w-4/6">
            <a href="#" className="link" onClick={() => toggleClass()}>Menu</a>
            <ul className={!menu ? "hidden w-full absolute z-50 left-0 text-center bg-gray-800" : "w-full absolute z-50 left-0 text-center bg-gray-800"}>
              <li className="link"><a href="#"></a>Home</li>
              <li className="link"><a href="#"></a>Play Together</li>
              <li className="link"><a href="#"></a>Explore</li>
              <li className="cursor-pointer border-4 my-4 inline-block border-yellow-400 text-white font-bold p-2 rounded-full hover:bg-white hover:text-black transition duration-500"><a href="#">Browser Fury</a></li>
              <li className="cursor-pointer rounded-full my-4 inline-block bg-red-500 text-white font-bold px-4 py-3 hover:text-black hover:bg-white transition duration-500"><a href="#">Buy Now</a></li>
            </ul>
          </div>
        </nav>
        <section className="header">
          <img src={heroimg} alt="heroimg" />
        </section>

        <section>
          <div className="bg-wave.pattern"></div>
        </section>
      </div>
    </div>
  );
}

export default App;

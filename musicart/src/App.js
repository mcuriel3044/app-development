import './App.css';
import React from 'react'
import Navbars from './components/navbars';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import KarolG from './components/karolg';
import BadBunny from './components/badbunny';
import Taylor from './components/taylor';
import About from './components/about';
import Home from './components/home';
import Karolgimg from './images/Karol_G.jpeg';
import BadBimg from './images/badbunny.jpeg';
import TaylorSimg from './images/Taylor_S.jpeg';
import {useState} from 'react'



function App() {
  const[isOpen, setIsopen]=useState(false)
  return (
    
  <div>
      <h1 className='title'> MUSIC TODAY</h1>

      <BrowserRouter>
      <Navbars />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/' element={<KarolG />} />
          <Route path='/' element={<BadBunny />} />
          <Route path='/' element={<Taylor />} />
          <Route path='/' element={<About />} />

        </Routes>
      
      </BrowserRouter>

    <div className='title'>
      <h2>TOP ARTIST WORLDWIDE IN 2024</h2>
    </div>

    <div className='container'>
      <a className="">
        <img className='img' src={Karolgimg} alt="karolg"/>
      </a>

      <a className=''>
        <img className='img' src={BadBimg} alt="badbunny"/>
      </a>

      <a className=''>
        <img className='img' src={TaylorSimg} alt="taylors"/>
      </a>  
    </div>

    <div className='info'>
      <p><b>KAROL G</b>, as known as Carolina Giraldo Navarro, was born in Medellin, Colombia.<button onClick={function() {setIsopen(!isOpen)}}className='readmorebtn'> {isOpen ? "Hide" : "Read More"}</button>
      </p>
    </div>

    <section>
        {
            isOpen &&
            (
                <div  className='readmore'>
                    <p>She has been  touring the globe for the last year. On Tuesday, July 23, 2024 will be her last concert of her tour in Madrid, Spain.  The concert will be broadcase live on her YouTube channel for all to see.</p>
                </div>
            )
        }
    </section>

    <div className='info'>
      <p><b>BAD BUNNY</b>, as known as Benito Antonio Martinez Ocasio and was born in Puerto Rico.<button onClick={function() {setIsopen(!isOpen)}}className='readmorebtn'> {isOpen ? "Hide" : "Read More"}</button>
      </p>
    </div>

    <section>
        {
            isOpen &&
            (
                <div  className='readmore'>
                    <p>He has been touring the world this last year. He has been invited to the MET gala as well as Vogue in Paris where he performed his biggest hit "Monaco".</p>
                </div>
            )
        }
    </section>

    <div className='info'>
      <p><b>Taylor Alison Swift</b> is an Amercian singer-song writer born in West Reading PA.<button onClick={function() {setIsopen(!isOpen)}}className='readmorebtn'> {isOpen ? "Hide" : "Read More"}</button>
      </p>
    </div>

    <section>
        {
            isOpen &&
            (
                <div  className='readmore'>
                    <p>She has been  touring the globe for the last year along side her new boyfriend, football player, Travis Kelce.  She is an influential figure in today pop culture.  </p>
                </div>
            )
        }
    </section>




  </div>

    
  )
}

export default App;

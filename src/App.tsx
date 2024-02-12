import { useState } from 'react';
import Header from './Components/Header/Header';
import Slider from './Components/Slider/Slider';
import About from './Components/About/About';
import SlipComponent from './Components/Slip_component/SlipComponent';
import Menu from './Components/Menu/Menu';
import SlipComponentSec from './Components/Slip_component_sec/Slip_component_sec';
import Lobby from './Components/Lobby/Lobby';
import Programm_L from './Components/Programm_L/Programm_L';
import News_Sale from './Components/NewsAndSale/News_Sale';
import SlipComponentThird from './Components/Slip_component_third/Slip_component_third';
import History from './Components/History/History';
import Team from './Components/Team/Team';
import Footer from './Components/Footer/Footer';
import './App.css';

function App() {  
  const[sendHeight, setSendHeight] = useState<number>(220);

  return (
    <>
      <div onWheel={e => e.currentTarget.getBoundingClientRect().y <= -100 ? setSendHeight(83) : setSendHeight(220)} className="container-main">
            <Header headerHeight={sendHeight}/>
            <Slider/>
            <About/>
      </div>
            <SlipComponent/>     
            <Menu/>     
            <SlipComponentSec/>
            <Lobby/>
            <Programm_L/>
            <News_Sale/>
            <SlipComponentThird/>
            <History/>
            <Team/>
            <Footer/>
    </>
  )
}
export default App
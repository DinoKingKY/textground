
import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Textgd from './components/Textgd.js';
import How1 from './components/about/How1.js'
import How2 from './components/about/How2.js'
import How3 from './components/about/How3';
import { useState } from 'react';
import {
  Routes,
  Route,
  
} from 'react-router-dom';
import How4 from './components/about/How4';
import Alert from './components/Alert';

function App(props) {
let togstylelight = "bg-gray-600 text-white"
let togstyledark = "bg-gray-200 text-black"


const [modebg, setModebg] = useState("bg-white");
const [modetext, setModetext] = useState("black");
const [toggletitle, setToggletitle] = useState("Dark Mode");
const [togglestyle, setTogglestyle] = useState(togstylelight);
const [alerting, setAlerting] = useState("");

const showalert = (message, visibility)=>{

    setAlerting({
      msg: message,
      vis: visibility
    })

    setTimeout(() => {
      setAlerting("")
    }, 1500);

};


const togglemode = ()=>{
  if (modebg === "bg-white") {
    setModebg('bg-black');
    setToggletitle('Light Mode')
    showalert("Dark Mode has been Enabled", "visible")

  } else {
    setModebg('bg-white')
    setToggletitle('Dark Mode')
    showalert("Light Mode has been Enabled", "visible")

  };

  if (modetext === "black") {
    setModetext('white');
    setTogglestyle(togstyledark)

  } else {
    setModetext('black')
    setTogglestyle(togstylelight)

  };

}

  return (
    <>
    <section className={`${modebg} w-[100vw] text-${modetext} `}>
      <Header title='TEXTGROUND' modetext={modetext} modebg={modebg} togglemode={togglemode} toggletitle={toggletitle} togglestyle={togglestyle} />
       <Alert alerting={alerting} />
      
      <Routes>
        <Route exact path='/' element={< Textgd  modetext={modetext} modebg={modebg} toggletitle={toggletitle} togglestyle={togglestyle}  showalert={showalert}  />}></Route>

        <Route exact path='/about/how1' element={< How1 modetext={modetext}/>}></Route>
        <Route exact path='/about/how2' element={< How2 modetext={modetext}/>}></Route>
        <Route exact path='/about/how3' element={< How3 modetext={modetext}/>}></Route>
        <Route exact path='/about/how4' element={< How4 modetext={modetext}/>}></Route>

      </Routes>

      <Footer title='TEXTGROUND' ownertitle='web developer KD' modetext={modetext} modebg={modebg}/>
      </section>
    </>
  );
}

export default App;

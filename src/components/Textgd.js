import React, { useState } from 'react'
import Confirm from './Confirm';

function Textgd(props) {

  const [text, setText] = useState('');
  const [confirm, setConfirm] = useState("");

  const upbutton = () => {
    let Uppercasetext = text.toUpperCase();
    setText(Uppercasetext);
  };

  const lowbutton = () => {
    let Lowercasetext = text.toLowerCase();
    setText(Lowercasetext);
  };

  const copybutton = (event)=>{
    navigator.clipboard.writeText(text);
    props.showalert("You text is Copied to clipboard", "visible")
  };

  const onchangehandle = (event) => {
    setText(event.target.value);
  };

  const speak = () => {
    let voicetext = new SpeechSynthesisUtterance();
    voicetext.text = text;
    window.speechSynthesis.speak(voicetext);
  }


  const showconfirm = (message, visibility)=>{

    setConfirm({
      msg: message,
      vis: visibility
    })

  };

  const clearbutton = () => {
    showconfirm("Did you want to clear all text", "visible");

  };
  const conybtn = ()=>{
    setConfirm("")
    setText("")
    
  }
  const connbtn = ()=>{
    setConfirm("")
  }


  return (
    <>
     
     <Confirm confirm={confirm} conybtn={conybtn} connbtn={connbtn}  />

    <section className={`${props.modebg}  text-${props.modetext} w-[100vw] mytext`}>
      <h1 className={`uppercase text-3xl  font-semibold text-center  pb-3`}>
        Text  Playground 
      </h1>

      <div className={`flex items-center flex-col    `} >

        <textarea   className={`xl:w-3/4 w-5/6 border-orange-600 border-2 p-2 ${props.modebg}  text-${props.modetext}`} value={text}  id="textpg" rows="10" onChange={onchangehandle} placeholder="ENTER YOUR TEXT" ></textarea>
      </div>
      <div className="xl:w-3/4 w-5/6 mx-auto my-1 flex flex-col lg:flex-row">
       
        <div className="my-1 flex space-x-2  ">

        <button disabled={text.length === 0} className={`text-sm  ${props.togglestyle} sm:text-base  font-bold px-1  rounded active:bg-orange-500`} onClick={upbutton}  >ABC</button>

        <button disabled={text.length === 0} className={`text-sm  ${props.togglestyle} sm:text-base  font-bold px-1  rounded active:bg-orange-500`} onClick={lowbutton}  >abc</button>

        <button disabled={text.length === 0}  className={`text-sm  ${props.togglestyle} sm:text-base  font-bold px-1  rounded active:bg-orange-500`} onClick={speak}>Speak</button>

        <button disabled={text.length === 0} className={`text-sm  ${props.togglestyle} sm:text-base  font-bold px-1  rounded active:bg-orange-500`} onClick={copybutton}>Copy</button>

        <button disabled={text.length === 0} className={`text-sm  ${props.togglestyle} sm:text-base  font-bold px-1  rounded active:bg-orange-500`} onClick={clearbutton}  >Clear</button>
     
        </div>
        <div className='flex lg:ml-5 sm:space-x-2  flex-wrap' >

          <h2 className={` ${props.modetext} font-semibold `}>
            {text.split(/\s/).filter((ele)=>{return ele.length!==0}).length} Words and {text.length} Characters
          </h2>

          <h2 className={` ${props.modetext} font-semibold `}>
            Time taken to read : {0.006*text.split(/\s/).filter((ele)=>{return ele.length!==0}).length} minutes
          </h2>
        </div>
      </div>

      <div className="xl:w-3/4 w-5/6 mt-5   mx-auto ">
        <h2 className=' md:text-2xl font-semibold'>TEXT PREVIEW</h2>
        <p className='px-1'>{text.length>0?text:"NOTHING TO PREVIEW"} </p>
      </div>
      </section>
    </>
  )
}

export default Textgd
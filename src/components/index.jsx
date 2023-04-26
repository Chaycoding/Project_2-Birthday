import Confetti from 'react-confetti';
import React, { useState, useRef, useEffect } from 'react';
import img from './Images/her.jpg';
import img1 from './Images/cup.jpg';
import HomePage from './tingz.tsx';

function Main() {
    const [height, setHeight] = useState(null);
    const [ width, setWidth] = useState(null);
    const [wind, setWind] = useState(0.1)
    const confetiRef = useRef(null);

        useEffect(() => {
            setHeight(confetiRef.current.clientHeight);
            setWidth(confetiRef.current.clientWidth);
          }, []);

          setInterval(() => {
            setWind( Math.random()/10)
          }, 5000)

    return (
            <div className="confettie-wrap h-[100rem] bg-[#483d8b]" ref={confetiRef}>
                <Confetti numberOfPieces={150} width={width} height={height} wind={wind} />
              <div className='h-[650px] w-full pt-[100px] hidden sm:block ' style={{backgroundImage: `url(${img})`, backgroundSize:'cover', backgroundPosition:'center'}}>
                <h1 className='bounce-in-top main text-center glass h-[150px] font-semibold text-8xl mt-[100px]' style={{textShdaow: '-1px 1px 0 #000 ,1px 1px 0 #000, 1px -1px 0 #000, -1px -1px 0 #000'}}>Many happy returns uncle!!</h1>
              </div>
              <div className='h-[550px] w-full pt-[100px] sm:hidden visible ' style={{backgroundImage: `url(${img1})`, backgroundSize:'cover', backgroundPosition:'center'}}>
                <h1 className='text-center main bounce-in-top text-white text-5xl mt-[50px]' style={{textShdaow: '-1px 1px 0 #000 ,1px 1px 0 #000, 1px -1px 0 #000, -1px -1px 0 #000', backdropFilter:'10px'}}>Many happy returns uncle!!</h1>
              </div>

                <div>
                  <HomePage/>
                </div>
               
            </div>
        
     );
}

export default Main;
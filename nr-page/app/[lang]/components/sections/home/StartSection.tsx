'use client'
import Image from 'next/image'
import catpixel from "@/public/assets/img/catpixel.gif"
import laptoppixel from "@/public/assets/img/laptoppixel.png"

import { useEffect, useState } from "react";


export const StartSection = (props : {landing:any}) => {
    const [myName, setMyName] = useState(false);
    const [textToStart, setTextToStart] = useState(false);
    const [startRead, setStartRead] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setMyName(true)
        }, 1000);
        setTimeout(() => {
            setTextToStart(true)
        }, 2500);
        setTimeout(() => {
            setStartRead(true)
        }, 3000);
        
    }, []);
    
    return(
        <>
            <div className='grid grid-rows-2  w-full'>
              <div className={`transition-all text-center px-2 duration-500 -space-y-10 ${myName?"translate-y-0 opacity-1":"translate-y-20 opacity-0"}`}>
                {/* <span className='text-[50px] p-0'>{props.landing.im}</span> */}
                <h1 className='text-[150px] p-5 text-shadow-landing playwrite-cursive'>{props.landing.name}</h1>
                <h2 className='text-[30px] p-5  text-yellow-400 playwrite-moderne'>{props.landing.profession}</h2>
              </div>
              {/* <div className="">
                <div className="flex">
                  <Image src={laptoppixel} alt="cat pixel" width={70} height={70} className=" pt-10"/>
                  <Image src={catpixel} alt="cat pixel" width={100} height={60} className="mb-2"/>
                </div>
              </div> */}
              <div className='text-center flex justify-center '>
                <div className='p-5 rounded-md w-fit mb-5 h-fit'>
                  <p className={` playwrite-moderne py-2 transition-all duration-500 ${textToStart?"translate-y-0 opacity-1":"-translate-y-20 opacity-0"} text-[28px] xl:text-2xl`}>{`${props.landing.welcome.split("*")[0]}`}</p>
                  <p className={` playwrite-moderne py-2 transition-all duration-500 ${textToStart?"translate-y-0 opacity-1":"-translate-y-20 opacity-0"} text-[28px] xl:text-4xl`}>{`${props.landing.welcome.split("*")[1]}`}</p>
                </div>
                <a href='#summary' className={`playwrite-moderne  transition-all  
                  duration-500  ${startRead?"opacity-1":"opacity-0"} text-[40px] text-center 
                  absolute bottom-0  `}>{`${props.landing.start}`}<div className='animate-bounce text-yellow-400 font-extrabold'>↓</div></a>
              </div>

              
            </div>
        
        </>
    )
}
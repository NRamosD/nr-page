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
            <div className=' my-auto '>
              <div className={`transition-all duration-500 -space-y-10 ${myName?"translate-y-0 opacity-1":"translate-y-20 opacity-0"}`}>
                <span className='text-[50px] p-0'>{props.landing.im}</span>
                <h1 className='text-[100px] p-0 uppercase text-shadow-landing'>{props.landing.name}</h1>
                <h2 className='text-[20px] p-0 uppercase text-yellow-400'>{props.landing.profession}</h2>
              </div>
              <div className="">
                <h3 className='text-[60px] uppercase'>{`${props.landing.welcome.split("!")[0]}!`}</h3>
                <div className="flex">
                  <Image src={laptoppixel} alt="cat pixel" width={70} height={70} className=" pt-10"/>
                  <Image src={catpixel} alt="cat pixel" width={100} height={60} className="mb-2"/>
                </div>
              </div>
              <p className={`transition-all duration-500 ${textToStart?"translate-y-0 opacity-1":"-translate-y-20 opacity-0"} text-[40px] uppercase`}>{`${props.landing.welcome.split("!")[1]}`}</p>
              <a href='#summary' className={`transition-all animate-bounce duration-500  ${startRead?"opacity-1":"opacity-0"} text-[40px] uppercase`}>{`${props.landing.start}`}<div className='animate-bounce text-white'>↓</div></a>
            </div>
        
        </>
    )
}
'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState, } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';


import ToolTip from '../../ToolTip';
import { WorkPositionComponent } from '../../WorkPositionComponent';
import testImage from "@/public/assets/img/palmbeach.jpg"


export const AboutSection = (props : {about:any}) => {

    


    useEffect(() => {
        AOS.init({
            // Global settings:
            disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
            startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
            initClassName: 'aos-init', // class applied after initialization
            animatedClassName: 'aos-animate', // class applied on animation
            useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
            disableMutationObserver: false, // disables automatic mutations' detections (advanced)
            debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
            throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
            

            // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
            offset: 420, // offset (in px) from the original trigger point
            delay: 0, // values from 0 to 3000, with step 50ms
            duration: 400, // values from 0 to 3000, with step 50ms
            easing: 'ease', // default easing for AOS animations
            once: false, // whether animation should happen only once - while scrolling down
            mirror: false, // whether elements should animate out while scrolling past them
            anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

        });
    }, []);

    
    
    return(
        <>
            <div className='h-full'>
                <div className='grid relative grid-cols-10 gap-5 md:gap-10 pl-20'>
                    <div className='w-full col-span-10 md:col-span-6 align-text-bottom relative'>
                        <div className=" md:absolute bottom-32">
                            <h2 className="playwrite-cursive text-5xl my-4 text-shadow-landing">And about me...</h2>
                            <div className="p-4">
                                <p className="playwrite-moderne text-white space-text text-lg">
                                    All my life, the world of technology has been one of my passions, and fortunately, it has become my way of life through coding. I have to admit that I didn't discover this passion until university, when I realized that I would love it. Since then, I have been coding continuously and learning everything I can to help solve problems that arise while I try to transform ideas into reality and make life a little easier.
                                </p>
                            </div>
                            <div className=''>
                                <h3 className=' py-5 playwrite-cursive'>Some of my hobbies</h3>
                                <div className='flex playwrite-moderne'>
                                    <span className='py-1 px-4 mx-2 w-auto bg-white shadow-md text-black rounded-3xl'>
                                        <p>Soccer</p>
                                    </span>
                                    <span className='py-1 px-4 mx-2 w-auto bg-white shadow-md text-black rounded-3xl'>
                                        <p>Soccer</p>
                                    </span>
                                    <span className='py-1 px-4 mx-2 w-auto bg-white shadow-md text-black rounded-3xl'>
                                        <p>Soccer</p>
                                    </span>
                                    <span className='py-1 px-4 mx-2 w-auto bg-white shadow-md text-black rounded-3xl'>
                                        <p>Soccer</p>
                                    </span>
                                    <span className='py-1 px-4 mx-2 w-auto bg-white shadow-md text-black rounded-3xl'>
                                        <p>Soccer</p>
                                    </span>
                                    <span className='py-1 px-4 mx-2 w-auto bg-white shadow-md text-black rounded-3xl'>
                                        <p>Soccer</p>
                                    </span>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='h-[100vh] w-full col-span-10 md:col-span-4 m-auto relative'>
                        <Image 
                        src={testImage}
                        alt="me"
                        width={500}
                        height={500}
                        className=" h-full w-full object-cover object-center bg-white p-10 shadow-lg shadow-black  "
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
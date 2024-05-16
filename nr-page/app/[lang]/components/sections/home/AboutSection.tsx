'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState, } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';


import ToolTip from '../../ToolTip';
import { WorkPositionComponent } from '../../WorkPositionComponent';



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
            <div className='h-full grid grid-cols-10 gap-5 md:gap-10'>
            <div className='w-full col-span-10 md:col-span-6 align-text-bottom relative'>
                <div className=" md:absolute bottom-0">
                <h2 className="text-5xl my-4 text-shadow-landing">And about me...</h2>
                <div className=" rounded-md p-4">
                    <p className="text-base md:text-xl text-white ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend tempor viverra. Fusce molestie mauris id elit bibendum, dapibus luctus ipsum tristique. Pellentesque tristique dapibus turpis sit amet porttitor. Nam et volutpat lorem. Curabitur pellentesque sollicitudin odio, eu ultrices tortor porta sit amet.
                    </p>
                </div>
                </div>
            </div>
            <div className='h-fit w-fit col-span-10 md:col-span-4 m-auto relative'>
                <Image 
                src={""}
                alt="me"
                width={500}
                height={500}
                className=" w-[300px] 2xl:w-[400px] object-cover rounded-lg xl:shadowed-me bg-white"
                />
            </div>
        </div>
        </>
    )
}
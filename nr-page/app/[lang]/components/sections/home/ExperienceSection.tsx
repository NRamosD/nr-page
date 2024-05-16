'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState, } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';


import ToolTip from '../../ToolTip';
import { WorkPositionComponent } from '../../WorkPositionComponent';



export const ExperienceSection = (props : {exp:any}) => {

    


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
            <h2 className=" p-5 text-5xl xl:hidden">EXPERIENCE</h2>
            <h2 className=" px-5 xl:text-5xl 2xl:text-6xl vertical-text hidden xl:block">EXPERIENCE</h2>
            <div className='relative h-[80vh] overflow-y-auto border-[20px] border-double m-4'>
            <WorkPositionComponent experience={props.exp.experience}/>
            <hr/>
            <WorkPositionComponent experience={props.exp.experience}/>
            <hr/>
            <WorkPositionComponent experience={props.exp.experience}/>
            <hr/>
            <WorkPositionComponent experience={props.exp.experience}/>
            <hr/>
            <WorkPositionComponent experience={props.exp.experience}/>
            <hr/>
            <div className="grid box-to-show-experience h-80 ">
                <h3 className="text-[4.5em] m-auto text-shadow-landing">
                New adventures await!
                </h3>
            </div>
            </div>
        </>
    )
}
'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState, } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';


import ToolTip from '../../ToolTip';
import html_logo from "../../../../../public/assets/img/techs/front/html.png"
import css_logo from "../../../../../public/assets/img/techs/front/css.png"
import js_logo from "../../../../../public/assets/img/techs/front/js.png"
import ts_logo from "../../../../../public/assets/img/techs/front/typescript.png"
import react_logo from "../../../../../public/assets/img/techs/front/react.png"
import angular_logo from "../../../../../public/assets/img/techs/front/angular.png"
import bootstrap_logo from "../../../../../public/assets/img/techs/front/bootstrap.png"
import tailwindcss_logo from "../../../../../public/assets/img/techs/front/tailwindcss.png"
import reactnative_logo from "../../../../../public/assets/img/techs/front/react_native.png"
import nextjs_logo from "../../../../../public/assets/img/techs/front/nextjs-large.png"
import android_logo from "../../../../../public/assets/img/techs/front/android_studio.png"
import PulseLoading from '../../PulseLoading';



export const SkillsSection = (props : {skills:any}) => {

    


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
            <div className='grid gap-2 m-auto'>
            <h2 className="text-4xl xl:text-[5em] font-extrabold tracking-[.25em] xl:tracking-[1.5em] 2xl:text-center 2xl:ml-20 py-10 gayathri-regular">SKILLS</h2>
            <div className='grid xl:grid-cols-4 gap-10 w-[80vw] xl:w-[60vw] h-[700px] xl:h-[600px] rounded-md'>
                <div className="h-full xl:col-span-2 ">
                    <div className="h-[16rem] xl:h-[40rem] bg-gradient-to-b from-[#081a25] to-transparent rounded-md grid grid-rows-2">
                        <div className=' grid grid-cols-2'>
                            <div className='m-auto'>
                                <ToolTip text='holas xD'>
                                    <Image src={js_logo} alt="react_logo" width={230} height={250}/>
                                </ToolTip>
                            </div>
                            <div className='m-auto'>
                                <Image src={ts_logo} alt="react_logo" width={200}/>
                            </div>
                        </div>
                        <div className=' grid grid-cols-6 gap-2'>
                            <div className='m-auto'>
                                <Image src={html_logo} alt="react_logo" />
                            </div>
                            <div className='m-auto'>
                                <Image src={css_logo} alt="react_logo" />
                            </div>
                            <div className='m-auto'>
                                <Image src={bootstrap_logo} alt="react_logo" />
                            </div>
                            <div className='m-auto'>
                                <Image src={tailwindcss_logo} className='invert' alt="react_logo" />
                            </div>
                            <div className='m-auto'>
                                <PulseLoading/>
                                {/* <Image src={react_logo} alt="react_logo" /> */}
                            </div>
                            <div className='m-auto'>
                                {/* <Image src={angular_logo} alt="react_logo" /> */}
                            </div>
                            <div className='m-auto'>
                                <Image src={react_logo} alt="react_logo" />
                            </div>
                            <div className='m-auto'>
                                <Image src={angular_logo} alt="react_logo" />
                            </div>
                            <div className='m-auto'>
                                <Image src={nextjs_logo} className='invert' alt="react_logo" />
                            </div>
                            <div className='m-auto'>
                                <Image src={reactnative_logo} alt="react_logo" />
                            </div>
                            <div className='m-auto'>
                                <Image src={android_logo} alt="react_logo" />
                            </div>
                            <div className='m-auto'>
                                <PulseLoading/>
                                {/* <Image src={angular_logo} alt="react_logo" /> */}
                            </div>
                        </div>
                    </div>
                    <div className="h-20 w-full flex">
                        <h2 className=" text-[1.9em] text-center m-auto">
                        Frontend
                        </h2>
                    </div>
                </div>
                <div className="h-full xl:col-span-2 grid grid-cols-2 grid-rows-2 gap-4">
                    {/* <div className=" col-span-1 row-span-1">
                        <div className="h-20 xl:h-80 bg-gradient-to-b from-[#081a25] to-transparent rounded-md">
                        qweq

                        </div>
                        <div className="h-20 w-full flex">
                        <h2 className=" text-[1.6em] text-center m-auto">
                            Backend
                        </h2>
                        </div>
                    </div>
                    <div className=" col-span-1 row-span-1">
                        <div className="h-24 w-full flex">
                        <h2 className="text-[1.5em] xl:text-[1.7em] text-center m-auto ">
                            Servers and Cloud
                        </h2>
                        </div>
                        <div className="h-20 xl:h-80 bg-gradient-to-b from-[#081a25] to-transparent rounded-md">
                        qweq

                        </div>
                    </div> */}
                    <div className=" col-span-2 xl:col-span-2 row-span-2">
                        <div className="h-20 xl:h-80 bg-gradient-to-b from-[#081a25] to-transparent rounded-md">
                        qweq

                        </div>
                        <div className="h-20 w-full flex">
                        <h2 className=" text-[1.9em] text-center m-auto">
                            Backend
                        </h2>
                        </div>
                    </div>
                    <div className=" col-span-2 xl:col-span-2 row-span-2">
                        <div className="h-20 xl:h-80 bg-gradient-to-b from-[#081a25] to-transparent rounded-md">
                        qweq

                        </div>
                        <div className="h-20 w-full flex">
                        <h2 className=" text-[1.9em] text-center m-auto">
                            Servers and Cloud
                        </h2>
                        </div>
                    </div>

                </div>
            </div>
            </div>
        </>
    )
}
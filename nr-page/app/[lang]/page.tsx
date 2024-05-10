
import ecuador from "@/public/assets/img/banderaecuador.svg"
import externallink from "@/public/assets/img/externallinksvgrepo.svg"
import freecodecamp from "@/public/assets/img/freecodecamp.svg"
import google from "@/public/assets/img/google.png"
import meta from "@/public/assets/img/meta.png"
import harvard from "@/public/assets/img/hardvard.png"
import georgiatech from "@/public/assets/img/gt-logo.svg"
import catpixel from "@/public/assets/img/catpixel.gif"
import laptoppixel from "@/public/assets/img/laptoppixel.png"



// import { useState, useEffect, useRef, Suspense } from 'react'
import Image from 'next/image'
import Link from "next/link"
import { Locale, getDictionary } from './dictionaries.ts'
import SwitchLang from './components/SwitchLang.tsx'
import { SlideT1 } from "./components/SlideT1.tsx"
import { Skills } from "../interfaces/main.ts"

import AOS from 'aos';
import 'aos/dist/aos.css';
import { RadarChart } from "./components/RadarChart.tsx"
import { StartSection } from "./components/StartSection.tsx"
import { SummarySection } from "./components/SummarySection.tsx"
import { WorkPositionComponent } from "./components/WorkPositionComponent.tsx"






type Props = {
  params: {
    lang: Locale
  }
}



export default async function Home({ params: { lang } }: Props) {


  const SlideSkillsData : Skills[]  = [
    {tech:"HTML", img:"https://swiperjs.com/demos/images/nature-1.jpg"},
    {tech:"CSS", img:"https://swiperjs.com/demos/images/nature-2.jpg"},
    {tech:"JS", img:"https://swiperjs.com/demos/images/nature-3.jpg"}
  ]

  // useEffect(() => {

  //   // startEffects()



  // }, []);


  const intl = await getDictionary(lang)
    // const [scrollingDown, setScrollingDown] = useState(false);

    // useEffect(() => {
    //   const handleScroll = () =>{
    //     window.scrollTo()
    //   }
    //   let layoutScreen = window.addEventListener("scroll", handleScroll)
    // }, []);



  return (
    <>
    <main className="flex min-h-screen flex-col items-center justify-between p-10 ">
      
      {/* --------------------------------------------------- START -----------------------------------------0a374f----------*/}

      <div id='start' className='h-[100vh] w-[90vw] md:w-[80vw] xl:w-[60vw] mb-20'>
        <div className={`h-[90vh] grid  gap-4`}>
          <div className={`h-full flex `}>
            {/* <div>
              <Image
                src={}
              />
            </div> */}
            <StartSection landing={intl.landing}/>
            
            {/* <div className=' my-auto'>
              <div className=' -space-y-10'>
                <h1 className='text-[100px] p-0 uppercase'>{intl.landing.name}</h1>
                <h2 className='text-[20px] p-0 uppercase'>{intl.landing.profession}</h2>
              </div>
              <div className="">
                <h3 className='text-[60px] uppercase'>{`${intl.landing.welcome.split("!")[0]}!`}</h3>
                <div className="flex">
                  <Image src={laptoppixel} alt="cat pixel" width={70} height={70} className=" pt-10"/>
                  <Image src={catpixel} alt="cat pixel" width={100} height={60} className="mb-2"/>
                </div>
              </div>
              <p className='text-[40px] uppercase'>{`${intl.landing.welcome.split("!")[1]}`}</p>
            </div> */}
          </div>
          {/* <div className={`h-full flex xl:row-span-3 bg-orange-600`}>
            <div className=' '>
            </div>
          </div> */}
        </div>
      </div>


      {/* --------------------------------------------------- SUMMARY ---------------------------------------------------*/}
      <div id='summary' className={`h-[110vh] w-[90vw] md:w-[80vw] xl:w-[60vw] mb-20 flex box-out-from-screen`}>
        <SummarySection summary={intl.summary}/>
      </div>



    {/* --------------------------------------------------- SKILLS ---------------------------------------------------*/}
      <div id='skills' className={`h-[110vh] w-[90vw] md:w-[80vw] xl:w-[60vw] md:mb-20 flex`}>
        <div className='grid gap-2 m-auto'>
          <div className='grid grid-cols-4 gap-x-10 w-[80vw] xl:w-[60vw] h-[600px] rounded-md'>
              <div className=" h-full col-span-2 ">
                  <div className="h-20 w-full flex">
                    <h2 className=" text-[1.9em] text-center m-auto">
                      Frontend
                    </h2>
                  </div>
                  <div className=" h-[40rem] bg-white rounded-md">
                    qweq

                  </div>
              </div>
              <div className="h-full col-span-2 grid grid-cols-2 grid-rows-2 gap-4">
                <div className=" col-span-1 row-span-1">
                    <div className=" h-80 bg-white rounded-md">
                      qweq

                    </div>
                    <div className="h-20 w-full flex">
                      <h2 className=" text-[1.9em] text-center m-auto">
                        Backend
                      </h2>
                    </div>
                </div>
                <div className=" col-span-1 row-span-1">
                    <div className="h-20 w-full flex">
                      <h2 className=" text-[1.9em] text-center m-auto">
                        Servers and Cloud
                      </h2>
                    </div>
                    <div className="h-80 bg-white rounded-md">
                      qweq

                    </div>
                </div>
                <div className=" col-span-2 row-span-2">
                    <div className="h-80 bg-white rounded-md">
                      qweq

                    </div>
                    <div className="h-20 w-full flex">
                      <h2 className=" text-[1.9em] text-center m-auto">
                        Other Skills
                      </h2>
                    </div>
                </div>

              </div>
          </div>
        </div>
      </div>



      {/* --------------------------------------------------- EXPERIENCE ---------------------------------------------------*/}
      <div id='experience' className={`h-[100vh] w-[100vw] md:w-[80vw] xl:w-[60vw] mb-20  `}>
        <h2 className="text-5xl">EXPERIENCE</h2>
        <div className='relative h-[80vh] overflow-y-auto'>
          <WorkPositionComponent experience={intl.experience}/>
          <hr/>
          <WorkPositionComponent experience={intl.experience}/>
          <hr/>
          <WorkPositionComponent experience={intl.experience}/>
          <hr/>
          <WorkPositionComponent experience={intl.experience}/>
          <hr/>
          <WorkPositionComponent experience={intl.experience}/>
          <hr/>
          <div className="grid grid-cols-10 gap-2 xl:gap-5 box-to-show-experience h-80">
            
          </div>
        </div>
      </div>


      <div id='about' className={`h-[60vh] w-[90vw] md:w-[80vw] xl:w-[60vw] mb-20 p-5`}>
        <div className='h-full grid grid-cols-10 gap-5 md:gap-10'>
          <div className='w-full col-span-10 md:col-span-6 m-auto'>
            <h2 className="text-5xl my-4 text-shadow-landing pb-40">ABOUT ME</h2>
            <div className="bg-white rounded-md p-4 shadow-md shadow-gray-800">
              <p className="  text-base md:text-xl text-black ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend tempor viverra. Fusce molestie mauris id elit bibendum, dapibus luctus ipsum tristique. Pellentesque tristique dapibus turpis sit amet porttitor. Nam et volutpat lorem. Curabitur pellentesque sollicitudin odio, eu ultrices tortor porta sit amet. Donec diam libero, ullamcorper in blandit vel, auctor id nisi. Quisque sed nisl eu erat sodales aliquet. Maecenas suscipit sem id suscipit mattis. Mauris eget pretium nisi. Nam nec fringilla quam. Quisque commodo pretium elementum. Aenean ultrices mi eu ullamcorper egestas. Suspendisse a neque ligula.
              </p>
            </div>
          </div>
          <div className='h-fit w-fit col-span-10 md:col-span-4 m-auto relative'>
            <Image 
              src={meta}
              alt="me"
              width={500}
              height={500}
              className=" h-[400px] object-cover rounded-lg shadowed-me bg-white"
            />
            
            {/* <div className=" w-[100%] h-[400px] rounded-lg bg-[#8b8b8b62] absolute -z-10 -top-4 -right-4">
              <Image 
                src={meta}
                alt="me"
                width={500}
                height={500}
                className=" h-[400px] object-cover rounded-lg bg-white blur-md"
              />
            </div> */}
          </div>
        </div>
      </div>
    </main>
    
   
  </>
  )
}

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
import { StartSection } from "./components/sections/home/StartSection.tsx"
import { SummarySection } from "./components/sections/home/SummarySection.tsx"
import { WorkPositionComponent } from "./components/WorkPositionComponent.tsx"
import { SkillsSection } from "./components/sections/home/SkillsSection.tsx"
import { ExperienceSection } from './components/sections/home/ExperienceSection.tsx'
import { AboutSection } from './components/sections/home/AboutSection.tsx'






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


  const intl = await getDictionary(lang)


  return (
    <>
    <main className="flex min-h-screen flex-col items-center justify-between ">
      
      {/* --------------------------------------------------- START -----------------------------------------0a374f----------*/}

      <div id='start' className='h-[100vh] w-[90vw] mb-20 p-10'>
        <div className={`h-[100vh] grid  gap-4`}>
          <div className={`h-full flex`}>
            <StartSection landing={intl.landing}/>
          </div>
        </div>
      </div>


      {/* --------------------------------------------------- ABOUT ---------------------------------------------------*/}
      <div id='about' className={`h-[100vh] w-full m-0 p-0`}>
          <AboutSection about={intl.about}/>

      </div>


      {/* --------------------------------------------------- SUMMARY ---------------------------------------------------*/}
      <div id='summary' className={`h-[100vh] w-[90vw] md:w-[80vw] xl:w-[60vw] mb-20 flex box-out-from-screen p-10`}>
        <div className='grid grid-cols-2 gap-5 w-full h-[80vh] my-auto'>
          <div className='grid grid-rows-2 gap-5'>
            <div className='radial-border-overlay rounded-md'>
              <div className='absolute bottom-5 left-5'>
                <h2 className='playwrite-cursive text-2xl py-3'>Education</h2>
                <p className='playwrite-moderne text-sm'>About my degrees and certifications</p>
              </div>
            </div>
            <div className='radial-border-overlay rounded-md'>
              <div className='absolute bottom-5 left-5'>
                <h2 className='playwrite-cursive text-2xl py-3'>Experience</h2>
                <p className='playwrite-moderne text-sm'>What I've done to make a better world 🌎</p>
              </div>
            </div>
          </div>
          <div className='grid grid-rows-3 gap-5'>
            <div className='radial-border-overlay rounded-md'>
              <div className='absolute bottom-5 left-5'>
                <h2 className='playwrite-cursive text-2xl py-3'>Skills</h2>
                <p className='playwrite-moderne text-sm'>About techs and tools I use</p>
              </div>
            </div>
            <div className='radial-border-overlay rounded-md'>
              <div className='absolute bottom-5 left-5'>
                <h2 className='playwrite-cursive text-2xl py-3'>Projects</h2>
                <p className='playwrite-moderne text-sm'>To learn, I had to break things and fix them...</p>
              </div>
            </div>
            <div className='radial-border-overlay rounded-md'>
              <div className='absolute bottom-5 left-5'>
                <h2 className='playwrite-cursive text-2xl py-3'>Social</h2>
                <p className='playwrite-moderne text-sm'>Ways to contact me</p>
              </div>
            </div>
          </div>

        </div>
        {/* <SummarySection summary={intl.summary}/> */}
      </div>



    {/* --------------------------------------------------- SKILLS ---------------------------------------------------*/}
      {/* <div id='skills' className={`h-[110vh] w-[90vw] md:w-[80vw] xl:w-[60vw] md:mb-80 flex`}>
        <SkillsSection skills={intl.skills}/>
      </div> */}



      {/* --------------------------------------------------- EXPERIENCE ---------------------------------------------------*/}
      {/* <div id='experience' className={`h-[100vh] w-[100vw] md:w-[80vw] xl:w-[60vw] mb-20 xl:flex  `}>
        <ExperienceSection exp={intl.experience}/>
      </div> */}


      
    </main>
    
   
  </>
  )
}

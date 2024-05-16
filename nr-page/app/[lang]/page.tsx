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
    <main className="flex min-h-screen flex-col items-center justify-between p-10 ">
      
      {/* --------------------------------------------------- START -----------------------------------------0a374f----------*/}

      <div id='start' className='h-[100vh] w-[90vw] md:w-[80vw] xl:w-[60vw] mb-20'>
        <div className={`h-[90vh] grid  gap-4`}>
          <div className={`h-full flex `}>
            <StartSection landing={intl.landing}/>
          </div>
        </div>
      </div>


      {/* --------------------------------------------------- SUMMARY ---------------------------------------------------*/}
      <div id='summary' className={`h-[110vh] w-[90vw] md:w-[80vw] xl:w-[60vw] mb-20 flex box-out-from-screen`}>
        <SummarySection summary={intl.summary}/>
      </div>



    {/* --------------------------------------------------- SKILLS ---------------------------------------------------*/}
      <div id='skills' className={`h-[110vh] w-[90vw] md:w-[80vw] xl:w-[60vw] md:mb-80 flex`}>
        <SkillsSection skills={intl.skills}/>
      </div>



      {/* --------------------------------------------------- EXPERIENCE ---------------------------------------------------*/}
      <div id='experience' className={`h-[100vh] w-[100vw] md:w-[80vw] xl:w-[60vw] mb-20 xl:flex  `}>
        <ExperienceSection exp={intl.experience}/>
      </div>


      {/* --------------------------------------------------- ABOUT ---------------------------------------------------*/}
      <div id='about' className={`h-[60vh] w-[90vw] md:w-[80vw] xl:w-[60vw] mb-20 p-5`}>
        <AboutSection about={intl.about}/>
      </div>
    </main>
    
   
  </>
  )
}

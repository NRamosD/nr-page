
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
    <main className="flex min-h-screen flex-col items-center justify-between p-10 bg-[#e0d8aa]">
      
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
      <div id='summary' className={`h-[110vh] w-[90vw] md:w-[80vw] xl:w-[60vw] mb-20 flex`}>
        <SummarySection summary={intl.summary}/>
      </div>



    {/* --------------------------------------------------- SKILLS ---------------------------------------------------*/}
      <div id='skills' className={`h-[110vh] w-[90vw] md:w-[80vw] xl:w-[60vw] md:mb-20 flex`}>
        <div className='grid grid-cols-10 grid-rows-1 md:grid-rows-1 gap-2 my-auto'>
          <div className='h-full w-full row-span-1 md:row-span-1 col-span-10 md:col-span-10 bg-white 
            grid grid-cols-3 gap-5 text-black overflow-auto p-10 overflow-y-auto'>
              <div className="w-full h-full relative bg-white shadow-lg shadow-black col-span-3 ">
                <div className="w-80 h-80 flex">
                  <div className="w-fit m-auto">
                    <RadarChart/>
                  </div>
                </div>
                <div className="grid-frameworks">
                  <div className="border-2 border-black bg-indigo-700 flex justify-center">
                    <section className="relative flex justify-center m-auto">
                      <Image src={meta} alt="hols" width={100} height={100} />
                      <h3 className="m-auto">Angular</h3>
                    </section>
                  </div>
                </div>
                <div className="grid-frameworks">
                  <div className="border-2 border-black bg-indigo-700 flex justify-center">
                    <section className="relative flex justify-center m-auto">
                      <Image src={meta} alt="hols" width={100} height={100} />
                      <h3 className="m-auto">Vue.js</h3>
                    </section>
                  </div>
                </div>
                <div className="grid-frameworks">
                  <div className="border-2 border-black bg-indigo-700 flex justify-center" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                    <section className="relative flex justify-center m-auto">
                      <Image src={meta} alt="hols" width={100} height={100} />
                      <h3 className="m-auto">React</h3>
                    </section>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>



      {/* --------------------------------------------------- EXPERIENCE ---------------------------------------------------*/}
      <div id='experience' className={`h-[100vh] w-[100vw] md:w-[80vw] xl:w-[60vw] mb-20  `}>
        <h2 className="text-center text-5xl">EXPERIENCE</h2>
        <div className='relative h-full overflow-y-auto border-y-4 border-white'>
          <div className="grid grid-cols-10 gap-2 xl:gap-5">
            <div className='h-full w-full row-span-1 md:row-span-1 col-span-10 md:col-span-3'>
              <div className="grid p-5">
                <p>I currently work here</p>
                <div className="h-full w-full text-black bg-white p-4 rounded-lg shadow-md shadow-black">
                  <h2 className=" text-xl">Responsible Travel SA</h2>
                  <h3 className="text-sm font-light">From May 2023 until Now</h3>
                  <h3 className="text-sm font-light mt-2">Position in the Company:</h3>
                  <h3 className=" text-xl font-extrabold">Web Developer</h3>
                </div>
              </div>
            </div>
            <div className='h-fit w-full row-span-1 md:row-span-1 col-span-10 md:col-span-7 py-2 xl:py-10 px-2'>
              <div className="h-full w-full text-black bg-white p-4 rounded-lg shadow-md shadow-black">
                <div className="py-2">
                  <h3 className=" font-bold">What I did here?</h3>
                  <p>ajkshd kjash kjdhkjas hdkj haskh d</p>
                </div>
                <div className="py-2">
                  <h3 className=" font-bold">Projects</h3>
                  <ul className="list-disc mx-5">
                    <li className="px-2">
                      <h4 className=" font-semibold">Name of the project</h4>
                      <span><Link href={"#"} className="underline flex">Take a view <Image src={externallink} width={15} height={15} alt="Take a view"/> </Link></span>
                      <p>text about what i did in this project</p>
                    </li>
                    <li className="px-2">
                      <h4 className=" font-semibold">Name of the project</h4>
                      <p>text about what i did in this project</p>
                    </li>
                    <li className="px-2">
                      <h4 className=" font-semibold">Name of the project</h4>
                      <p>text about what i did in this project</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <hr/>

          <div className="grid grid-cols-10 gap-2 xl:gap-5">
            <div className='h-full w-full row-span-1 md:row-span-1 col-span-10 md:col-span-3'>
              <div className="grid p-5">
                <p>I also work as</p>
                <div className="h-full w-full text-black bg-white p-4 rounded-lg shadow-md shadow-black">
                  <h2 className=" text-xl">Software Engineer Freelancer</h2>
                  <h3 className="text-sm font-light">From May 2019 until Now</h3>
                  
                </div>
              </div>
            </div>
            <div className='h-fit w-full row-span-1 md:row-span-1 col-span-10 md:col-span-7 py-2 xl:py-10 px-2'>
              <div className="h-full w-full text-black bg-white p-4 rounded-lg shadow-md shadow-black">
                <div className="py-2">
                  <h3 className=" font-bold">What I did here?</h3>
                  <p>ajkshd kjash kjdhkjas hdkj haskh d</p>
                </div>
                <div className="py-2">
                  <h3 className=" font-bold">Projects</h3>
                  <ul className="list-disc mx-5">
                    <li className="px-2">
                      <h4 className=" font-semibold">Name of the project</h4>
                      <span><Link href={"#"} className="underline flex">Take a view <Image src={externallink} width={15} height={15} alt="Take a view"/> </Link></span>
                      <p>text about what i did in this project</p>
                    </li>
                    <li className="px-2">
                      <h4 className=" font-semibold">Name of the project</h4>
                      <p>text about what i did in this project</p>
                    </li>
                    <li className="px-2">
                      <h4 className=" font-semibold">Name of the project</h4>
                      <p>text about what i did in this project</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <hr/>

          <div className="grid grid-cols-10 gap-2 xl:gap-5">
            <div className='h-full w-full row-span-1 md:row-span-1 col-span-10 md:col-span-3'>
              <div className="grid p-5">
                <div className="h-full w-full text-black bg-white p-4 rounded-lg shadow-md shadow-black">
                  <h2 className=" text-xl">Responsible Travel SA</h2>
                  <h3 className="text-sm font-light">From May 2023 until Now</h3>
                  <h3 className="text-sm font-light mt-2">Position in the Company:</h3>
                  <h3 className=" text-xl font-extrabold">Web Developer</h3>
                </div>
              </div>
            </div>
            <div className='h-fit w-full row-span-1 md:row-span-1 col-span-10 md:col-span-7 py-2 xl:py-10 px-2'>
              <div className="h-full w-full text-black bg-white p-4 rounded-lg shadow-md shadow-black">
                <div className="py-2">
                  <h3 className=" font-bold">What I did here?</h3>
                  <p>ajkshd kjash kjdhkjas hdkj haskh d</p>
                </div>
                <div className="py-2">
                  <h3 className=" font-bold">Projects</h3>
                  <ul className="list-disc mx-5">
                    <li className="px-2">
                      <h4 className=" font-semibold">Name of the project</h4>
                      <span><Link href={"#"} className="underline flex">Take a view <Image src={externallink} width={15} height={15} alt="Take a view"/> </Link></span>
                      <p>text about what i did in this project</p>
                    </li>
                    <li className="px-2">
                      <h4 className=" font-semibold">Name of the project</h4>
                      <p>text about what i did in this project</p>
                    </li>
                    <li className="px-2">
                      <h4 className=" font-semibold">Name of the project</h4>
                      <p>text about what i did in this project</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <hr/>

          <div className="grid grid-cols-10 gap-2 xl:gap-5">
            <div className='h-full w-full row-span-1 md:row-span-1 col-span-10 md:col-span-3'>
              <div className="grid p-5">
                <div className="h-full w-full text-black bg-white p-4 rounded-lg shadow-md shadow-black">
                  <h2 className=" text-xl">Responsible Travel SA</h2>
                  <h3 className="text-sm font-light">From May 2023 until Now</h3>
                  <h3 className="text-sm font-light mt-2">Position in the Company:</h3>
                  <h3 className=" text-xl font-extrabold">Web Developer</h3>
                </div>
              </div>
            </div>
            <div className='h-fit w-full row-span-1 md:row-span-1 col-span-10 md:col-span-7 py-2 xl:py-10 px-2'>
              <div className="h-full w-full text-black bg-white p-4 rounded-lg shadow-md shadow-black">
                <div className="py-2">
                  <h3 className=" font-bold">What I did here?</h3>
                  <p>ajkshd kjash kjdhkjas hdkj haskh d</p>
                </div>
                <div className="py-2">
                  <h3 className=" font-bold">Projects</h3>
                  <ul className="list-disc mx-5">
                    <li className="px-2">
                      <h4 className=" font-semibold">Name of the project</h4>
                      <span><Link href={"#"} className="underline flex">Take a view <Image src={externallink} width={15} height={15} alt="Take a view"/> </Link></span>
                      <p>text about what i did in this project</p>
                    </li>
                    <li className="px-2">
                      <h4 className=" font-semibold">Name of the project</h4>
                      <p>text about what i did in this project</p>
                    </li>
                    <li className="px-2">
                      <h4 className=" font-semibold">Name of the project</h4>
                      <p>text about what i did in this project</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div id='about' className={`h-[100vh] w-[90vw] md:w-[80vw] xl:w-[60vw] mb-20 p-5`}>
        <div className='h-full grid grid-cols-10 gap-5 md:gap-10'>
          <div className='w-full col-span-10 md:col-span-6 m-auto'>
            <h2 className="text-5xl my-4">ABOUT ME</h2>
            <p className=" text-base md:text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend tempor viverra. Fusce molestie mauris id elit bibendum, dapibus luctus ipsum tristique. Pellentesque tristique dapibus turpis sit amet porttitor. Nam et volutpat lorem. Curabitur pellentesque sollicitudin odio, eu ultrices tortor porta sit amet. Donec diam libero, ullamcorper in blandit vel, auctor id nisi. Quisque sed nisl eu erat sodales aliquet. Maecenas suscipit sem id suscipit mattis. Mauris eget pretium nisi. Nam nec fringilla quam. Quisque commodo pretium elementum. Aenean ultrices mi eu ullamcorper egestas. Suspendisse a neque ligula.
            </p>
          </div>
          <div className='h-fit w-fit col-span-10 md:col-span-4 m-auto'>
            <Image 
              src={meta}
              alt="me"
              width={500}
              height={500}
              className=" h-[400px] object-cover rounded-lg shadow-xl shadow-[#927843] bg-white"
            />
          </div>
        </div>
      </div>
    </main>
    <footer className='gradient-bg h-[20vh] flex relative'>
      <div className='m-auto grid text-white '>
        <div className="text-to-show grid text-5xl">
          <h3 className="text-center" >Cooked with</h3>
          <span className="text-center" >❤️</span>
          <h3 className="text-center" >By Nixon Ramos</h3>
        </div>
        <div className="m-auto text-to-show grid grid-cols-2 text-2xl">
            <span className="text-center">🟡</span>
            <Link href={"#"} className="transition-all duration-500 hover:text-yellow-400 hover:underline">Reach out me</Link>
            <span className="text-center">🔵</span>
            <Link href={"#"} className="transition-all duration-500 hover:text-blue-500 hover:underline">Linkedin</Link>
            <span className="text-center">🔴</span>
            <Link href={"#"} className="transition-all duration-500 hover:text-red-500 hover:underline">GitHub</Link>
        </div>
      </div>
      <div className="text-center absolute bottom-0 right-0 left-0 text-white">
        <h4 className="text-center">©{new Date().getUTCFullYear()} NixR.dev</h4>
        <h4 className="text-center">All rights reserved.</h4>
      </div>
    </footer> 
   
  </>
  )
}

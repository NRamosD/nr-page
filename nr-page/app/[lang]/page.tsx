"use client"
import ecuador from "@/public/assets/img/banderaecuador.svg"
import externallink from "@/public/assets/img/externallinksvgrepo.svg"
import freecodecamp from "@/public/assets/img/freecodecamp.svg"
import google from "@/public/assets/img/google.png"
import meta from "@/public/assets/img/meta.png"
import harvard from "@/public/assets/img/hardvard.png"
import georgiatech from "@/public/assets/img/gt-logo.svg"

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from "next/link"
import { Locale, getDictionary } from './dictionaries.ts'
import SwitchLang from './components/SwitchLang.tsx'
import { SlideT1 } from "./components/SlideT1.tsx"
import { Skills } from "../interfaces/main.ts"

import AOS from 'aos';
import 'aos/dist/aos.css';
import { RadarChart } from "./components/RadarChart.tsx"






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
  // } images={["","","https://swiperjs.com/demos/images/nature-3.jpg","https://swiperjs.com/demos/images/nature-4.jpg"]
  
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
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 400, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });
  }, []);
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
    <main className="flex min-h-screen flex-col items-center justify-between p-10 bg-[#0a374f]">
      
      {/* --------------------------------------------------- START ---------------------------------------------------*/}

      <div id='start' className='h-[100vh] w-[90vw] md:w-[80vw] xl:w-[60vw] mb-20'>
        <div className={`h-[90vh] grid  gap-4`}>
          <div className={`h-full flex `}>
            {/* <div>
              <Image
                src={}
              />
            </div> */}
            <div className=' my-auto'>
              <div className=' -space-y-10'>
                <h1 className='text-[100px] p-0 uppercase'>{intl.landing.name}</h1>
                <h2 className='text-[20px] p-0 uppercase'>{intl.landing.profession}</h2>
              </div>
              <h3 className='text-[60px] uppercase'>{`${intl.landing.welcome.split("!")[0]}!`}</h3>
              <p className='text-[40px] uppercase'>{`${intl.landing.welcome.split("!")[1]}`}</p>
            </div>
          </div>
          {/* <div className={`h-full flex xl:row-span-3 bg-orange-600`}>
            <div className=' '>
            </div>
          </div> */}
        </div>
      </div>


      {/* --------------------------------------------------- SUMMARY ---------------------------------------------------*/}
      <div id='summary' className={`h-[100vh] w-[90vw] md:w-[80vw] xl:w-[60vw] mb-20`}>
        <div className='grid grid-cols-1 gap-5'>
          <div className='w-full grid grid-cols-6 text-[30px] md:text-[50px] '>
            <div className='my-auto grid gap-y-5 col-span-2 '>
                <div className='grid gap-y-2 justify-center'>
                  <p className="">{intl.summary.imfrom}</p>
                  <Image src={ecuador} alt="Ecuadorian" 
                    width={60} height={10}
                    title="Ecuador"
                    className="mx-auto"/>
                </div>
                <hr className="mx-5"/>
                <div className="grid -space-y-5 mx-auto text-center">
                    <span>{intl.summary.age}</span>
                    <span>24</span>
                </div>
            </div>
            <div className='my-auto grid gap-y-5 col-span-4 '>
              <div className=' grid text-[20px] md:text-[35px]'>
                <span>
                  {intl.summary.istudied}
                </span>
                <div className="flex">
                  <p className="text-[15px] md:text-[26px] gradient-text-university">
                    {intl.summary.university}
                  </p>
                  <Link target="_blank" className="w-fit my-auto rounded-md bg-white ml-2" href={"https://www.espoch.edu.ec"}>
                    <Image src={externallink}  alt={intl.summary.university} 
                    width={20} height={20}/>
                  </Link>
                </div>
                <span>
                  {intl.summary.as}
                </span>
                <p>{intl.summary.profession}</p>
              </div>
              <div className='grid gap-y-2 text-[20px] md:text-[40px]'>
              </div>
            </div>
          </div>
          <div className='w-full grid grid-cols-6 gap-5 text-[30px] md:text-[50px]'>
            <div className="col-span-6 text-left">
              <h3 className="text-[20px] md:text-[30px] underline">{intl.summary.coursesandcertifications}</h3>
            </div>
            <div className="grid gap-2 col-span-3 p-2 text-[14px] md:text-[18px] max-h-[250px] overflow-y-auto">
              <Link target="_blank" href={"https://www.coursera.org/account/accomplishments/specialization/8UKZ8DUMEAAB"} className="flex gap-2 transition-all duration-500 ease-out px-4 py-2 shadow-xl text-black bg-white rounded-md hover:translate-x-2 hover:bg-slate-300">
                <h3>
                  {intl.summary.specializationfrontmeta}
                </h3>
                <Image className="" src={externallink}  alt={intl.summary.university} 
                  width={20} height={20}/>
              </Link>
              
              <Link target="_blank" href={"https://certificates.cs50.io/64eec961-4a0a-473d-a62d-9860373864ab.pdf?size=letter"} className="flex gap-2 transition-all duration-500 ease-out px-4 py-2 shadow-xl text-black bg-white rounded-md hover:translate-x-2 hover:bg-slate-300">
                <h3>
                  {intl.summary.harvardcs50py}
                </h3>
                <Image className="" src={externallink}  alt={intl.summary.university} 
                  width={20} height={20}/>
              </Link>
              <Link target="_blank" href={"https://www.coursera.org/account/accomplishments/records/H9JBHSZVA4HB"} className="flex gap-2 transition-all duration-500 ease-out px-4 py-2 shadow-xl text-black bg-white rounded-md hover:translate-x-2 hover:bg-slate-300">
                <h3>
                  {intl.summary.csharpnet}
                </h3>
                <Image className="" src={externallink}  alt={intl.summary.university} 
                  width={20} height={20}/>
              </Link>
              <Link target="_blank" href={"https://www.coursera.org/account/accomplishments/verify/LNZDHVP6DS3A"} className="flex gap-2 transition-all duration-500 ease-out px-4 py-2 shadow-xl text-black bg-white rounded-md hover:translate-x-2 hover:bg-slate-300">
                <h3>
                  {intl.summary.angularrouting}
                </h3>
                <Image className="" src={externallink}  alt={intl.summary.university} 
                  width={20} height={20}/>
              </Link>
              <Link target="_blank" href={"https://www.coursera.org/account/accomplishments/verify/LNZDHVP6DS3A"} className="flex gap-2 transition-all duration-500 ease-out px-4 py-2 shadow-xl text-black bg-white rounded-md hover:translate-x-2 hover:bg-slate-300">
                <h3>
                  {intl.summary.angularrouting}
                </h3>
                <Image className="" src={externallink}  alt={intl.summary.university} 
                  width={20} height={20}/>
              </Link>
              <Link target="_blank" href={"https://www.linkedin.com/in/nix-ramos/details/certifications/"} className="flex gap-2 transition-all duration-500 ease-out px-4 py-2 shadow-xl text-black bg-white rounded-md hover:translate-x-2 hover:bg-slate-300">
                <h3>
                  {intl.summary.viewall}
                </h3>
                <Image className="" src={externallink}  alt={intl.summary.university} 
                  width={20} height={20}/>
              </Link>
            </div>
            <div className="col-span-3 grid grid-cols-3 p-2">
              <div>
                <Image src={freecodecamp}
                alt="freecodecamp"
                width={100} height={50}
                />
              </div>
              <div className=" ">
                <Image src={google}
                alt="google"
                width={30} height={50}
                className=""
                />
              </div>
              <div className=" bg-white w-fit h-fit p-2">
                <Image src={harvard}
                alt="harvard"
                width={100} height={50}
                className=""
                />
              </div>
              <div className=" bg-white w-fit h-fit">
                <Image src={meta}
                alt="meta"
                width={100} height={50}
                className=""
                />
              </div>
              <div>
                <Image src={georgiatech}
                alt="georgiatech"
                width={100} height={50}
                className=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* --------------------------------------------------- SKILLS ---------------------------------------------------*/}
      <div id='skills' className={`h-[100vh] w-[90vw] md:w-[80vw] xl:w-[60vw] md:mb-20 `}>
        <div className='grid h-full grid-cols-10 grid-rows-1 md:grid-rows-1 gap-2  '>
          <div className='h-full w-full row-span-1 md:row-span-1 col-span-10 md:col-span-10 bg-white 
            grid grid-cols-3 gap-5 text-black overflow-auto p-10 overflow-y-auto'>
              <div className="w-full h-full relative bg-white shadow-lg shadow-black col-span-3 ">
                <div className="w-80 h-80 flex">
                  <RadarChart/>
                  <RadarChart/>
                  <RadarChart/>
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
      <div id='experience' className={`h-[100vh] w-[90vw] md:w-[80vw] xl:w-[60vw] mb-20  `}>
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
            <p className=" text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend tempor viverra. Fusce molestie mauris id elit bibendum, dapibus luctus ipsum tristique. Pellentesque tristique dapibus turpis sit amet porttitor. Nam et volutpat lorem. Curabitur pellentesque sollicitudin odio, eu ultrices tortor porta sit amet. Donec diam libero, ullamcorper in blandit vel, auctor id nisi. Quisque sed nisl eu erat sodales aliquet. Maecenas suscipit sem id suscipit mattis. Mauris eget pretium nisi. Nam nec fringilla quam. Quisque commodo pretium elementum. Aenean ultrices mi eu ullamcorper egestas. Suspendisse a neque ligula.
            </p>
          </div>
          <div className='h-fit w-fit col-span-10 md:col-span-4 m-auto'>
            <Image 
              src={meta}
              alt="me"
              width={500}
              height={500}
              className=" h-[400px] object-cover rounded-lg shadow-xl shadow-black bg-white"
            />
          </div>
        </div>
      </div>
    </main>
    {/* <footer className='px-80'>
      <div className='grid grid-cols-3 h-[20vh] bg-orange-400'>

      </div>
    </footer> */}
  </>
  )
}

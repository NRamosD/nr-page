"use client"
import ecuador from "@/public/assets/img/banderaecuador.svg"
import externallink from "@/public/assets/img/externallinksvgrepo.svg"


import Image from 'next/image'
import { Locale, getDictionary } from './dictionaries.ts'
import SwitchLang from './components/SwitchLang.tsx'
import { useRef } from 'react'
import Link from "next/link"

type Props = {
  params: {
    lang: Locale
  }
}

export default async function Home({ params: { lang } }: Props) {
  
  const intl = await getDictionary(lang)
  return (
    <>
    <main className="flex min-h-screen flex-col items-center justify-between p-10 bg-[#0a374f]">
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
      <div id='summary' className={`h-[100vh] w-[90vw] md:w-[80vw] xl:w-[60vw] mb-20 bg-green-500`}>
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
            <div className='m-auto grid gap-y-5 col-span-4 '>
              <div className='grid  text-[20px] md:text-[40px]'>
                <span>
                  {intl.summary.istudied}
                </span>
                <div className="flex">
                  <p className="text-[15px] md:text-[30px]">{intl.summary.university}</p>
                  <Link className="w-fit m-auto" href={"https://www.espoch.edu.ec"}>
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
              <h3 className="text-[20px] md:text-[30px]">{intl.summary.coursesandcertifications}</h3>
            </div>
            <div className="grid gap-2 col-span-3 bg-black p-2 text-[15px] md:text-[20px]">
              <div className="flex gap-2 transition-all duration-500 ease-out px-4 py-2 shadow-xl text-black bg-white rounded-md hover:translate-x-2 hover:bg-slate-300">
                <h3>
                  kjelkwqjelkjqwlek
                </h3>
                <Link className="w-fit m-auto" href={"https://www.espoch.edu.ec"}>
                    <Image src={externallink}  alt={intl.summary.university} 
                    width={20} height={20}/>
                  </Link>
              </div>
              <div className="flex gap-2 transition-all duration-500 ease-out px-4 py-2 shadow-xl text-black bg-white rounded-md hover:translate-x-2 hover:bg-slate-300">
                <h3>
                  kjelkwqjelkjqwlek
                </h3>
                <Link className="w-fit m-auto" href={"https://www.espoch.edu.ec"}>
                    <Image src={externallink}  alt={intl.summary.university} 
                    width={20} height={20}/>
                  </Link>
              </div>
              <div className="flex gap-2 transition-all duration-500 ease-out px-4 py-2 shadow-xl text-black bg-white rounded-md hover:translate-x-2 hover:bg-slate-300">
                <h3>
                  kjelkwqjelkj wqekjqwklejqlwj elkqwa sdjlqwlek
                </h3>
                <Link className="w-fit m-auto" href={"https://www.espoch.edu.ec"}>
                    <Image src={externallink}  alt={intl.summary.university} 
                    width={20} height={20}/>
                  </Link>
              </div>
              <div className="flex gap-2 transition-all duration-500 ease-out px-4 py-2 shadow-xl text-black bg-white rounded-md hover:translate-x-2 hover:bg-slate-300">
                <h3>
                  kjelkwqjelkjqwlek
                </h3>
                <Link className="w-fit m-auto" href={"https://www.espoch.edu.ec"}>
                    <Image src={externallink}  alt={intl.summary.university} 
                    width={20} height={20}/>
                  </Link>
              </div>
              <div className="flex gap-2 transition-all duration-500 ease-out px-4 py-2 shadow-xl text-black bg-white rounded-md hover:translate-x-2 hover:bg-slate-300">
                <h3>
                  kjelkwqjelkjqwlek
                </h3>
                <Link className="w-fit m-auto" href={"https://www.espoch.edu.ec"}>
                    <Image src={externallink}  alt={intl.summary.university} 
                    width={20} height={20}/>
                  </Link>
              </div>
            </div>
            <div className="col-span-3 bg-black p-2">
wer
            </div>
          </div>
        </div>
      </div>
      <div id='skills' className={`h-[100vh] w-[90vw] md:w-[80vw] xl:w-[60vw] mb-20 bg-green-500`}>
        <div className='h-full grid grid-cols-10 grid-rows-7 md:grid-rows-1 gap-5 '>
          <div className='h-full w-full row-span-6 md:row-span-1 col-span-10 md:col-span-2 bg-yellow-300'>di</div>
          <div className='h-full w-full row-span-1 md:row-span-1 col-span-10 md:col-span-8 bg-yellow-300'>di</div>
        </div>
      </div>
      <div id='experience' className={`h-[100vh] w-[90vw] md:w-[80vw] xl:w-[60vw] mb-20 bg-green-500`}>
        <div className='h-full grid grid-cols-10 grid-rows-7 md:grid-rows-1 gap-5 '>
          <div className='h-full w-full row-span-6 md:row-span-1 col-span-10 md:col-span-3 bg-yellow-300'>di</div>
          <div className='h-full w-full row-span-1 md:row-span-1 col-span-10 md:col-span-7 bg-yellow-300'>di</div>
        </div>
      </div>
      <div id='about' className={`h-[100vh] w-[90vw] md:w-[80vw] xl:w-[60vw] mb-20 bg-green-500`}>
        <div className='h-full grid grid-cols-10 grid-rows-7 md:grid-rows-1 gap-5 '>
          <div className='h-full w-full row-span-6 md:row-span-1 col-span-10 md:col-span-6 bg-yellow-300'>di</div>
          <div className='h-full w-full row-span-1 md:row-span-1 col-span-10 md:col-span-4 bg-yellow-300'>di</div>
        </div>
      </div>
    </main>
    <footer className='px-80'>
      <div className='grid grid-cols-3 h-[20vh] bg-orange-400'>

      </div>
    </footer>
  </>
  )
}

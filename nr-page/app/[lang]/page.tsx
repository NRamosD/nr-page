"use client"
import Image from 'next/image'
import { Locale, getDictionary } from './dictionaries.ts'
import SwitchLang from '../components/SwitchLang'
import { useEffect } from 'react'

type Props = {
  params: {
    lang: Locale
  }
}

export default async function Home({ params: { lang } }: Props) {
  const intl = await getDictionary(lang)
    // const [scrollingDown, setScrollingDown] = useState(false);

    useEffect(() => {
      const handleScroll = () =>{
        window.scrollTo()
      }
      let layoutScreen = window.addEventListener("scroll", handleScroll)
    }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 bg-black">
      <div className='h-[90vh] w-[90vw] md:w-[80vw] xl:w-[60vw] mb-20'>
        <div className={`h-[80vh] grid xl:grid-rows-5 bg-slate-200 gap-4`}>
          <div className={`h-full flex xl:row-span-2 bg-orange-600`}>
            <div className='m-auto'>
              <h1>{intl.landing.h1}</h1>
            </div>
          </div>
          <div className={`h-full flex xl:row-span-3 bg-orange-600`}>
            <div className='m-auto'>asdasds</div>
          </div>
        </div>
      </div>
      <div className={`h-[90vh] w-[90vw] md:w-[80vw] xl:w-[60vw] mb-20 bg-green-500`}>
        <div className='h-full grid grid-cols-1 gap-5'>
          <div className='h-full w-full bg-yellow-300'>di</div>
          <div className='h-full w-full bg-yellow-300'>di</div>
        </div>
      </div>
      <div className={`h-[90vh] w-[90vw] md:w-[80vw] xl:w-[60vw] mb-20 bg-green-500`}>
        <div className='h-full grid grid-cols-10 grid-rows-7 md:grid-rows-1 gap-5 '>
          <div className='h-full w-full row-span-6 md:row-span-1 col-span-10 md:col-span-2 bg-yellow-300'>di</div>
          <div className='h-full w-full row-span-1 md:row-span-1 col-span-10 md:col-span-8 bg-yellow-300'>di</div>
        </div>
      </div>
    </main>
  )
}

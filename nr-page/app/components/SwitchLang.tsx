'use client'
import spanish from '@/public/img/spanish.jpg'
import english from '@/public/img/english.webp'
import { Locale } from '@/app/[lang]/dictionaries'
import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'
import { FC, useEffect, useState } from 'react'

type Props = {}

const SwitchLang: FC<Props> = () => {
  const router = useRouter()
  const path = usePathname()
  const [selectedLang, setSelectedLang] = useState(true)
  const [langToChange, setLangToChange] = useState("es")
  const [insideLang, setInsideLang] = useState(false)

  useEffect(() => {
    // switchLang()
    langToChange?setLangToChange("es"):setLangToChange("en")
    
    // const lang = selectedLang?"es":"en"
    // router.push(lang)
  }, [selectedLang]);


  const switchLang = (lang: boolean) => {
    lang===true?router.push("en"):router.push("es")
    setSelectedLang(!selectedLang)
    // let idiom:string = lang
    // selectedLang===0?setSelectedLang(1):setSelectedLang(0)
    // if(lang === "en"){
    //   // idiom = "es"
    //   setLangToChange("es")
    //   // router.push("es")
    // }else{
    //   // idiom = "en"
    //   setLangToChange("en")
    //   // idiom = "en"
    //   // const origin =
    //   // typeof window !== 'undefined' && window.location.origin
    //   // ? window.location.href
    //   // : '';
    // }
  }

  return (
    <>
      <div onClick={() => switchLang(!selectedLang)} onMouseEnter={()=>setInsideLang(true)} onMouseLeave={()=>setInsideLang(false)} 
        className={`flex justify-center transition-colors duration-500 gap-x-2 h-fit w-[20vw] px-1 text-white border-2 
        border-black hover:border-white hover:cursor-pointer`}>
        <div className={`h-fit relative transition-all duration-500 px-2 rounded-md text-center 
        ${insideLang?"translate-x-0":"translate-x-5"}`}>
          {langToChange==="es"?"EN":"ES"}
        </div>
        <Image src={langToChange==="es"?english:spanish} alt='Language image' 
        className={`w-10 h-auto transition-all duration-500 
        ${insideLang?"translate-y-0 opacity-1":"translate-y-5 opacity-0"}`}/>
      </div>
      {/* <div onClick={() => switchLang("en")} onMouseEnter={()=>setInsideLang(true)} onMouseLeave={()=>setInsideLang(false)} 
        className={`flex justify-center transition-colors duration-500 gap-x-2 h-fit w-[20vw] px-1 text-white border-2 
        border-black hover:border-white hover:cursor-pointer`}>
        <div className={`h-fit relative transition-all duration-500 px-2 rounded-md text-center 
        ${insideLang?"translate-x-0":"translate-x-5"}`}>
          {"EN"}
        </div>
        <Image src={english} alt='Language image' 
        className={`w-10 h-auto transition-all duration-500 
        ${insideLang?"translate-y-0 opacity-1":"translate-y-5 opacity-0"}`}/>
      </div> */}
    </>
  )
}

export default SwitchLang
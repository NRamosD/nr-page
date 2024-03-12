'use client'
import "@/public/assets/css/all.css"
import spanish from "@/public/assets/img/spanish.webp"
import english from "@/public/assets/img/english.svg"

import { Locale } from '@/app/[lang]/dictionaries'
import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'
import { FC, use, useEffect, useState } from 'react'

type Props = {}

const SwitchLang: FC<Props> = () => {
  const [selectedLang, setSelectedLang] = useState(0)
  const [hiddenLangTag, setHiddenLangTag] = useState(0)
  const router = useRouter()
  const path = usePathname()
  // const [selectedLang, setSelectedLang] = useState(false)
  // const [langToChange, setLangToChange] = useState("es")
  // const [insideLang, setInsideLang] = useState(false)

  useEffect(() => {
    path.includes("en")?setSelectedLang(1):setSelectedLang(0)
  }, []);
  useEffect(() => {
    setHiddenLangTag(-1)
    setTimeout(() => {
      setHiddenLangTag(selectedLang===1?1:2)
    }, 800);

  }, [selectedLang]);

  const switchLang = (lang: Locale) => {
    const origin =
    // alert("path: " + path)
    // lang==="es"?setSelectedLang(1):setSelectedLang(0)
    router.push(lang)
  }
//${hiddenLangTag==-1?"translate-x-5 opacity-0":"translate-x-0 opacity-1"} ${hiddenLangTag===1?"hidden":""}
//${hiddenLangTag==0?"-translate-x-5 opacity-0":"translate-x-0 opacity-1"} ${hiddenLangTag===0?"hidden":""}
  return (
    

      <div className='grid grid-cols-1 gap-2 w-full p-1  text-white'>
        <button className={`transition-all duration-500 ${selectedLang==1?"hidden":"showElementEnglish"} flex justify-center gap-x-2 px-2 py-1 border-2 border-white hover:bg-white hover:text-black`} onClick={() => switchLang('en')}>
          <span>Inglés</span>
          <span className="flex h-full">
            <Image src={english} width={45} height={45} alt="Spanish Language"
              className="w-7 m-auto"/>
          </span>
        </button>
        <button className={`transition-all duration-500 ${selectedLang==0?"hidden":"showElementSpanish"} flex justify-center gap-x-2 px-2 py-1 border-2 border-white hover:bg-white hover:text-black`} onClick={() => switchLang('es')}>
          <span>Spanish</span>
          <span className="flex h-full">
            <Image src={spanish} width={45} height={45} alt="English Language"
              className="w-7 m-auto"/>
          </span>
        </button>
      </div>
    
  )
}

export default SwitchLang
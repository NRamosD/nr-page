'use client'

import { Locale } from '@/app/[lang]/dictionaries'
import { useRouter, usePathname } from 'next/navigation'
import { FC } from 'react'

type Props = {}

const SwitchLang: FC<Props> = () => {
  const router = useRouter()
  const path = usePathname()

  const switchLang = (lang: Locale) => {
    const origin =
        typeof window !== 'undefined' && window.location.origin
            ? window.location.href
            : '';
    router.push(lang)
  }

  return (
    <>
      <div className=' grid grid-cols-2 gap-2 w-full p-2 bg-blue-400 text-white'>
        <button className='px-2 py-1 bg-black' onClick={() => switchLang('en')}>
          English
        </button>
        <button className='px-2 py-1 bg-black' onClick={() => switchLang('es')}>
          Español
        </button>
      </div>
    </>
  )
}

export default SwitchLang
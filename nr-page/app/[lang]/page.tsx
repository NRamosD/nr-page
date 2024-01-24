import Image from 'next/image'
import { Locale, getDictionary } from './dictionaries.ts'
import SwitchLang from '../components/SwitchLang'

type Props = {
  params: {
    lang: Locale
  }
}

export default async function Home({ params: { lang } }: Props) {
  const intl = await getDictionary(lang)
  return (
  <div className='mt-[10vh]'>
    <main className="flex flex-col items-center justify-between px-80 bg-black">
      <div className='w-full h-[90vh] mx-[20%] bg-red-700'>
        <h1>{intl.landing.h1}</h1>
      </div>
      <div className='w-full h-screen mx-[20%] bg-blue-700'>
        <h1>{intl.landing.h1}</h1>
      </div>
      <div className='w-full h-screen mx-[20%] bg-yellow-500'>
        <h1>{intl.landing.h1}</h1>
      </div>
    </main>
    <footer className='px-80'>
      <div className='grid grid-cols-3 h-[20vh] bg-orange-400'>

      </div>
    </footer>
  </div>
  )
}

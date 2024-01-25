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
    <main className="flex min-h-screen flex-col items-center justify-between p-10 bg-black">
      <div className='h-[200vh] w-[90vw] md:w-[80vw] xl:w-[60vw] bg-red-700'>
        <h1>{intl.landing.h1}</h1>
      </div>
    </main>
  )
}

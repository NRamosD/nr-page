import Image from 'next/image'
import { Locale, getDictionary } from './dictionaries'
import SwitchLang from '../components/SwitchLang'

type Props = {
  params: {
    lang: Locale
  }
}

export default async function Home({ params: { lang } }: Props) {
  const intl = await getDictionary(lang)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black">
      <div className='h-80 w-80 bg-red-700'>
        <SwitchLang/>
        <h1>{intl.landing.h1}</h1>
      </div>
    </main>
  )
}

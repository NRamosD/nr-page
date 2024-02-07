import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SwitchLang from '../components/SwitchLang'
import { Locale, getDictionary } from './dictionaries'
import NavBar from '../components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NixR.dev',
  description: "Hi! I'm Nixon Ramos, an Ecuadorian Software Engineer.",
}

type Props = {
  params: {
    lang: Locale
  }
}


export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {

  


  return (
    <html lang="">
      <body className={inter.className}>
        <header className='md:w-full grid justify-center sticky top-0 bg-gradient-to-t from-transparent to-black'>
          <NavBar/>
        </header>
        {children}
        <footer className=''>

          <span className='w-full h-28 fixed bottom-0 bg-gradient-to-t from-black to-transparent'></span>
        </footer>
      </body>
    </html>
  )
}

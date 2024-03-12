import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local';
import './globals.css'
import SwitchLang from './components/SwitchLang'
import { Locale, getDictionary } from './dictionaries'
import NavBar from './components/Navbar'

const font1 = localFont({ src: '../../public/assets/fonts/firasansmedium.ttf' });

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NixR.dev',
  description: "Hi! I'm Nixon Ramos, an Ecuadorian Software Engineer.",
}

interface Props {
  params: {
    lang: Locale
  }
}


export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode,
  params: Props['params'],
}) {

  const { lang } = params;

  return (
    <html lang="">
      <body className={`${font1.className}`}>
        <header className='navbar w-full grid justify-center fixed top-0 bg-[#095e83] shadow-2xl z-20 border-b-2 border-[#373737]'>
          <NavBar lang={lang} />
        </header>
        {children}
        <footer className=''>

          {/* <span className='w-full h-28 fixed bottom-0 bg-gradient-to-t from-black to-transparent'></span> */}
        </footer>
      </body>
    </html>
  )
}

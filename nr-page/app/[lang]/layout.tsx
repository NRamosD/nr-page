import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SwitchLang from '../components/SwitchLang'
import { Locale, getDictionary } from './dictionaries'
import NavBar from '../components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NixR.dev',
  description: "Hi, I'm Nix! Software Engineer ⚡",
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
        <NavBar/>
        {children}
      </body>
    </html>
  )
}

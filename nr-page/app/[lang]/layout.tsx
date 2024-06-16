import 'server-only'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local';
import './globals.css'
import SwitchLang from './components/SwitchLang'
import { Locale, getDictionary } from './dictionaries'
import NavBar from './components/Navbar'
import Link from 'next/link';


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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* <link href="https://fonts.googleapis.com/css2?family=Gayathri:wght@100;400;700&display=swap" rel="stylesheet"/> */}
        <link href="https://fonts.googleapis.com/css2?family=Playwrite+FR+Moderne:wght@100..400&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Playwrite+AU+QLD:wght@100..400&display=swap" rel="stylesheet"/>
      </head>
      {/* <head>
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </head> */}
      <body className={`${font1.className}`}>
        <header className='transition-all duration-500 ease-out navbar w-fit grid  fixed bottom-0 left-0 shadow-2xl z-20 border-b-2 border-[#ffffff] hover:-translate-y-0 translate-y-28 hover:bg-black hover:border-t-2 hover:border-r-2 rounded-tr-md'>
          <span className='block w-fit bg-black rounded-md px-3 py-1 mx-3'>Menu</span>
          <NavBar lang={lang} />
        </header>
        {children}
        <footer className='gradient-bg h-[20vh] flex relative'>
          <div className='m-auto grid text-white '>
            <div className="text-to-show grid text-5xl text-shadow-landing">
              <h3 className="text-center" >Cooked with</h3>
              <span className="text-center" >❤️</span>
              <h3 className="text-center" >By Nixon Ramos</h3>
            </div>
            <div className="m-auto grid grid-cols-5 text-2xl">
                <Link href={"mailto:nixonramosdue@gmail.com"} className="transition-all duration-500 flex m-auto hover:underline text-center text-yellow-400">
                  <svg viewBox="0 0 24 24" className='w-10 invert' fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 8L8.44992 11.6333C9.73295 12.4886 10.3745 12.9163 11.0678 13.0825C11.6806 13.2293 12.3194 13.2293 12.9322 13.0825C13.6255 12.9163 14.2671 12.4886 15.5501 11.6333L21 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                  {/* Reach out me */}
                  </Link>
                <span className="text-center text-white flex m-auto">.</span>
                <Link href={"https://www.linkedin.com/in/nix-ramos/"} className="transition-all duration-500 flex m-auto hover:text-blue-700 hover:underline text-center text-yellow-400">
                  <svg width="75px" className='w-8 invert' height="75px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" strokeWidth="0.00024000000000000003"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z" fill="#0F0F0F"></path> <path d="M5 10C5 9.44772 5.44772 9 6 9H7C7.55228 9 8 9.44771 8 10V18C8 18.5523 7.55228 19 7 19H6C5.44772 19 5 18.5523 5 18V10Z" fill="#0F0F0F"></path> <path d="M11 19H12C12.5523 19 13 18.5523 13 18V13.5C13 12 16 11 16 13V18.0004C16 18.5527 16.4477 19 17 19H18C18.5523 19 19 18.5523 19 18V12C19 10 17.5 9 15.5 9C13.5 9 13 10.5 13 10.5V10C13 9.44771 12.5523 9 12 9H11C10.4477 9 10 9.44772 10 10V18C10 18.5523 10.4477 19 11 19Z" fill="#0F0F0F"></path> <path fillRule="evenodd" clipRule="evenodd" d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z" fill="#0F0F0F"></path> </g></svg>
                  {/* Linkedin */}
                  </Link>
                <span className="text-center text-white flex m-auto">.</span>
                <Link href={"https://github.com/NRamosD"} className="transition-all duration-500 flex m-auto hover:text-red-600 hover:underline text-center text-yellow-400">
                  <svg width="75px" className='w-8 invert' height="75px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>github [#142]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" strokeWidth="0.0002" fill="none" fillRule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"> </path> </g> </g> </g> </g></svg>
                  {/* GitHub */}
                  </Link>
            </div>
          </div>
          <div className="text-center absolute bottom-0 right-0 left-0 text-white">
            <h4 className="text-center">©{new Date().getUTCFullYear()} NixR.dev</h4>
            <h4 className="text-center">All rights reserved.</h4>
          </div>
        </footer> 
        {/* <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
        <script>
          AOS.init();
        </script> */}
      </body>
    </html>
  )
}

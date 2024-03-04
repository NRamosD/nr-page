// "use client"
import * as React from 'react';
import { Locale, getDictionary } from '../dictionaries.ts'
import SwitchLang from './SwitchLang.tsx';



// interface INavBarProps {
//     lang: Locale
//     // params: {
//     // }
// }

type INavBarProps = {
    lang: Locale;
}

// const NavBar: React.FC<INavBarProps> = async ({lang}) => {
//     const intl = await getDictionary(lang)
//     const section2Ref : any = React.useRef(null);

//     // Función para desplazarnos a la sección 2
//     const scrollToSection2 = () => {
//         // Verificamos si la referencia a la sección 2 existe
//         if (section2Ref.current) {
//         // Obtenemos la posición de la sección 2 en la página
//         const yOffset = section2Ref.current.offsetTop;
//         // Realizamos el desplazamiento suave hasta la sección 2
//         window.scrollTo({ top: yOffset, behavior: 'smooth' });
//         }
//     };
//     return (
//     <>
//         <nav className=' sticky top-0'>
//             <ul className=' inline-flex gap-10 md:gap-20 px-2 pt-7 pb-2 md:pt-2 md:pb-2 w-full'>
//                 <li>
//                     <a href='#start'>{intl.nav.Start}</a>
//                 </li>
//                 <li>
//                     <a href='#summary'>{intl.nav.Summary}</a>
//                 </li>
//                 <li>
//                     <a href='#skills'>{intl.nav.Skills}</a>
//                 </li>
//                 <li>
//                     <a href='#about'>{intl.nav.About}</a>
//                 </li>
//             </ul>
//             <div className='fixed top-2 right-2 text-center'>
//                 <h2>{intl.nav['turn-to']}</h2>
//                 <SwitchLang/>
//             </div>
//         </nav>
//     </>
//   ) ;
// };

// export default NavBar;

const NavBar = async (props : {lang:any}) => {

    const intl = await getDictionary(props.lang)
    // const section2Ref : any = React.useRef(null);

    // Función para desplazarnos a la sección 2
    // const scrollToSection2 = () => {
    //     // Verificamos si la referencia a la sección 2 existe
    //     if (section2Ref.current) {
    //     // Obtenemos la posición de la sección 2 en la página
    //     const yOffset = section2Ref.current.offsetTop;
    //     // Realizamos el desplazamiento suave hasta la sección 2
    //     window.scrollTo({ top: yOffset, behavior: 'smooth' });
    //     }
    // };
    return (
    <>
        <nav className=''>
            <ul className='inline-flex gap-5 md:gap-10 px-2 pb-2 pt-2 md:pb-2 w-full uppercase'>
                <li className='transition-all duration-500 border-2 px-5 py-1 hover:translate-y-1 hover:bg-slate-400 text-[10px] md:text-[12px] xl:text-base'>
                    <a href='#start'>{intl.nav.Start}</a>
                </li>
                <li className='transition-all duration-500 border-2 px-5 py-1 hover:translate-y-1 hover:bg-slate-400 text-[10px] md:text-[12px] xl:text-base'>
                    <a href='#summary'>{intl.nav.Summary}</a>
                </li>
                <li className='transition-all duration-500 border-2 px-5 py-1 hover:translate-y-1 hover:bg-slate-400 text-[10px] md:text-[12px] xl:text-base'>
                    <a href='#skills'>{intl.nav.Skills}</a>
                </li>
                <li className='transition-all duration-500 border-2 px-5 py-1 hover:translate-y-1 hover:bg-slate-400 text-[10px] md:text-[12px] xl:text-base'>
                    <a href='#experience'>{intl.nav.Experience}</a>
                </li>
                <li className='transition-all duration-500 border-2 px-5 py-1 hover:translate-y-1 hover:bg-slate-400 text-[10px] md:text-[12px] xl:text-base'>
                    <a href='#about'>{intl.nav.About}</a>
                </li>
            </ul>
            <div className='fixed bottom-2 xl:top-2 right-2 text-center text-[.7rem] md:text-base'>
                <h2>{intl.nav['turn-to']}</h2>
                <SwitchLang/>
            </div>
        </nav>
    </>
  ) ;
};

export default NavBar;

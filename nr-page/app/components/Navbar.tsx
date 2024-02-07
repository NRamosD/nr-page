import * as React from 'react';
import SwitchLang from './SwitchLang';

interface INavBarProps {
}

const NavBar: React.FunctionComponent<INavBarProps> = (props) => {
  return (
    <>
        <nav className=''>
            <ul className=' inline-flex gap-10 md:gap-20 px-2 pt-7 pb-2 md:pt-2 md:pb-2 w-full'>
                <li>
                    <a href='#me'>About</a>
                </li>
                <li>
                    <a href='#me'>Skills</a>
                </li>
                <li>
                    <a href='#me'>Me</a>
                </li>
                <li>
                    <a href='#me'>About</a>
                </li>
            </ul>
            <div className='w-full p-1'>
                <SwitchLang/>
            </div>
        </nav>
    </>
  ) ;
};

export default NavBar;

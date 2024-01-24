import * as React from 'react';
import SwitchLang from './SwitchLang';

interface INavBarProps {
}

const NavBar: React.FunctionComponent<INavBarProps> = (props) => {
  return (
        <nav className='w-full h-[10vh] grid grid-cols-1 justify-center fixed top-0'>
            <ul className='w-full inline-flex gap-10 justify-center m-auto'>
                <li className='hover:cursor-pointer'>
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
            <div className='inline-flex justify-center'>
                <SwitchLang/>
            </div>
        </nav>
  ) ;
};

export default NavBar;

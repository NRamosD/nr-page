import * as React from 'react';
import SwitchLang from './SwitchLang';

interface INavBarProps {
}

const NavBar: React.FunctionComponent<INavBarProps> = (props) => {
  return (
    <>
        <nav className='w-full grid justify-center sticky bg-red-400'>
            <ul className=' inline-flex gap-5 mx-5'>
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
            <div>
                <SwitchLang/>
            </div>
        </nav>
    </>
  ) ;
};

export default NavBar;
